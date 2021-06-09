import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/logo.png";

export default function Header() {
  const token = useSelector((state) => state.auth.token);

  const clickMenu = () => {
    const navItem = document.getElementById("nav-item");
    if (navItem.classList.contains("flex")) {
      navItem.classList.remove("flex");
      navItem.classList.add("lg:flex");
      navItem.classList.add("hidden");
    } else {
      navItem.classList.add("flex");
      navItem.classList.remove("lg:flex");
      navItem.classList.remove("hidden");
    }
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal px-6 py-4 bg-green-500">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <img className="rounded-full w-10 mr-2" src={logo} alt="logo" />
        <Link to="/" className="font-semibold text-xl tracking-tight">
          Go Green
        </Link>
      </div>
      <div className="block lg:hidden" onClick={clickMenu}>
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
      <div
        className="w-full flex-grow lg:items-center lg:w-auto hidden lg:flex"
        id="nav-item"
      >
        <div className="text-sm flex-grow">
          <Link
            to="/recycle"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Recycle
          </Link>
          <Link
            to="/marketplace"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Marketplace
          </Link>
          <Link
            to="/feedback"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Feedback
          </Link>
        </div>
        {token ? (
          <div className="flex items-end">
            <Link
              to="/myaccount"
              className="inline-flex items-center text-sm mr-2 p-2 leading-none  border border-transparent rounded text-gray-50 bg-green-700 hover:bg-green-800"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 mr-1"
                viewBox="0 0 24 24"
              >
                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              My Account
            </Link>
          </div>
        ) : (
          <div className="flex items-end">
            <Link
              to="/login"
              className="inline-block text-sm mr-2 px-4 py-2 leading-none border rounded text-white border-white hover:text-gray-800 hover:border-transparent hover:bg-white"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-green-700 hover:border-transparent hover:text-teal hover:bg-green-800"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
