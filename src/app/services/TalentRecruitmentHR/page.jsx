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
import POSTELTelecommunication from '@/components/ServicesSub/ProductCertificationsServices/POSTELTelecommunication'
import AlcoholAndCigarette from '@/components/ServicesSub/ProductCertificationsServices/AlcoholAndCigarette'
import OtherCer from '@/components/ServicesSub/ProductCertificationsServices/OtherCer'
import TranslatorAssistant from '../../../components/ServicesSub/TalentRecruitmentHR/TranslatorAssistant';
import FinanceAccountingTax from '../../../components/ServicesSub/TalentRecruitmentHR/FinanceAccountingTax';
import MarketingSales from '../../../components/ServicesSub/TalentRecruitmentHR/MarketingSales';
import ManagementCandidate from '../../../components/ServicesSub/TalentRecruitmentHR/ManagementCandidate';
import HRManagementService from '../../../components/ServicesSub/TalentRecruitmentHR/HRManagementService';

function ProductCertifications() {
    const components = [
        <CompanyRegistrationPage />,


    ]
    const [comp, setComp] = useState(0);
    return (
        <div className='bg-gray-200 pt-24 pb-5 ps-5 pe-5'>
            <div className='flex pb-5'><p>Services </p> <p className='text-blue-600 ml-1'>/ Talent Recruitment HR</p></div>
            <div className='bg-white'>
                <div className="p-5 pt-3">
                    <div className='overflow-auto w-full'>
                        <div className='flex gap-9 border-b md:w-full sm:w-[1000px] w-[1100px]  md:h-full sm:h-full h-16 '>
                            <button onClick={() => setComp(0)} className={`${comp == 0 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Translator Assistant</button>
                            <button onClick={() => setComp(1)} className={`${comp == 1 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Finance Accounting Tax</button>
                            <button onClick={() => setComp(2)} className={`${comp == 2 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Marketing Sales</button>
                            <button onClick={() => setComp(3)} className={`${comp == 3 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>Management Candidate</button>
                            <button onClick={() => setComp(4)} className={`${comp == 4 ? "text-blue-600 border-b pb-2 border-blue-600" : "text-black border-0"} md:text-base sm:text-sm text-sm`}>HR Management Service</button>

                        </div>
                    </div>

                </div>
                {
                    comp == 0 ? <>

                        <div className='grid md:grid-cols-5 md:grid sm:grid sm:grid-cols-3 grid-cols-1  gap-5 px-5 pb-5'>
                            <TranslatorAssistant />



                        </div>
                    </> : comp == 1 ? <>

                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <FinanceAccountingTax />



                        </div>
                    </> : comp == 2 ? <>

                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <MarketingSales />



                        </div>
                    </> : comp == 3 ? <>

                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <ManagementCandidate />


                        </div>
                    </> : comp == 4 ? <>

                        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                            <HRManagementService />



                        </div>
                    </> : false
                }
            </div>
        </div>
    )
}

export default ProductCertifications
