import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/PaketUMKM/PaketPoster.css";
import posterImg from "../../assets/images/sumpahpemuda.png";

const PaketPoster = () => {
  const navigate = useNavigate();

  const handlePesan = (paketName, price) => {
    navigate("/order-form", {
      state: {
        packageName: paketName,
        price,
        category: "UMKM",
        type: "Poster Design",
      },
    });
  };

  const paketList = [
    {
      title: "Poster Paket A",
      desc: "Desain poster 1 pilihan dengan konsep visual sederhana & rapi.",
      pilihan: "1 Desain",
      revisi: "2x Revisi",
      waktu: "1–2 Hari Kerja",
      price: "Rp 45.000",
      fitur: [
        "Export JPG/PNG",
        "Warna & tipografi disesuaikan",
        "Cocok untuk promosi UMKM",
      ],
      exclude: ["File Master (AI/CDR) Tidak Termasuk"],
    },
    {
      title: "Poster Paket B",
      desc: "Desain poster 2 pilihan dengan kualitas yang lebih menarik.",
      pilihan: "2 Desain",
      revisi: "3x Revisi",
      waktu: "1–2 Hari Kerja",
      price: "Rp 75.000",
      fitur: [
        "Export JPG/PNG",
        "File Master CDR/AI",
        "Kustom warna & gaya visual",
      ],
      exclude: [],
    },
    {
      title: "Poster Exclusive",
      desc: "Desain premium + express.",
      pilihan: "3 Desain",
      revisi: "Revisi Unlimited (minor)",
      waktu: "1 Hari Express",
      price: "Rp 100.000",
      fitur: [
        "Export JPG/PNG",
        "File Master CDR/AI",
        "Konsultasi Prioritas",
        "Desain premium",
      ],
      exclude: [],
      highlight: true,
    },
  ];

  return (
    <>
      {/* ===============================
            SECTION POSTER
      =============================== */}
      <section className="poster-section">
        <h2 className="poster-title">🎨 Paket Desain Poster</h2>
        <p className="poster-subtitle">
          Tingkatkan daya tarik visual UMKM Anda dengan desain modern dan siap pakai.
        </p>

        <div className="poster-cards">
          {paketList.map((p, i) => (
            <div key={i} className={`poster-card ${p.highlight ? "highlight" : ""}`}>
              <div className="poster-header">{p.title}</div>

              <div className="poster-body">
                <p className="poster-desc">{p.desc}</p>
                <p className="poster-pilihan">🖼️ {p.pilihan}</p>

                <ul className="poster-fitur">
                  {p.fitur.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}

                  {p.exclude.length > 0 &&
                    p.exclude.map((e, j) => (
                      <li key={j} className="poster-not-include">
                        ❌ {e}
                      </li>
                    ))}
                </ul>

                <div className="poster-info">
                  <span>{p.revisi}</span> | <span>{p.waktu}</span>
                </div>

                <p className="poster-price">{p.price}</p>

                <button onClick={() => handlePesan(p.title, p.price)}>
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===============================
           PORTOFOLIO
      =============================== */}
      <section className="poster-portfolio">
        <h2 className="poster-portfolio-title">Portofolio Poster</h2>
        <p className="poster-portfolio-subtitle">
          Berikut contoh desain poster kreatif yang telah kami buat.
        </p>

        <div className="poster-portfolio-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="poster-portfolio-item">
              <img src={posterImg} alt={`Poster ${i + 1}`} />
            </div>
          ))}
        </div>

        <div className="poster-portfolio-footer">
  <Link to="/portofolio/umkm/poster" className="poster-portfolio-link">
    <b>Lihat Selengkapnya →</b>
  </Link>
</div>

      </section>
    </>
  );
};

export default PaketPoster;
