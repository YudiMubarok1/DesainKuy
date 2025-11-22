import React, { useState } from "react";
import "../styles/Portofolio.css";

const Portofolio = () => {
  const [activeTab, setActiveTab] = useState("umkm");

  const portofolioData = {
    umkm: [
      { title: "Poster", image: "/no-photo.png" },
      { title: "Banner", image: "/no-photo.png" },
      { title: "Menu", image: "/no-photo.png" },
      { title: "Katalog", image: "/no-photo.png" },
      { title: "Kemasan", image: "/no-photo.png" },
      { title: "Branding", image: "/no-photo.png" },
    ],
    mahasiswa: [
      { title: "PPT & Infografis", image: "/no-photo.png" },
      { title: "Banner", image: "/no-photo.png" },
      { title: "CV", image: "/no-photo.png" },
      { title: "Poster", image: "/no-photo.png" },
      { title: "Sertifikat", image: "/no-photo.png" },
      { title: "ID Card", image: "/no-photo.png" },
    ],
  };

  const renderPortofolio = (data) =>
    data.map((item, i) => (
      <div key={i} className="card">
        <div className="card-header">
          <span className="label">Portofolio</span>
          <span className="type">{item.title}</span>
        </div>
        <img src={item.image} alt={item.title} className="card-img" />
        <a href="#" className="card-link">
          Lihat Selengkapnya
        </a>
      </div>
    ));

  return (
    <>
      <div className="tabs">
        <button
          className={activeTab === "umkm" ? "tab active-umkm" : "tab"}
          onClick={() => setActiveTab("umkm")}
        >
          UMKM
        </button>
        <button
          className={activeTab === "mahasiswa" ? "tab active-mahasiswa" : "tab"}
          onClick={() => setActiveTab("mahasiswa")}
        >
          Mahasiswa
        </button>
      </div>

      <div className={`grid fade-${activeTab}`}>
        {activeTab === "umkm"
          ? renderPortofolio(portofolioData.umkm)
          : renderPortofolio(portofolioData.mahasiswa)}
      </div>
    </>
  );
};

export default Portofolio;
