'use client';
import React from 'react'
import { Card } from 'flowbite-react';
function MainCard({ icon, title, text1, text2, text3, text4, text5, text6, text7 }) {
     return (
          <Card className='group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500  group-hover:text-white hover:underline'>
               <a href="">
                    <div className="flex items-baseline text-gray-900  first-linexport hover:/assets/images/icontools3.png 
                     {mainCard}">
                         <img className='w-10 group-hover:stroke-white m-1' src={icon} alt="" />

                         <span className="ml-1 text-xl font-normal my-auto  text-black  group-hover:text-white">
                              {title}
                         </span>

                    </div>
                    <ul className="my-7 space-y-5">
                         <li className="flex space-x-3">

                              <span className="text-base font-normal leading-tight text-black group-hover:text-white">
                                   {text1}
                              </span>
                         </li>
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

               </a>


          </Card>
     )
}

export default MainCard