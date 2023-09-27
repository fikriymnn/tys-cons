'use client';
import CustomFooter from '@/components/CustomFooter';
import NavbarWithCTAButton from '@/components/NavbarWithCTAButton';

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

export default function LoginPage() {
  return (
    <>
      <NavbarWithCTAButton />
      <div className='bg-black  '>
        <div className=' bg-cover bg-[url("/assets/images/login.jpg")] h-screen w-full flex justify-center items-center opacity-30 absolute'></div>
        <div className='h-screen flex justify-center items-center' >
          <div className='w-[700px] mx-5 z-20'>

            <Card >
              <form className="flex flex-col gap-4 ">
                <div>
                  <div className="mb-2 block">
                    <div>
                      <p className='text-blue-500 font-semibold text-2xl mb-5'>Login</p>
                    </div>
                    <Label
                      htmlFor="Email"
                      value="Email"
                    />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="Input Your Email"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="Password"
                      value="Password"
                    />
                  </div>
                  <TextInput
                    id="password"
                    placeholder="Input Your Password"
                    required
                    type="password"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">
                    Remember me
                  </Label>
                </div>
                <Button type="submit" className='bg-blue-500'>
                  Login
                </Button>
                <div className='flex gap-1'>
                  <p>Didnt have an account ?</p>
                  <a href="/register">
                    <p className='font-semibold hover:text-blue-500 duration-100 ease-in-out'>Sign up</p>
                  </a>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  )
}


