'use client';
import React from 'react'
import CompanyRegistrationPage from '@/components/ServicesSub/BasicEstablishmentServices/CompanyRegistrationPage';
import { useState, useEffect } from 'react';
import { Tabs } from 'flowbite-react';
import NavbarWithCTAButton from '@/components/NavbarWithCTAButton';

import TranslatorAssistant from '../../../components/ServicesSub/TalentRecruitmentHR/TranslatorAssistant';
import FinanceAccountingTax from '../../../components/ServicesSub/TalentRecruitmentHR/FinanceAccountingTax';
import CustomFooter from '@/components/CustomFooter';
import MarketingSales from '../../../components/ServicesSub/TalentRecruitmentHR/MarketingSales';
import ManagementCandidate from '../../../components/ServicesSub/TalentRecruitmentHR/ManagementCandidate';
import HRManagementService from '../../../components/ServicesSub/TalentRecruitmentHR/HRManagementService';


function ProductTalent() {
    const [comp, setComp] = useState(0);
    const [dataTalentTranslator, setDataTalentTranslator] = useState([]);
    const [dataTalentFinance, setDataTalentFinance] = useState([]);
    const [dataTalentMarketing, setDataTalentMarketing] = useState([]);
    const [dataTalentMenagement, setDataTalentMenagement] = useState([]);
    const [dataTalentHR, setDataTalentHR] = useState([]);


    useEffect(() => {
        getDataTalentTranslator();
        getDataTalentFinance();
        getDataTalentMarketing();
        getDataTalentMenagement();
        getDataTalentHR();


    }, []);
    const getDataTalentTranslator = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Talent Sertifications"),
                where("subService", "==", "BPOM Food and Drug")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataTalentTranslator(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataTalentFinance = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Talent Sertifications"),
                where("subService", "==", "ISO Management System")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataTalentFinance(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataTalentMarketing = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Talent Sertifications"),
                where("subService", "==", "SNI National Standard")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataTalentMarketing(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataTalentMenagement = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Talent Sertifications"),
                where("subService", "==", "Medical and Hygiene  ")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataTalentMenagement(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataTalentHR = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Talent Sertifications"),
                where("subService", "==", "POSTEL Telecommunication")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataTalentHR(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <NavbarWithCTAButton />
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
                                {dataTalentTranslator.map((data, i) => {
                                    return (
                                        <>
                                            <div key={i}>
                                                <a href={`/services/detail?id=${data.id}`}>
                                                    <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                                                        <div className=" bg-blue-700 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

                                                        </div>
                                                        <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                                                            <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                                                {data.titleEnglish}
                                                            </h1>
                                                            <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                                                {data.price[0].price}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    );
                                })}



                            </div>
                        </> : comp == 1 ? <>

                            <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                                {dataTalentFinance.map((data, i) => {
                                    return (
                                        <>
                                            <div key={i}>
                                                <a href={`/services/detail?id=${data.id}`}>
                                                    <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                                                        <div className=" bg-blue-700 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

                                                        </div>
                                                        <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                                                            <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                                                {data.titleEnglish}
                                                            </h1>
                                                            <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                                                {data.price[0].price}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    );
                                })}



                            </div>
                        </> : comp == 2 ? <>

                            <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                                {dataTalentMarketing.map((data, i) => {
                                    return (
                                        <>
                                            <div key={i}>
                                                <a href={`/services/detail?id=${data.id}`}>
                                                    <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                                                        <div className=" bg-blue-700 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

                                                        </div>
                                                        <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                                                            <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                                                {data.titleEnglish}
                                                            </h1>
                                                            <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                                                {data.price[0].price}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    );
                                })}



                            </div>
                        </> : comp == 3 ? <>

                            <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                                {dataTalentMenagement.map((data, i) => {
                                    return (
                                        <>
                                            <div key={i}>
                                                <a href={`/services/detail?id=${data.id}`}>
                                                    <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                                                        <div className=" bg-blue-700 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

                                                        </div>
                                                        <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                                                            <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                                                {data.titleEnglish}
                                                            </h1>
                                                            <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                                                {data.price[0].price}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    );
                                })}


                            </div>
                        </> : comp == 4 ? <>

                            <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                                {dataTalentHR.map((data, i) => {
                                    return (
                                        <>
                                            <div key={i}>
                                                <a href={`/services/detail?id=${data.id}`}>
                                                    <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                                                        <div className=" bg-blue-700 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

                                                        </div>
                                                        <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                                                            <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                                                {data.titleEnglish}
                                                            </h1>
                                                            <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                                                {data.price[0].price}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    );
                                })}




                            </div>
                        </> : false
                    }
                </div>
            </div>
            <CustomFooter />
        </>
    )
}

export default ProductTalent
