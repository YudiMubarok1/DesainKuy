import React from "react";
import "../../styles/PaketUMKM/AllPoster.css"; // gunakan CSS yang sama agar konsisten

// import gambar brosur (ganti sesuai file yang kamu punya)
import brosur1 from "../../assets/images/brosur1.jpeg";
import brosur2 from "../../assets/images/brosur2.jpeg";
import brosur3 from "../../assets/images/brosur3.jpeg";
import brosur4 from "../../assets/images/brosur4.jpeg";
import brosur5 from "../../assets/images/brosur5.jpeg";
import brosur6 from "../../assets/images/brosur6.jpeg";
import brosur7 from "../../assets/images/brosur7.jpeg";
import brosur8 from "../../assets/images/brosur8.jpeg";
import brosur9 from "../../assets/images/brosur9.jpeg";


const brosurs = [
  brosur1, brosur2, brosur3,
  brosur4, brosur5, brosur6,
  brosur7, brosur8, brosur9,
  
];

const AllBrosur = () => {
  return (
    <section className="allposter-container">
      <h2 className="allposter-title">Portofolio Brosur UMKM</h2>

      <div className="allposter-grid">
        {brosurs.map((img, index) => (
          <div key={index} className="allposter-item">
            <img
              src={img}
              alt={`Brosur UMKM ${index + 1}`}
              className="allposter-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBrosur;
