import React from "react";
import "../../styles/PaketUMKM/AllPoster.css";

// Import semua gambar poster
import poster1 from "../../assets/images/poster1.png";
import poster2 from "../../assets/images/poster1.png";
import poster3 from "../../assets/images/poster1.png";
import poster4 from "../../assets/images/poster1.png";
import poster5 from "../../assets/images/poster1.png";
import poster6 from "../../assets/images/poster1.png";
import poster7 from "../../assets/images/poster1.png";
import poster8 from "../../assets/images/poster1.png";
import poster9 from "../../assets/images/poster1.png";
import poster10 from "../../assets/images/poster1.png";
import poster11 from "../../assets/images/poster1.png";
import poster12 from "../../assets/images/poster1.png";
import poster13 from "../../assets/images/poster1.png";
import poster14 from "../../assets/images/poster1.png";
import poster15 from "../../assets/images/poster1.png";

// List gambar
const posters = [
  poster1, poster2, poster3,
  poster4, poster5, poster6,
  poster7, poster8, poster9,
  poster10, poster11, poster12,
  poster13, poster14, poster15,
];

const AllPoster = () => {
  return (
    <section className="allposter-container">
      <h2 className="allposter-title">Portofolio Poster</h2>

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
