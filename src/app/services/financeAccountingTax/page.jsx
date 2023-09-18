'use client';
import React from 'react'
import CompanyRegistrationPage from '@/components/ServicesSub/BasicEstablishmentServices/CompanyRegistrationPage';
import { useState } from 'react';
import { Tabs } from 'flowbite-react';
import NavbarWithCTAButton from '@/components/NavbarWithCTAButton';
import FinanceServices from '../../../components/ServicesSub/FinanceAccountingTax/FinanceServices';
import AccountingServices from '@/components/ServicesSub/FinanceAccountingTax/AcountingServices'
import TaxServices from '@/components/ServicesSub/FinanceAccountingTax/TaxServices'

function FinanceAccountingTax() {

    const [comp, setComp] = useState(0);
    return (
        <div className='bg-gray-200 p-5'>
            <div className='flex pb-5'><p>Services </p> <p className='text-blue-600 ml-1'>/ Finance Accounting Tax</p></div>
            <div className='bg-white'>
                <div className="p-5 pt-3">
                    <div className='overflow-auto w-full'>
                        <div className='flex gap-9 border-b md:w-full sm:w-[1000px] w-[1100px]  md:h-full sm:h-full h-16 '>
                            <button onClick={() => setComp(0)} className={`${comp == 0 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Finance Services</button>
                            <button onClick={() => setComp(1)} className={`${comp == 1 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Accounting Services</button>
                            <button onClick={() => setComp(2)} className={`${comp == 2 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Tax Services</button>

                        </div>
                    </div>

                </div>
                {
                    comp == 0 ? <>
                        <p >Finance Services</p>
                        <div className='grid md:grid-cols-5 md:grid sm:grid sm:grid-cols-3 grid-cols-1  gap-5 px-5 pb-5'>
                            <FinanceServices />



                        </div>
                    </> : comp == 1 ? <>
                        <p>Ini Visa Registration</p>
                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <AccountingServices />



                        </div>
                    </> : comp == 2 ? <>
                        <p>Ini Trademark</p>
                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <TaxServices />



                        </div>
                    </> : false
                }
            </div>
        </div>
    )
}

export default FinanceAccountingTax
