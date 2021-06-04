import React, { useRef, useState } from "react";

export default function Footer() {
  const [error, setError] = useState(null);
  const [succes, setSucces] = useState(null);
  const [pending, setPending] = useState(false);
  const inputEmailRef = useRef();

  const submitLangganan = async (e) => {
    e.preventDefault();
    setPending(true);
    const subscibeToBackend = async () => {
      const respon = await fetch(
        "https://asia-southeast2-our-philosophy-314515.cloudfunctions.net/newsletter",
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
      setPending(false);
      inputEmailRef.current.value = "";
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(() => {
        console.log("dsd");
        setError(null);
      }, 3000);
      setPending(false);
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
            Dapatkan berita, artikel dan update terbaru seputar Go Green project
            dan daur ulang.
          </p>
          <form action="" onSubmit={submitLangganan} className="mt-2">
            <div className="flex items-center">
              <input
                type="email"
                ref={inputEmailRef}
                placeholder="Masukkan email"
                className="w-full px-2 py-4 mr-2  bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none"
                required
              />
              {!pending ? (
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-gray-200 px-5 py-2 rounded shadow "
                  style={{ marginLeft: "-8.8rem" }}
                >
                  Langganan
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-400 text-gray-200 px-5 py-2 rounded shadow "
                  disabled
                  style={{ marginLeft: "-8.8rem" }}
                >
                  Langganan
                </button>
              )}
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
        <p className="text-green-900 text-sm">All rights reserved - 2021</p>
        <p className="inline-flex text-green-800 px-2 ">
          by
          <a
            href="https://github.com/Dinel13/Go-green-projects/tree/main"
            rel="noreferrer"
            target="_blank"
            className="ml-1 text-green-900 font-medium"
          >
            Team Manut | B21-CAP0199
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
