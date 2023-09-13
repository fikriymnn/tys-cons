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
function Events() {
    const components = [
        <CompanyRegistrationPage />,


    ]
    const [comp, setComp] = useState(0);
    return (
        <div className='bg-gray-200 p-5'>
            <div className='flex pb-5'><p>Services </p> <p className='text-blue-600'>/ Basic</p></div>
            <div className='bg-white'>
                <div className="relative p-5 pt-10">

                    <div className='flex gap-9'>
                        <button onClick={() => setComp(0)}>Company Registration</button>
                        <button onClick={() => setComp(1)}>Visa Registration</button>
                        <button onClick={() => setComp(2)}>Trademark</button>
                        <button onClick={() => setComp(3)}>OfficeAdministration</button>
                        <button onClick={() => setComp(4)}>Construction Certifications</button>
                        <button onClick={() => setComp(5)}>Factory Licenses</button>
                    </div>
                </div>
                {
                    comp == 0 ? <>
                        <p>Ini Company Registration</p>
                        <div className='grid grid-cols-5 gap-5 px-5 pb-5'>
                            <CompanyRegistrationPage />



                        </div>
                    </> : comp == 1 ? <>
                        <p>Ini Visa Registration</p>
                        <div className='grid grid-cols-5 gap-5 px-5 pb-5'>
                            <VisaRegistrationPage />



                        </div>
                    </> : comp == 2 ? <>
                        <p>Ini Trademark</p>
                        <div className='grid grid-cols-5 gap-5 px-5 pb-5'>
                            <TrademarkPage />



                        </div>
                    </> : comp == 3 ? <>
                        <p>Ini Office Administration</p>
                        <div className='grid grid-cols-5 gap-5 px-5 pb-5'>
                            <OfficeAdministrationPage />



                        </div>
                    </> : comp == 4 ? <>
                        <p>Ini Construction Certifications</p>
                        <div className='grid grid-cols-5 gap-5 px-5 pb-5'>
                            <ConstructionCertificationsPage />



                        </div>
                    </> : comp == 5 ? <>
                        <p>Ini Factory Licenses</p>
                        <div className='grid grid-cols-5 gap-5 px-5 pb-5'>
                            <FactoryLicensesPage />



                        </div> </> : comp == 6 ?

                        components[0] : false
                }
            </div>
        </div>
    )
}

export default Events
