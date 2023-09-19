'use client';
import React from 'react'
import CompanyRegistrationPage from '@/components/ServicesSub/BasicEstablishmentServices/CompanyRegistrationPage';
import { useState } from 'react';

import LegalAdministration from '../../../components/ServicesSub/LegalServices/LegalAdministration';

function ProductCertifications() {
    const components = [
        <CompanyRegistrationPage />,


    ]
    const [comp, setComp] = useState(0);
    return (
        <div className='bg-gray-200 pt-24 pb-5 ps-5 pe-5 '>
            <div className='flex pb-5'><p>Services </p> <p className='text-blue-600 ml-1'>/ Legal Services</p></div>
            <div className='bg-white'>
                <div className="p-5 pt-3">
                    <div className='overflow-auto w-full'>
                        <div className='flex gap-9 border-b md:w-full sm:w-[1000px] w-[1100px]  md:h-full sm:h-full h-16 '>
                            <button onClick={() => setComp(0)} className={`${comp == 0 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Legal Administration</button>


                        </div>
                    </div>

                </div>
                {
                    comp == 0 ? <>

                        <div className='grid md:grid-cols-5 md:grid sm:grid sm:grid-cols-3 grid-cols-1  gap-5 px-5 pb-5'>
                            <LegalAdministration />



                        </div>
                    </> : false
                }
            </div>
        </div>
    )
}

export default ProductCertifications
