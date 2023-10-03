'use client';
import React from 'react'
import { Card } from 'flowbite-react';


function CardTwo({ title, price, text1, text2, text3, text4, text5, text6 }) {
     return (
          <Card>
               <h5 className="mb-4 text-lg text-black font-medium text-center">
                    {title}
               </h5>
               <p className="mb-4 text-base font-medium text-blue-500 text-center">
                    {price}
               </p>

               <ol className="my-7 space-y-5">
                    <li className="flex space-x-3">

                         <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                              {text1}
                         </p>
                    </li>
                    <li className="flex space-x-3">

                         <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                              {text2}
                         </p>
                    </li>
                    <li className="flex space-x-3">

                         <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                              {text3}
                         </p>
                    </li>
                    <li className="flex space-x-3">

                         <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                              {text4}
                         </p>
                    </li>

                    <li className="flex space-x-3">

                         <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                              {text5}
                         </p>
                    </li>
                    <li className="flex space-x-3">

                         <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                              {text6}
                         </p>
                    </li>
               </ol>
               <a className=' className="inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900' href="/packages/details">
                    <p>
                         DETAILS
                    </p>



               </a>
          </Card>
     )
}


export default CardTwo