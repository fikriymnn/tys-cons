'use client';
import React from 'react'
import { Card } from 'flowbite-react';
function MainCard({ icon, title, text1, text2, text3, text4, text5, text6, text7, clickText1, clickText2, clickText3, clickText4, clickText5, clickText6, clickText7 }) {
     return (
          <Card className='group block rounded-lg p-6 md:bg-white bg-blue-600 ring-1 ring-slate-900/5 shadow-lg space-y-3 md:hover:bg-sky-500 hover:ring-sky-500  group-hover:text-white hover:underline'>

               <div className="flex items-baseline text-gray-900  first-linexport hover:/assets/images/icontools3.png 
                     {mainCard}">
                    <img className='w-10 group-hover:stroke-white m-1' src={icon} alt="" />

                    <span className="border-b-2 border-white md:border-none ml-1 text-xl font-normal my-auto  text-black  group-hover:text-white">
                         {title}
                    </span>

               </div>

               <ul className="my-7 space-y-5">
                    <a href={clickText1}>

                         <li className="flex space-x-3">
                              <span className="text-base font-normal leading-tight text-black group-hover:text-white">


                                   {text1}

                              </span>
                         </li>
                    </a>

                    <li className="flex space-x-3">

                         <span className="text-base font-normal leading-tight text-black group-hover:text-white">
                              {text2}
                         </span>
                    </li>
                    <li className="flex space-x-3">

                         <span className="text-base font-normal leading-tight text-black group-hover:text-white">
                              {text3}
                         </span>
                    </li>
                    <li className="flex space-x-3">

                         <span className="text-base font-normal leading-tight text-black group-hover:text-white">
                              {text4}
                         </span>
                    </li>
                    <li className="flex space-x-3">

                         <span className="text-base font-normal leading-tight text-black group-hover:text-white">
                              {text5}
                         </span>
                    </li>
                    <li className="flex space-x-3">

                         <span className="text-base font-normal leading-tight text-black group-hover:text-white">
                              {text6}
                         </span>
                    </li>
                    <li className="flex space-x-3">

                         <span className="text-base font-normal leading-tight text-black group-hover:text-white">
                              {text7}
                         </span>
                    </li>


               </ul>




          </Card>
     )
}

export default MainCard