'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Navbar, Dropdown, Item, } from 'flowbite-react';

export default function NavbarWithCTAButton() {
    const [open, setOpen] = useState(false);
    const Dropdown = () => {
        return (
            <div className=' bg-white  absolute mt-10 z-10 shadow-lg '>
                <div className=' py-1 flex gap-1 hover p-2 hover:bg-slate-100'>
                    <Image src={'/assets/images/united-states.png'} width={40} height={10} />
                    <p className=' my-auto'>English</p>
                </div>
                <div className=' py-1 flex gap-1 p-2 hover:bg-slate-100'>
                    <Image src={'/assets/images/china.png'} width={40} height={10} />
                    <p className=' my-auto'>Chinese</p>
                </div>
            </div>
        )
    }
    return (
        <>
            <Navbar className=' fixed justify-beetwen w-full'
                fluid
                rounded
            >
                <Navbar.Brand href="https://flowbite-react.com">
                    {/* <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-6 sm:h-9"
                        src="/favicon.svg"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite React
                    </span> */}
                    <Image src={'/assets/images/tys-logo-blue.png'} width={200} height={125} alt='' />
                </Navbar.Brand>
                <div className="flex md:order-2 gap-4">
                    <Button className=' bg-white rounded-none h-10 hover:bg-black'>
                        <p className=' text-black text-base'>Log in</p>
                    </Button>
                    <Button className=' bg-black rounded-none h-10 hover:bg-white'>
                        <p className=' text-white text-base'>Sign Up</p>
                    </Button>
                    <div className=' my-auto w-auto cursor-pointer flex px-2 gap-2 mr-10 ' onClick={() => setOpen(!open)}>
                        <Image src={'/assets/images/united-states.png'} width={40} height={10} />
                        <p className=' text-base my-auto'>EN</p>
                        {
                            open && <Dropdown />


                        }

                    </div>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="about">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Articles
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Events
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Policies & Regulations
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


