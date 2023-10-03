import React from "react";
import Image from "next/image";
import MainCard from "@/components/MainCard";
import CustomCard from "@/components/CustomCard";
import CardTwo from "@/components/CardTwo";
import MultipleCarousel from "@/components/MultipleCarousel";
import Link from "next/link";
import Hidden from "@/components/hidden";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import CustomFooter from "@/components/CustomFooter";

const Home = () => {
  return (
    <>
      <div className="z-40">
        <NavbarWithCTAButton height={500} />
      </div>
      <div className="bg-black">
        <div className='w-full h-screen bg-cover bg-[url("/assets/images/bgtys.png")] absolute opacity-40 md:opacity-40'></div>
        <div className="w-full h-screen md:grid md:grid-cols-2 flex items-center justify-center">
          <div className="md:ml-14 md:pl-20 sm:px-10 px-10 md:px-0 pt-32 z-10">
            <div className="text-white flex items-center font-semibold md:text-[38px] py-5 z-20 text-2xl  ">
              <p className="leading-normal tracking-wide">
                Establish Your Business in Indonesia Conveniently
              </p>
            </div>
            <div className="text-white flex items-center pb-5 leading-normal tracking-wide md:text-[17px]">
              TYS Consulting is a Business Consultant with main business in
              providing one-stop enterprise consultation services for
              enterprises or individuals who wants to establish business in
              Indonesia. Our team are equipped to communicate in Mandarin,
              English and Bahasa Indonesia with experiences on helping numerous
              customers in various sectors from establishment till ready to
              start business operation.
            </div>
            <a className="py-10" href="">
              <div className="text-white bg-primary p-3 w-36 mt-5 flex items-center justify-center">
                <p className=" my-auto text-center ">
                  GET STARTED
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <p className="font-semibold text-3xl text-center pt-14 pb">
        What Services We Offer
      </p>
      <div className="md:gri sm:grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:pb-10 md:pt-6 md:px-10 pb-10 ">
        <Link href="/services/basicEstablish">
          <MainCard
            icon1={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="service-icon icon-effect h-[2rem] lg:h-[2.5rem] w-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                ></path>
              </svg>
            }
            title={"Basic Establishment Services"}
            text1={"Company Registration"}
            text2={"Visa Registration"}
            text3={"Trademark"}
            text4={"Office Administration"}
            text5={"Construction Certifications"}
            text6={"Factory Licenses"}
          />
        </Link>
        <Link href="/services/productCertifications">
          <MainCard
            icon2={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="service-icon icon-effect h-[2rem] lg:h-[2.5rem] w-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                ></path>
              </svg>
            }
            title={"Product Certifications"}
            clickText1={"/services/basicEstablish/"}
            clickText2={"/services/basicEstablish/"}
            clickText3={"/services/basicEstablish/"}
            clickText4={"/services/basicEstablish/"}
            clickText5={"/services/basicEstablish/"}
            clickText6={"/services/basicEstablish/"}
            clickText7={"/services/basicEstablish/"}
            text1={"BPOM Food and Drug"}
            text2={"ISO Management System"}
            text3={"SNI National Standard"}
            text4={"Medical and Hygiene"}
            text5={"POSTEL Telecommunication"}
            text6={"Alcohol And Cigarette"}
            text7={"Other Certification"}
          />
        </Link>
        <Link href="/services/financeAccountingTax">
          <MainCard
            icon3={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="service-icon icon-effect h-[2rem] lg:h-[2.5rem] w-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            }
            title={"Finance Accounting Tax"}
            clickText1={"/services/basicEstablish/"}
            clickText2={"/services/basicEstablish/"}
            clickText3={"/services/basicEstablish/"}
            text1={"Finance Services"}
            text2={"Accounting Services"}
            text3={"Tax Services"}
          />
        </Link>
        <Link href="/services/TalentRecruitmentHR">
          <MainCard
            icon4={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="service-icon icon-effect h-[2rem] lg:h-[2.5rem] w-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
            }
            title={"Talent Recruitment HR"}
            clickText1={"/services/basicEstablish/"}
            clickText2={"/services/basicEstablish/"}
            clickText3={"/services/basicEstablish/"}
            clickText4={"/services/basicEstablish/"}
            clickText5={"/services/basicEstablish/"}
            text1={"Translator Assistant"}
            text2={"Finance Accounting Tax"}
            text3={"Marketing Sales"}
            text4={"Management Candidate"}
            text5={"HR Management Service"}
          />
        </Link>
        <Link href="/services/LegalServeces">
          <MainCard
            icon5={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="service-icon icon-effect h-[2rem] lg:h-[2.5rem] w-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                ></path>
              </svg>
            }
            clickText1={"/services/basicEstablish/"}
            title={"Legal Services"}
            text1={"Legal Administration"}
          />
        </Link>
      </div>
      <p className="font-semibold text-3xl text-center py-5 ">Latest Articles</p>
      <div className="md:grid md:grid-cols-3 gap-4 py-4 px-10">
        <CustomCard
          text={"Lorem Ipsum is simply dummy text of the printing a.."}
          isi={"1 December 2022"}
          isi2={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
        <CustomCard
          text={"Lorem Ipsum is simply dummy text of the printing a.."}
          isi={"1 December 2022"}
          isi2={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}
        />

        <a href="">
          <div className="cursor-pointer border-b-[2px] border-[#031530] pb-3">
            <div className="font-semibold text-xl hover:underline">
              Lorem Ipsum is simply dummy text of the printing and
            </div>
            <h1>1 December 2022</h1>
          </div>
          <div className="cursor-pointer border-b-[2px] border-[#031530] pb-3">
            <div className="font-semibold text-xl hover:underline">
              Article...
            </div>
            <h1>1 December 2022</h1>
          </div>
          <div className="mt-2 lg:mt-auto text-primary font-medium cursor-pointer flex items-center lg:justify-center bottom-0 space-x-1 text-blue-600 p-28">
            <p>View More Articles </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-[1rem] w-auto mt-1"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
          </div>
        </a>
      </div>
      <div className="bg-slate-100 w-full py-4 mt-6">
        <p className="font-semibold text-3xl text-center pt-10 ">
          Choose The Best Package You Need
        </p>
        <div className="bg-slate-100 w-full pt-4 mt-6 md:grid md:grid-cols-3 gap-3 px-12">
          <CardTwo
            title={"Pendirian PT PMA Complete"}
            price={"RP.15.000.00"}
            text1={"Package Includes:"}
            text2={"Brand Perfomance Analytics"}
            text3={"Daily Prices Change Notifications"}
            text4={"Marketplace Price Tracking"}
            text5={"Stock Availability Monitoring"}
            text6={"Marketplace Price Tracking"}
          />
          <CardTwo
            title={"Pendirian PT PMA Complete"}
            price={"RP.15.000.00"}
            text1={"Package Includes:"}
            text2={"Brand Perfomance Analytics"}
            text3={"Daily Prices Change Notifications"}
            text4={"Marketplace Price Tracking"}
            text5={"Stock Availability Monitoring"}
            text6={"Marketplace Price Tracking"}
          />
          <CardTwo
            title={"Pendirian PT PMA Complete"}
            price={"RP.15.000.00"}
            text1={"Package Includes:"}
            text2={"Brand Perfomance Analytics"}
            text3={"Daily Prices Change Notifications"}
            text4={"Marketplace Price Tracking"}
            text5={"Stock Availability Monitoring"}
            text6={"Marketplace Price Tracking"}
          />
        </div>
        <div className="pb-24 pt-10 px-12">
          <div className="flex items-center justify-center font-medium text-blue-600 text-xl">
            <a href="/packages">See More Packages</a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" aria-hidden="true" class="h-[1rem] w-auto mt-1"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
          </div>

        </div>
      </div>
      <div className="bg-white w-full">
        <p className="font-semibold text-3xl text-center py-10 pb-10">Our Clients</p>
        <MultipleCarousel />
      </div>
      <CustomFooter />
    </>
  );
};

export default Home;
