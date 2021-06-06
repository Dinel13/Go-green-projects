import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import Product from "../components/product/Product";

import "./marketplace.css";

export default function Marketplace() {
  const [allProduct, setAllProduct] = useState();
  useEffect(() => {
    const getAllPoducts = async () => {
      try {
        const result = await fetch(
          `${process.env.REACT_APP_MRKT_URL}/product/getAll`
        );
        const data = await result.json();
        if (!result.ok) {
          throw new Error(data.message);
        }
        console.log(data);
        setAllProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPoducts();
  }, []);

  return (
    <section className="flex flex-col w-screen min-h-screen p-10 bg-gray-100 text-gray-800">
      <h1 className="text-3xl">All Category Recycle Product</h1>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
        <span className="text-sm font-semibold">1-16 of 148 Products</span>
        <button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
          <div className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
            <span className="font-medium">All Category</span>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex">
            <Link
              to="/marketplace"
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              All Category
            </Link>
            <Link
              to="/marketplace/cardboard"
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              Cardboard
            </Link>
            <Link
              to="/marketplace/glass"
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              Glass
            </Link>
            <Link
              to="/marketplace/plastic"
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              Plastic
            </Link>
            <Link
              to="/marketplace/metal"
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              Metal
            </Link>
            <Link
              to="/marketplace/trash"
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              Trash
            </Link>
            <Link
              to="/marketplace/paper"
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              href="#"
            >
              Paper
            </Link>
          </div>
        </button>
      </div>
      <div className="flex flex-wrap -m-4 mt-2">
        {allProduct &&
          allProduct.map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </div>
      <Pagination />
    </section>
  );
}
