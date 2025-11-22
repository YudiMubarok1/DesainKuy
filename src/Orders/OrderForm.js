import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { db, auth } from "../firebase/firebaseConfig";
import "../styles/OrderForm.css";
import QRCode from "react-qr-code"; // ✅ Tambahkan dependensi ini: npm install react-qr-code
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const OrderForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const packageData = location.state || {};
  const user = auth.currentUser;

  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    referenceLink: "",
    paymentMethod: "Transfer Bank",
  });

  const [showQR, setShowQR] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Jika pilih QRIS → tampilkan QR acak
    if (name === "paymentMethod" && value === "QRIS") {
      const randomQR = `https://qris.desainkuy.id/pay/${Math.random()
        .toString(36)
        .substring(2, 10)}`;
      setQrCodeValue(randomQR);
      setShowQR(true);
    } else {
      setShowQR(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Silakan login terlebih dahulu.");
      navigate("/login");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        userEmail: user.email,
        packageName: packageData.packageName || "Paket Tidak Dikenal",
        price: packageData.price || 0,
        ...formData,
        status: "Menunggu Konfirmasi",
        createdAt: serverTimestamp(),
      });

      alert("Pesanan berhasil dikirim!");
      navigate("/orders");
    } catch (error) {
      console.error("Gagal menyimpan pesanan:", error);
      alert("Terjadi kesalahan saat mengirim pesanan.");
    }
  };

  return (
    <div className="order-form-container">
      <div className="order-form-box">
        <h2>🧾 Formulir Pemesanan</h2>
        <p>Isi detail pesanan kamu dengan lengkap di bawah ini</p>

        <div className="order-summary">
          <p>
            <strong>Paket:</strong> {packageData.packageName}
          </p>
          <p>
            <strong>Harga:</strong> Rp {packageData.price?.toLocaleString()}
          </p>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <label>Nama Proyek</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
          />

          <label>Deskripsi Singkat</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label>Link Referensi (Opsional)</label>
          <input
            type="url"
            name="referenceLink"
            value={formData.referenceLink}
            onChange={handleChange}
            placeholder="https://..."
          />

          <label>Metode Pembayaran</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Transfer Bank">Transfer Bank</option>
            <option value="QRIS">QRIS</option>
            <option value="COD">COD</option>
          </select>

          {/* 💳 Tampilkan QR code jika metode QRIS */}
          {showQR && (
            <div className="qr-box">
              <h4>Scan QR Code untuk Pembayaran</h4>
              <div className="qr-wrapper">
                <QRCode value={qrCodeValue} size={160} />
              </div>
              <p className="qr-note">
                ID Transaksi: <b>{qrCodeValue.split("/").pop()}</b>
              </p>
            </div>
          )}

          <button type="submit" className="order-submit-btn">
            Kirim Pesanan
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
