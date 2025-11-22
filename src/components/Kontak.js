import React from "react";
import "../styles/Kontak.css";

function Kontak() {
  return (
    <div className="kontak-page">
      {/* ===== HERO SECTION ===== */}
      <section className="kontak-hero">
        <h1>Hubungi Kami</h1>
        <p>
          Punya pertanyaan atau ingin bekerja sama dengan <span>DesainKUY</span>?  
          Jangan ragu untuk menghubungi kami di bawah ini.
        </p>
      </section>

      {/* ===== KONTAK CONTAINER ===== */}
      <section className="kontak-container">
        {/* === FORM KONTAK === */}
        <div className="kontak-form">
          <h2>Kirim Pesan</h2>
          <form>
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="email" placeholder="Alamat Email" required />
            <textarea placeholder="Tulis pesan kamu di sini..." rows="5" required></textarea>
            <button type="submit" className="btn-primary">Kirim Pesan</button>
          </form>
        </div>

        {/* === INFO KONTAK === */}
        <div className="kontak-info">
          <h2>Informasi Kontak</h2>
          <p><strong>Email:</strong> desainkuy.team@gmail.com</p>
          <p><strong>WhatsApp:</strong> +62 895-0460-0207</p>
          <p><strong>Jam Operasional:</strong><br />Senin - Sabtu, 09.00 - 18.00 WIB</p>

          <div className="kontak-map">
            <iframe
              title="Lokasi DesainKUY"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.884514281474!2d106.823!3d-6.283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f49d2b5ffb%3A0x123456789abcdef!2sJakarta!5e0!3m2!1sid!2sid!4v00000000000"
              width="100%"
              height="220"
              style={{ border: "0", borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
 
      </footer>
    </div>
  );
}

export default Kontak;
