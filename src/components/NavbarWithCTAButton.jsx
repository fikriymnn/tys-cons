'use client';
import Image from 'next/image';

import { useState } from 'react';
import { Button, Navbar, Dropdown, Item, } from 'flowbite-react';
import { useRouter } from 'next/router';

export default function NavbarWithCTAButton({ height }) {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);


    const [navbar, SetNavbar] = useState(false);
    const ChangeBG = () => {
        if (window.scrollY <= height) {
            SetNavbar(true)
        } else {
            SetNavbar(false)
        }

    }
    window.addEventListener('scroll', ChangeBG)

    const DropdownServices = () => {
        return (
            <div className=' bg-white absolute mt-10 shadow-md z-10'>
                <a href="/services/basicEstablish">

                    <div className=' py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600'>
                        <p className=''>Basic Eshtablishment Services</p>
                    </div>
                </a>
                <a href="/services/productCertifications">

                    <div className=' py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600'>
                        <p className=''>Product Certifications</p>
                    </div>
                </a>
                <a href="/services/financeAccountingTax">

                    <div className=' py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600'>
                        <p className=''>Finance Accounting Tax</p>
                    </div>
                </a>
                <a href="/services/TalentRecruitmentHR">

                    <div className=' py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600'>
                        <p className=''>Talent Recruitment HR</p>
                    </div>
                </a>
                <a href="/services/LegalServices">

                    <div className=' py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600'>
                        <p className=''>Legal Services</p>
                    </div>
                </a>
            </div>
        )
    }
    return (
        <>
            <Navbar className={navbar ? 'bg-white opacity-40 fixed w-full md:py-5 sm:py-5 py-7 z-10 shadow-md top-0 ' : ' fixed w-full md:py-5 sm:py-5 py-7 z-10 shadow-md top-0 bg-white'}
                fluid

            >
                <Navbar.Brand href="/" className='z-40  '>

                    <img src="/assets/images/tys-logo-blue.png" alt="" className=' md:w-52 md:h-12 sm:w-36 sm:h-10 w-44 opacity-100' />
                </Navbar.Brand>
                <div className="flex md:order-3 gap-1 z-40 ">

                    <div className=' my-auto w-auto cursor-pointer flex px-2 gap-2 md:mr-3 ' >
                        <Image src={'/assets/images/united-states.png'} width={40} height={10} />
                        <p className=' text-base my-auto'>EN</p>


                    </div>
                    <div className=' my-auto w-auto cursor-pointer flex px-2 gap-2 md:mr-3 ' >
                        <Image src={'/assets/images/China.png'} width={40} height={10} />
                        <p className=' text-base my-auto'>语言</p>


                    </div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className=' md:order-1 z-40  '>
                    <div className='my-auto '>
                        <Navbar.Link

                            href="/"
                        >
                            <span className=' my-auto md:text-sm '>Home</span>
                        </Navbar.Link>
                    </div>
                    <div className=' my-auto'>
                        <Navbar.Link href="/about">
                            <span className=' my-auto md:text-sm '>About Us</span>
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
                        <Navbar.Link href="/articles">
                            <span className='md:text-sm '>Articles</span>
                        </Navbar.Link>
                    </div>
                    <div className=' my-auto'>
                        <Navbar.Link href="/events">
                            <span className=' md:text-sm '>Events</span>
                        </Navbar.Link>
                    </div>
                    <div className=' my-auto'>
                        <Navbar.Link href="/policies">
                            <span className='md:text-sm '>Policies & Regulations</span>
                        </Navbar.Link>
                    </div>

                </Navbar.Collapse>

            </Navbar>
        </>
    )
}


