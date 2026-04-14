import React from "react";
import Image from "next/image";

function ArticleCard({ img, title, date, id }) {
  return (
    <>
      <a href={`/articles/article?id=${id}`}>
        <div className="bg-white rounded-md shadow-xl md:hover:translate-y-[-10px] transition-transform duration-50 ease-in-out grid grid-cols-2 md:flex md:flex-col h-full">
          <div className="relative h-28 md:h-36 w-full">
            <Image
              src={img}
              alt="article"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-3  h-24 flex flex-col justify-between">
            <h1 className="font-semibold text-gray-900 line-clamp-2 ">
              {title}
            </h1>
            <h2 className="mt-auto">{date}</h2>
          </div>
        </div>
      </a>
    </>
  );
}

export default ArticleCard;
