import React, { useState, useEffect } from "react";

import { waste } from "./data";

export default function Rekomendation({ category }) {
  const [status, setStatus] = useState({});
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respon = await fetch(
          "https://asia-southeast2-our-philosophy-314515.cloudfunctions.net/recomendation",
          { method: "GET" }
        );
        const data = await respon.json();

        if (!respon.ok) {
          setStatus((prevState) => ({
            ...prevState,
            error: data.message || "Tidak bisa mendapatkan data",
          }));
          console.log(data.message || "Tidak bisa mendapatkan data");
        }
        console.log(data);
        setData(data);
      } catch (error) {
        setStatus((prevState) => ({
          ...prevState,
          error: data.message || "Tidak bisa mendapatkan data",
        }));
        console.log(data.message || "Tidak bisa mendapatkan data");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data[category] &&
        data[category].recomendation.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <img src={item.image} alt="" />
            <a href={item.desc}>lengkap</a>
          </div>
        ))}
    </div>
  );
}
