import React from "react";
import "../styles/HubungiKami.css";
import { FaWhatsapp, FaChevronLeft, FaChevronRight, FaStar, FaUserCircle } from "react-icons/fa";

export default function HubungiKami() {
  return (
    <section className="hubungi-page">

      {/* Bagian Testimoni */}
      <div className="testimoni-section">
        <h2 className="testimoni-title">Testimoni</h2>

        <div className="testimoni-slider">
          <button className="slider-btn left"><FaChevronLeft /></button>

          <div className="testimoni-card">
            <div className="testimoni-user">
              <FaUserCircle className="user-icon blue" />
              <div>
                <h4>Akmal</h4>
                <span>Mahasiswa</span>
              </div>
              <span className="tgl">22-08-2025</span>
            </div>
            <p>
              Pelayanan ramah, respons cepat, dan hasil desain sangat memuaskan.
              Pasti order lagi kalau butuh desain.
            </p>
            <div className="stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
          </div>

          <div className="testimoni-card">
            <div className="testimoni-user">
              <FaUserCircle className="user-icon red" />
              <div>
                <h4>Randi</h4>
                <span>Mahasiswa</span>
              </div>
              <span className="tgl">01-09-2025</span>
            </div>
            <p>
              Desainnya bagus dan sesuai permintaan, hanya saja revisinya agak lama.
              Tapi overall puas dengan hasilnya.
            </p>
            <div className="stars">
              {[...Array(4)].map((_, i) => <FaStar key={i} />)}
            </div>
          </div>

          <div className="testimoni-card">
            <div className="testimoni-user">
              <FaUserCircle className="user-icon orange" />
              <div>
                <h4>Galang</h4>
                <span>Mahasiswa</span>
              </div>
              <span className="tgl">01-09-2025</span>
            </div>
            <p>
              Awalnya bingung dengan tugas desain mendesak, tapi DesainKuy cepat, rapi, dan terjangkau. Sangatdirekomendasikan!
            </p>
            <div className="stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
          </div>

          <button className="slider-btn right"><FaChevronRight /></button>
        </div>
      </div>

      {/* Bagian Hubungi Kami */}
      <div className="hubungi-section">
        <h2 className="hubungi-title">
          Nikmati Layanan Kreatif yang Banyak Dipilih, Langsung di Sini!
        </h2>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hubungi-btn"
        >
          <FaWhatsapp className="wa-icon" />
          Hubungi Kami, DesainKuy
        </a>
      </div>
    </section>
  );
}
