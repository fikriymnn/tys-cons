'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import CrudTable from '@/components/admin/crudTable'

function dashboarAdmin() {
    const [bar, setBar] = useState(1);
    const toggleBar = () => {
        setBar((prevBar) => (prevBar === 1 ? 0 : 1));
    };
    const [comp, setComp] = useState(0);
    return (
        <>

            <div>Administration</div>
            <div className='flex'>
                <div
                    className={`${bar == 1 ? " w-[200px] duration-100 ease-in-out" : " w-[80px] duration-100 ease-in-out"} h-screen bg-blue-500 flex-col`}>
                    <div className='w-full h-[80px] mt-10 bg-blue-700 '>
                        <button className='w-full h-full' onClick={toggleBar}>CO</button>
                    </div>
                    <button onClick={() => setComp(0)} className={`${bar == 1 ? "ms-5 justify-start items-center" : " justify-center items-center"} w-full h-10 flex `}>
                        {bar === 0 ? (
                            <p >
                                H
                            </p>
                        ) : (

                            <p >
                                Homepage
                            </p>
                        )}
                    </button>
                    <button onClick={() => setComp(1)} className={`${bar == 1 ? "ms-5 justify-start items-center" : " justify-center items-center"} w-full h-10 flex `}>
                        {bar === 0 ? (
                            <p>A</p>
                        ) : (
                            <p>About</p>
                        )}
                    </button>
                    <button onClick={() => setComp(2)} className={`${bar == 1 ? "ms-5 justify-start items-center" : " justify-center items-center"} w-full h-10 flex `}>
                        {bar === 0 ? (
                            <p>S</p>
                        ) : (
                            <p>Services</p>
                        )}
                    </button>
                    <button onClick={() => setComp(3)} className={`${bar == 1 ? "ms-5 justify-start items-center" : " justify-center items-center"} w-full h-10 flex `}>
                        {bar === 0 ? (
                            <p>A</p>
                        ) : (
                            <p>Articles</p>
                        )}
                    </button>
                    <button onClick={() => setComp(4)} className={`${bar == 1 ? "ms-5 justify-start items-center" : " justify-center items-center"} w-full h-10 flex `}>
                        {bar === 0 ? (
                            <p>E</p>
                        ) : (
                            <p>Event</p>
                        )}
                    </button>
                    <button onClick={() => setComp(5)} className={`${bar == 1 ? "ms-5 justify-start items-center" : " justify-center items-center"} w-full h-10 flex `}>
                        {bar === 0 ? (
                            <p>PR</p>
                        ) : (
                            <p>Pol and Reg</p>
                        )}
                    </button>

                </div>
                <div className='w-full'>
                    <div className='bg-slate-200 rounded-xl m-5 mt-16'>

                        {
                            comp == 0 ? <>

                                <div className='p-5'>
                                    <p>Homepage</p>

                                    <div className='grid grid-cols-1 gap-5'>

                                        <div className='flex bg-slate-300 rounded-md  font-semibold'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12 border-s-2  flex justify-start items-center p-2'>

                                                    <p >Section</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <p >Content</p>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 mx-3 my-auto'>
                                                <p >Edit</p>
                                            </div>

                                        </div>
                                        <div className='flex bg-slate-300 rounded-md'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12 border-s-2 font-semibold flex justify-start items-center p-2'>

                                                    <p>Heading</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <div className='flex flex-col'>
                                                        <p >Establish Your Business in Indonesia Conveniently</p>
                                                        <p >轻松开展印尼公司</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 m-3 my-auto'>


                                                <button className='bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto'>
                                                    <img className='w-8' src="/assets/images/edit-svgrepo-com.svg" alt="" />
                                                </button>


                                            </div>

                                        </div>

                                        <div className='flex bg-slate-300 rounded-md'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12 border-s-2 font-semibold flex justify-start items-center p-2'>

                                                    <p>Paragraph</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <div className='flex flex-col'>
                                                        <p >TYS Consulting is a Business Consultant with main business in providing one-stop enterprise consultation services for enterprises or individuals who wants to establish business in Indonesia. Our team are equipped to communicate in Mandarin, English and Bahasa Indonesia with experiences on helping numerous customers in various sectors from establishment till ready to start business operation.</p>
                                                        <p >TYS 咨询是一家咨询公司，主要业务是为有意在印尼开展业务的企业或个人提供一站式企业咨询 服务。我们的团队能够用普通话、英语和印度尼西亚语进行交流，并在帮助各行各业的众多客户 从成立到准备开始业务运营方面拥有丰富的经验</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 m-3 my-auto'>


                                                <button className='bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto'>
                                                    <img className='w-8' src="/assets/images/edit-svgrepo-com.svg" alt="" />
                                                </button>


                                            </div>

                                        </div>

                                        <div className='flex bg-slate-300 rounded-md'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12 font-semibold flex justify-start items-center p-2'>

                                                    <p>Service</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <div className='flex flex-col'>
                                                        <p >What Service We Offer</p>
                                                        <p >我们提供的服务</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 m-3 my-auto'>


                                                <button className='bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto'>
                                                    <img className='w-8' src="/assets/images/edit-svgrepo-com.svg" alt="" />
                                                </button>


                                            </div>

                                        </div>
                                        <div className='flex bg-slate-300 rounded-md'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12 font-semibold flex justify-start items-center p-2'>

                                                    <p>Article</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <div className='flex flex-col'>
                                                        <p >Latest Article</p>
                                                        <p >最新文章</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 m-3 my-auto'>


                                                <button className='bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto'>
                                                    <img className='w-8' src="/assets/images/edit-svgrepo-com.svg" alt="" />
                                                </button>


                                            </div>

                                        </div>
                                        <div className='flex bg-slate-300 rounded-md'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12 font-semibold flex justify-start items-center p-2'>

                                                    <p>Package</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <div className='flex flex-col'>
                                                        <p >Choose The Best Package You Need</p>
                                                        <p >选择您需要的服务包</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 m-3 my-auto'>


                                                <button className='bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto'>
                                                    <img className='w-8' src="/assets/images/edit-svgrepo-com.svg" alt="" />
                                                </button>


                                            </div>

                                        </div>
                                        <div className='flex bg-slate-300 rounded-md'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12  font-semibold flex justify-start items-center p-2'>

                                                    <p>Clients</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <div className='flex flex-col'>
                                                        <p >Our Clients</p>
                                                        <p >我们客户</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 m-3 my-auto'>


                                                <button className='bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto'>
                                                    <img className='w-8' src="/assets/images/edit-svgrepo-com.svg" alt="" />
                                                </button>


                                            </div>

                                        </div>



                                    </div>



                                </div>

                                {/* <p className='text-center'>Homepage</p><div className=''>
                                        <div>

                                        </div>
                                        <div className=''>
                                            <h1 className=' text-md pb-3'>Header</h1>
                                            <input type="text" placeholder='Input your name' color=' bg-transparent' className=' rounded-lg w-96 border-slate-300 input' />
                                        </div>
                                        <div className=' py-5'>
                                            <h1 className=' text-md pb-3'>Message</h1>
                                            <textarea name="" id="" cols="30" rows="10" placeholder='Input your message' color=' bg-transparent' className=' w-96 resize-none rounded-lg border-slate-300 ' maxLength={100}></textarea>
                                        </div>
                                    </div>
                                    */}



                            </> : comp == 1 ? <>



                                <div className='p-5'>
                                    <p>About</p>

                                    <div className='grid grid-cols-1 gap-5'>

                                        <div className='flex bg-slate-300 rounded-md  font-semibold'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12 border-s-2  flex justify-start items-center p-2'>

                                                    <p >Section</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <p >Content</p>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 mx-3 my-auto'>
                                                <p >Edit</p>
                                            </div>

                                        </div>
                                        <div className='flex bg-slate-300 rounded-md'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12 border-s-2 font-semibold flex justify-start items-center p-2'>

                                                    <p>Heading</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <div className='flex flex-col'>
                                                        <p >About Us</p>
                                                        <p >Chinese</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 m-3 my-auto'>


                                                <button className='bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto'>
                                                    <img className='w-8' src="/assets/images/edit-svgrepo-com.svg" alt="" />
                                                </button>


                                            </div>

                                        </div>

                                        <div className='flex bg-slate-300 rounded-md'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12 border-s-2 font-semibold flex justify-start items-center p-2'>

                                                    <p>Paragraph</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <div className='flex flex-col'>
                                                        <p >TYS Consulting is a Business Consultant with main business in providing one-stop enterprise consultation services for enterprises or individuals who wants to establish business in Indonesia. Our team are equipped to communicate in Mandarin, English and Bahasa Indonesia with experiences on helping numerous customers in various sectors from establishment till ready to start business operation.</p>
                                                        <p >Chinese</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 m-3 my-auto'>


                                                <button className='bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto'>
                                                    <img className='w-8' src="/assets/images/edit-svgrepo-com.svg" alt="" />
                                                </button>


                                            </div>

                                        </div>

                                        <div className='flex bg-slate-300 rounded-md'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12 font-semibold flex justify-start items-center p-2'>

                                                    <p>Address</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <p>Citra garden, Kalideres, Jakarta Barat 11840</p>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 m-3 my-auto'>


                                                <button className='bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto'>
                                                    <img className='w-8' src="/assets/images/edit-svgrepo-com.svg" alt="" />
                                                </button>


                                            </div>

                                        </div>
                                        <div className='flex bg-slate-300 rounded-md'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12 font-semibold flex justify-start items-center p-2'>

                                                    <p>Phone</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <p>0812-1355-1038</p>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 m-3 my-auto'>


                                                <button className='bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto'>
                                                    <img className='w-8' src="/assets/images/edit-svgrepo-com.svg" alt="" />
                                                </button>


                                            </div>

                                        </div>
                                        <div className='flex bg-slate-300 rounded-md'>

                                            <div className='w-full flex'>
                                                <div className='w-2/12  font-semibold flex justify-start items-center p-2'>

                                                    <p>EMail</p>
                                                </div>
                                                <div className='w-8/12 border-s-2  flex justify-start items-center p-2'>

                                                    <p>marketing@.com</p>
                                                </div>

                                            </div>
                                            <div className='w-14  flex gap-3 m-3 my-auto'>


                                                <button className='bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto'>
                                                    <img className='w-8' src="/assets/images/edit-svgrepo-com.svg" alt="" />
                                                </button>


                                            </div>

                                        </div>



                                    </div>



                                </div>



                            </> : comp == 2 ? <>







                            </> : comp == 3 ? <>



                                <div className='p-5'>
                                    <p>Article</p>
                                    <div className="flex py-5">
                                        <button className='bg-blue-500 py-3 px-5 rounded-md text-white font-bold'>New Artivle</button>

                                    </div>
                                    <div className='grid grid-cols-1 gap-5'>

                                        <div className='flex bg-slate-300 rounded-md  font-semibold'>
                                            <div className='p-2 h-full w-[50px] '>No</div>
                                            <div className='p-2 h-full w-[200px] border-s-2'><p>Image</p></div>
                                            <div className='w-full flex'>
                                                <div className='w-4/12 border-s-2  flex justify-start items-center p-2'>

                                                    <p >Title</p>
                                                </div>
                                                <div className='w-6/12 border-s-2  flex justify-start items-center p-2'>

                                                    <p >Content</p>
                                                </div>
                                                <div className=' border-x-2 w-2/12 flex justify-start items-center p-2'>

                                                    <p >Date</p>
                                                </div>
                                            </div>
                                            <div className='w-64  flex gap-3 mx-3 my-auto'>
                                                <p >Actions</p>
                                            </div>

                                        </div>


                                        <div className=' h-[500px] overflow-y-auto'>
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                        </div>


                                    </div>



                                </div>


                            </> : comp == 4 ? <>



                                <div className='p-5'>
                                    <p>Events</p>
                                    <div className="flex py-5">
                                        <button className='bg-blue-500 py-3 px-5 rounded-md text-white font-bold'>New Events</button>

                                    </div>
                                    <div className='grid grid-cols-1 gap-5'>

                                        <div className='flex bg-slate-300 rounded-md  font-semibold'>
                                            <div className='p-2 h-full w-[50px] '>No</div>
                                            <div className='p-2 h-full w-[200px] border-s-2'><p>Image</p></div>
                                            <div className='w-full flex'>
                                                <div className='w-4/12 border-s-2  flex justify-start items-center p-2'>

                                                    <p >Title</p>
                                                </div>
                                                <div className='w-6/12 border-s-2  flex justify-start items-center p-2'>

                                                    <p >Content</p>
                                                </div>
                                                <div className=' border-x-2 w-2/12 flex justify-start items-center p-2'>

                                                    <p >Date</p>
                                                </div>
                                            </div>
                                            <div className='w-64  flex gap-3 mx-3 my-auto'>
                                                <p >Actions</p>
                                            </div>

                                        </div>


                                        <div className=' h-[500px] overflow-y-auto'>
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                            <CrudTable />
                                        </div>


                                    </div>



                                </div>



                            </> : comp == 5 ? <>



                                <div>Pol n Reg</div>


                            </> : <div>0</div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default dashboarAdmin