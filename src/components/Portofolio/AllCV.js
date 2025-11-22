// src/components/Portofolio/AllCV.js
import React from "react";
import "../../styles/PaketUMKM/AllPoster.css"; // gunakan CSS yang sama agar konsisten

// Import semua gambar CV
import cv1 from "../../assets/images/CV1.jpeg";
import cv2 from "../../assets/images/CV2.jpeg";
import cv3 from "../../assets/images/CV3.jpeg";
import cv4 from "../../assets/images/CV4.jpeg";
import cv5 from "../../assets/images/CV5.jpeg";
import cv6 from "../../assets/images/CV6.jpeg";
import cv7 from "../../assets/images/CV7.jpeg";
import cv8 from "../../assets/images/CV8.jpeg";
import cv9 from "../../assets/images/CV9.jpeg";


// Array gambar
const cvList = [
  cv1, cv2, cv3,
  cv4, cv5, cv6,
  cv7, cv8, cv9,
  
];

const AllCV = () => {
  return (
    <section className="allposter-container">
      <h2 className="allposter-title">Portofolio Desain CV</h2>

      <div className="allposter-grid">
        {cvList.map((img, index) => (
          <div key={index} className="allposter-item">
            <img
              src={img}
              alt={`CV Desain ${index + 1}`}
              className="allposter-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCV;
