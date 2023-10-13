"use client";
import React from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import Link from "next/link";
//import { parse } from "path";
import parse from "html-react-parser";
function CustomCard({ text, isi, isi2, img, id }) {
  return (
    <Link href={`/articles/article?id=${id}`}>
      <div
        className="transform md:hover:-translate-y-4 duration-100 ease-in-out my-0 h-full border-gray-50 border-2 shadow-lg rounded-md"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
      >
          <Image src={img} alt="" height={400} width={520} />
        <div className="m-2 mb-4">
          <h5 className="text-xl font-semibold  text-gray-900 dark:text-white my-1">
            {text}
          </h5>
          <div className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2 mb-5">
            {parse(isi)}
          </div>
          <div className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
            {parse(isi2)}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CustomCard;
