import React, { useRef, useState } from "react";

export default function Footer() {
  const [error, setError] = useState(null);
  const [succes, setSucces] = useState(null);
  const inputEmailRef = useRef();

  const submitLangganan = async (e) => {
    e.preventDefault();
    const subscibeToBackend = async () => {
      const respon = await fetch(
        "http://asia-southeast2-our-philosophy-314515.cloudfunctions.net/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: inputEmailRef.current.value,
          }),
        }
      );
      const data = await respon.json();
      if (!respon.ok) {
        throw new Error(data.message || "Tidak bisa berlangganan");
      }
      return data;
    };

    try {
      const data = await subscibeToBackend();
      console.log(data);
      setSucces(data);
      setTimeout(() => {
        console.log("dsdsad");
        setSucces(null);
      }, 3000);
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(() => {
        console.log("dsd");
        setError(null);
      }, 3000);
    }
  };

  return (
    <footer className="bg-green-400 w-full py-6 px-4">
      <div className="px-4 pt-3 pb-4 border-b -mx-4 border-gray-400">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl text-left inline-block font-semibold text-gray-800">
            Join Our Newsletter
          </h2>
          <p className="text-gray-700 text-sm pl-px">
            Dapatkan berita, article dan update terbaru seputar Go Green project
            dan daur ulang.
          </p>
          <form action="" onSubmit={submitLangganan} className="mt-2">
            <div className="flex items-center">
              <input
                type="email"
                ref={inputEmailRef}
                className="w-full px-2 py-4 mr-2  bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-gray-200 px-5 py-2 rounded shadow "
                style={{ marginLeft: "-8.8rem" }}
              >
                Langganan
              </button>
            </div>
          </form>
          {error && (
            <div className="alert flex flex-row my-2 items-center bg-red-200 px-5 py-3 rounded border-b-2 border-red-300">
              <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                <span className="text-red-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="alert-content ml-4">
                <div className="alert-title font-semibold text-lg text-red-800">
                  Berlanggan gagal
                </div>
                <div className="alert-description text-sm text-red-600">
                  {error.message || "Terjadi masalah, coba lagi nanti"}
                </div>
              </div>
            </div>
          )}
          {succes && (
            <div className="alert flex flex-row my-2 items-center bg-green-200  px-5 py-3 rounded border-b-2 border-green-300">
              <div className="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                <span className="text-green-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="alert-content ml-4">
                <div className="alert-title font-semibold text-lg text-green-800">
                  Berlangganan sukses
                </div>
                <div className="alert-description text-sm text-green-600">
                  {succes.message || "Terima kasih sudah berlanganan"}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between my-4">
        <p className="text-green-900">All rights reserved - 2021</p>
        <p className="inline-flex text-green-800 px-2 pt-6">
          by
          <a
            href="https://github.com/Dinel13/Go-green-projects/tree/main"
            rel="noreferrer"
            target="_blank"
            className="ml-1 text-green-900 font-bold"
          >
            Team Manut | B21-CAP0199
          </a>
          .
        </p>
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/salahuddin-hafid/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              className="h-6 w-6 fill-current text-green-800 mr-6"
              viewBox="0 0 512 512"
            >
              <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/SOlah03"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              className="h-6 w-6 fill-current text-green-800 mr-6"
              viewBox="0 0 512 512"
            >
              <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
