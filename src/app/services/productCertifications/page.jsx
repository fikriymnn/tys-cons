'use client';
import React from 'react'
import CompanyRegistrationPage from '@/components/ServicesSub/BasicEstablishmentServices/CompanyRegistrationPage';
import { useState, useEffect } from 'react';
import { Tabs } from 'flowbite-react';

import BPOMFoodDrug from '../../../components/ServicesSub/ProductCertificationsServices/BPOMFoodDrug';
import ISOManagementSystem from '../../../components/ServicesSub/ProductCertificationsServices/ISOManagementSystem';
import SNINationalStandard from '@/components/ServicesSub/ProductCertificationsServices/SNINationalStandard'
import MedicalAndHygiene from '@/components/ServicesSub/ProductCertificationsServices/MedicalAndHygiene'
import POSTELTelecommunication from '@/components/ServicesSub/ProductCertificationsServices/POSTELTelecommunication'
import AlcoholAndCigarette from '@/components/ServicesSub/ProductCertificationsServices/AlcoholAndCigarette'
import OtherCer from '@/components/ServicesSub/ProductCertificationsServices/OtherCer'
import NavbarWithCTAButton from '@/components/NavbarWithCTAButton';
import CustomFooter from '@/components/CustomFooter';

function ProductCertifications() {
    const [comp, setComp] = useState(0);
    const [dataProductBPOM, setDataProductBPOM] = useState([]);
    const [dataProductISO, setDataProductISO] = useState([]);
    const [dataProductSNI, setDataProductSNI] = useState([]);
    const [dataProductMedical, setDataProductMedical] = useState([]);
    const [dataProductPostel, setDataProductPostel] = useState([]);
    const [dataProductAlcohol, setDataProductAlcohol] = useState([]);
    const [dataProductOther, setDataProductOther] = useState([]);

    useEffect(() => {
        getDataProductBPOM();
        getDataProductISO();
        getDataProductSNI();
        getDataProductMedical();
        getDataProductPostel();
        getDataProductAlcohol();
        getDataProductOther();

    }, []);
    const getDataProductBPOM = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Product Sertifications"),
                where("subService", "==", "BPOM Food and Drug")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataProduct(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataProductISO = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Product Sertifications"),
                where("subService", "==", "ISO Management System")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataProduct(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataProductSNI = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Product Sertifications"),
                where("subService", "==", "SNI National Standard")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataProduct(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataProductMedical = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Product Sertifications"),
                where("subService", "==", "Medical and Hygiene  ")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataProduct(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataProductPostel = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Product Sertifications"),
                where("subService", "==", "POSTEL Telecommunication")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataProduct(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataProductAlcohol = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Product Sertifications"),
                where("subService", "==", "Alcohol and Cigarette")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataProduct(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDataProductOther = async () => {
        try {
            const q = query(
                collection(db, "service"),
                where("service", "==", "Product Sertifications"),
                where("subService", "==", "Other Certification")
            );

            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setDataProduct(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <NavbarWithCTAButton />
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
                                {dataProductBPOM.map((data, i) => {
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
                                {dataProductISO.map((data, i) => {
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
                                {dataProductSNI.map((data, i) => {
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
                                {dataProductMedical.map((data, i) => {
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
                                {dataProductPostel.map((data, i) => {
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
                        </> : comp == 5 ? <>

                            <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                                {dataProductAlcohol.map((data, i) => {
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



                            </div> </> : comp == 6 ?

                            <>

                                <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5'>
                                    {dataProductOther.map((data, i) => {
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



                                </div> </> : false
                    }
                </div>
            </div>
            <CustomFooter />
        </>
    )
}

export default ProductCertifications
