import React from 'react'
import Image from 'next/image'
import MainCard from '@/components/MainCard'

const Home = () => {
  return (
    <>
      <div className='w-full h-screen bg-cover bg-[url("/assets/images/bgtys.png")] bg-black opacity-100 grid grid-cols-2' >
        <div className='ml-10 px-5'>
          <div className='text-white flex items-center py-20 p-5 font-extrabold text-4xl'>
            <p>Establish Your Business in Indonesia Conveniently</p>
          </div>
          <div className='text-white flex items-center '>TYS Consulting is a Business Consultant with main business in providing one-stop enterprise consultation services for enterprises or individuals who wants to establish business in Indonesia. Our team are equipped to communicate in Mandarin, English and Bahasa Indonesia with experiences on helping numerous customers in various sectors from establishment till ready to start business operation.</div>
          <a className='py-10' href="">
            <div className='text-white bg-blue-700 h-10 w-28 flex items-center text-center'>Get Started</div>
          </a>
        </div>

      </div>
      <p className='font-bold text-3xl text-center py-10'>What Services We Offer</p>
      <div className='grid grid-cols-3 gap-4 '>
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
    </>
  )
}

export default Home