import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../store/authSlice";

export default function MyAccount() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.name);
  return (
    <div className="bg-white w-full md:w-5/6 lg:md-4/6 mx-auto overflow-hidden ">
      <div className="px-4 py-5 flex items-center sm:px-6">
        <img
          alt="test"
          className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4"
          style={{ width: "100px" }}
          src="https://avatars.githubusercontent.com/u/54769734?v=4"
        />
        <div className="">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="ml-auto">
          <button className="text-gray-100 inline-flex items-center mr-1.5 mb-1.5 sm:mb-0 rounded py-1.5 px-3 bg-green-600 hover:bg-green-700">
            Update
          </button>
          <button
            onClick={() => dispatch(logout())}
            className="text-gray-100  inline-flex items-center rounded py-1.5 px-3 bg-red-700 hover:bg-red-800"
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {name}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Rank</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Still develop
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
