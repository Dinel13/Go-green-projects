import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="xl:w-1/5  lg:w-1/4 md:w-1/3 sm:w-1/2 p-4 w-full ">
      <Link
        to="/"
        className="h-full flex flex-col items-center pb-2 bg-white border shadow-lg rounded-md transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-105"
      >
        <div className="block relative h-48 rounded  overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/420x260"
          />
        </div>
        <div className="flex items-end justify-between w-full mt-3 px-2">
          <div className="flex flex-col justify-start">
            <p className="font-medium text-left text-sm text-gray-600">
              Category
            </p>
            <Link to="/" className="font-medium">
              Product Name
            </Link>
            <Link to="/seller/" className="flex items-center" href="#">
              <span className="text-xs font-medium text-gray-600">by</span>
              <span className="text-xs font-medium ml-1 text-indigo-500">
                Store Name
              </span>
            </Link>
          </div>
          <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">
            $34
          </span>
        </div>
      </Link>
    </div>
  );
}
