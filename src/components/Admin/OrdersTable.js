// src/components/admin/OrdersTable.jsx
import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "../../styles/OrdersTable.css";
import { toast } from "react-toastify";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const [revisions, setRevisions] = useState([]);
  const [saving, setSaving] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [replies, setReplies] = useState({});
  const [editLink, setEditLink] = useState({});
  const [loading, setLoading] = useState(true);

  // realtime orders (ordered terbaru dulu)
  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setOrders(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });

    // fetch revisi sekali (modal & list)
    (async () => {
      const revSnap = await getDocs(collection(db, "revisions"));
      setRevisions(revSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    })();

    return () => unsub();
  }, []);

  // helper: revisions untuk order tertentu (urut descending)
  const getRevisionsForOrder = (orderId) =>
    revisions
      .filter((r) => r.orderId === orderId)
      .sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));

  // update status
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      setSaving(orderId);
      const ref = doc(db, "orders", orderId);
      await updateDoc(ref, { status: newStatus });
      toast.success("Status berhasil diperbarui!");
    } catch (err) {
      console.error(err);
      toast.error("Gagal memperbarui status!");
    } finally {
      setSaving(null);
    }
  };

  // simpan link desain awal (admin)
  const handleSaveDesignLink = async (orderId, link) => {
    if (!link?.trim()) return;
    try {
      const ref = doc(db, "orders", orderId);
      await updateDoc(ref, {
        designLink: link.trim(),
        lastDesignType: "awal",
        viewedDesign: false,
        status: "Menunggu Feedback",
      });
      toast.success("Link desain disimpan & notifikasi dikirim ke user!");
    } catch (err) {
      console.error(err);
      toast.error("Gagal menyimpan link desain.");
    }
  };

  // kirim revisi (admin) -> update designLink, lastDesignType, viewedDesign false
  const handleUpdateDesignLink = async (orderId) => {
    const link = editLink[orderId]?.trim();
    if (!link) {
      toast.warn("Isi link revisi dulu ya!");
      return;
    }
    try {
      setSaving(orderId);
      const ref = doc(db, "orders", orderId);
      await updateDoc(ref, {
        designLink: link,
        lastDesignType: "revisi",
        viewedDesign: false, // reset notifikasi
        status: "Menunggu Feedback",
      });
      toast.success("Link revisi berhasil dikirim ke user!");
      setEditLink((p) => ({ ...p, [orderId]: "" }));
    } catch (err) {
      console.error(err);
      toast.error("Gagal mengirim revisi.");
    } finally {
      setSaving(null);
    }
  };

  // balas revisi (update doc revisi)
  const handleReply = async (revId) => {
    const replyText = (replies[revId] || "").trim();
    if (!replyText) return toast.warn("Isi balasan tidak boleh kosong!");
    try {
      const ref = doc(db, "revisions", revId);
      await updateDoc(ref, { reply: replyText, status: "Dibalas" });
      toast.success("Balasan dikirim!");
      // update lokal agar UI langsung berubah
      setRevisions((prev) =>
        prev.map((r) => (r.id === revId ? { ...r, reply: replyText, status: "Dibalas" } : r))
      );
      setReplies((p) => ({ ...p, [revId]: "" }));
    } catch (err) {
      console.error(err);
      toast.error("Gagal mengirim balasan.");
    }
  };

  if (loading) return <p>⏳ Memuat data pesanan...</p>;

  return (
    <div className="orders-wrapper card">
      <h2>🧾 Manajemen Pesanan</h2>

      {/* scroll horizontal + scale 70% */}
      <div className="table-scroll-wrap scale-70">
        <table className="orders-table modern">
          <thead>
            <tr>
              <th>Proyek</th>
              <th>Paket</th>
              <th>Email</th>
              <th>Tanggal</th>
              <th>Metode Bayar</th>
              <th>Status</th>
              <th>Link Desain / Revisi</th>
              <th>Revisi Terbaru</th>
              <th>Detail</th>
              <th>Notifikasi</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => {
              const revs = getRevisionsForOrder(o.id);
              const latestMsg = revs[0]?.message;
              // createdAt handling: bisa string atau timestamp object
              const createdAtDisplay =
                typeof o.createdAt === "string"
                  ? o.createdAt
                  : o.createdAt?.seconds
                  ? new Date(o.createdAt.seconds * 1000).toLocaleString("id-ID")
                  : "-";

              return (
                <tr key={o.id}>
                  <td className="col-project">{o.projectName || "-"}</td>
                  <td>{o.packageName || "-"}</td>
                  <td>{o.userEmail || "-"}</td>
                  <td>{createdAtDisplay}</td>
                  <td>{o.paymentMethod || "-"}</td>
                  <td>
                    <select
                      className={`status-select ${o.status?.toLowerCase()?.replace(/\s/g, "-")}`}
                      value={o.status || "Menunggu Konfirmasi"}
                      onChange={(e) => handleStatusChange(o.id, e.target.value)}
                      disabled={saving === o.id}
                    >
                      <option value="Menunggu Konfirmasi">Menunggu Konfirmasi</option>
                      <option value="Dalam Proses">Dalam Proses</option>
                      <option value="Menunggu Feedback">Menunggu Feedback</option>
                      <option value="Selesai">Selesai</option>
                      <option value="Dibatalkan">Dibatalkan</option>
                    </select>
                  </td>

                  <td>
                    {o.designLink ? (
                      <div className="design-link-wrap">
                        <a href={o.designLink} target="_blank" rel="noopener noreferrer" className="ref-link">
                          🔗 {o.lastDesignType === "revisi" ? "Revisi" : "Desain Awal"}
                        </a>
                        {o.lastDesignType === "revisi" && <span className="revisi-tag">(Revisi)</span>}
                      </div>
                    ) : (
                      <input type="text" placeholder="Tempel link Google Drive..." onBlur={(e) => handleSaveDesignLink(o.id, e.target.value)} />
                    )}

                    <div className="update-link-input">
                      <input
                        type="url"
                        placeholder="Masukkan link revisi..."
                        value={editLink[o.id] || ""}
                        onChange={(e) => setEditLink((p) => ({ ...p, [o.id]: e.target.value }))}
                      />
                      <button className="btn-update" disabled={saving === o.id} onClick={() => handleUpdateDesignLink(o.id)}>
                        {saving === o.id ? "Menyimpan..." : "Kirim Revisi"}
                      </button>
                    </div>
                  </td>

                  <td>
                    {revs.length > 0 ? (
                      <>
                        <div className="revision-preview">"{(latestMsg || "").slice(0, 40)}{(latestMsg || "").length > 40 ? "..." : ""}"</div>
                        <button className="lihat-pesan-btn" onClick={() => setSelectedOrder(o)}>Lihat Pesan</button>
                      </>
                    ) : (
                      <span className="no-revision">Tidak ada</span>
                    )}
                  </td>

                  <td>
                    <button className="detail-btn" onClick={() => setSelectedOrder(o)}>Lihat Detail</button>
                  </td>

                  <td>
                    {o.designLink && !o.viewedDesign ? (
                      <span className="status-unviewed">🎨 Desain Baru</span>
                    ) : o.viewedDesign ? (
                      <span className="status-viewed">👁️ Sudah Dilihat</span>
                    ) : (
                      <span className="status-none">-</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Modal Detail */}
      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>📋 Detail Pesanan</h3>
            <p><strong>Nama Proyek:</strong> {selectedOrder.projectName || "-"}</p>
            <p><strong>Paket:</strong> {selectedOrder.packageName || "-"}</p>
            <p><strong>Email Pengguna:</strong> {selectedOrder.userEmail || "-"}</p>
            <p><strong>Status:</strong> {selectedOrder.status || "-"}</p>
            <p><strong>Metode Pembayaran:</strong> {selectedOrder.paymentMethod || "-"}</p>
            <p><strong>Tanggal:</strong> {typeof selectedOrder.createdAt === "string" ? selectedOrder.createdAt : selectedOrder.createdAt?.seconds ? new Date(selectedOrder.createdAt.seconds * 1000).toLocaleString("id-ID") : "-"}</p>
            <p><strong>Deskripsi:</strong> {selectedOrder.description || "Tidak ada deskripsi"}</p>

            {selectedOrder.designLink && (
              <p><strong>Link Desain:</strong> <a href={selectedOrder.designLink} target="_blank" rel="noopener noreferrer">🎨 Lihat Desain</a></p>
            )}

            <h4>💬 Riwayat Revisi</h4>
            {getRevisionsForOrder(selectedOrder.id).length > 0 ? (
              getRevisionsForOrder(selectedOrder.id).map((rev, i) => (
                <div key={rev.id} className="revision-item">
                  <p><strong>Revisi {i + 1}:</strong> {rev.message}</p>

                  {rev.reply ? (
                    <div className="reply-box">
                      <p><strong>📩 Balasan Admin:</strong> {rev.reply}</p>
                    </div>
                  ) : (
                    <div className="reply-section">
                      <textarea placeholder="Tulis balasan admin..." value={replies[rev.id] || ""} onChange={(e) => setReplies((p) => ({ ...p, [rev.id]: e.target.value }))} />
                      <button onClick={() => handleReply(rev.id)} className="btn-reply">Kirim Balasan</button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>Tidak ada revisi untuk pesanan ini.</p>
            )}

            <button className="close-btn" onClick={() => setSelectedOrder(null)}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersTable;
