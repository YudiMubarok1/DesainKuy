import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../Footer";
import "../../styles/PaketMahasiswa/PaketBanner.css";
import bannerImg from "../../assets/images/banner.png"; // ganti sesuai aset kamu

const PaketBanner = () => {
  const navigate = useNavigate();

  const handlePesan = (paketName, price) => {
    navigate("/order-form", {
      state: {
        packageName: paketName,
        price,
        category: "Mahasiswa",
        type: "Banner Mahasiswa",
      },
    });
  };

  const paketList = [
    {
      title: "Banner Basic",
      desc: "Untuk keperluan seminar atau lomba kecil",
      size: "60 x 160 cm",
      revisi: "1x Revisi",
      waktu: "1 Hari Kerja",
      price: "Rp 25.000",
      fitur: ["Desain simpel & cepat", "File siap cetak", "Cocok untuk event ringan"],
    },
    {
      title: "Banner Standar",
      desc: "Pilihan populer untuk acara kampus & organisasi",
      size: "80 x 180 cm",
      revisi: "2x Revisi",
      waktu: "2 Hari Kerja",
      price: "Rp 35.000",
      fitur: ["Desain profesional", "Mockup banner", "Revisi fleksibel"],
    },
    {
      title: "Banner Premium",
      desc: "Tampilan eksklusif untuk event besar & lomba",
      size: "100 x 200 cm",
      revisi: "3x Revisi",
      waktu: "2-3 Hari Kerja",
      price: "Rp 50.000",
      fitur: [
        "Desain eksklusif",
        "Konsultasi via Chat",
        "Revisi prioritas",
        "File siap cetak & preview",
      ],
    },
  ];

  return (
    <>
      <section className="banner-section">
        <h2 className="banner-title">🎓 Paket Banner Mahasiswa</h2>
        <p className="banner-subtitle">
          Solusi cepat & profesional untuk kebutuhan desain banner tugas, event, maupun seminar kampus.
        </p>

        <div className="banner-cards">
          {paketList.map((p, i) => (
            <div key={i} className={`banner-card ${i === 2 ? "highlight" : ""}`}>
              <div className="banner-header">{p.title}</div>
              <div className="banner-body">
                <p className="banner-desc">{p.desc}</p>
                <p className="banner-size">📏 {p.size}</p>

                <ul className="banner-fitur">
                  {p.fitur.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}
                </ul>

                <div className="banner-info">
                  <span>{p.revisi}</span> | <span>{p.waktu}</span>
                </div>

                <p className="banner-price">{p.price}</p>
                <button onClick={() => handlePesan(p.title, p.price)}>Pesan Sekarang</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎨 Portofolio Section */}
      <section className="banner-portfolio">
        <h2 className="portfolio-title">Portofolio</h2>
        <p className="portfolio-subtitle">
          Beberapa hasil desain banner terbaik dari project mahasiswa & organisasi kampus
        </p>

        <div className="portfolio-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="portfolio-item">
              <img src={bannerImg} alt={`Banner ${i + 1}`} />
            </div>
          ))}
        </div>

        <div className="portfolio-footer">
          <Link to="/portofolio/banner" className="portfolio-link">
            <b>Lihat Selengkapnya →</b>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PaketBanner;
