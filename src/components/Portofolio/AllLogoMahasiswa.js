import React from "react";
import "../../styles/PaketUMKM/AllPoster.css";

// Import contoh gambar (ganti sesuai file asli kamu)
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo1.png";
import logo3 from "../../assets/images/logo1.png";
import logo4 from "../../assets/images/logo1.png";
import logo5 from "../../assets/images/logo1.png";
import logo6 from "../../assets/images/logo1.png";
import logo7 from "../../assets/images/logo1.png";
import logo8 from "../../assets/images/logo1.png";
import logo9 from "../../assets/images/logo1.png";
import logo10 from "../../assets/images/logo1.png";
import logo11 from "../../assets/images/logo1.png";
import logo12 from "../../assets/images/logo1.png";

const logos = [
  logo1, logo2, logo3,
  logo4, logo5, logo6,
  logo7, logo8, logo9,
  logo10, logo11, logo12,
];

const AllLogoMahasiswa = () => {
  return (
    <section className="allposter-container">
      <h2 className="allposter-title">Portofolio Logo Mahasiswa</h2>

      <div className="allposter-grid">
        {logos.map((img, index) => (
          <div key={index} className="allposter-item">
            <img
              src={img}
              alt={`Logo Mahasiswa ${index + 1}`}
              className="allposter-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllLogoMahasiswa;
