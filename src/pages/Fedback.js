import { useRef, useState } from "react";

export default function Feedback() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);
  const email = useRef();
  const score = useRef();
  const feedback = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    setPending(true);
    try {
      const respon = await fetch(
        "http://asia-southeast2-our-philosophy-314515.cloudfunctions.net/feedback",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email.current.value,
            score: score.current.value,
            feedback: feedback.current.value,
          }),
        }
      );
      const data = await respon.json();
      console.log(data);
      if (!respon.ok) {
        throw new Error(data.message || "Tidak bisa mengirim feedback");
      }
      setPending(false);
      email.current.value = ""
      score.current.value = ""
      feedback.current.value = ""
      setSucces(data)
      setTimeout(() => setSucces(false), 4000);
    } catch (error) {
      setError(error);
      console.log(error);
      setPending(false);
      setTimeout(() => setError(false), 4000);
    }
  };

  return (
    <div className="w-full max-w-md my-8 p-10 m-auto bg-white border-gray-300 border rounded-md shadow-md dark:bg-gray-800">
      <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
        Send Your Feedback
      </h1>
      <p className="mt-3 text-sm font-light text-center text-gray-700">
        Kirim feedbak anda setelah mengunakan sistem ini. Feedback anda adalah
        harapan kami untuk berkembang
      </p>
      {error && (
        <p className="mt-2 p-2 border bg-red-200 border-red-600 rounded text-sm text-red-800 italic">
          {error.message || error.TypeError || "terjadi masalah"}
        </p>
      )}
      {succes && (
        <p className="mt-2 p-2 border bg-green-200 border-green-600 rounded text-sm text-green-800 italic">
          {succes.message}
        </p>
      )}

      <form className="mt-6" onSubmit={submitHandler}>
        <div className="flex items-center">
          <label
            htmlFor="username"
            className="inline text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            ref={email}
            required
            type="email"
            className="required inline w-full px-4 py-2 ml-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <label
              htmlFor="name"
              className="inline text-sm text-gray-800 dark:text-gray-200"
            >
              Score
            </label>
            <input
              ref={score}
              type="number"
              className="required inline w-full px-4 py-2 ml-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Feedback
            </label>
          </div>
          <textarea
            ref={feedback}
            type="password"
            rows="4"
            placeholder="Masukkan feedback kamu disini"
            className="required block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mt-6">
          {pending ? (
            <button
              type="button"
              disabled
              className="w-full flex justify-center items-center px-4 py-3 text-white bg-green-400 rounded-md"
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
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-800">
              Kirim
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
