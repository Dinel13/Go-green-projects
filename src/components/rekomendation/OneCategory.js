import React, { useState, useEffect } from "react";

export default function OneCategory({ category }) {
  const [status, setStatus] = useState({});
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respon = await fetch(
          "https://asia-southeast2-our-philosophy-314515.cloudfunctions.net/recomendation",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ category }),
          }
        );
        const data = await respon.json();

        if (!respon.ok) {
          setStatus((prevState) => ({
            ...prevState,
            error: "Tidak bisa mendapatkan data",
          }));
        }
        setData(data[0]);
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
      {data && (
        <div>
          <p>{data.name}</p>
          {data.recomendation.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <img src={item.image} alt="" />{" "}
              <a href={item.desc} target="_blank" rel="noreferrer">
                selengkapnya
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
