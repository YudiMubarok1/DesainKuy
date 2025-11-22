import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/PaketMahasiswa/PaketPPT.css";

const PaketPPT = () => {
  const navigate = useNavigate();

  const handlePesan = (paketName, price) => {
    navigate("/order-form", {
      state: {
        packageName: paketName,
        price,
        category: "Mahasiswa",
        type: "PPT & Infografis",
      },
    });
  };

  const paketList = [
    {
      title: "PPT Basic",
      desc: "Cocok untuk presentasi tugas kuliah sederhana",
      slide: "10 Slide",
      revisi: "1x Revisi",
      waktu: "1 Hari Kerja",
      price: "Rp 25.000",
      fitur: [
        "Desain clean dan rapi",
        "Format PowerPoint",
        "File siap edit",
      ],
    },
    {
      title: "PPT Standar",
      desc: "Pilihan ideal untuk presentasi seminar atau lomba kampus",
      slide: "15–20 Slide",
      revisi: "2x Revisi",
      waktu: "2 Hari Kerja",
      price: "Rp 40.000",
      fitur: [
        "Desain profesional",
        "Infografis sederhana",
        "Animasi ringan",
        "File PPT & PDF",
      ],
    },
    {
      title: "PPT Premium",
      desc: "Untuk presentasi sidang, lomba, atau event besar",
      slide: "20–30 Slide",
      revisi: "3x Revisi",
      waktu: "2–3 Hari Kerja",
      price: "Rp 60.000",
      fitur: [
        "Desain eksklusif & interaktif",
        "Infografis custom",
        "Konsultasi desain via chat",
        "File PPT, PDF & Template Custom",
      ],
    },
  ];

  return (
    <>
      <section className="ppt-section">
        <h2 className="ppt-title">🎓 Paket Desain PPT & Infografis</h2>
        <p className="ppt-subtitle">
          Bikin presentasi kamu lebih menarik dan profesional dengan desain yang kuat, rapi, dan komunikatif.
        </p>

        <div className="ppt-cards">
          {paketList.map((p, i) => (
            <div key={i} className={`ppt-card ${i === 2 ? "highlight" : ""}`}>
              <div className="ppt-header">{p.title}</div>
              <div className="ppt-body">
                <p className="ppt-desc">{p.desc}</p>
                <p className="ppt-slide">📑 {p.slide}</p>

                <ul className="ppt-fitur">
                  {p.fitur.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}
                </ul>

                <div className="ppt-info">
                  <span>{p.revisi}</span> | <span>{p.waktu}</span>
                </div>

                <p className="ppt-price">{p.price}</p>
                <button onClick={() => handlePesan(p.title, p.price)}>
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


    </>
  );
};

export default PaketPPT;
