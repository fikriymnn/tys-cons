'use client';

import { Button, Navbar } from 'flowbite-react';

export default function NavbarWithCTAButton() {
    return (
        <>
            <Navbar
                fluid
                rounded
            >
                <Navbar.Brand href="https://flowbite-react.com">
                    {/* <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-6 sm:h-9"
                        src="/favicon.svg"
                    /> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite React
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>
                        Login
                    </Button>
                    <Navbar.Toggle />
                </div>
                <div className="flex md:order-2">
                    <Button>
                        Sign Up
                    </Button>
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


