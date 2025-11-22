import React, { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "../../styles/OrdersPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [revisions, setRevisions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [showRevisionForm, setShowRevisionForm] = useState(false);
  const [revisionText, setRevisionText] = useState("");
  const [sendingRev, setSendingRev] = useState(false);

  const prevData = useRef({});
  const firstSnapshot = useRef(true);

  // 🔹 Pantau login user
  useEffect(() => {
    const auth = getAuth();
    const unsubAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        subscribeOrders(currentUser.email);
        subscribeRevisions(currentUser.email);
      } else {
        setUser(null);
        setOrders([]);
        setRevisions([]);
        setLoading(false);
      }
    });
    return () => unsubAuth();
  }, []);

  // 🔁 Listener pesanan realtime
  const subscribeOrders = (email) => {
    const q = query(collection(db, "orders"), where("userEmail", "==", email));
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const updated = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));

        if (firstSnapshot.current) {
          // skip notif awal
          updated.forEach((o) => {
            prevData.current[o.id] = {
              status: o.status || null,
              designLink: o.designLink || null,
            };
          });
          firstSnapshot.current = false;
        } else {
          updated.forEach((o) => {
            const prev = prevData.current[o.id] || {};

            // 🎨 Notif kalau admin kirim desain baru/revisi
            if (o.designLink && o.designLink !== prev.designLink) {
              const msg =
                o.lastDesignType === "revisi"
                  ? `🎨 Hasil revisi baru untuk "${o.projectName || "Tanpa Nama"}" sudah tersedia!`
                  : `🎨 Hasil desain untuk "${o.projectName || "Tanpa Nama"}" sudah tersedia!`;
              toast.info(msg, { position: "bottom-right", autoClose: 4000 });
            }

            // 📦 Notif kalau status berubah
            if (prev.status && prev.status !== o.status) {
              toast.info(
                `📦 Status pesanan "${o.projectName || "Tanpa Nama"}" berubah menjadi ${o.status}`,
                { position: "bottom-right", autoClose: 4000 }
              );
            }

            prevData.current[o.id] = {
              status: o.status || null,
              designLink: o.designLink || null,
            };
          });
        }

        setOrders(updated);
        setLoading(false);
      },
      (err) => {
        console.error("Listener orders error:", err);
        setLoading(false);
      }
    );
    return unsub;
  };

  // 🔁 Listener revisi realtime
  const subscribeRevisions = (email) => {
    const q = query(collection(db, "revisions"), where("userEmail", "==", email));
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const revs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setRevisions(revs);
      },
      (err) => console.error("Listener revisions error:", err)
    );
    return unsub;
  };

  // ✅ User klik “Lihat Hasil” → update viewedDesign true
  const handleViewResult = async (orderId, designLink) => {
    try {
      const ref = doc(db, "orders", orderId);
      await updateDoc(ref, { viewedDesign: true });
      toast.success("✅ Hasil desain ditandai sudah dilihat.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      if (designLink) window.open(designLink, "_blank");
    } catch (err) {
      console.error(err);
      toast.error("Gagal menandai hasil sebagai dilihat.", {
        position: "bottom-right",
      });
    }
  };

  // ✏️ Kirim revisi baru
  const handleSubmitRevision = async (orderId) => {
    if (!revisionText.trim()) {
      return toast.warn("Isi revisi tidak boleh kosong.", {
        position: "bottom-right",
      });
    }
    setSendingRev(true);
    try {
      const auth = getAuth();
      await addDoc(collection(db, "revisions"), {
        orderId,
        userEmail: auth.currentUser?.email,
        message: revisionText.trim(),
        reply: "",
        status: "Diajukan",
        timestamp: serverTimestamp(),
      });

      await updateDoc(doc(db, "orders", orderId), {
        status: "Revisi",
        revisi: {
          message: revisionText.trim(),
          reply: "",
          status: "Diajukan",
          timestamp: serverTimestamp(),
        },
      });
      toast.success("Revisi berhasil diajukan.", { position: "bottom-right" });
      setRevisionText("");
      setShowRevisionForm(false);
      setSelectedOrderId(null);
    } catch (err) {
      console.error("Gagal mengirim revisi:", err);
      toast.error("Gagal mengirim revisi.", { position: "bottom-right" });
    } finally {
      setSendingRev(false);
    }
  };

  // ✅ Setujui desain
  const handleApproveDesign = async (orderId) => {
    try {
      await updateDoc(doc(db, "orders", orderId), { status: "Selesai" });
      toast.success("Terima kasih! Pesanan ditandai selesai.", {
        position: "bottom-right",
      });
    } catch (err) {
      console.error(err);
      toast.error("Gagal menyetujui desain.", {
        position: "bottom-right",
      });
    }
  };

  if (loading)
    return (
      <div className="orders-container">
        <p>⏳ Memuat pesanan kamu...</p>
      </div>
    );

  if (!user)
    return (
      <div className="orders-container">
        <h2>🔒 Silakan login dulu untuk melihat pesanan kamu</h2>
      </div>
    );

  return (
    <div className="orders-container">
      <ToastContainer />
      <h1>📦 Daftar Pesanan Kamu</h1>

      {orders.length === 0 ? (
        <p className="empty-state">Belum ada pesanan yang kamu buat.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-head">
                <h3>{order.projectName || "Tanpa Nama Proyek"}</h3>
                {order.designLink && !order.viewedDesign && (
                  <span className="unread-badge">Baru 🎨</span>
                )}
              </div>

              <p>
                <strong>Tanggal:</strong>{" "}
                {order.createdAt?.seconds
                  ? new Date(order.createdAt.seconds * 1000).toLocaleString("id-ID")
                  : "—"}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`order-status ${order.status
                    ?.toLowerCase()
                    ?.replace(/\s/g, "-")}`}
                >
                  {order.status || "Menunggu Konfirmasi"}
                </span>
              </p>

              <p>
                <strong>Deskripsi:</strong> {order.description || "-"}
              </p>

              {/* 🔁 Riwayat Revisi */}
              <div className="revision-section">
                <h4>📝 Riwayat Revisi</h4>
                {revisions
                  .filter((r) => r.orderId === order.id)
                  .sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0))
                  .map((rev, idx) => (
                    <div key={rev.id || idx} className="revision-item">
                      <p>
                        <strong>Revisi {revisions.length - idx}:</strong> {rev.message}
                      </p>
                      {rev.reply ? (
                        <p className="admin-reply">
                          💬 <strong>Balasan Admin:</strong> {rev.reply}
                        </p>
                      ) : (
                        <p className="pending-reply">⏳ Menunggu balasan admin...</p>
                      )}
                      <small className="revision-date">
                        {rev.timestamp?.seconds
                          ? new Date(rev.timestamp.seconds * 1000).toLocaleString("id-ID")
                          : ""}
                      </small>
                      <hr />
                    </div>
                  ))}
                {revisions.filter((r) => r.orderId === order.id).length === 0 && (
                  <p className="no-revision">Belum ada revisi untuk pesanan ini.</p>
                )}
              </div>

              {/* 🔗 Link hasil desain */}
              {order.designLink ? (
                <p className="order-link">
                  <strong>Hasil Desain:</strong>{" "}
                  <a
                    href={order.designLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleViewResult(order.id, order.designLink)}
                  >
                    🔗 Lihat Hasil
                  </a>
                </p>
              ) : (
                <p>
                  <i>Belum ada file desain dari admin.</i>
                </p>
              )}

              {/* 🔘 Tombol feedback */}
              {order.status === "Menunggu Feedback" && (
                <div className="feedback-actions">
                  <button
                    className="btn-approve"
                    onClick={() => handleApproveDesign(order.id)}
                  >
                    ✅ Setujui Desain
                  </button>
                  <button
                    className="btn-revisi"
                    onClick={() => {
                      setSelectedOrderId(order.id);
                      setShowRevisionForm(true);
                    }}
                  >
                    ✏️ Minta Revisi
                  </button>
                </div>
              )}

              {/* 📋 Form revisi inline */}
              {selectedOrderId === order.id && showRevisionForm && (
                <div className="revision-inline">
                  <textarea
                    placeholder="Tulis permintaan revisi..."
                    value={revisionText}
                    onChange={(e) => setRevisionText(e.target.value)}
                  />
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      className="btn-submit"
                      onClick={() => handleSubmitRevision(order.id)}
                      disabled={sendingRev}
                    >
                      {sendingRev ? "Mengirim..." : "Kirim Revisi"}
                    </button>
                    <button
                      className="btn-cancel"
                      onClick={() => {
                        setShowRevisionForm(false);
                        setRevisionText("");
                      }}
                    >
                      Batal
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
