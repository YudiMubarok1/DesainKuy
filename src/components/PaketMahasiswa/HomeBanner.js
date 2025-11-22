import React from "react";
import "../../styles/PaketMahasiswa/HomeBanner.css";
import bannerIllustration from "../../assets/images/lolo.png"; // ganti sesuai nama file gambarmu
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="home-banner-container">
        {/* Kiri: teks */}
        <div className="home-banner-content">
          <h2 className="home-banner-title">Banner</h2>
          <p className="home-banner-desc">
            Desain produk profesional yang memperkuat citra dan daya tarik merek Anda. <br />
            Kami memastikan setiap visual menonjolkan keunggulan produk secara efektif dan menarik.
          </p>

          <div className="home-banner-buttons">
            <Link to="/portofolio" className="btn btn-primary">
              Lihat Portofolio
            </Link>
            <Link to="/layanan-mahasiswa/banner" className="btn btn-outline">
              Lihat Selengkapnya <span className="arrow">⌄</span>
            </Link>
          </div>
        </div>

        {/* Kanan: ilustrasi */}
        <div className="home-banner-image">
          <img src={bannerIllustration} alt="Ilustrasi Banner" />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
