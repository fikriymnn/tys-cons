'use client';
import React from 'react';
import { Card } from 'flowbite-react';
function CustomCard({ text, isi, isi2 }) {
     return (
          <Card className='transform hover:-translate-y-6 '
               imgAlt="Meaningful alt text for an image that is not purely decorative"
               imgSrc="/assets/images/bgtys.png"
          >
               <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                    {text}

               </h5>
               <p className="font-normal text-gray-700 dark:text-gray-400">

                    {isi}
               </p>
               <p className="font-normal text-gray-700 dark:text-gray-400">

                    {isi2}
               </p>
          </Card>
     )
}

export default CustomCard