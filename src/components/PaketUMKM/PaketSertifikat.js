// src/components/PaketUMKM/PaketSertifikat.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";


// Style
import "../../styles/PaketUMKM/PaketSertifikat.css";

// === Import 6 gambar portofolio sertifikat ===
import sertifikat1 from "../../assets/images/sertifikat1.jpeg";
import sertifikat2 from "../../assets/images/sertifikat2.jpeg";
import sertifikat3 from "../../assets/images/sertifikat3.jpeg";
import sertifikat4 from "../../assets/images/sertifikat4.jpeg";
import sertifikat5 from "../../assets/images/sertifikat5.jpeg";
import sertifikat6 from "../../assets/images/sertifikat6.jpeg";

const PaketSertifikat = () => {
  const navigate = useNavigate();

  const handlePesan = (paketName, price) => {
    navigate("/order-form", {
      state: {
        packageName: paketName,
        price,
        category: "UMKM",
        type: "Sertifikat Design",
      },
    });
  };

  const paketList = [
    {
      title: "Sertifikat Basic",
      desc: "Desain 1 sertifikat digital dengan tampilan elegan untuk kebutuhan acara kecil.",
      jumlah: "1 Sertifikat (format digital)",
      revisi: "Revisi 1 kali",
      waktu: "1 Hari Kerja",
      price: "Rp 25.000",
      fitur: [
        "Ukuran A4 (PDF & JPG)",
        "Desain simple dan rapi",
        "Cocok untuk lomba internal atau kegiatan kecil",
      ],
    },
    {
      title: "Sertifikat Premium",
      desc: "Paket ideal untuk event menengah dengan kebutuhan variasi desain dan warna.",
      jumlah: "2 Sertifikat (format digital)",
      revisi: "Revisi maksimal 3 kali",
      waktu: "2 Hari Kerja",
      price: "Rp 50.000",
      fitur: [
        "Kustomisasi warna & tema",
        "Desain profesional dan modern",
        "Dapat disesuaikan dengan logo instansi/brand",
      ],
    },
    {
      title: "Sertifikat Profesional",
      desc: "Desain lengkap untuk event besar atau penghargaan bisnis Anda.",
      jumlah: "3 Sertifikat + Template Bonus",
      revisi: "Revisi tanpa batas (minor)",
      waktu: "2–3 Hari Kerja",
      price: "Rp 75.000",
      fitur: [
        "Kustom logo & tanda tangan digital",
        "Desain premium dan eksklusif",
        "File siap cetak (A4, PDF, JPG)",
      ],
    },
  ];

  // === Daftar 6 gambar portofolio ===
  const portfolioImages = [
    sertifikat1,
    sertifikat2,
    sertifikat3,
    sertifikat4,
    sertifikat5,
    sertifikat6,
  ];

  return (
    <>
      <section className="sertifikat-section">
        <h2 className="sertifikat-title">📜 Paket Desain Sertifikat UMKM</h2>
        <p className="sertifikat-subtitle">
          Desain sertifikat elegan dan profesional untuk kebutuhan acara, lomba, atau penghargaan bisnis Anda.
        </p>

        <div className="sertifikat-cards">
          {paketList.map((p, i) => (
            <div key={i} className={`sertifikat-card ${i === 2 ? "highlight" : ""}`}>
              <div className="sertifikat-header">{p.title}</div>

              <div className="sertifikat-body">

                <div className="content-group">
                  <p className="sertifikat-desc">{p.desc}</p>
                  <p className="sertifikat-jumlah">🖋️ {p.jumlah}</p>

                  <ul className="sertifikat-fitur">
                    {p.fitur.map((f, j) => (
                      <li key={j}>✅ {f}</li>
                    ))}
                  </ul>

                  <div className="sertifikat-info">
                    <span>{p.revisi}</span> | <span>{p.waktu}</span>
                  </div>

                  <p className="sertifikat-price">{p.price}</p>
                </div>

                <button onClick={() => handlePesan(p.title, p.price)}>
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === PORTOFOLIO SERTIFIKAT === */}
      <section className="sertifikat-portfolio">
        <h2 className="portfolio-title">✨ Portofolio Desain Sertifikat</h2>
        <p className="portfolio-subtitle">
          Berikut beberapa hasil desain sertifikat elegan yang telah kami buat untuk UMKM dan berbagai acara.
        </p>

        <div className="portfolio-grid">
          {portfolioImages.map((img, i) => (
            <div key={i} className="portfolio-item">
              <img src={img} alt={`Sertifikat ${i + 1}`} />
            </div>
          ))}
        </div>

        <Link to="/portofolio/sertifikat" className="portfolio-link">
          <b>Lihat Selengkapnya →</b>
        </Link>
      </section>

     
    </>
  );
};

export default PaketSertifikat;
