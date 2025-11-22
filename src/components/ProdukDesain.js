import React from "react";
import { Link } from "react-router-dom"; // ✅ Tambahkan ini
import "../styles/ProdukDesain.css";
import umkmImg from "../assets/images/umkm.png";
import mhsImg from "../assets/images/mahasiswa.png";

const ProdukDesain = () => {
  return (
    <div className="produk-container">
      <h2 className="produk-title">Layanan Desain Kami</h2>
      <p className="produk-subtitle">
        Menyediakan layanan desain grafis berkualitas tinggi untuk mendukung
        pertumbuhan bisnis UMKM dan kebutuhan akademik mahasiswa
      </p>

      <div className="produk-layout">
        {/* Layanan UMKM → Gambar kiri, teks kanan */}
        <div className="produk-item">
          <div className="produk-image-wrap">
            <img src={umkmImg} alt="Layanan UMKM" className="produk-image" />
          </div>
          <div className="produk-card">
            <h3>Layanan UMKM</h3>
            <p>
              Memberikan solusi desain grafis kreatif yang memperkuat identitas bisnis
              dan meningkatkan daya tarik produk Anda di pasar
            </p>
            {/* ✅ Ganti <a> jadi <Link> ke /layanan-umkm */}
            <Link to="/layanan-umkm" className="produk-link">
              Lihat Selengkapnya →
            </Link>
          </div>
        </div>

        {/* Layanan Mahasiswa → Teks kiri, gambar kanan */}
        <div className="produk-item reverse">
          <div className="produk-card">
            <h3>Layanan Mahasiswa</h3>
            <p>
              Mendukung kebutuhan akademik dengan desain profesional untuk
              presentasi, proyek, dan karya kreatif mahasiswa
            </p>
            {/* ✅ sementara arahkan ke halaman yang sama atau nanti kita buat halaman khusus */}
            <Link to="/layanan-mahasiswa" className="produk-link">
              Lihat Selengkapnya →
            </Link>
          </div>
          <div className="produk-image-wrap">
            <img src={mhsImg} alt="Layanan Mahasiswa" className="produk-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdukDesain;
