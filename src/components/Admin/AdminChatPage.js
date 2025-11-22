import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, onSnapshot, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "../../styles/Chat.css";

const AdminChatPage = () => {
  const { revisionId } = useParams();
  const navigate = useNavigate();
  const [revision, setRevision] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "revisions", revisionId), (snap) => {
      if (snap.exists()) setRevision(snap.data());
    });
    return () => unsub();
  }, [revisionId]);

  const handleSend = async () => {
    if (!newMessage.trim()) return;
    const ref = doc(db, "revisions", revisionId);
    await updateDoc(ref, {
      messages: arrayUnion({
        sender: "admin",
        text: newMessage.trim(),
        time: serverTimestamp(),
      }),
    });
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Kembali</button>
      <h2>💬 Balasan Revisi Pesanan</h2>

      <div className="chat-box">
        {revision?.messages?.length > 0 ? (
          revision.messages.map((msg, idx) => (
            <div key={idx} className={`chat-msg ${msg.sender}`}>
              <p>{msg.text}</p>
              <small>
                {msg.sender === "admin" ? "Admin" : "User"} •{" "}
                {msg.time?.seconds
                  ? new Date(msg.time.seconds * 1000).toLocaleString("id-ID")
                  : ""}
              </small>
            </div>
          ))
        ) : (
          <p className="empty-chat">Belum ada pesan.</p>
        )}
      </div>

      <div className="chat-input">
        <textarea
          placeholder="Tulis balasan..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Kirim</button>
      </div>
    </div>
  );
};

export default AdminChatPage;
