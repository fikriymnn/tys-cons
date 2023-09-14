'use client';
import React, { } from 'react'
import Image from 'next/image';

const CustomFooter = () => {
    return (
        <div className=' w-full bg-sky-950 '>
            <div className=' grid grid-cols-3 p-12 gap-10'>
                <div>
                    <Image src={'/assets/images/tys-logo.png'} width={200} height={75} />
                    <p className=' py-4 text-white text-sm'>TYS Consulting is a Business Consultant with main business in providing one-stop enterprise consultation services for enterprises or individuals who wants to establish business in Indonesia.</p>
                </div>
                <div>
                    <p className=' uppercase font-bold text-white'>Contact Us</p>
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
                <div>
                    <p className=' text-white font-bold'>Our Social Media</p>
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
            <div className=' flex justify-between p-5'>
                <span className=' text-white'>Copyright &copy; 2022 tysconsultant.com</span>
                <span className=' text-white'>Powered by tysconsultant.com</span>
            </div>
        </div>
    )
}

export default CustomFooter