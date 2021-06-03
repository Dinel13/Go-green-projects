import React, { useState, useEffect } from "react";

export default function AllCategory() {
  const [status, setStatus] = useState({});
  const [dataRecom, setDataRecom] = useState(null);
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
            error: "Tidak bisa mendapatkan data",
          }));
          console.log(data.message || "Tidak bisa mendapatkan data");
        }
        setDataRecom(data);
        console.log(dataRecom);
      } catch (error) {
        setStatus((prevState) => ({
          ...prevState,
          error: error.message || "Tidak bisa mendapatkan data",
        }));
        console.log(error.message || "Tidak bisa mendapatkan data");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {dataRecom &&
        dataRecom.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <img src={item.icon} alt="" />
          </div>
        ))}
    </div>
  );
}
