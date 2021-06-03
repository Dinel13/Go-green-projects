import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazy-load";

import "./loading.css";

export default function AllCategory({ onLihatRekomendasi }) {
  const [status, setStatus] = useState({});
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setData(null);
      setStatus((prevState) => ({
        ...prevState,
        pending: true,
      }));
      try {
        const respon = await fetch(
          "https://asia-southeast2-our-philosophy-314515.cloudfunctions.net/recomendation",
          {
            method: "GET",
          }
        );
        const data = await respon.json();

        if (!respon.ok) {
          setStatus((prevState) => ({
            ...prevState,
            error: "Tidak bisa mendapatkan data",
          }));
        }
        setData(data);
        setStatus((prevState) => ({
          ...prevState,
          pending: false,
        }));
      } catch (error) {
        setStatus((prevState) => ({
          ...prevState,
          pending: false,
          error: error.message || "Tidak bisa mendapatkan data",
        }));
        setTimeout(
          () =>
            setStatus((prevState) => ({
              ...prevState,
              error: null,
            })),
          3000
        );
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container px-5 py-6 mx-auto">
      {status.error && (
        <p className="text-red-800 italic p-2 mt-2 rounded-md border-red-600 bg-red-300">
          {status.error}
        </p>
      )}
      {status.pending && (
        <div className="w-full z-50 flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-300 h-12 w-12 mb-4"></div>
          <h2 className="text-center text-gray-600 text-xl font-semibold">
            Loading...
          </h2>
          <p className="w-1/3 text-center text-gray-500">
            Butuh sedikit waktu, harap bersabar ini cobaan.
          </p>
        </div>
      )}
      {data && (
        <>
          <h1 className="text-center text-gray-700 font-medium text-2xl pb-8">
            Semua kategori sampah
          </h1>
          <div className="flex flex-wrap -m-4">
            {data &&
              data.map((item, index) => (
                <div className="lg:w-1/3 md:w-1/2 p-4 w-full" key={index}>
                  <div className="flex items-center h-32 border-2 p-3  overflow-visible  border-gray-200 border-opacity-80 rounded-lg transition duration-500 ease-in-out hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-110">
                    <LazyLoad offsetVertical={20}>
                      <img
                        alt="ecommerce"
                        className="object-cover object-center  block max-h-16 m-auto"
                        src={item.icon}
                      />
                    </LazyLoad>
                    <div className="ml-1.5 my-1">
                      <h2 className="text-gray-900 title-font text-md font-medium uppercase">
                        {item.name}
                      </h2>
                      <p className="mt-0">
                        Dapat direcycle menjadi{" "}
                        <span className="font-semibold text-gray-700">
                          {item.recomendation.length}
                        </span>{" "}
                        benda kreatif
                      </p>
                      <button
                        onClick={() => onLihatRekomendasi(item.name)}
                        className="text-indigo-500 inline-flex items-center "
                      >
                        Lihat Rekomendasi
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      <hr className="mt-8" />
    </div>
  );
}
