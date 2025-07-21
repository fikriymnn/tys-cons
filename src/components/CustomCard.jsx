"use client";
import React from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import Link from "next/link";
import parse from "html-react-parser";

function CustomCard({ text, isi, isi2, img, id }) {
  return (
    <Link href={`/articles/article?id=${id}`}>
      <div
        className="transform md:hover:-translate-y-4 duration-100 ease-in-out my-0 h-[500px] border-gray-50 border-2 shadow-lg rounded-md flex flex-col"
        imgalt="Meaningful alt text for an image that is not purely decorative"
      >
        {/* Fixed image container with proper aspect ratio handling */}
        <div className="h-[40%] rounded-t-md bg-white overflow-hidden">
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>

        <div className="m-2 mb-4 flex flex-col h-[60%]">
          <div>
            <h5 className="text-xl font-semibold text-gray-900 dark:text-white my-1 line-clamp-3">
              {text}
            </h5>
            <div className="font-normal text-[#6b7280] line-clamp-2 mb-5">
              {isi}
            </div>
          </div>

          {/* Content area with proper overflow handling */}
          <div className="font-normal text-gray-700 dark:text-gray-400 h-full overflow-hidden">
            <div className="line-clamp-6">{parse(isi2)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CustomCard;
