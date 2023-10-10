'use client';
import React from 'react'
import CompanyRegistrationPage from '@/components/ServicesSub/BasicEstablishmentServices/CompanyRegistrationPage';
import { useState, useEffect } from 'react';
import { Tabs } from 'flowbite-react';
import NavbarWithCTAButton from '@/components/NavbarWithCTAButton';
import CustomFooter from '@/components/CustomFooter';
import FinanceServices from '../../../components/ServicesSub/FinanceAccountingTax/FinanceServices';
import AccountingServices from '@/components/ServicesSub/FinanceAccountingTax/AcountingServices'
import TaxServices from '@/components/ServicesSub/FinanceAccountingTax/TaxServices'


function FinanceAccountingTax() {

    const [comp, setComp] = useState(0);
    const [dataFinanceServices, setDataFinanceServices] = useState([]);
    const [dataFinanceAccounting, setDataFinanceAccounting] = useState([]);
    const [dataFinanceTax, setDataFinanceTax] = useState([]);


    useEffect(() => {
        getDataFinanceServices();
        getDataFinanceAccounting();
        getDataFinanceTax();


    }, []);
    const getDataFinanceServices = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Finance Sertifications"),
                where("subService", "==", "BPOM Food and Drug")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataFinanceServices(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataFinanceAccounting = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Finance Sertifications"),
                where("subService", "==", "ISO Management System")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataFinanceAccounting(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataFinanceTax = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Finance Sertifications"),
                where("subService", "==", "SNI National Standard")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataFinanceTax(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <NavbarWithCTAButton />
            <div className='bg-gray-200 pt-24 pb-5 ps-5 pe-5'>
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

                            <div className='grid md:grid-cols-5 md:grid sm:grid sm:grid-cols-3 grid-cols-1  gap-5 px-5 pb-5'>
                                {dataFinanceServices.map((data, i) => {
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
                                {dataFinanceAccounting.map((data, i) => {
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
                                {dataFinanceTax.map((data, i) => {
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

export default FinanceAccountingTax
