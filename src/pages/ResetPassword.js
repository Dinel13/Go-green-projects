import { useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
  const [input, setInput] = useState({ pending: false, error: "", succes: "" });
  const password = useRef();
  const passwordConf = useRef();
  const params = useParams();
  const token = params.token;

  const passwordResetSubmit = async (event) => {
    event.preventDefault();
    setInput((prevState) => ({ ...prevState, pending: true }));

    password.current.value !== passwordConf.current.value &&
      setInput((prevState) => ({
        ...prevState,
        pending: true,
        error: { message: "konfirmasi password harus sesuai" },
      }));

    try {
      const respon = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/reset/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            newPassword: password.current.value,
            newPasswordConf: passwordConf.current.value,
          }),
        }
      );
      const data = await respon.json();
      if (!respon.ok) {
        throw new Error(data.message || "Tidak bisa mereset");
      }
      setInput((prevState) => ({ ...prevState, pending: true, succes: data }));
      setTimeout(
        () => setInput((prevState) => ({ ...prevState, succes: "" })),
        4000
      );
    } catch (error) {
      setInput((prevState) => ({ ...prevState, pending: false, error: error }));
      setTimeout(
        () => setInput((prevState) => ({ ...prevState, error: "" })),
        4000
      );
    }
  };

  return (
    <div style={{ minHeight: "70vh" }}>
      <div className="w-full max-w-md my-8 p-10 m-auto bg-white border-gray-300 border rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Reset Password
        </h1>
        <form className="mt-6" onSubmit={passwordResetSubmit}>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password Baru
            </label>
            <input
              ref={password}
              type="password"
              required
              className="required block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="passwordConf"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Konfirmasi Password
            </label>
            <input
              ref={passwordConf}
              type="password"
              required
              className="required block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          {input.error && (
            <p className="text-red-800 italic p-2 mt-2 rounded-md border-red-600 bg-red-300">
              {input.error.message || input.error.TypeError}
            </p>
          )}
          {input.succes && (
            <p className="text-gray-800 italic p-2 mt-2 rounded-md border-green-600 bg-green-300">
              {input.succes.message || "link reset telah dikirm ke email anda"}
            </p>
          )}
          <div className="mt-4">
            {input.pending ? (
              <button
                type="submit"
                disabled
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md "
              >
                Reset
              </button>
            ) : (
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-800"
              >
                Reset
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
