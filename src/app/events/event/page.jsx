'use client'
import React from 'react'
import SolidBackground from '@/components/BreadcrumbArticle'
import CustomFooter from '@/components/CustomFooter';
import BreadcrumbArticle from '@/components/BreadcrumbArticle'
import Image from 'next/image'
import NavbarWithCTAButton from '@/components/NavbarWithCTAButton';
import { useSearchParams } from "next/navigation";
import {
    collection,
    addDoc,
    getDocs,
    where,
    query,
    getDoc,
    deleteDoc,
    updateDoc,
    doc,
    Firestore,
} from "firebase/firestore";
import { db, storage } from "../../../../firebase/page";
import parse from 'html-react-parser';

async function getDataEvents() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    let data = [];
    try {
        const docRef = doc(db, "events", id);
        const querySnapshot = await getDoc(docRef);

        // if (querySnapshot.exists()) {
        //   console.log("Document data:", querySnapshot.data());
        // } else {
        //   // docSnap.data() will be undefined in this case
        //   console.log("No such document!");
        // }

        // doc.data() is never undefined for query doc snapshots

        data.push(querySnapshot.data());
        setImg(data(0).img)
        setDate(data[0].date);
        setTitleIng(data[0].titleEnglish);
        setTitleChi(data[0].titleChinese);
        setData(data[0].content);
        setDurationFrom(data[0].durationFrom);
        setDurationTo(data[0].durationTo);
    } catch (error) {
        console.log(error);
    }
    return data;
};

async function Event() {
    const dataEvent = await getDataEvents();
    return (
        <>
            <NavbarWithCTAButton />
            <div className='bg-gray-200 pt-24 pb-5 ps-5 pe-5'>
                <BreadcrumbArticle
                    className='ps-0'
                />
                <div className='bg-white'>
                    <div className="relative p-5 mt-20 md:mt-10">
                        <div className='w-full'>
                            <div className='flex md:flex-row flex-col'>
                                <p>Posted at: </p>
                                <p>{dataEvent[0].date}</p>
                            </div>
                            <h1 className='text-4xl text-center p-5 font-semibold'>{dataEvent[0].titleEnglish}</h1>
                            <div className='bg-blue-500 h-[200px] md:h-[500px] relative'>
                                <div
                                    className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-fill"
                                    style={{ backgroundImage: `url(${dataEvent[0].img})` }}
                                >
                                    {/* <Image
                                    src={'/assets/images/article.png'}
                                    width={1080}
                                    height={1080}
                                    alt=''
                                /> */}
                                </div>
                            </div>
                            <h3 className='my-3'>Duration: {dataEvent[0].durationFrom} - {dataEvent[0].durationTo}</h3>
                            {dataEvent[0].content.map((data, i) => {
                                return (
                                    <>

                                        <div className='bg-gray-400 h-[2px] '></div>
                                        <div className='w-100px flex'>
                                            <div className='bg-blue-600 h-[50px] flex items-center'>
                                                <h2 className='mx-5 text-xl text-center font-semibold text-white'>{data.topicIng}</h2>
                                            </div>
                                        </div>
                                        <div className='py-5'>
                                            <p>{parse(data.contentIng)}</p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
            <CustomFooter />
        </>
    )
}

export default Event