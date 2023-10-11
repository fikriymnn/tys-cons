"use client";
import React from "react";
import { Card } from "flowbite-react";
import Link from "next/link";
//import { parse } from "path";
import parse from "html-react-parser";
function CustomCard({ text, isi, isi2, img, id }) {
  return (
    <Link href={`/articles/article?id=${id}`}>
      <Card
        className="transform md:hover:-translate-y-4 duration-100 ease-in-out my-1 h-full"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={img}
      >
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {text}
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {parse(isi)}
        </div>
        <div className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {parse(isi2)}
        </div>
      </Card>
    </Link>
  );
}

export default CustomCard;
