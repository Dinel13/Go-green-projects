import React from "react";

export default function Footer() {
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
          <form action="#" className="mt-2">
            <div className="flex items-center">
              <input
                type="email"
                className="w-full px-2 py-4 mr-2  bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none"
                required
              />
              <button
                className="bg-green-600 hover:bg-green-700 text-gray-200 px-5 py-2 rounded shadow "
                style={{ marginLeft: "-8.8rem" }}
              >
                Langganan
              </button>
            </div>
          </form>
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
            href="https://www.instagram.com/salahuddin_hafid/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              fill="none"
              className="h-6 w-6 text-green-800 mr-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
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
