import React from "react";
import "../../styles/PaketUMKM/AllPoster.css";

// import gambar poster (ganti nanti sesuai file kamu)
import poster1 from "../../assets/images/posterMHS1.png";
import poster2 from "../../assets/images/posterMHS2.png";
import poster3 from "../../assets/images/posterMHS3.png";
import poster4 from "../../assets/images/posterMHS4.png";
import poster5 from "../../assets/images/posterMHS5.png";
import poster6 from "../../assets/images/posterMHS6.png";
import poster7 from "../../assets/images/posterMHS7.png";
import poster8 from "../../assets/images/posterMHS8.png";
import poster9 from "../../assets/images/poster.png";
import poster10 from "../../assets/images/poster.png";
import poster11 from "../../assets/images/poster.png";
import poster12 from "../../assets/images/poster.png";

const posters = [
  poster1, poster2, poster3,
  poster4, poster5, poster6,
  poster7, poster8, poster9,
  poster10, poster11, poster12,
];

const AllPoster = () => {
  return (
    <section className="allposter-container">
      <h2 className="allposter-title">Portofolio Poster Mahasiswa</h2>

      <div className="allposter-grid">
        {posters.map((img, index) => (
          <div key={index} className="allposter-item">
            <img
              src={img}
              alt={`Poster ${index + 1}`}
              className="allposter-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllPoster;
