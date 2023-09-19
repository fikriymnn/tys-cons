'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Navbar, Dropdown, Item, } from 'flowbite-react';

export default function NavbarWithCTAButton() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const Dropdown = () => {
        return (
            <div className=' bg-white  absolute mt-10 z-10 shadow-lg '>
                <div className=' py-1 flex gap-1 hover p-2 hover:bg-blue-300'>
                    <Image src={'/assets/images/united-states.png'} width={40} height={10} />
                    <p className=' my-auto'>EN</p>
                </div>
                <div className=' py-1 flex gap-1 p-2 hover:bg-blue-300'>
                    <Image src={'/assets/images/china.png'} width={40} height={10} />
                    <p className=' my-auto'>CN</p>
                </div>
            </div>
        )
    }
    const DropdownServices = () => {
        return (
            <div className=' bg-white absolute mt-10 shadow-md z-10'>
                <div className=' py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600'>
                    <p className=''>Basic Eshtablishment Services</p>
                </div>
                <div className=' py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600'>
                    <p className=''>Product Certifications</p>
                </div>
                <div className=' py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600'>
                    <p className=''>Finance Accounting Tax</p>
                </div>
                <div className=' py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600'>
                    <p className=''>Talent Recruitment HR</p>
                </div>
                <div className=' py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600'>
                    <p className=''>Legal Services</p>
                </div>
            </div>
        )
    }
    return (
        <>
            <Navbar className=' fixed justify-beetwen w-full z-20 shadow-md'
                fluid

            >
                <Navbar.Brand href="/">
                    {/* <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-6 sm:h-9"
                        src="/favicon.svg"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite React
                    </span> */}
                    <img src="/assets/images/tys-logo-blue.png" alt="" className=' md:w-44 md:h-12 sm:w-36 sm:h-10 w-28 h-8' />
                </Navbar.Brand>
                <div className="flex md:order-2 md:gap-4 gap-1">

                    <div className=' my-auto w-auto cursor-pointer flex px-2 gap-2 md:mr-3 ' onClick={() => setOpen1(!open1)}>
                        <Image src={'/assets/images/united-states.png'} width={40} height={10} />
                        <p className=' text-base my-auto'>EN</p>
                        {
                            open1 && <Dropdown />
                        }

                    </div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className=''>
                    <div className='my-auto'>
                        <Navbar.Link
                            active
                            href="/"
                        >
                            <span className=' my-auto md:text-sm '>Home</span>
                        </Navbar.Link>
                    </div>
                    <div className=' my-auto'>
                        <Navbar.Link href="about">
                            <span className=' my-auto md:text-sm '>About</span>
                        </Navbar.Link>
                    </div>
                    <div className=' my-auto hover:text-blue-500' onClick={() => setOpen2(!open2)}>
                        <Navbar.Link href="#" className=' flex gap-1'>
                            <span className=' md:text-sm '>Services</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className=' text-slate-700 w-4 h-4 my-auto ' viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144" /></svg>
                            {
                                open2 && <DropdownServices />
                            }
                        </Navbar.Link>
                    </div>
                    <div className=' my-auto'>
                        <Navbar.Link href="#">
                            <span className='md:text-sm '>Articles</span>
                        </Navbar.Link>
                    </div>
                    <div className=' my-auto'>
                        <Navbar.Link href="#">
                            <span className=' md:text-sm '>Events</span>
                        </Navbar.Link>
                    </div>
                    <div className=' my-auto'>
                        <Navbar.Link href="#">
                            <span className='md:text-sm '>Policies & Regulations</span>
                        </Navbar.Link>
                    </div>
                    <button className=' bg-white rounded-sm p-2 my-auto '>
                        <span className=' text-black md:text-base'>Log in</span>
                    </button>
                    <button className=' bg-black rounded-sm p-2 my-auto '>
                        <span className=' text-white md:text-base'>Sign Up</span>
                    </button>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


