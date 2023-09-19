'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

function MultipleCarousel() {
     const responsive = {
          superLargeDesktop: {
               // the naming can be any, depends on you.
               breakpoint: { max: 4000, min: 3000 },
               items: 5
          },
          desktop: {
               breakpoint: { max: 3000, min: 1024 },
               items: 5
          },
          tablet: {
               breakpoint: { max: 1024, min: 464 },
               items: 2
          },
          mobile: {
               breakpoint: { max: 464, min: 0 },
               items: 1
          }
     };

     return (
          <Carousel responsive={responsive} autoPlay={true} infinite={true}>
               <div className='text-white'>
                    <Image
                         src={'/assets/images/lionair.png'}
                         width={200}
                         height={200}
                         alt=''
                    />
               </div>
               <div className='text-white'>
                    <Image
                         src={'/assets/images/kelase.png'}
                         width={200}
                         height={200}
                         alt=''
                    />
               </div>
               <div className='text-white'>
                    <Image
                         src={'/assets/images/rectangle20.png'}
                         width={200}
                         height={200}
                         alt=''
                    />
               </div>
               <div className='text-white'>
                    <Image
                         src={'/assets/images/rectangle20.png'}
                         width={200}
                         height={200}
                         alt=''
                    />
               </div>
               <div className='text-white'>
                    <Image
                         src={'/assets/images/rectangle20.png'}
                         width={200}
                         height={200}
                         alt=''
                    />
               </div>
               <div className='text-white'>
                    <Image
                         src={'/assets/images/rectangle20.png'}
                         width={200}
                         height={200}
                         alt=''
                    />
               </div>
               <div className='text-white'>
                    <Image
                         src={'/assets/images/rectangle20.png'}
                         width={200}
                         height={200}
                         alt=''
                    />
               </div>
               <div className='text-white'>
                    <Image
                         src={'/assets/images/rectangle20.png'}
                         width={200}
                         height={200}
                         alt=''
                    />
               </div>

          </Carousel>
     )
}

export default MultipleCarousel