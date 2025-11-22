import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "../../styles/AdminOrderDetail.css";

const AdminOrderDetail = ({ order, revisions, onClose }) => {
  const [replies, setReplies] = useState({});

  const handleReplyChange = (revId, value) => {
    setReplies((prev) => ({ ...prev, [revId]: value }));
  };

  const handleReplySubmit = async (revId) => {
    const replyText = replies[revId]?.trim();
    if (!replyText) return alert("Isi balasan terlebih dahulu!");

    try {
      const ref = doc(db, "revisions", revId);
      await updateDoc(ref, {
        reply: replyText,
        status: "Dibalas",
      });

      alert("✅ Balasan berhasil dikirim!");
      setReplies((prev) => ({ ...prev, [revId]: "" }));
    } catch (error) {
      console.error(error);
      alert("❌ Gagal mengirim balasan!");
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp?.seconds) return "-";
    return new Date(timestamp.seconds * 1000).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content scaled" onClick={(e) => e.stopPropagation()}>
        
        <h3 className="title">📋 Detail Pesanan</h3>

        {/* INFORMASI ORDER */}
        <div className="info-grid">
          <div className="info-box">
            <p><strong>Nama Proyek:</strong> {order.projectName || "-"}</p>
            <p><strong>Email Pengguna:</strong> {order.userEmail || "-"}</p>
          </div>

          <div className="info-box">
            <p><strong>Tanggal Pemesanan:</strong> {formatDate(order.timestamp)}</p>
            <p><strong>Status:</strong> {order.status || "-"}</p>
          </div>
        </div>

        {/* REVISI */}
        <h4 className="subtitle">💬 Riwayats Revisis</h4>

        {revisions.length > 0 ? (
          <div className="revisi-list">
            {revisions
              .sort((a, b) => (a.timestamp?.seconds || 0) - (b.timestamp?.seconds || 0))
              .map((rev, i) => (
                <div key={rev.id} className="revisi-item">

                  <div className="revisi-header">
                    <h5>Revisi {i + 1}</h5>
                    <span className="rev-date">{formatDate(rev.timestamp)}</span>
                  </div>

                  <p><strong>Pesan:</strong> {rev.message}</p>

                  {rev.reply ? (
                    <div className="reply-box">
                      <strong>Balasan Admin:</strong>
                      <p>{rev.reply}</p>
                    </div>
                  ) : (
                    <div className="reply-form">
                      <textarea
                        placeholder="Tulis balasan admin..."
                        value={replies[rev.id] || ""}
                        onChange={(e) => handleReplyChange(rev.id, e.target.value)}
                      />

                      <button onClick={() => handleReplySubmit(rev.id)}>
                        Kirim Balasan
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        ) : (
          <p className="no-revisi">Tidak ada riwayat revisi.</p>
        )}

        <button className="close-btn" onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
};

export default AdminOrderDetail;
