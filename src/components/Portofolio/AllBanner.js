import React from "react";
import "../../styles/PaketUMKM/AllPoster.css"; // tetap pakai CSS yang sama

// Import gambar banner (ganti sesuai asetmu)
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import banner5 from "../../assets/images/banner5.png";
import banner6 from "../../assets/images/banner6.png";
import banner7 from "../../assets/images/banner10.png";
import banner8 from "../../assets/images/banner18.png";
import banner9 from "../../assets/images/banner9.png";


const banners = [
  banner1, banner2, banner3,
  banner4, banner5, banner6,
  banner7, banner8, banner9,

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
    