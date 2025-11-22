import React from "react";
import "../../styles/PaketUMKM/AllPoster.css"; // tetap pakai CSS yang sama

// Import gambar banner (ganti sesuai asetmu)
import banner1 from "../../assets/images/banner.png";
import banner2 from "../../assets/images/banner.png";
import banner3 from "../../assets/images/banner.png";
import banner4 from "../../assets/images/banner.png";
import banner5 from "../../assets/images/banner.png";
import banner6 from "../../assets/images/banner.png";
import banner7 from "../../assets/images/banner.png";
import banner8 from "../../assets/images/banner.png";
import banner9 from "../../assets/images/banner.png";
import banner10 from "../../assets/images/banner.png";
import banner11 from "../../assets/images/banner.png";
import banner12 from "../../assets/images/banner.png";

const banners = [
  banner1, banner2, banner3,
  banner4, banner5, banner6,
  banner7, banner8, banner9,
  banner10, banner11, banner12,
];

const AllBanner = () => {
  return (
    <section className="allposter-container">
      <h2 className="allposter-title">Portofolio Banner Mahasiswa</h2>

      <div className="allposter-grid">
        {banners.map((img, index) => (
          <div key={index} className="allposter-item">
            <img
              src={img}
              alt={`Banner Mahasiswa ${index + 1}`}
              className="allposter-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBanner;
    