import React, { useState, useEffect, useRef } from "react";

import "./loading.css";

export default function OneCategory({ category }) {
  const rekomendasiRef = useRef();
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
    setTimeout(
      () =>
        rekomendasiRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
      1000
    );
  }, [category]);

  return (
    <div className="container px-5 py-6 mx-auto" ref={rekomendasiRef}>
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
            Rekomendasi recycle untuk kategori {data.name}
          </h1>
          <div className="flex flex-wrap -m-4">
            {data &&
              data.recomendation.map((item) => (
                <div className="p-3.5 sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-500 ease-in-out hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-110">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {data.name}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                        {item.name}
                      </h1>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href={item.desc}
                          target="_blank"
                          rel="noreferrer"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Selengkapnya
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
