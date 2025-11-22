import React from "react";
import "../styles/MengapaKami.css";

const data = [
  {
    number: "1",
    title: "Kreatif",
    desc: "Kami menghadirkan desain kreatif dan profesional yang mampu memperkuat identitas merek Anda.",
  },
  {
    number: "2",
    title: "Harga Terjangkau",
    desc: "Kami menghadirkan desain kreatif dan profesional yang mampu memperkuat identitas merek Anda.",
  },
  {
    number: "3",
    title: "Cepat & Tepat Waktu",
    desc: "Proses pengerjaan dilakukan dengan efisiensi tinggi tanpa mengorbankan kualitas.",
  },
];

const MengapaKami = () => {
  return (
    <section className="mengapa-container">
      <h2 className="mengapa-title">Mengapa Kami ?</h2>

      <div className="mengapa-wrapper">
        {data.map((item, index) => (
          <div key={index} className="mengapa-card">
            <div className="mengapa-number">{item.number}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MengapaKami;
