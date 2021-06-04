import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../store/authAction";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useRef();
  const password = useRef();
  const [pending, setPending] = useState(null);

  const successLogin = () => {
    setPending(false);
    email.current.value = "";
    password.current.value = "";
    setTimeout(() => history.push("/"), 2000);
  };

  const failLogin = () => {
    setPending(false);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    setPending(true);
    dispatch(
      login(
        email.current.value,
        password.current.value,
        successLogin,
        failLogin
      )
    );
  };

  return (
    <div className="w-full max-w-md my-8 p-10 m-auto bg-white border-gray-300 border rounded-md shadow-md dark:bg-gray-800">
      <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
        Login to Go Green
      </h1>
      <form className="mt-6" onSubmit={loginHandler}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            ref={email}
            type="email"
            required
            className="required block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
            >
              Lupa Password?
            </Link>
          </div>

          <input
            ref={password}
            type="password"
            required
            className="required block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div className="mt-6">
          {pending ? (
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
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-800">
              Masuk
            </button>
          )}
        </div>
      </form>

      {/* <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <a
          href="#"
          className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >
          or login with Social Media
        </a>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
      </div> 

      <div className="flex items-center mt-6 space-x-3">
        <button
          type="button"
          className="flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
        >
          <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
          </svg>

          <span className="mx-2">Sign in with Google</span>
        </button>

        <a
          href="#"
          className="p-2 text-sm font-medium text-gray-500 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
          </svg>
        </a>
  </div> */}

      <p className="mt-8 text-sm font-light text-center text-gray-700">
        Belum Punya Akun?{" "}
        <Link
          to="/signup"
          className="font-medium text-gray-800 dark:text-gray-200 hover:underline"
        >
          DAFTAR
        </Link>
      </p>
    </div>
  );
}
