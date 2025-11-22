// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// 🔝 Komponen global
import Header from "./components/Header";
import Footer from "./components/Footer";

// 🏠 Halaman utama
import HomePage from "./components/HomePage";
import ProdukDesain from "./components/ProdukDesain";
import MengapaKami from "./components/MengapaKami";
import CaraPesan from "./components/CaraPesan";
import HubungiKami from "./components/HubungiKami";
import Kontak from "./components/Kontak";

// 💼 Halaman UMKM
import LayananUMKM from "./components/LayananUMKM";
import PaketPoster from "./components/PaketUMKM/PaketPoster";
import PaketLogoUMKM from "./components/PaketUMKM/PaketLogo";
import PaketSertifikat from "./components/PaketUMKM/PaketSertifikat";
import PaketBrosur from "./components/PaketUMKM/PaketBrosur";
import PaketFIG from "./components/PaketUMKM/PaketFIG";

// 🎓 Halaman Mahasiswa
import LayananMahasiswa from "./components/LayananMahasiswa";
import PaketBanner from "./components/PaketMahasiswa/PaketBanner";
import PaketPPT from "./components/PaketMahasiswa/PaketPPT";
import PaketCV from "./components/PaketMahasiswa/PaketCV";
import PaketPosterMahasiswa from "./components/PaketMahasiswa/PaketPoster";
import PaketLogo from "./components/PaketMahasiswa/PaketLogo";

// 🎨 Portofolio Lengkap
import Portofolio from "./components/Portofolio";
import AllPoster from "./components/Portofolio/AllPoster";
import AllLogoUMKM from "./components/Portofolio/AllLogoUMKM";
import AllSertifikat from "./components/Portofolio/AllSertifikat";
import AllBrosur from "./components/Portofolio/AllBrosur";
import AllBanner from "./components/Portofolio/AllBanner";
import AllLogoMahasiswa from "./components/Portofolio/AllLogoMahasiswa";
import AllCV from "./components/Portofolio/AllCV";

// 🔐 Login
import LoginPage from "./components/Auth/LoginPage";

// 🧾 Pesanan
import OrderForm from "./Orders/OrderForm";
import OrdersPage from "./components/Users/OrdersPage";

// 🛠️ Admin
import AdminDashboard from "./components/Admin/AdminDashboard";

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Header />}

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <ProdukDesain />
              <MengapaKami />
              <CaraPesan />
              <HubungiKami />
            </>
          }
        />

        {/* UMKM */}
        <Route path="/layanan-umkm" element={<LayananUMKM />} />
        <Route path="/layanan-umkm/poster" element={<PaketPoster />} />
        <Route path="/layanan-umkm/logo" element={<PaketLogoUMKM />} />
        <Route path="/layanan-umkm/sertifikat" element={<PaketSertifikat />} />
        <Route path="/layanan-umkm/brosur" element={<PaketBrosur />} />
        <Route path="/layanan-umkm/feed-ig" element={<PaketFIG />} />

        {/* MAHASISWA */}
        <Route path="/layanan-mahasiswa" element={<LayananMahasiswa />} />
        <Route path="/layanan-mahasiswa/banner" element={<PaketBanner />} />
        <Route path="/layanan-mahasiswa/ppt" element={<PaketPPT />} />
        <Route path="/layanan-mahasiswa/cv" element={<PaketCV />} />
        <Route path="/layanan-mahasiswa/poster" element={<PaketPosterMahasiswa />} />
        <Route path="/layanan-mahasiswa/logo" element={<PaketLogo />} />

        {/* PORTOFOLIO */}
        <Route path="/portofolio" element={<Portofolio />} />

        {/* UMKM */}
        <Route path="/portofolio/umkm/poster" element={<AllPoster />} />
        <Route path="/portofolio/umkm/brosur" element={<AllBrosur />} />
        <Route path="/portofolio/umkm/logo" element={<AllLogoUMKM />} />
        <Route path="/portofolio/umkm/sertifikat" element={<AllSertifikat />} />

        {/* MAHASISWA */}
        <Route path="/portofolio/mahasiswa/poster" element={<AllPoster />} />
        <Route path="/portofolio/mahasiswa/banner" element={<AllBanner />} />
        <Route path="/portofolio/mahasiswa/logo" element={<AllLogoMahasiswa />} />
        <Route path="/portofolio/mahasiswa/cv" element={<AllCV />} />

        {/* PESANAN */}
        <Route path="/order-form" element={<OrderForm />} />
        <Route path="/orders" element={<OrdersPage />} />

        {/* LOGIN */}
        <Route path="/login" element={<LoginPage />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/chat" element={<AdminDashboard />} />

        {/* KONTAK */}
        <Route path="/hubungi-kami" element={<Kontak />} />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
