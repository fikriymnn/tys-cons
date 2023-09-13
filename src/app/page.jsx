import React from 'react'
import Image from 'next/image'
import MainCard from '@/components/MainCard'
import CustomCard from '@/components/CustomCard'

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
      <div className='grid grid-cols-3 gap-4 p-10 '>
        <MainCard icon={"/assets/images/icontools2.png"} title={"Basic Establishment Services"} text1={"Company Registration"} text2={"Visa Registration"} text3={"Trademark"} text4={"Office Administration"} text5={"Construction Certifications"} text6={"Factory Licenses"} />
        <MainCard icon={"/assets/images/bag.png"} title={"Product Certifications"} text1={"BPOM Food and Drug"} text2={"ISO Management System"} text3={"SNI National Standard"} text4={"Medical and Hygiene"}
          text5={"POSTEL Telecommunication"} text6={"Alcohol And Cigarette"} text7={"Other Certification"} />
        <MainCard icon={"/assets/images/dollar.png"} title={"Finance Accounting Tax"} text1={"Finance Services"} text2={"Accounting Services"} text3={"Tax Services"} />
        <MainCard icon={"/assets/images/bag2.png"} title={"Talent Recruitment HR"} text1={"Translator Assistant"} text2={"Finance Accounting Tax"} text3={"Marketing Sales"} text4={"Management Candidate"} text5={"HR Management Service"} />
        <MainCard icon={"/assets/images/file.png"} title={"Legal Services"} text1={"Legal Administration"} />
      </div>
      <p className='font-bold text-3xl text-center py-10 '>Latest Articles</p>
      <div className='grid grid-cols-3 gap-4'>
        <CustomCard />
        <CustomCard />
      </div>
    </>
  )
}

export default Home