import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/PaketUMKM/PaketFIG.css";

const PaketFIG = () => {
  const navigate = useNavigate();

  const handlePesan = (paketName, price) => {
    navigate("/order-form", {
      state: {
        packageName: paketName,
        price,
        category: "UMKM",
        type: "Feed Instagram Design",
      },
    });
  };

  const paketList = [
    {
      title: "Feed IG Basic",
      desc: "Desain 3 feed estetik untuk mempercantik tampilan profil bisnismu.",
      jumlah: "3 Feed",
      revisi: "2x Revisi",
      waktu: "1 Hari Kerja",
      price: "Rp 60.000",
      fitur: [
        "Warna & font sesuai brand",
        "Kualitas HD (1080x1080)",
        "File JPG & PNG",
      ],
    },
    {
      title: "Feed IG Standar",
      desc: "Desain 6 feed dengan pola layout dan gaya profesional.",
      jumlah: "6 Feed",
      revisi: "3x Revisi",
      waktu: "2 Hari Kerja",
      price: "Rp 100.000",
      fitur: [
        "Tema konsisten antar feed",
        "Desain grid layout rapi",
        "File Siap Upload",
      ],
    },
    {
      title: "Feed IG Premium",
      desc: "Desain 9 feed (1 grid penuh) dengan gaya branding profesional dan warna harmonis.",
      jumlah: "9 Feed",
      revisi: "Unlimited Revisi (minor)",
      waktu: "3 Hari Kerja",
      price: "Rp 180.000",
      fitur: [
        "Desain storytelling grid",
        "Konsultasi warna & font brand",
        "File Lengkap (PNG, JPG, PSD)",
        "Estetika premium dan modern",
      ],
    },
  ];

  return (
    <>
      <section className="fig-section">
        <h2 className="fig-title">📱 Paket Desain Feed Instagram UMKM</h2>
        <p className="fig-subtitle">
          Percantik tampilan akun bisnismu dengan desain feed yang menarik, rapi, dan profesional.
        </p>

        <div className="fig-cards">
          {paketList.map((p, i) => (
            <div key={i} className={`fig-card ${i === 2 ? "highlight" : ""}`}>
              <div className="fig-header">{p.title}</div>
              <div className="fig-body">
                <p className="fig-desc">{p.desc}</p>
                <p className="fig-jumlah">📷 {p.jumlah}</p>

                <ul className="fig-fitur">
                  {p.fitur.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}
                </ul>

                <div className="fig-info">
                  <span>{p.revisi}</span> | <span>{p.waktu}</span>
                </div>

                <p className="fig-price">{p.price}</p>
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

export default PaketFIG;
