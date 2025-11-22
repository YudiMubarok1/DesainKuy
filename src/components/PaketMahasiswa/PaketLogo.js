import React from "react";
import { useNavigate, Link } from "react-router-dom";

import "../../styles/PaketMahasiswa/PaketLogo.css";

// Import 6 gambar portofolio dari folder Mahasiswa
import logo1 from "../../assets/images/LogoMHS1.png";
import logo2 from "../../assets/images/LogoMHS2.png";
import logo3 from "../../assets/images/LogoMHS3.png";
import logo4 from "../../assets/images/LogoMHS4.png";
import logo5 from "../../assets/images/LogoMHS5.png";
import logo6 from "../../assets/images/LogoMHS6.png";

const PaketLogoMahasiswa = () => {
  const navigate = useNavigate();

  const handlePesan = (paketName, price) => {
    navigate("/order-form", {
      state: {
        packageName: paketName,
        price,
        category: "Mahasiswa",
        type: "Logo Mahasiswa",
      },
    });
  };

  const paketList = [
    {
      title: "Logo Basic",
      desc: "Untuk tugas kuliah sederhana & kebutuhan cepat",
      revisi: "1x Revisi",
      waktu: "1 Hari Kerja",
      price: "Rp 25.000",
      fitur: ["1 konsep logo", "Format PNG", "Warna basic"],
    },
    {
      title: "Logo Standar",
      desc: "Pilihan terbaik untuk organisasi & UKM",
      revisi: "2x Revisi",
      waktu: "2 Hari Kerja",
      price: "Rp 40.000",
      fitur: ["2 konsep logo", "Format PNG + HD", "Mockup logo"],
    },
    {
      title: "Logo Premium",
      desc: "Logo eksklusif untuk event, lomba atau brand mahasiswa",
      revisi: "3x Revisi",
      waktu: "2-3 Hari Kerja",
      price: "Rp 60.000",
      highlight: true,
      fitur: [
        "3 konsep logo",
        "Full branding color",
        "Mockup premium",
        "File PNG + HD + PDF",
      ],
    },
  ];

  // 6 portofolio
  const portfolioImages = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <>
      <section className="mhs-logo-section">
        <h2 className="mhs-logo-title">🎓 Paket Logo Mahasiswa</h2>
        <p className="mhs-logo-subtitle">
          Desain logo profesional untuk keperluan kampus, organisasi, UKM, dan lomba.
        </p>

        <div className="mhs-logo-cards">
          {paketList.map((p, i) => (
            <div
              key={i}
              className={`mhs-logo-card ${p.highlight ? "highlight" : ""}`}
            >
              <div className="mhs-logo-header">{p.title}</div>

              <div className="mhs-logo-body">
                <p className="mhs-logo-desc">{p.desc}</p>

                <ul className="mhs-logo-fitur">
                  {p.fitur.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}
                </ul>

                <div className="mhs-logo-info">
                  {p.revisi} | {p.waktu}
                </div>

                <p className="mhs-logo-price">{p.price}</p>

                <button onClick={() => handlePesan(p.title, p.price)}>
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section className="mhs-logo-portfolio">
        <h2 className="mhs-portfolio-title">Portofolio Logo</h2>
        <p className="mhs-portfolio-subtitle">
          Kumpulan desain logo mahasiswa dari berbagai project dan organisasi
        </p>

        <div className="mhs-portfolio-grid">
          {portfolioImages.map((img, i) => (
            <div key={i} className="mhs-portfolio-item">
              <img src={img} alt={`Logo ${i + 1}`} />
            </div>
          ))}
        </div>

        <div className="mhs-portfolio-footer">
          <Link to="/portofolio/mahasiswa/logo" className="mhs-portfolio-link">
            <b>Lihat Selengkapnya →</b>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PaketLogoMahasiswa;
