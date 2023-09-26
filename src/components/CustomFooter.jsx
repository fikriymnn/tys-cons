'use client';
import React, { } from 'react'
import Image from 'next/image';

const CustomFooter = () => {
    return (
        <div className=' w-full bg-[#031530] '>
            <div className=' md:grid md:grid-cols-3 p-5 sm:p-8 md:p-12 gap-2 items-start'>
                <div className=' mx-auto'>
                    <img src="/assets/images/tys-logo.png" alt="" className=' w-auto h-12' />
                    <p className=' py-4 text-white text-base leading-relaxed font-sans'>TYS Consulting is a Business Consultant with main business in providing one-stop enterprise consultation services for enterprises or individuals who wants to establish business in Indonesia.</p>
                </div>
                <div className=' md:ml-2'>
                    <p className=' uppercase font-bold text-white font-sans '>Contact Us</p>
                    <p className=' text-white pt-3 pb-2'>Citra garden, Kalideres, Jakarta Barat 11840</p>
                    <div className=' flex gap-3 py-2'>
                        <img src="/assets/images/call (2).png" alt="" className='w-5 h-5 my-auto' />
                        <p className=' text-white my-auto'>0812-1355-1038</p>
                    </div>
                    <div className=' flex gap-3 py-2'>
                        <img src="/assets/images/email (4).png" alt="" className='w-5 h-5 my-auto' />
                        <p className=' text-white my-auto'>marketing@.com</p>
                    </div>
                </div>
                <div className=' py-4 md:py-0 px-2'>
                    <p className=' text-white font-bold pb-3'>Our Social Media</p>
                    <div className=' flex gap-4'>
                        <img src="/assets/images/qr-tys.jpg" alt="" className=' w-40' />
                        <div className=' '>
                            <img src="/assets/images/facebook-circular-logo.png" alt="" className=' w-6 h-6 hover:scale-110' />
                            <img src="/assets/images/linkedin.png" alt="" className=' w-6 h-6 hover:scale-110 my-5' />
                            <img src="/assets/images/instagram (2).png" alt="" className=' w-6 h-6 hover:scale-110 mb-5' />
                            <img src="/assets/images/youtube.png" alt="" className=' w-6 h-6 hover:scale-110' />
                        </div>
                    </div>
                </div>
            </div>
            <hr className=' w-full bg-white ' />
            <div className=' md:flex lg:justify-between md:p-5 pt-5  text-center'>
                <span className=' text-white '>Copyright &copy; 2022 tysconsultant.com</span>
                <br />
                <span className=' text-white lg:visible invisible'>Powered by tysconsultant.com</span>
            </div>
        </div>
    )
}

export default CustomFooter