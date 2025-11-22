import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // menggunakan CSS yg sama

const NavPorto = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Portofolio</h2>
      </div>

      <ul className="navbar-links">

        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <span className="dropdown-title">Kategori Portofolio ▾</span>

          {isDropdownVisible && (
            <div className="dropdown-content">
              
              {/* UMKM */}
              <div className="dropdown-column">
                <h4>UMKM</h4>
                <Link to="/porto-umkm/logo">Logo UMKM</Link>
                <Link to="/porto-umkm/poster">Poster UMKM</Link>
                <Link to="/porto-umkm/sertifikat">Sertifikat UMKM</Link>
              </div>

              {/* MAHASISWA */}
              <div className="dropdown-column">
                <h4>Mahasiswa</h4>
                <Link to="/porto-mhs/banner">Banner Mahasiswa</Link>
                <Link to="/porto-mhs/cv">CV Mahasiswa</Link>
                <Link to="/porto-mhs/poster">Poster Mahasiswa</Link>
                <Link to="/porto-mhs/logo">Logo Mahasiswa</Link>
              </div>

            </div>
          )}
        </li>

      </ul>
    </nav>
  );
};

export default NavPorto;
