import React from "react";
import { Link } from "react-router-dom";
import "../../styles/PaketUMKM/HomePoster.css"; // ✅ path baru sesuai permintaan
import posterIllustration from "../../assets/images/lolo.png"; // ganti sesuai nama file ilustrasi kamu

const HomePoster = () => {
  return (
    <section className="homeposter-section">
      <div className="homeposter-container">
        {/* Bagian kiri: teks */}
        <div className="homeposter-content">
          <h2 className="homeposter-title">POSTER</h2>
          <p className="homeposter-description">
            Desain poster profesional untuk mendukung strategi branding dan pemasaran Anda.
            Kami memastikan setiap elemen visual mampu menyampaikan pesan dengan jelas dan berdampak.
          </p>

          <div className="homeposter-buttons">
            <Link to="/portofolio" className="btn-primary">
              Lihat Portofolio
            </Link>
            <Link to="/layanan-umkm/poster" className="btn-outline">
              Lihat Selengkapnya <span className="arrow">▼</span>
            </Link>
          </div>
        </div>

        {/* Bagian kanan: gambar ilustrasi */}
        <div className="homeposter-image">
          <img src={posterIllustration} alt="Ilustrasi Desain Poster" />
        </div>
      </div>
    </section>
  );
};

export default HomePoster;
