'use client';
import React from 'react'
import { Card } from 'flowbite-react';
function MainCard({ icon, title, text1, text2, text3, text4, text5, text6, text7, clickText1, clickText2, clickText3, clickText4, clickText5, clickText6, clickText7 }) {
     return (
          <div className='group block md:rounded-lg rounded-none md:p-6 p-0 md:bg-white bg-blue-600 shadow-lg  md:hover:bg-sky-500 group-hover:text-white'>

               <div className="flex items-baseline text-gray-900  first-linexport hover:/assets/images/icontools3.png  
                     {mainCard}">
                    <img className='w-10  m-1 pl-3' src={icon} alt="" />

                    <span className=" md:border-none ml-1 text-xl font-normal my-auto  text-black  group-hover:text-white pl-3 ">
                         {title}
                    </span>

               </div>
               {title ? <hr className='' /> : <></>}

               <ul className="my-7 space-y-5">
                    <a href={clickText1}>

                         <li className="flex space-x-3 ">
                              <span className="text-base font-normal leading-tight text-black group-hover:text-white pl-3">


                                   {text1}

                              </span>
                         </li>
                         {text1 ? <hr className='' /> : <></>}
                    </a>


                    <li className="flex space-x-3 ">

                         <span className="text-base font-normal leading-tight text-black group-hover:text-white pl-3">
                              {text2}
                         </span>
                    </li>
                    {text2 ? <hr className='' /> : <></>}
                    <li className="flex space-x-3 ">

                         <span className="text-base font-normal leading-tight text-black group-hover:text-white pl-3">
                              {text3}
                         </span>
                    </li>
                    {text3 ? <hr className='' /> : <></>}
                    <li className="flex space-x-3 ">

                         <span className="text-base font-normal leading-tight text-black group-hover:text-white pl-3">
                              {text4}
                         </span>
                    </li>
                    {text4 ? <hr className='' /> : <></>}
                    <li className="flex space-x-3 ">

                         <span className="text-base font-normal leading-tight text-black group-hover:text-white pl-3">
                              {text5}
                         </span>
                    </li>
                    {text5 ? <hr className='' /> : <></>}
                    <li className="flex space-x-3">

                         <span className="text-base font-normal leading-tight text-black  group-hover:text-white">
                              {text6}
                         </span>
                    </li>
                    {text6 ? <hr className='' /> : <></>}
                    <li className="flex space-x-3">

                         <span className="text-base font-normal leading-tight text-black group-hover:text-white pl-3">
                              {text7}
                         </span>
                    </li>
                    {text7 ? <hr className='' /> : <></>}


               </ul>




          </div>
     )
}

export default MainCard