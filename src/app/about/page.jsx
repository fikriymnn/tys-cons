'use client';
import React from 'react'
import Iframe from 'react-iframe'
import Image from 'next/image'



const About = () => {
    return (
        <div className=' px-5 md:px-16 sm:px-10 pt-24 '>
            <p className='text-blue-800 text-3xl font-semibold pb-4 font-sans'>
                About Us
            </p>
            <p className=' text-lg font-sans'>
                TYS Consulting is a Business Consultant with main business in providing one-stop enterprise consultation services for enterprises or individuals who wants to establish business in Indonesia. Our team are equipped to communicate in Mandarin, English and Bahasa Indonesia with experiences on helping numerous customers in various sectors from establishment till ready to start business operation.
            </p>
            <div className='md:grid md:grid-cols-2 py-10 gap-2 '>
                <div>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126941.19501629066!2d106.73087!3d-6.142476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7fc6ab10259%3A0x8b5219b3d0af9b39!2sCitra%20Garden%20City%2C%20West%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1694419390459!5m2!1sen!2sid"
                        width=""
                        height=""
                        id=""
                        className="w-full h-80 md:pr-4"
                        display="block"
                        position="" />
                    <div className='flex gap-4'>
                        <Image src={'/assets/images/map (1).png'} width={25} height={25} alt='' className='py-4' />
                        <p className=' my-auto'>Citra garden, Kalideres, Jakarta Barat 11840</p>
                    </div>
                    <div className='flex gap-4'>
                        <Image src={'/assets/images/call (1).png'} width={25} height={25} alt='' className=' py-4' />
                        <p className=' my-auto'>0812-1355-1038</p>
                    </div>
                    <div className='flex gap-4'>
                        <Image src={'/assets/images/email (3).png'} width={25} height={25} alt='' className=' py-4' />
                        <p className=' my-auto'>marketing@.com</p>
                    </div>
                </div>
                <div>
                    <div className=''>
                        <h1 className=' text-md pb-3'>Name</h1>
                        <input type="text" placeholder='Input your name' color=' bg-transparent' className=' rounded-lg w-full border-slate-300 ' />
                    </div>
                    <div className=' py-5'>
                        <h1 className=' text-md pb-3'>Email</h1>
                        <input type="text" placeholder='Input your name' color=' bg-transparent' className=' rounded-lg w-full border-slate-300 ' />
                    </div>
                    <div className=''>
                        <h1 className=' text-md pb-3'>Phone Number</h1>
                        <input type="text" placeholder='Input your name' color=' bg-transparent' className=' rounded-lg w-full border-slate-300 ' />
                    </div>
                    <div className=' py-5'>
                        <h1 className=' text-md pb-3'>Message</h1>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Input your message' color=' bg-transparent' className=' w-full resize-none rounded-lg border-slate-300 ' maxLength={100}></textarea>
                    </div>
                    <a href="">
                        <div className=' w-full h-12 bg-blue-600 hover:bg-blue-500'>
                            <p className=' text-white text-center my-auto py-3'>Send Message</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About

