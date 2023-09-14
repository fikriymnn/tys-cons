'use client';
import React from 'react'
import CompanyRegistrationPage from '@/components/ServicesSub/BasicEstablishmentServices/CompanyRegistrationPage';
import { useState } from 'react';
import { Tabs } from 'flowbite-react';
import NavbarWithCTAButton from '@/components/NavbarWithCTAButton';
import VisaRegistrationPage from '@/components/ServicesSub/BasicEstablishmentServices/VisaRegistrationPage'
import TrademarkPage from '@/components/ServicesSub/BasicEstablishmentServices/TrademarkPage'
import OfficeAdministrationPage from '@/components/ServicesSub/BasicEstablishmentServices/officeAdministrationPage'
import ConstructionCertificationsPage from '@/components/ServicesSub/BasicEstablishmentServices/ConstructionCertificationsPage'
import FactoryLicensesPage from '@/components/ServicesSub/BasicEstablishmentServices/FactoryLicensesPage'
import BPOMFoodDrug from '../../../components/ServicesSub/ProductCertificationsServices/BPOMFoodDrug';
import ISOManagementSystem from '../../../components/ServicesSub/ProductCertificationsServices/ISOManagementSystem';
import SNINationalStandard from '@/components/ServicesSub/ProductCertificationsServices/SNINationalStandard'
import MedicalAndHygiene from '@/components/ServicesSub/ProductCertificationsServices/MedicalAndHygiene'

function ProductCertifications() {
    const components = [
        <CompanyRegistrationPage />,


    ]
    const [comp, setComp] = useState(0);
    return (
        <div className='bg-gray-200 p-5'>
            <div className='flex pb-5'><p>Services </p> <p className='text-blue-600 ml-1'>/ Basic Establishment Services</p></div>
            <div className='bg-white'>
                <div className="p-5 pt-3">
                    <div className='overflow-auto w-full'>
                        <div className='flex gap-9 border-b md:w-full sm:w-full w-[700px]  md:h-full sm:h-full h-16 '>
                            <button onClick={() => setComp(0)} className={`${comp == 0 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>BPOM Food & Drug</button>
                            <button onClick={() => setComp(1)} className={`${comp == 1 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>ISO Management System</button>
                            <button onClick={() => setComp(2)} className={`${comp == 2 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>SNI National Standard</button>
                            <button onClick={() => setComp(3)} className={`${comp == 3 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Medical and Hygiene</button>
                            <button onClick={() => setComp(4)} className={`${comp == 4 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Construction Certifications</button>
                            <button onClick={() => setComp(5)} className={`${comp == 5 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Factory Licenses</button>
                        </div>
                    </div>

                </div>
                {
                    comp == 0 ? <>
                        <p >Ini Company Registration</p>
                        <div className='grid md:grid-cols-5 md:grid sm:grid sm:grid-cols-3 grid-cols-1  gap-5 px-5 pb-5'>
                            <BPOMFoodDrug />



                        </div>
                    </> : comp == 1 ? <>
                        <p>Ini Visa Registration</p>
                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <ISOManagementSystem />



                        </div>
                    </> : comp == 2 ? <>
                        <p>Ini Trademark</p>
                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <SNINationalStandard />



                        </div>
                    </> : comp == 3 ? <>
                        <p>Ini Office Administration</p>
                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <MedicalAndHygiene />


                        </div>
                    </> : comp == 4 ? <>
                        <p>Ini Construction Certifications</p>
                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <ConstructionCertificationsPage />



                        </div>
                    </> : comp == 5 ? <>
                        <p>Ini Factory Licenses</p>
                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <FactoryLicensesPage />



                        </div> </> : comp == 6 ?

                        components[0] : false
                }
            </div>
        </div>
    )
}

export default ProductCertifications
