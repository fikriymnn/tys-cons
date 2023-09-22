import React from 'react'
import Image from 'next/image'
import MainCard from '@/components/MainCard'
import CustomCard from '@/components/CustomCard'
import CardTwo from '@/components/CardTwo'
import MultipleCarousel from '@/components/MultipleCarousel'
import Link from 'next/link'

const Home = () => {
  return (
    <>

      <div className='bg-black'>
        <div className='w-full h-screen bg-cover bg-[url("/assets/images/bgtys.png")] absolute opacity-30 md:opacity-30'></div>
        <div className='w-full h-screen md:grid md:grid-cols-2 ' >
          <div className='md:ml-10 md:pl-20 px-10 pt-32 z-30 md:z-30'>
            <div className='text-white flex items-center font-extrabold md:text-4xl py-5 z-20 md:z-20 text-2xl leading-loose tracking-wide'>

              <p>Establish Your Business in Indonesia Conveniently</p>
            </div>
            <div className='text-white flex items-center pb-5 '>TYS Consulting is a Business Consultant with main business in providing one-stop enterprise consultation services for enterprises or individuals who wants to establish business in Indonesia. Our team are equipped to communicate in Mandarin, English and Bahasa Indonesia with experiences on helping numerous customers in various sectors from establishment till ready to start business operation.</div>
            <a className='py-10' href="">
              <div className='text-white bg-blue-700 p-2 w-28 mt-5'>
                <p className='flex items-center my-auto text-center '>Get Started</p>
              </div>
            </a>
          </div>

        </div>

      </div>
      <p className='font-bold text-3xl text-center py-10'>What Services We Offer</p>
      <div className='md:grid md:grid-cols-3 grid-cols-1 gap-4 md:p-10 py-10 p-5 '>
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
      <div className='md:grid md:grid-cols-3 gap-4 py-4 px-5'>
        <CustomCard text={"Lorem Ipsum is simply dummy text of the printing a.."} isi={"1 December 2022"} isi2={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} />
        <CustomCard text={"Article"} isi={"1 December 2022"} isi2={"lorem ipsum dolor sit amet"} />

        <a href="">
          <div className='cursor-pointer border-b-[2px] border-[#031530] pb-3'>
            <div className='font-semibold text-xl hover:underline'>Lorem Ipsum is simply dummy text of the printing and</div>
            <h1>1 December 2022</h1>
          </div>
          <div className='cursor-pointer border-b-[2px] border-[#031530] pb-3'>
            <div className='font-semibold text-xl hover:underline'>Article...</div>
            <h1>1 December 2022</h1>
          </div>
          <div className='mt-2 lg:mt-auto text-primary font-semibold cursor-pointer flex items-center lg:justify-center space-x-1 text-blue-600 p-28'>
            <p>View More Articles</p>
          </div>



        </a>
      </div>
      <div className='bg-slate-100 w-full py-4 mt-6'>
        <p className='font-bold text-3xl text-center py-10 '>Choose The Best Package You Need</p>
        <div className='bg-slate-100 w-full py-4 mt-6 md:grid md:grid-cols-3 gap-3 p-5'>
          <CardTwo title={"Pendirian PT PMA Complete"} price={"RP.15.000.00"} text1={"Package Includes:"} text2={"Brand Perfomance Analytics"} text3={"Daily Prices Change Notifications"} text4={"Marketplace Price Tracking"} text5={"Stock Availability Monitoring"} text6={"Marketplace Price Tracking"} />
          <CardTwo title={"Pendirian PT PMA Complete"} price={"RP.15.000.00"} text1={"Package Includes:"} text2={"Brand Perfomance Analytics"} text3={"Daily Prices Change Notifications"} text4={"Marketplace Price Tracking"} text5={"Stock Availability Monitoring"} text6={"Marketplace Price Tracking"} />
          <CardTwo title={"Pendirian PT PMA Complete"} price={"RP.15.000.00"} text1={"Package Includes:"} text2={"Brand Perfomance Analytics"} text3={"Daily Prices Change Notifications"} text4={"Marketplace Price Tracking"} text5={"Stock Availability Monitoring"} text6={"Marketplace Price Tracking"} />
        </div>
      </div>
      <div className='bg-white w-full'>
        <p className='font-bold text-3xl text-center py-10 pb-10'>Our Client</p>
        <MultipleCarousel />
      </div>

    </>
  )
}

export default Home