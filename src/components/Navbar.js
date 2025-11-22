import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; // ganti sesuai lokasi logomu

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="DesainKUY Logo" />
        <h2>DesainKUY</h2>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Beranda</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <span className="dropdown-title">Layanan ▾</span>

          {isDropdownVisible && (
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>UMKM</h4>
                <Link to="/layanan-umkm/poster">Desain Poster</Link>
                <Link to="/layanan-umkm/brosur">Desain Brosur</Link>
                <Link to="/layanan-umkm/logo">Desain Logo</Link>
                <Link to="/layanan-umkm/feed-ig">Desain Feed IG</Link>
              </div>
              <div className="dropdown-column">
                <h4>Mahasiswa</h4>
                <Link to="/layanan-mahasiswa/ppt">Desain PPT</Link>
                <Link to="/layanan-mahasiswa/banner">Desain Banner</Link>
                <Link to="/layanan-mahasiswa/cv">Desain CV</Link>
                
              </div>
            </div>
          )}
        </li>

        <li><Link to="/portfolio">Portofolio</Link></li>
        <li><Link to="/kontak">Kontak</Link></li>
      </ul>

      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
      >
        Whatsapp
      </a>
    </nav>
  );
};

export default Navbar;
