// src/components/PaketMahasiswa/PaketCV.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../Footer";
import "../../styles/PaketMahasiswa/PaketCV.css";

// IMPORT 6 GAMBAR CV SESUAI DATA DI AllCV.js
import cv1 from "../../assets/images/CV1.jpeg";
import cv2 from "../../assets/images/CV2.jpeg";
import cv3 from "../../assets/images/CV3.jpeg";
import cv4 from "../../assets/images/CV4.jpeg";
import cv5 from "../../assets/images/CV5.jpeg";
import cv6 from "../../assets/images/CV6.jpeg";

const PaketCV = () => {
  const navigate = useNavigate();

  const handlePesan = (paketName, price) => {
    navigate("/order-form", {
      state: {
        packageName: paketName,
        price,
        category: "Mahasiswa",
        type: "Desain CV Mahasiswa",
      },
    });
  };

  const paketList = [
    {
      title: "CV Basic",
      desc: "Desain sederhana tapi tetap rapi & profesional.",
      revisi: "1x Revisi",
      waktu: "1 Hari Kerja",
      price: "Rp 25.000",
      fitur: [
        "Format A4 (PDF)",
        "Desain clean & formal",
        "1 varian warna",
        "Cocok untuk lamaran magang",
      ],
    },
    {
      title: "CV Standar",
      desc: "Pilihan terbaik untuk mahasiswa aktif & fresh graduate.",
      revisi: "2x Revisi",
      waktu: "1-2 Hari Kerja",
      price: "Rp 50.000",
      fitur: [
        "Desain profesional & menarik",
        "Editable (Word / Canva)",
        "2 varian warna",
        "File PDF & PNG",
      ],
    },
    {
      title: "CV Premium",
      desc: "Tampilan eksklusif dan modern untuk karier impianmu.",
      revisi: "3x Revisi",
      waktu: "2-3 Hari Kerja",
      price: "Rp 75.000",
      fitur: [
        "Desain premium modern",
        "Editable file (Word / PSD)",
        "Konsultasi desain via Chat",
        "File Siap Cetak & Digital",
      ],
    },
  ];

  // ARRAY GAMBAR PORTOFOLIO 6 BUAH
  const portfolioCV = [cv1, cv2, cv3, cv4, cv5, cv6];

  return (
    <>
      <section className="cv-section">
        <h2 className="cv-title">📄 Paket Desain CV Mahasiswa</h2>
        <p className="cv-subtitle">
          Wujudkan CV profesional dan menarik untuk keperluan magang, kerja, maupun beasiswa!
        </p>

        <div className="cv-cards">
          {paketList.map((p, i) => (
            <div key={i} className={`cv-card ${i === 2 ? "highlight" : ""}`}>
              <div className="cv-header">{p.title}</div>
              <div className="cv-body">
                <p className="cv-desc">{p.desc}</p>

                <ul className="cv-fitur">
                  {p.fitur.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}
                </ul>

                <div className="cv-info">
                  <span>{p.revisi}</span> | <span>{p.waktu}</span>
                </div>

                <p className="cv-price">{p.price}</p>
                <button onClick={() => handlePesan(p.title, p.price)}>
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎨 Portofolio CV Section */}
      <section className="cv-portfolio">
        <h2 className="portfolio-title">Portofolio CV</h2>
        <p className="portfolio-subtitle">
          Beberapa contoh desain CV yang telah kami buat untuk mahasiswa & fresh graduate.
        </p>

        <div className="portfolio-grid">
          {portfolioCV.map((img, i) => (
            <div key={i} className="portfolio-item">
              <img src={img} alt={`CV ${i + 1}`} />
            </div>
          ))}
        </div>

        <div className="portfolio-footer">
          {/* ✔ Sudah dibetulkan rutenya */}
          <Link to="/portofolio/mahasiswa/cv" className="portfolio-link">
            <b>Lihat Selengkapnya →</b>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PaketCV;
