import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [newDesignCount, setNewDesignCount] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(null);

  // 🔹 Pantau status login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // 🔹 Pantau pesanan dengan desain baru
  useEffect(() => {
    if (!user) {
      setNewDesignCount(0);
      return;
    }

    const q = query(
      collection(db, "orders"),
      where("userEmail", "==", user.email)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newDesigns = snapshot.docs
        .map((doc) => doc.data())
        .filter((order) => order.designLink && !order.viewedDesign);

      setNewDesignCount(newDesigns.length);
    });

    return () => unsubscribe();
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="navbar">
      {/* === LOGO === */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="DesainKUY Logo" />
        </Link>
        <h2>
          <span className="logo-text">Desain</span>
          <span className="logo-glow">KUY</span>
        </h2>
      </div>

      {/* === NAVIGATION === */}
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Beranda
          </Link>
        </li>

        {/* === DROPDOWN LAYANAN === */}
        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownVisible("layanan")}
          onMouseLeave={() => setIsDropdownVisible(null)}
        >
          <span className="dropdown-title">Layanan ▾</span>

          {isDropdownVisible === "layanan" && (
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>UMKM</h4>
                <Link to="/layanan-umkm/poster">Desain Poster</Link>
                <Link to="/layanan-umkm/brosur">Desain Brosur</Link>
                <Link to="/layanan-umkm/logo">Desain Logo</Link>
                <Link to="/layanan-umkm/feed-ig">Desain Feed IG</Link>
                <Link to="/layanan-umkm/sertifikat">Desain Sertifikat</Link>
              </div>

              <div className="dropdown-column">
                <h4>Mahasiswa</h4>
                <Link to="/layanan-mahasiswa/ppt">Desain PPT</Link>
                <Link to="/layanan-mahasiswa/banner">Desain Banner</Link>
                <Link to="/layanan-mahasiswa/cv">Desain CV</Link>
                <Link to="/layanan-mahasiswa/poster">Desain Poster</Link>
                <Link to="/layanan-mahasiswa/logo">Desain Logo</Link>
              </div>
            </div>
          )}
        </li>

        {/* === DROPDOWN PORTOFOLIO === */}
        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownVisible("portofolio")}
          onMouseLeave={() => setIsDropdownVisible(null)}
        >
          <span className="dropdown-title">Portofolio ▾</span>

          {isDropdownVisible === "portofolio" && (
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>UMKM</h4>
                <Link to="/portofolio/umkm/poster">Poster UMKM</Link>
                <Link to="/portofolio/umkm/brosur">Brosur UMKM</Link>
                <Link to="/portofolio/umkm/logo">Logo UMKM</Link>
                <Link to="/portofolio/umkm/sertifikat">Sertifikat UMKM</Link>
              </div>

              <div className="dropdown-column">
                <h4>Mahasiswa</h4>
                <Link to="/portofolio/mahasiswa/poster">Poster</Link>
                <Link to="/portofolio/mahasiswa/banner">Banner</Link>
                <Link to="/portofolio/mahasiswa/logo">Logo</Link>

                {/* 🔥 Link CV diarahkan FIX ke AllCV */}
                <Link to="/portofolio/mahasiswa/cv">Desain CV</Link>
              </div>
            </div>
          )}
        </li>

        <li>
          <Link
            to="/hubungi-kami"
            className={location.pathname === "/hubungi-kami" ? "active" : ""}
          >
            Kontak
          </Link>
        </li>

        {user && (
          <li className="nav-order">
            <Link
              to="/orders"
              className={location.pathname === "/orders" ? "active" : ""}
            >
              Order
              {newDesignCount > 0 && (
                <span className="order-badge">{newDesignCount}</span>
              )}
            </Link>
          </li>
        )}
      </ul>

      {/* === BAGIAN KANAN === */}
      <div className="navbar-right">
        {user ? (
          <>
            <div className="user-profile">
              <img
                src={
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="User"
                className="user-avatar"
              />
              <span className="user-name">
                {user.displayName || user.email.split("@")[0]}
              </span>
            </div>

            <button onClick={handleLogout} className="btn-login logout-btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn-login">
            Login
          </Link>
        )}

        <a
          href="https://wa.me/6289504600207"
          target="_blank"
          rel="noreferrer"
          className="whatsapp"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WA"
          />
          <span>Whatsapp</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
