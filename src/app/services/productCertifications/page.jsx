'use client';
import React from 'react'
import CompanyRegistrationPage from '@/components/ServicesSub/BasicEstablishmentServices/CompanyRegistrationPage';
import { useState } from 'react';
import { Tabs } from 'flowbite-react';

import BPOMFoodDrug from '../../../components/ServicesSub/ProductCertificationsServices/BPOMFoodDrug';
import ISOManagementSystem from '../../../components/ServicesSub/ProductCertificationsServices/ISOManagementSystem';
import SNINationalStandard from '@/components/ServicesSub/ProductCertificationsServices/SNINationalStandard'
import MedicalAndHygiene from '@/components/ServicesSub/ProductCertificationsServices/MedicalAndHygiene'
import POSTELTelecommunication from '@/components/ServicesSub/ProductCertificationsServices/POSTELTelecommunication'
import AlcoholAndCigarette from '@/components/ServicesSub/ProductCertificationsServices/AlcoholAndCigarette'
import OtherCer from '@/components/ServicesSub/ProductCertificationsServices/OtherCer'

function ProductCertifications() {
    const components = [
        <CompanyRegistrationPage />,


    ]
    const [comp, setComp] = useState(0);
    return (
        <div className='bg-gray-200 pt-24 pb-5 ps-5 pe-5'>
            <div className='flex pb-5'><p>Services </p> <p className='text-blue-600 ml-1'>/ Product Certifications</p></div>
            <div className='bg-white'>
                <div className="p-5 pt-3">
                    <div className='overflow-auto w-full'>
                        <div className='flex gap-9 border-b md:w-full sm:w-[1000px] w-[1100px]  md:h-full sm:h-full h-16 '>
                            <button onClick={() => setComp(0)} className={`${comp == 0 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>BPOM Food & Drug</button>
                            <button onClick={() => setComp(1)} className={`${comp == 1 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>ISO Management System</button>
                            <button onClick={() => setComp(2)} className={`${comp == 2 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>SNI National Standard</button>
                            <button onClick={() => setComp(3)} className={`${comp == 3 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Medical and Hygiene</button>
                            <button onClick={() => setComp(4)} className={`${comp == 4 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>POSTEL Telecommunication</button>
                            <button onClick={() => setComp(5)} className={`${comp == 5 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Alcohol and Cigarette</button>
                            <button onClick={() => setComp(6)} className={`${comp == 6 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Other Certification</button>
                        </div>
                    </div>

                </div>
                {
                    comp == 0 ? <>

                        <div className='grid md:grid-cols-5 md:grid sm:grid sm:grid-cols-3 grid-cols-1  gap-5 px-5 pb-5'>
                            <BPOMFoodDrug />



                        </div>
                    </> : comp == 1 ? <>

                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <ISOManagementSystem />



                        </div>
                    </> : comp == 2 ? <>

                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <SNINationalStandard />



                        </div>
                    </> : comp == 3 ? <>

                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <MedicalAndHygiene />


                        </div>
                    </> : comp == 4 ? <>

                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <POSTELTelecommunication />



                        </div>
                    </> : comp == 5 ? <>

                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <AlcoholAndCigarette />



                        </div> </> : comp == 6 ?

                        <>

                            <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                                <OtherCer />



                            </div> </> : false
                }
            </div>
        </div>
    )
}

export default ProductCertifications
