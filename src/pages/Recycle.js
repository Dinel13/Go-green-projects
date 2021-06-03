import React, { useState } from "react";
import { Link } from "react-router-dom";
import OneCategory from "../components/rekomendation/OneCategory";
import AllCategory from "../components/rekomendation/AllCategory";

export default function Recycle() {
  const [img, setImg] = useState(null);
  const [showAllCategory, setShowAllCategory] = useState(false);
  const [rekomendasi, setRekomendasi] = useState(null);
  const [status, setStatus] = useState({
    success: "",
    error: "",
    pending: false,
    feedback: false,
  });

  const submitImage = async (e) => {
    e.preventDefault();
    setRekomendasi(null); //to hidden previus rekom
    setShowAllCategory(false); //to hidden all category
    setStatus((prevState) => ({
      ...prevState,
      pending: true,
      success: "",
      feedback: true,
    }));
    const formdata = new FormData();
    formdata.append("img", img);
    try {
      const respon = await fetch(process.env.REACT_APP_ML_URL, {
        method: "POST",
        body: formdata,
      });
      const data = await respon.json();
      if (!respon.ok) {
        throw new Error(
          data.message || "Tidak bisa mengirim gambar, coba lagi nanti"
        );
      }
      setStatus((prevState) => ({
        ...prevState,
        success: data.result,
        pending: false,
      }));
    } catch (error) {
      console.log(error);
      setStatus((prevState) => ({
        ...prevState,
        error: error,
        pending: false,
      }));
      setTimeout(() => setStatus((prevState) => ({ ...prevState, error: "" })));
    }
  };

  const setRekomendasiHandler = (recom) => {
    setRekomendasi(recom);
    setShowAllCategory(false);
  };

  return (
    <section className="text-gray-600 body-font" style={{ minHeight: "75vh" }}>
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
          <h1 className="text-3xl font-medium title-font mb-4 text-gray-700">
            Klasifikasi Sampah
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Sebelum melakukan Recycle, kenali dulu jenis sampah kamu. Kami
            menyediakan alat untuk mendeteksi 6 jenis sampah yaitu
            <span className="font-medium text-gray-800">
              {" "}
              cardboard, glass, metal, paper, plastic dan trash
            </span>
            . Setelah jenis sampah diketahui kamu akan mendapatkan rekomendasi
            benda apa saja yang dapat kamu buat dari sampah tersebut. Upload
            file kamu untuk mencoba. atau tekan{" "}
            <span className="font-medium text-gray-800">lihat semua</span> untuk
            melihat semua category dan rekomendasinya
          </p>
        </div>
        {status.pending ? (
          <button
            type="button"
            disabled
            className="w-full md:w-4/6 mx-auto lg:w-3/6 flex justify-center items-center px-4 py-3 text-white bg-green-400 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="animate-spin h-5 w-5 mr-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        ) : (
          <>
            <form
              onSubmit={submitImage}
              id="formku"
              className="flex items-start justify-center flex-col sm:flex-row "
              encType="multipart/form-data"
            >
              <label className="inline-flex items-center bg-green-300 text-gray-700 w-full sm:w-1/2 md:w-1/2 py-2 px-3 mr-3 focus:outline-none hover:bg-green-600 rounded hover:text-gray-100">
                <input
                  onChange={(e) => setImg(e.target.files[0])}
                  type="file"
                  name="imge"
                  key="img"
                  accept="image/*"
                  alt="your image"
                  required
                />
              </label>
              <div className="flex h-12 my-2 sm:my-0 ">
                <button
                  type="submit"
                  className="px-3 py-2.5 mr-2 items-center bg-green-600 hover:bg-green-800  text-gray-50 rounded"
                >
                  Kirim gambar
                </button>
                <button
                  type="reset"
                  onClick={() => {
                    setShowAllCategory(true);
                    setRekomendasi(null);
                    setStatus({});
                  }}
                  className="px-3 py-3 items-center border-green-600 border-2 hover:bg-green-600 hover:text-gray-100  text-gray-700 rounded"
                >
                  Lihat semua
                </button>
              </div>
            </form>
          </>
        )}
        {status.error && (
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
                Uploadd gagal
              </div>
              <div className="alert-description text-sm text-red-600">
                {status.error.message || "Terjadi masalah, coba lagi nanti"}
              </div>
            </div>
          </div>
        )}
        {status.success && (
          <div className="alert flex flex-row my-2 items-center bg-green-200  px-5 py-3 rounded border-b-2 border-green-300 justify-between">
            <div className="flex items-center">
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
                  Klasifikasi sukses
                </div>
                <div className="alert-description text-green-600">
                  Hasilnya adalah{" "}
                  <span className="text-2xl text-gray-700 font-bold">
                    {status.success || "ggg"}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setRekomendasiHandler(status.success)}
              className="py-3 px-3 bg-green-700 rounded-md hover:bg-green-800 text-gray-50"
            >
              Lihat rekomendasinya
            </button>
          </div>
        )}
        {status.feedback && !status.pending && (
          <Link to="/feedback" className="text-blue-500">
            kirim feedback
          </Link>
        )}
        <hr className="my-8" />
        {showAllCategory && <AllCategory onLihatRekomendasi={setRekomendasi} />}
        {rekomendasi && <OneCategory category={rekomendasi} />}
      </div>
    </section>
  );
}
