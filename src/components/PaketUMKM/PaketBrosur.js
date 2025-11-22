// src/components/PaketUMKM/PaketBrosur.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/PaketUMKM/PaketBrosur.css";

// === Import 6 gambar portofolio brosur ===
import brosur1 from "../../assets/images/brosur1.jpeg";
import brosur2 from "../../assets/images/brosur2.jpeg";
import brosur3 from "../../assets/images/brosur3.jpeg";
import brosur4 from "../../assets/images/brosur4.jpeg";
import brosur5 from "../../assets/images/brosur5.jpeg";
import brosur6 from "../../assets/images/brosur6.jpeg";

const PaketBrosur = () => {
  const navigate = useNavigate();

  const handlePesan = (paketName, price) => {
    navigate("/order-form", {
      state: {
        packageName: paketName,
        price,
        category: "UMKM",
        type: "Brosur Design",
      },
    });
  };

  const paketList = [
    {
      title: "Brosur Basic",
      desc: "Desain brosur 1 halaman cocok untuk promosi singkat.",
      halaman: "1 Halaman (A4)",
      revisi: "2x Revisi",
      waktu: "1 Hari Kerja",
      price: "Rp 40.000",
      fitur: [
        "Desain cepat dan rapi",
        "Format PDF & JPG",
        "Cocok untuk promosi toko kecil",
      ],
    },
    {
      title: "Brosur Standar",
      desc: "Desain profesional 2 halaman untuk UMKM berkembang.",
      halaman: "2 Halaman (Depan-Belakang)",
      revisi: "3x Revisi",
      waktu: "2 Hari Kerja",
      price: "Rp 80.000",
      fitur: [
        "Kustomisasi warna dan tema",
        "File Siap Cetak (PDF)",
        "Desain menarik dan rapi",
      ],
    },
    {
      title: "Brosur Premium",
      desc: "Desain eksklusif dengan strategi visual dan layout elegan.",
      halaman: "3–4 Halaman Lipat",
      revisi: "Revisi Unlimited (minor)",
      waktu: "3 Hari Kerja",
      price: "Rp 150.000",
      fitur: [
        "Desain premium & estetik",
        "Konsultasi langsung via Chat",
        "File Lengkap (PDF, PNG, AI)",
        "Tampilan modern dan profesional",
      ],
    },
  ];

  // === Portofolio yg tampil 6 gambar ===
  const portfolioImages = [
    brosur1,
    brosur2,
    brosur3,
    brosur4,
    brosur5,
    brosur6,
  ];

  return (
    <>
      <section className="brosur-section">
        <h2 className="brosur-title">📄 Paket Desain Brosur UMKM</h2>
        <p className="brosur-subtitle">
          Tampilkan informasi bisnis Anda dengan brosur profesional yang menarik perhatian pelanggan.
        </p>

        <div className="brosur-cards">
          {paketList.map((p, i) => (
            <div key={i} className={`brosur-card ${i === 2 ? "highlight" : ""}`}>
              <div className="brosur-header">{p.title}</div>

              <div className="brosur-body">
                <p className="brosur-desc">{p.desc}</p>
                <p className="brosur-halaman">🧾 {p.halaman}</p>

                <ul className="brosur-fitur">
                  {p.fitur.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}
                </ul>

                <div className="brosur-info">
                  <span>{p.revisi}</span> | <span>{p.waktu}</span>
                </div>

                <p className="brosur-price">{p.price}</p>
                <button onClick={() => handlePesan(p.title, p.price)}>
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === PORTOFOLIO BROCHURE === */}
      <section className="brosur-portfolio">
        <h2 className="portfolio-title">Portofolio Desain Brosur</h2>
        <p className="portfolio-subtitle">
          Berikut contoh desain brosur profesional yang telah kami buat untuk berbagai UMKM.
        </p>

        <div className="portfolio-grid">
          {portfolioImages.map((img, i) => (
            <div key={i} className="portfolio-item">
              <img src={img} alt={`Brosur ${i + 1}`} />
            </div>
          ))}
        </div>

        <div className="portfolio-footer">
          <Link to="/portofolio/brosur" className="portfolio-link">
            <b>Lihat Selengkapnya →</b>
          </Link>
        </div>
      </section>

      
    </>
  );
};

export default PaketBrosur;
