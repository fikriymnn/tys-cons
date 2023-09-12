'use client';
import React from 'react'
import { Card } from 'flowbite-react';
function MainCard() {
     return (
          <Card className='hover:bg-blue-600 hover:text-white'>
               <a href="">
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                         <img src="" alt="" />
                         <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                              Basic Establishment Services
                         </span>
                    </div>
                    <ul className="my-7 space-y-5">
                         <li className="flex space-x-3">

                              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                   Company Registration
                              </span>
                         </li>
                         <li className="flex space-x-3">

                              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                   Visa Registration
                              </span>
                         </li>
                         <li className="flex space-x-3">

                              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                   Trademark
                              </span>
                         </li>
                         <li className="flex space-x-3">

                              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                   Office Administration
                              </span>
                         </li>
                         <li className="flex space-x-3">

                              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                   Construction Certifications
                              </span>
                         </li>
                         <li className="flex space-x-3">

                              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                   Factory Licenses
                              </span>
                         </li>


                    </ul>
                    <button
                         className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                         type="button"
                    >
                         <p>
                              Choose plan
                         </p>
                    </button>
               </a>

          </Card>
     )
}

export default MainCard