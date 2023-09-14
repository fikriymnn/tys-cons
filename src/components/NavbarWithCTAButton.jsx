'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Navbar, Dropdown, Item, } from 'flowbite-react';

export default function NavbarWithCTAButton() {
    const [open, setOpen] = useState(false);
    const Dropdown = () => {
        return (
            <div className=' bg-white  absolute mt-10 z-10 shadow-lg '>
                <div className=' py-1 flex gap-1 hover p-2 hover:bg-blue-300'>
                    <Image src={'/assets/images/united-states.png'} width={40} height={10} />
                    <p className=' my-auto'>English</p>
                </div>
                <div className=' py-1 flex gap-1 p-2 hover:bg-blue-300'>
                    <Image src={'/assets/images/china.png'} width={40} height={10} />
                    <p className=' my-auto'>Chinese</p>
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
                    <img src="/assets/images/tys-logo-blue.png" alt="" className=' md:w-52 md:h-14 w-36 h-10' />
                </Navbar.Brand>
                <div className="flex md:order-2 md:gap-4 gap-1">

                    <div className=' my-auto w-auto cursor-pointer flex px-2 gap-2 md:mr-10 ' onClick={() => setOpen(!open)}>
                        <Image src={'/assets/images/united-states.png'} width={40} height={10} />
                        <p className=' text-base my-auto'>EN</p>
                        {
                            open && <Dropdown />
                        }

                    </div>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse className=' my-auto'>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <span className=' my-auto text-base'>Home</span>
                    </Navbar.Link>
                    <Navbar.Link href="about">
                        <span className=' my-auto text-base'>About</span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span className=' text-base'>Services</span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span className=' text-base'>Articles</span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span className=' text-base'>Events</span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span className='text-base'>Policies & Regulations</span>
                    </Navbar.Link>
                    <Button className=' bg-white rounded-sm md:h-10 my-auto'>
                        <span className=' text-black md:text-base'>Log in</span>
                    </Button>
                    <Button className=' bg-black rounded-sm md:h-10 my-auto'>
                        <span className=' text-white md:text-base'>Sign Up</span>
                    </Button>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


