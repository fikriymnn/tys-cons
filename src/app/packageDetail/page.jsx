import React from 'react'
import NavbarWithCTAButton from '@/components/NavbarWithCTAButton';
import CustomFooter from '@/components/CustomFooter';

function PackageDetails() {
    return (
        <>
            <NavbarWithCTAButton />
            <div className='bg-gray-200 p-5'>
                <div className='flex pb-5 gap-1'><p>Package </p> <p>&gt;</p><p className='text-blue-600'>Pendirian PT PMA Complete</p></div>
                <div className='bg-white'>
                    <div className="relative p-5 pt-10">
                        <div className='md:flex sm:grid sm:grid-cols-1 grid grid-cols-1 mb-5'>
                            <div className=''>
                                <p className='md:text-2xl text-2xl pb-4'>Pendirian PT PMA Complete</p>
                                <div className='flex pb-4'>
                                    <p className='text-blue-600 text-xl'>Rp 15.000.000 </p>


                                </div>


                            </div>
                        </div>
                        <div className='h-[2px] w-full bg-gray-300 '></div>
                        <div className=' bg-blue-600  w-80 mb-2'>
                            <p className='text-center text-white text-base font-semibold p-3'>Package Includes:</p>
                        </div>
                        <p>1. The classification standard of trademarks is a common standard all over the world, and there are 45 categories</p>
                        <p>2. A trademark is usually composed of a combination of words, graphics, English and numbers</p>
                        <p>3. It takes two years to formally process a trademark, and you can start using it after obtaining the review approval. It takes about 2-3 weeks from the application to the approval letter</p>
                        <div className='h-[2px] w-full bg-gray-300 mt-5'></div>

                    </div>
                </div>
            </div>
            <CustomFooter />
        </>
    )
}

export default PackageDetails