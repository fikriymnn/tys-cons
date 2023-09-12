'use client';
import React from 'react'
import CompanyRegistrationPage from '@/components/ServicesSub/BasicEstablishmentServices/CompanyRegistrationPage';
import { useState } from 'react';
import { Tabs } from 'flowbite-react';
import NavbarWithCTAButton from '@/components/NavbarWithCTAButton';
import VisaRegistrationPage from '@/components/ServicesSub/BasicEstablishmentServices/VisaRegistrationPage'
import TrademarkPage from '@/components/ServicesSub/BasicEstablishmentServices/TrademarkPage'

function Events() {
    const components = [
        <CompanyRegistrationPage />,


    ]
    const [comp, setComp] = useState(2);
    return (
        <div className='bg-gray-200 p-5'>
            <div className='flex pb-5'><p>Services</p> <p className='text-blue-600'>/ Basic</p></div>
            <div className='bg-white'>
                <div className="relative p-5 pt-10">

                    <Tabs.Group
                        aria-label="Tabs with underline"
                        style="underline"

                    >
                        <Tabs.Item
                            active
                            onClick={() => setComp(0)}
                            title="Company Registration"
                        >

                        </Tabs.Item>
                        <Tabs.Item
                            onClick={() => setComp(1)}
                            title="Visa Registration"
                        >
                            <div onClick={() => setComp(1)}>

                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            onClick={() => setComp(2)}
                            title="Trademark"
                        >
                            <div onClick={() => setComp(2)}>

                            </div>
                        </Tabs.Item>
                        <Tabs.Item

                            title="Office Administration"
                        >
                            <p>
                                This is
                                <span className="font-medium text-gray-800 dark:text-white">
                                    Contacts tab's associated content
                                </span>
                                .
                                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                control the content visibility and styling.
                            </p>
                        </Tabs.Item>
                        <Tabs.Item

                            title="Construction Certification"
                        >
                            <p>
                                This is
                                <span className="font-medium text-gray-800 dark:text-white">
                                    Contacts tab's associated content
                                </span>
                                .
                                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                control the content visibility and styling.
                            </p>
                        </Tabs.Item>
                        <Tabs.Item

                            title="Factory Licences"
                        >
                            <p>
                                This is
                                <span className="font-medium text-gray-800 dark:text-white">
                                    Contacts tab's associated content
                                </span>
                                .
                                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                control the content visibility and styling.
                            </p>
                        </Tabs.Item>

                    </Tabs.Group>
                    <div className='flex gap-9'>
                        <button onClick={() => setComp(0)}>Company Registration</button>
                        <button onClick={() => setComp(1)}>Visa Registration</button>
                        <button onClick={() => setComp(2)}>Trademark</button>
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
                    </> : comp == 3 ?

                        components[0] : false
                }
            </div>
        </div>
    )
}

export default Events
