import React from "react";
import "../../styles/PaketUMKM/AllPoster.css";

// Import semua gambar poster UMKM
import poster1 from "../../assets/images/poster1.png";
import poster2 from "../../assets/images/poster2.png";
import poster3 from "../../assets/images/posterUMKM3.jpeg";
import poster4 from "../../assets/images/posterUMKM4.jpeg";
import poster5 from "../../assets/images/posterUMKM5.jpeg";
import poster6 from "../../assets/images/poster1.png";


const posters = [
  poster1, poster2, poster3,
  poster4, poster5, poster6,
  
];

const AllPosterUMKM = () => {
  return (
    <section className="allposter-container">
      <h2 className="allposter-title">Portofolio Poster UMKM</h2>

      <div className="allposter-grid">
        {posters.map((img, index) => (
          <div key={index} className="allposter-item">
            <img
              src={img}
              alt={`Poster UMKM ${index + 1}`}
              className="allposter-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllPosterUMKM;
