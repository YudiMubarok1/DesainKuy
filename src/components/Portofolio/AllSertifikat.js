import React from "react";
import "../../styles/PaketUMKM/AllPoster.css"; // gunakan CSS yang sama agar konsisten

// import gambar sertifikat (ganti nanti sesuai file kamu)
import sertifikat1 from "../../assets/images/sertifikat1.jpeg";
import sertifikat2 from "../../assets/images/sertifikat2.jpeg";
import sertifikat3 from "../../assets/images/sertifikat3.jpeg";
import sertifikat4 from "../../assets/images/sertifikat4.jpeg";
import sertifikat5 from "../../assets/images/sertifikat5.jpeg";
import sertifikat6 from "../../assets/images/sertifikat6.jpeg";
import sertifikat7 from "../../assets/images/sertifikat7.jpeg";
import sertifikat8 from "../../assets/images/sertifikat8.jpeg";
import sertifikat9 from "../../assets/images/sertifikat9.jpeg";



const sertifikats = [
  sertifikat1, sertifikat2, sertifikat3,
  sertifikat4, sertifikat5, sertifikat6,
  sertifikat7, sertifikat8, sertifikat9,
  
];

const AllSertifikat = () => {
  return (
    <section className="allposter-container">
      <h2 className="allposter-title">Portofolio Sertifikat UMKM</h2>

      <div className="allposter-grid">
        {sertifikats.map((img, index) => (
          <div key={index} className="allposter-item">
            <img
              src={img}
              alt={`Sertifikat UMKM ${index + 1}`}
              className="allposter-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllSertifikat;
