import React from 'react'
import SolidBackground from '@/components/BreadcrumbArticle'
import BreadcrumbArticle from '@/components/BreadcrumbArticle'
import Image from 'next/image'

function Event() {
    return (
        <div className='bg-gray-200 pt-24 pb-5 ps-5 pe-5'>
            <BreadcrumbArticle
                className='ps-0'
            />
            <div className='bg-white'>
                <div className="relative p-5">
                    <div className='w-full h-1000px'>
                        <h3>Posted at: Mon Dec 10 2022</h3>
                        <h1 className='text-4xl text-center p-5 font-semibold'>Event Title</h1>
                        <div className='bg-blue-500 h-[500px] relative'>
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover"
                                style={{ backgroundImage: 'url(/assets/images/article.png)' }}
                            >
                                {/* <Image
                                    src={'/assets/images/article.png'}
                                    width={1080}
                                    height={1080}
                                    alt=''
                                /> */}
                            </div>
                        </div>
                        <h3 className='my-3'>Duration: 2022-12-01 - 2022-12-06</h3>
                        <div className='bg-gray-400 h-[2px] '></div>
                        <div className='w-100px flex'>
                            <div className='bg-blue-600 h-[50px] flex items-center'>
                                <h2 className='mx-5 text-xl text-center font-semibold text-white'>New Event</h2>
                            </div>
                        </div>
                        <div className='py-5'>
                            <p>Lorem Ipsum dolor sit amet</p>
                            <p>abcd</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Event