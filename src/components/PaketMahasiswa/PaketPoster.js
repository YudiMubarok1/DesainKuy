import React from "react";
import { useNavigate, Link } from "react-router-dom";

import "../../styles/PaketMahasiswa/PaketPoster.css";

// Import 6 gambar poster untuk ditampilkan pada halaman utama paket
import poster1 from "../../assets/images/posterMHS1.png";
import poster2 from "../../assets/images/posterMHS2.png";
import poster3 from "../../assets/images/posterMHS3.png";
import poster4 from "../../assets/images/posterMHS4.png";
import poster5 from "../../assets/images/posterMHS5.png";
import poster6 from "../../assets/images/posterMHS6.png";

const PaketPoster = () => {
  const navigate = useNavigate();

  const handlePesan = (paketName, price) => {
    navigate("/order-form", {
      state: {
        packageName: paketName,
        price,
        category: "Mahasiswa",
        type: "Desain Poster Mahasiswa",
      },
    });
  };

  const paketList = [
    {
      title: "Poster Basic",
      desc: "Desain sederhana untuk tugas kuliah.",
      size: "A4 / A3",
      revisi: "1x Revisi",
      waktu: "1 Hari Kerja",
      price: "Rp 20.000",
      fitur: ["Desain clean", "File siap cetak (PDF/JPG)", "Cocok untuk tugas individu"],
    },
    {
      title: "Poster Standar",
      desc: "Pilihan ideal untuk lomba atau kegiatan kampus.",
      size: "A3 / A2",
      revisi: "2x Revisi",
      waktu: "1-2 Hari Kerja",
      price: "Rp 35.000",
      fitur: ["Desain profesional", "Revisi fleksibel", "File cetak & digital"],
    },
    {
      title: "Poster Premium",
      desc: "Desain eksklusif untuk kompetisi nasional.",
      size: "A2 / A1",
      revisi: "3x Revisi",
      waktu: "2-3 Hari Kerja",
      price: "Rp 50.000",
      fitur: ["Desain eksklusif", "Konsultasi via Chat", "Mockup preview"],
    },
  ];

  // 6 poster untuk ditampilkan di bawah
  const posterPreview = [poster1, poster2, poster3, poster4, poster5, poster6];

  return (
    <>
      <section className="mhs-poster-section">
        <h2 className="mhs-poster-title">🎓 Paket Desain Poster Mahasiswa</h2>
        <p className="mhs-poster-subtitle">
          Buat poster profesional untuk lomba, tugas, atau event kampus.
        </p>

        <div className="mhs-poster-cards">
          {paketList.map((p, i) => (
            <div key={i} className={`mhs-poster-card ${i === 2 ? "highlight" : ""}`}>
              <div className="mhs-poster-header">{p.title}</div>

              <div className="mhs-poster-body">
                <p className="mhs-poster-desc">{p.desc}</p>
                <p className="mhs-poster-size">📏 {p.size}</p>

                <ul className="mhs-poster-fitur">
                  {p.fitur.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}
                </ul>

                <div className="mhs-poster-info">
                  <span>{p.revisi}</span> | <span>{p.waktu}</span>
                </div>

                <p className="mhs-poster-price">{p.price}</p>

                <button onClick={() => handlePesan(p.title, p.price)}>
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6 PORTFOLIO */}
      <section className="mhs-poster-portfolio">
        <h2 className="mhs-portfolio-title">Portofolio Poster</h2>
        <p className="mhs-portfolio-subtitle">
          Hasil desain poster terbaik untuk project dan kompetisi.
        </p>

        <div className="mhs-portfolio-grid">
          {posterPreview.map((img, i) => (
            <div key={i} className="mhs-portfolio-item">
              <img src={img} alt={`Poster ${i + 1}`} />
            </div>
          ))}
        </div>

        <div className="mhs-portfolio-footer">
          <Link to="/portofolio/poster" className="mhs-portfolio-link">
            <b>Lihat Selengkapnya →</b>
          </Link>
        </div>
      </section>

    
    </>
  );
};

export default PaketPoster;
