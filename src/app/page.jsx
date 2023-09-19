import React from 'react'
import Image from 'next/image'
import MainCard from '@/components/MainCard'
import CustomCard from '@/components/CustomCard'
import CardTwo from '@/components/CardTwo'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div className='bg-black z-0'>
        <div className='w-full h-screen z-10 bg-cover bg-[url("/assets/images/bgtys.png")] absolute opacity-30'></div>
        <div className='w-full h-screen grid grid-cols-2 flex justify-center items-center' >
          <div className='ml-10 px-5 pl-20 pt-32'>
            <div className='text-white flex items-center font-extrabold text-4xl py-5 z-10'>
              <p>Establish Your Business in Indonesia Conveniently</p>
            </div>
            <div className='text-white flex items-center '>TYS Consulting is a Business Consultant with main business in providing one-stop enterprise consultation services for enterprises or individuals who wants to establish business in Indonesia. Our team are equipped to communicate in Mandarin, English and Bahasa Indonesia with experiences on helping numerous customers in various sectors from establishment till ready to start business operation.</div>
            <a className='py-10' href="">
              <div className='text-white bg-blue-700 p-2 w-28 mt-5'>
                <p className='flex items-center my-auto text-center '>Get Started</p>
              </div>
            </a>
          </div>

        </div>

      </div>
      <p className='font-bold text-3xl text-center py-10'>What Services We Offer</p>
      <div className='grid grid-cols-3 gap-4 p-10 '>
        <Link href="/services/basicEstablish">

          <MainCard icon={"/assets/images/icontools2.png"} title={"Basic Establishment Services"} text1={"Company Registration"} clickText1={"/services/basicEstablish/"} clickText2={"/services/basicEstablish/"} clickText3={"/services/basicEstablish/"} clickText4={"/services/basicEstablish/"} clickText5={"/services/basicEstablish/"} clickText6={"/services/basicEstablish/"} clickText7={"/services/basicEstablish/"} text2={"Visa Registration"} text3={"Trademark"} text4={"Office Administration"} text5={"Construction Certifications"} text6={"Factory Licenses"} />
        </Link>
        <Link href="/services/productCertifications">

          <MainCard icon={"/assets/images/bag.png"} title={"Product Certifications"} clickText1={"/services/basicEstablish/"} clickText2={"/services/basicEstablish/"} clickText3={"/services/basicEstablish/"} clickText4={"/services/basicEstablish/"} clickText5={"/services/basicEstablish/"} clickText6={"/services/basicEstablish/"} clickText7={"/services/basicEstablish/"} text1={"BPOM Food and Drug"} text2={"ISO Management System"} text3={"SNI National Standard"} text4={"Medical and Hygiene"}
            text5={"POSTEL Telecommunication"} text6={"Alcohol And Cigarette"} text7={"Other Certification"} />
        </Link>
        <Link href="/services/financeAccountingTax">

          <MainCard icon={"/assets/images/dollar.png"} title={"Finance Accounting Tax"} clickText1={"/services/basicEstablish/"} clickText2={"/services/basicEstablish/"} clickText3={"/services/basicEstablish/"} text1={"Finance Services"} text2={"Accounting Services"} text3={"Tax Services"} />
        </Link>
        <Link href="/services/TalentRecruitmentHR">

          <MainCard icon={"/assets/images/bag2.png"} title={"Talent Recruitment HR"} clickText1={"/services/basicEstablish/"} clickText2={"/services/basicEstablish/"} clickText3={"/services/basicEstablish/"} clickText4={"/services/basicEstablish/"} clickText5={"/services/basicEstablish/"} text1={"Translator Assistant"} text2={"Finance Accounting Tax"} text3={"Marketing Sales"} text4={"Management Candidate"} text5={"HR Management Service"} />
        </Link>
        <Link href="/services/LegalServeces">

          <MainCard icon={"/assets/images/file.png"} clickText1={"/services/basicEstablish/"} title={"Legal Services"} text1={"Legal Administration"} />
        </Link>
      </div>
      <p className='font-bold text-3xl text-center py-10 '>Latest Articles</p>
      <div className='grid grid-cols-3 gap-4'>
        <a href="/articles/article">

          <CustomCard text={"Lorem Ipsum is simply dummy text of the printing a.."} isi={"1 December 2022"} isi2={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} />
        </a>
        <a href="/articles/article">

          <CustomCard text={"Article"} isi={"1 December 2022"} isi2={"lorem ipsum dolor sit amet"} />
        </a>
        <a href="">
          <div className='cursor-pointer border-b-[2px] border-[#031530] pb-3'>
            <div className='font-bold text-xl hover:underline'>Lorem Ipsum is simply dummy text of the printing and</div>
            <h1>1 December 2022</h1>
          </div>
          <div className='cursor-pointer border-b-[2px] border-[#031530] pb-3'>
            <div className='font-bold text-xl hover:underline '>Article...</div>
            <h1>1 December 2022</h1>
          </div>
          <div className='class="mt-2 lg:mt-auto text-primary font-semibold cursor-pointer flex items-center lg:justify-center space-x-1'>
            <p>View More Articles</p>
          </div>



        </a>
      </div>
      <div className='bg-slate-100 w-full py-4 mt-6'>
        <p className='font-bold text-3xl text-center py-10 '>Choose The Best Package You Need</p>
        <div className='bg-slate-100 w-full py-4 mt-6 grid grid-cols-3 gap-3 p-5'>
          <CardTwo title={"Pendirian PT PMA Complete"} price={"RP.15.000.00"} text1={"Package Includes:"} text2={"Brand Perfomance Analytics"} text3={"Daily Prices Change Notifications"} text4={"Marketplace Price Tracking"} text5={"Stock Availability Monitoring"} text6={"Marketplace Price Tracking"} />
          <CardTwo title={"Pendirian PT PMA Complete"} price={"RP.15.000.00"} text1={"Package Includes:"} text2={"Brand Perfomance Analytics"} text3={"Daily Prices Change Notifications"} text4={"Marketplace Price Tracking"} text5={"Stock Availability Monitoring"} text6={"Marketplace Price Tracking"} />
          <CardTwo title={"Pendirian PT PMA Complete"} price={"RP.15.000.00"} text1={"Package Includes:"} text2={"Brand Perfomance Analytics"} text3={"Daily Prices Change Notifications"} text4={"Marketplace Price Tracking"} text5={"Stock Availability Monitoring"} text6={"Marketplace Price Tracking"} />
        </div>
      </div>
    </>
  )
}

export default Home