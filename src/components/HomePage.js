import React, { useRef } from "react";
import "../styles/HomePage.css";
import ilustrasi1 from "../assets/images/lolo.png";

// Import ikon
import murahIcon from "../assets/images/murah.png";
import cepatIcon from "../assets/images/cepat.png";
import responsifIcon from "../assets/images/responsif.png";
import profesionalIcon from "../assets/images/profesional.png";

function HomePage() {
  // 👉 buat ref untuk target scroll
  const nextSectionRef = useRef(null);

  // Fungsi scroll halus ke bawah
  const handleScroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="homepage">
      {/* ======== HERO SECTION ======== */}
      <main className="hero">
        <div className="hero-text">
          <h1>
            Mau Desain Keren Tanpa Ribet?{" "}
            <span className="highlight">Kuy!</span>
          </h1>
          <p>
            DesainKUY bantu UMKM, mahasiswa, dan brand baru dapat desain keren
            tanpa ribet, tepat waktu, dan dengan garansi kepuasan.
          </p>

          <div className="buttons">
            <button className="btn-primary">Free Konsultasi</button>

            {/* 🔽 Tombol scroll halus */}
            <button className="btn-secondary" onClick={handleScroll}>
              Lihat Selengkapnya ▾
            </button>
          </div>

          {/* ✅ Fitur horizontal */}
          <div className="features-inline">
            <div className="feature">
              <img src={murahIcon} alt="Murah" />
              <span>Murah</span>
            </div>
            <div className="feature">
              <img src={cepatIcon} alt="Cepat" />
              <span>Cepat</span>
            </div>
            <div className="feature">
              <img src={responsifIcon} alt="Responsif" />
              <span>Responsif</span>
            </div>
            <div className="feature">
              <img src={profesionalIcon} alt="Profesional" />
              <span>Profesional</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={ilustrasi1} alt="Ilustrasi Desain" />
        </div>
      </main>

      {/* ======== Bagian target scroll kosong (transisi halus) ======== */}
      <section ref={nextSectionRef} className="next-section"></section>
    </div>
  );
}

export default HomePage;
