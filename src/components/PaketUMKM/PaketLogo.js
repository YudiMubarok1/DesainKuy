import React from "react";
import { useNavigate, Link } from "react-router-dom";

import "../../styles/PaketUMKM/PaketLogo.css";

// placeholder 6 gambar
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";

const PaketLogoUMKM = () => {
  const navigate = useNavigate();

  const handlePesan = (paketName, price) => {
    navigate("/order-form", {
      state: {
        packageName: paketName,
        price,
        category: "UMKM",
        type: "Logo Design",
      },
    });
  };

  const paketList = [
    {
      title: "Logo Basic",
      desc: "Desain logo sederhana untuk bisnis pemula.",
      konsep: "1 Konsep Desain",
      revisi: "2x Revisi",
      waktu: "1 Hari Kerja",
      price: "Rp 150.000",
      fitur: [
        "Desain cepat dan simpel",
        "Format JPG & PNG",
        "Cocok untuk usaha kecil",
      ],
    },
    {
      title: "Logo Standar",
      desc: "Pilihan ideal untuk UMKM yang ingin tampil profesional.",
      konsep: "2 Konsep Desain",
      revisi: "3x Revisi",
      waktu: "2 Hari Kerja",
      price: "Rp 300.000",
      fitur: [
        "Desain profesional dan elegan",
        "File Master (AI/CDR)",
        "File JPG, PNG, PDF",
      ],
    },
    {
      title: "Logo Premium",
      desc: "Paket lengkap dengan identitas brand dan konsultasi langsung.",
      konsep: "3 Konsep Desain",
      revisi: "Revisi Unlimited",
      waktu: "2–3 Hari Kerja",
      price: "Rp 600.000",
      fitur: [
        "Brand Kit & Panduan Warna",
        "Konsultasi via Chat",
        "File Master Lengkap",
        "Mockup Logo",
      ],
    },
  ];

  // 6 gambar portofolio
  const portfolioImages = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <>
      <section className="umkm-logo-section">
        <h2 className="umkm-logo-title">💼 Paket Desain Logo UMKM</h2>
        <p className="umkm-logo-subtitle">
          Bangun citra profesional untuk bisnis Anda dengan logo yang unik dan mudah diingat.
        </p>

        <div className="umkm-logo-cards">
          {paketList.map((p, i) => (
            <div key={i} className={`umkm-logo-card ${i === 2 ? "umkm-highlight" : ""}`}>
              <div className="umkm-logo-header">{p.title}</div>
              <div className="umkm-logo-body">
                <p className="umkm-logo-desc">{p.desc}</p>
                <p className="umkm-logo-konsep">🎨 {p.konsep}</p>

                <ul className="umkm-logo-fitur">
                  {p.fitur.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}
                </ul>

                <div className="umkm-logo-info">
                  <span>{p.revisi}</span> | <span>{p.waktu}</span>
                </div>

                <p className="umkm-logo-price">{p.price}</p>
                <button
                  className="umkm-logo-btn"
                  onClick={() => handlePesan(p.title, p.price)}
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6 PORTOFOLIO */}
      <section className="umkm-logo-portfolio">
        <h2 className="umkm-portfolio-title">Portofolio Logo</h2>
        <p className="umkm-portfolio-subtitle">
          Berikut beberapa hasil desain logo UMKM yang telah kami buat.
        </p>

        <div className="umkm-portfolio-grid">
          {portfolioImages.map((img, i) => (
            <div key={i} className="umkm-portfolio-item">
              <img src={img} alt={`Logo ${i + 1}`} />
            </div>
          ))}
        </div>

        <Link to="/portofolio/umkm/logo" className="umkm-portfolio-link">
  <b>Lihat Selengkapnya →</b>
</Link>

      </section>

  
    </>
  );
};

export default PaketLogoUMKM;
