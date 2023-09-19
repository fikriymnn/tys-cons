'use client'
import React from 'react'
import Image from 'next/image'
import { Label, Radio } from 'flowbite-react';

function detailServices() {
    return (
        <div className='bg-gray-200 pt-24 pb-5 ps-5 pe-5'>
            <div className='flex pb-5 gap-1'><p>Services </p> <p>&gt;</p><p className='text-blue-600'>公司商标注册 Company Trademark Registration</p></div>
            <div className='bg-white'>
                <div className="relative p-5 pt-10">
                    <p>Tue Jan 03 2023</p>
                    <div className='flex gap-1 mt-5'>
                        <p className='text-sm'>Basic Establishment Services</p>
                        <p className='text-sm'>&gt;</p>
                        <p className='text-sm '>Company Registration</p>
                    </div>
                    <div className='md:flex sm:grid sm:grid-cols-1 grid grid-cols-1 mb-5'>
                        <div className='bg-gray-100 md:w-[400px] md:h-[350px] ms:w-full ms:h-full mt-2'>

                            <img src="/assets/images/trademark.jpg" alt="" className='md:w-[350px] md:h-[350px]' />
                        </div>
                        <div className='md:ps-10 ps-'>
                            <p className='md:text-2xl text-2xl pb-4'>公司商标注册 Company Trademark Registration</p>
                            <div className='flex pb-4'>
                                <p className='text-blue-600 text-xl'>3500 - 3000 </p>
                                <p className=''>元</p>

                            </div>
                            <p className='pb-4'>Options:</p>
                            <fieldset
                                className="flex gap-3 pb-4"
                                id="radio"
                            >

                                <div className="flex items-center gap-2   border-gray-200  border p-3">
                                    <Radio
                                        id="foreign"
                                        name="countries"
                                        value="foreign"
                                    />
                                    <Label htmlFor="foreign">
                                        外国公司 Foreign Company
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2 border-gray-200  border p-3">
                                    <Radio
                                        id="indonesia"
                                        name="countries"
                                        value="indonesia"
                                    />
                                    <Label htmlFor="indonesia">

                                        印尼公司 Indonesia Company
                                    </Label>
                                </div>

                            </fieldset>
                        </div>
                    </div>
                    <div className='h-[2px] w-full bg-gray-300 '></div>
                    <div className=' bg-blue-600  w-40 mb-2'>
                        <p className='text-center text-white text-base font-semibold p-3'>Basic Information</p>
                    </div>
                    <p>1. The classification standard of trademarks is a common standard all over the world, and there are 45 categories</p>
                    <p>2. A trademark is usually composed of a combination of words, graphics, English and numbers</p>
                    <p>3. It takes two years to formally process a trademark, and you can start using it after obtaining the review approval. It takes about 2-3 weeks from the application to the approval letter</p>
                    <div className='h-[2px] w-full bg-gray-300 mt-5'></div>
                    <div className=' bg-blue-600  w-80 mb-2'>
                        <p className='text-center text-white text-base font-semibold p-2 '>Registration Time and Flow Process</p>
                    </div>
                    <p className='mb-2'>1. Registration Time: 12-24 months</p>
                    <p>2. Flow Process:</p>
                    <p>1&#41; Step 1: Trade Name Approval &#40;2 working days&#41;</p>
                    <p>3) Step 3: PNBP payment (5 working days)</p>
                    <p>4) Step 4: Apply for trademark registration (2 working days)</p>
                    <p>5) Step Five: Formal Review (14 working days)</p>

                    <p>6) Step 6: Announcement period (7 months)</p>
                    <p>7) Step 7: Substantive Examination</p>
                    <p>

                        8) Step 8: Issuance a Trademark Certificate</p>
                    <div className='h-[2px] w-full bg-gray-300 mt-5'></div>
                    <div className=' bg-blue-600  w-80 mb-2'>
                        <p className='text-center text-white text-base font-semibold p-2'>Required Documents</p>
                    </div>
                    <p>1. Trademark’s Logo</p>
                    <div className='h-[2px] w-full bg-gray-300 mt-5 '></div>
                    <div className=' bg-blue-600  w-80 mb-2'>
                        <p className='text-center text-white text-base font-semibold p-2'>Finished Registration Docoments</p>
                    </div>
                    <p>1. Trademark’s Logo</p>
                    <div className='h-[2px] w-full bg-gray-300 mt-5'></div>
                    <div className=' bg-blue-600  w-80 mb-2'>
                        <p className='text-center text-white text-base font-semibold p-2'>Trademark Categories/Class</p>
                    </div>
                    <p>1. Trademark’s Logo</p>
                    <div className='h-[2px] w-full bg-gray-300 mt-5'></div>
                    <div className=' bg-blue-600  w-80 mb-2'>
                        <p className='text-center text-white text-base font-semibold p-2'>Precautions</p>
                    </div>
                    <p>1. Trademark’s Logo</p>
                </div>
            </div>
        </div>
    )
}

export default detailServices