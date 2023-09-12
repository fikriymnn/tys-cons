'use client';
import Image from 'next/image';

import { Button, Navbar, Dropdown, Item } from 'flowbite-react';

export default function NavbarWithCTAButton() {
    const Menus = ["English", "Chinese"];
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
                    <Button className=' bg-transparent border'>
                        <p className=' text-black text-base'>Log in</p>
                    </Button>
                    <Button className=' bg-black rounded-none h-10'>
                        <p className=' text-white text-base'>Sign Up</p>
                    </Button>
                    <div className=' my-auto w-16' >
                        <p className=' cursor-pointer pb-4'>language</p>
                        <div className=' bg-white shadow-lg w-32 p-4 absolute right-4'>
                            <ul>
                                {Menus.map((menu) => (
                                    <li key={menu}>{menu}</li>
                                ))}
                            </ul>
                        </div>
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


