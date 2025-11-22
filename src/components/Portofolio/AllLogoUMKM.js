import React from "react";
import "../../styles/PaketUMKM/PaketLogo.css"; // gunakan CSS yang sama agar konsisten

// import gambar logo UMKM (ganti nanti sesuai file kamu)
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";
import logo7 from "../../assets/images/logo7.png";
import logo8 from "../../assets/images/logo8.png";
import logo9 from "../../assets/images/logo9.png";


const logos = [
  logo1, logo2, logo3,
  logo4, logo5, logo6,
  logo7, logo8, logo9,
];

const AllLogoUMKM = () => {
  return (
    <section className="allposter-container">
      <h2 className="allposter-title">Portofolio Logo UMKM</h2>

      <div className="allposter-grid">
        {logos.map((img, index) => (
          <div key={index} className="allposter-item">
            <img
              src={img}
              alt={`Logo UMKM ${index + 1}`}
              className="allposter-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllLogoUMKM;
