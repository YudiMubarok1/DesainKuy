import React from "react";
import { Link } from "react-router-dom";
import "../styles/LayananUMKM.css";
import Header from "./Header";
import Footer from "./Footer";

// 🖼️ Gambar aset
import logoImg from "../assets/images/logo1.png";
import posterImg from "../assets/images/poster.png";
import sertifikatImg from "../assets/images/sertifikat.png";
import brosurImg from "../assets/images/brosur.png";
import feedImg from "../assets/images/feed.png";

const LayananUMKM = () => {
  return (
    <>
      {/* 🧩 Header */}
      <Header />

      <div className="umkm-container">
        <h2 className="umkm-title">Layanan Desain UMKM</h2>
        <p className="umkm-subtitle">
          Kami hadir untuk membantu UMKM membangun citra visual yang profesional,
          menarik pelanggan, dan memperkuat branding usaha Anda.
        </p>

        <div className="umkm-grid">
          {/* 🧩 Baris atas */}
          <div className="umkm-card">
            <h3>Jasa Desain Logo</h3>
            <img src={logoImg} alt="Desain Logo" className="umkm-img" />
            <Link to="/layanan-umkm/logo" className="umkm-link">
              Lihat Selengkapnya →
            </Link>
          </div>

          <div className="umkm-card">
            <h3>Jasa Desain Poster</h3>
            <img src={posterImg} alt="Desain Poster" className="umkm-img" />
            <Link to="/layanan-umkm/poster" className="umkm-link">
              Lihat Selengkapnya →
            </Link>
          </div>

           <div className="umkm-card">
            <h3>Jasa Desain Sertifikat</h3>
            <img
              src={sertifikatImg}
              alt="Desain Sertifikat"
              className="umkm-img"
            />
            <Link to="/layanan-umkm/sertifikat" className="umkm-link">
              Lihat Selengkapnya →
            </Link>
          </div>

          {/* 🧩 Baris bawah */}
          <div className="umkm-card">
  <h3>Jasa Desain Brosur</h3>
  <img src={brosurImg} alt="Desain Brosur" className="umkm-img" />
  <Link to="/layanan-umkm/brosur" className="umkm-link">
    Lihat Selengkapnya →
  </Link>
</div>

          <div className="umkm-card">
  <h3>Jasa Desain Feed Instagram</h3>
  <img src={feedImg} alt="Desain Feed Instagram" className="umkm-img" />
  <Link to="/layanan-umkm/feed-ig" className="umkm-link">
    Lihat Selengkapnya →
  </Link>
</div>
        </div>
      </div>

      {/* 🧩 Footer */}
      
    </>
  );
};


export default LayananUMKM;
