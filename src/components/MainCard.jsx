"use client";
import React from "react";
import { Card } from "flowbite-react";
function MainCard({
  icon,
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
}) {
  return (
    <div className="group block md:rounded-lg sm:rounded-lg rounded-none md:p-6 p-0 md:bg-white sm:bg-white bg-blue-600 shadow-lg  md:hover:bg-blue-600 sm:hover:bg-blue-600 group-hover:text-white first-linexport service-list hover:bg-primary md:hover:text-white sm:hover:text-white cursor-pointer transition-all md:h-[550px] sm:h-[550px]">
      <div
        className="flex items-baseline text-gray-900   
                      p-5"
      >
        {icon1}
        {icon2}
        {icon3}
        {icon4}
        {icon5}
        <span className=" md:border-none ml-1 text-xl font-normal my-auto  md:text-black sm:text-black text-white  group-hover:text-white pl-3 ">
          {title}
        </span>
      </div>
      {title ? <hr className="" /> : <></>}

      <ul className="my-7 space-y-5">
        <li className="flex space-x-3 ">
          <span className="text-base font-normal leading-tight md:text-black sm:text-black text-white group-hover:text-white pl-3">
            {text1}
          </span>
        </li>
        {text1 ? <hr className="" /> : <></>}

        <li className="flex space-x-3 ">
          <span className="text-base font-normal leading-tight md:text-black sm:text-black text-white group-hover:text-white pl-3">
            {text2}
          </span>
        </li>
        {text2 ? <hr className="" /> : <></>}
        <li className="flex space-x-3 ">
          <span className="text-base font-normal leading-tight md:text-black sm:text-black text-white group-hover:text-white pl-3">
            {text3}
          </span>
        </li>
        {text3 ? <hr className="" /> : <></>}
        <li className="flex space-x-3 ">
          <span className="text-base font-normal leading-tight md:text-black sm:text-black text-white group-hover:text-white pl-3">
            {text4}
          </span>
        </li>
        {text4 ? <hr className="" /> : <></>}
        <li className="flex space-x-3 ">
          <span className="text-base font-normal leading-tight md:text-black sm:text-black text-white group-hover:text-white pl-3">
            {text5}
          </span>
        </li>
        {text5 ? <hr className="" /> : <></>}
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight md:text-black sm:text-black text-white  group-hover:text-white pl-3">
            {text6}
          </span>
        </li>
        {text6 ? <hr className="" /> : <></>}
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight md:text-black sm:text-black text-white group-hover:text-white pl-3">
            {text7}
          </span>
        </li>
        {text7 ? <hr className="" /> : <></>}
      </ul>
    </div>
  );
}

export default MainCard;
