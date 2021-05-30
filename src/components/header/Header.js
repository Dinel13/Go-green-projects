import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../assets/logo.jpg";
import { logout } from "../../store/authSlice";

export default function Header() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-6 bg-green-500">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <img className="rounded-full w-10 mr-2" src={logo} alt="logo" />
        <Link to="/" className="font-semibold text-xl tracking-tight">
          Go Green
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full flex-grow lg:items-center lg:w-auto hidden lg:flex">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/feedback"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            feedback
          </Link>
          <a
            href="https://github.com/Dinel13/Go-green-projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Source Code
          </a>
          <Link
            to="/suportus"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
          >
            Support Us
          </Link>
        </div>
        {token ? (
          <div>
            <button
              onClick={() => dispatch(logout())}
              className="inline-block text-sm mr-2 px-4 py-2 leading-none border rounded text-white border-white hover:text-gray-800 hover:border-transparent hover:bg-white mt-4 lg:mt-0"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="inline-block text-sm mr-2 px-4 py-2 leading-none border rounded text-white border-white hover:text-gray-800 hover:border-transparent hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-green-700 hover:border-transparent hover:text-teal hover:bg-green-800 mt-4 lg:mt-0"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
