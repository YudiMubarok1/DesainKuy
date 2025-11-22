import React from "react";
import "../styles/CaraPesan.css";
import { FaLightbulb, FaLaptop, FaPencilRuler, FaFlag } from "react-icons/fa";

const CaraPesan = () => {
  return (
    <section className="cara-pesan">
      <h2 className="judul">Cara Memesan Jasa Desain Kami</h2>
      <p className="subjudul">
        Mulai dari konsultasi hingga revisi, setiap langkah kami rancang agar desainmu selesai dengan hasil terbaik.
      </p>

      <div className="roadmap">
        {/* SVG Jalan Zig-Zag */}
        <svg className="road-svg" viewBox="0 0 950 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <path d="M 0 200 L 300 60 L 600 150 L 900 60" 
        stroke="#2c2c2c" strokeWidth="40" fill="none" strokeLinecap="round"/>
  <path d="M 0 200 L 300 60 L 600 150 L 900 60" 
        stroke="white" strokeWidth="6" strokeDasharray="20,20" fill="none"/>
</svg>


        {/* Step 1 */}
        <div className="step step1">
          <div className="icon-circle blue"><FaLightbulb /></div>
          <h3>1. Konsultasi Ide</h3>
          <p>Diskusikan kebutuhan desainmu via WhatsApp, Email, atau chat.</p>
        </div>

        {/* Step 2 */}
        <div className="step step2">
          <div className="icon-circle green"><FaLaptop /></div>
          <h3>2. Pembayaran</h3>
          <p>Setujui detail, lalu lakukan pembayaran (bisa DP atau lunas).</p>
        </div>

        {/* Step 3 */}
        <div className="step step3">
          <div className="icon-circle orange"><FaPencilRuler /></div>
          <h3>3. Proses Desain</h3>
          <p>Tim kami kerjakan desain sesuai brief dengan penuh ketelitian.</p>
        </div>

        {/* Step 4 */}
        <div className="step step4">
          <div className="icon-circle red"><FaFlag /></div>
          <h3>4. Revisi & Finalisasi</h3>
          <p>Ajukan revisi bila perlu, lalu terima desain final siap pakai.</p>
        </div>
      </div>
    </section>
  );
};

export default CaraPesan;
