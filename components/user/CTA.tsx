"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const CTA = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="mt-24 mb-5 hidden lg:block">
        <p className="text-gray-500 text-sm">
          Want an indie tab of your own?{" "}
          <Link href="" className="text-red-500 font-medium hover:underline">
            Create one now
          </Link>
          !
        </p>
      </div>
      {show && (
        <div className="flex flex-col items-center justify-center gap-3 absolute bottom-3 rounded-xl right-0 left-0 w-[95%] mx-auto p-6 bg-red-500/40 backdrop-blur-[3px] lg:hidden">
          <div className="absolute top-4 right-4">
            <button
              onClick={() => {
                setShow(false);
              }}
              className="transition-opacity duration-150 hover:opacity-80"
            >
              <IoIosClose className="w-7 h-7 text-white border border-white rounded-md" />
            </button>
          </div>
          <p className="text-white text-lg text-center">
            Want an indie tab of your own?
          </p>
          <Link
            href=""
            className="text-center bg-red-500 rounded-full py-2 px-4 text-lg text-white font-medium shadow-md"
          >
            Create one now
          </Link>
        </div>
      )}
    </>
  );
};

export default CTA;
