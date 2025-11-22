import React from "react";
import { Link } from "react-router-dom";
import "../styles/LayananMahasiswa.css";
import Header from "./Header";


// 🖼️ Gambar ilustrasi layanan
import pptImg from "../assets/images/ppt.png";
import bannerImg from "../assets/images/banner.png";
import cvImg from "../assets/images/cv.png";
import posterImg from "../assets/images/poster.png";
import logoImg from "../assets/images/logo1.png";
import desainlainImg from "../assets/images/desainlain.png";

const LayananMahasiswa = () => {
  return (
    <>
      <Header />

      <div className="mahasiswa-container">
        <h2 className="mahasiswa-title">Layanan Desain Mahasiswa</h2>
        <p className="mahasiswa-subtitle">
          Solusi desain modern dan profesional untuk proyek, presentasi, dan materi akademik mahasiswa.
        </p>

        <div className="mahasiswa-grid">
          {/* ✅ Jasa Desain PPT diarahkan ke PaketPPT */}
          <div className="mahasiswa-card">
            <h3>Jasa Desain PPT & Infografis</h3>
            <img
              src={pptImg}
              alt="Desain PPT & Infografis"
              className="mahasiswa-img"
            />
            <Link to="/layanan-mahasiswa/ppt" className="mahasiswa-link">
              Lihat Selengkapnya →
            </Link>
          </div>

          {/* ✅ Jasa Desain Banner diarahkan ke PaketBanner */}
          <div className="mahasiswa-card">
            <h3>Jasa Desain Banner</h3>
            <img
              src={bannerImg}
              alt="Desain Banner"
              className="mahasiswa-img"
            />
            <Link to="/layanan-mahasiswa/banner" className="mahasiswa-link">
              Lihat Selengkapnya →
            </Link>
          </div>

          {/* 🧾 CV */}
          <div className="mahasiswa-card">
  <h3>Jasa Desain CV</h3>
  <img src={cvImg} alt="Desain CV" className="mahasiswa-img" />
  <Link to="/layanan-mahasiswa/cv" className="mahasiswa-link">
    Lihat Selengkapnya →
  </Link>
</div>

          {/* 🖼️ Poster */}
          <div className="mahasiswa-card">
  <h3>Jasa Desain Poster</h3>
  <img
    src={posterImg} // pastikan kamu sudah import ini di atas
    alt="Desain Poster"
    className="mahasiswa-img"
  />
  <Link to="/layanan-mahasiswa/poster" className="mahasiswa-link">
    Lihat Selengkapnya →
  </Link>
</div>


          {/* 🔰 Logo */}
          <div className="mahasiswa-card">
  <h3>Jasa Desain Logo</h3>
  <img src={logoImg} alt="Desain Logo" className="mahasiswa-img" />
  <Link to="/layanan-mahasiswa/logo" className="mahasiswa-link">
    Lihat Selengkapnya →
  </Link>
</div>

          {/* 🎨 Lainnya */}
          <div className="mahasiswa-card">
            <h3>Jasa Desain Lainnya</h3>
            <img
              src={desainlainImg}
              alt="Desain Lainnya"
              className="mahasiswa-img"
            />
            <a href="#" className="mahasiswa-link">
              Lihat Selengkapnya →
            </a>
          </div>
        </div>
      </div>

    </>
  );
};

export default LayananMahasiswa;
