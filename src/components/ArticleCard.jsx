import React from "react";
import Image from "next/image";

function ArticleCard({ img, title, date, id }) {
  return (
    <a href={`/articles/article?id=${id}`}>
      <div className="bg-white shadow-xl hover:translate-y-[-10px] transition-transform duration-50 ease-in-out grid grid-cols-2 md:grid-cols-1">
        <div className="bg-blue-700 md:grid grid-cols-1 min-h-28 md:h-36">
          <img src={img} alt="" />
        </div>
        <div className="p-3 ">
          <h1 className="font-semibold text-gray-900  ">{title}</h1>
          <h2>{date}</h2>
        </div>
      </div>
    </a>
  );
}

export default ArticleCard;
