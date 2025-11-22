import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Tentang Kami */}
        <div className="footer-section about">
          <h3 className="footer-title">Tentang Kami</h3>
          <p className="footer-text">
            DesainKUY adalah jasa desain grafis kreatif yang fokus membantu mahasiswa 
            dan pelaku UMKM dalam membuat desain menarik, profesional, dan sesuai kebutuhan. 
            Kami percaya desain yang kuat bisa meningkatkan nilai dan daya tarik bisnismu.
          </p>
          <p className="footer-address">
            <span>Alamat:</span> Jl. Kreatif No. 12, Padang, Indonesia
          </p>
          <p className="footer-copy">Copyright ©2025 DesainKuy</p>
        </div>

        {/* Kontak */}
        <div className="footer-section contact">
          <h3 className="footer-title">Kontak</h3>
          <ul className="footer-list">
            <li>📧 Email: <a href="mailto:desainkuy@gmail.com">desainkuy@gmail.com</a></li>
            <li>📱 WhatsApp: 089504600207</li>
            <li>📘 Facebook: DesainKuy</li>
            <li>📸 Instagram: DesainKuy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
