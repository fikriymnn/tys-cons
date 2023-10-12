"use client";
import React from "react";
import Image from "next/image";
import MainCard from "@/components/MainCard";
import CustomCard from "@/components/CustomCard";
// import CardTwo from "@/components/CardTwo";
import MultipleCarousel from "@/components/MultipleCarousel";
import Link from "next/link";

import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import CustomFooter from "@/components/CustomFooter";
import { Carousel } from "flowbite-react";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  getDoc,
  deleteDoc,
  updateDoc,
  doc,
  Firestore,
  orderBy,
  limit,
} from "firebase/firestore";
import { db, storage, firebaseAnalytics } from "../../firebase/page";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

const Home = () => {
  const { language, changeLanguage } = useLanguage();
  const [dataHeading, setDataHeading] = useState([]);
  const [dataParagraph, setDataParagraph] = useState([]);
  const [dataArticle, setDataArticle] = useState([]);
  const [dataArticle4, setDataArticle4] = useState([]);
  const [dataPackage, setDataPackage] = useState([]);

  useEffect(() => {
    getHeading();
    getDataHomeParagraph();
    getDataArticles();
    getDataArticles4();
    getDataPackage();
  }, []);

  async function getHeading() {
    try {
      const docRef = doc(db, "editHomePage", "heading");
      const querySnapshot = await getDoc(docRef);
      let data = [];
      data.push(querySnapshot.data());
      setDataHeading(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataHomeParagraph() {
    try {
      const docRef = doc(db, "editHomePage", "paragraph");
      const querySnapshot = await getDoc(docRef);
      let data = [];
      data.push(querySnapshot.data());
      setDataParagraph(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataArticles() {
    try {
      const ordersRef = collection(db, "articles");
      const q = query(ordersRef, orderBy("date", "desc"), limit(2));
      const querySnapshot = await getDocs(q);
      let data = [];

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        data.push({ ...doc.data(), id: doc.id });
        setDataArticle(data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataArticles4() {
    try {
      const ordersRef = collection(db, "articles");
      const q = query(ordersRef, orderBy("date", "desc"), limit(4));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        data.push({ ...doc.data(), id: doc.id });
        setDataArticle4(data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataPackage() {
    try {
      const ordersRef = collection(db, "package");
      const q = query(ordersRef, orderBy("date", "desc"), limit(3));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach(async (doc) => {
        // doc.data() is never undefined for query doc snapshots

        data.push({ ...doc.data(), id: doc.id });
        setDataPackage(data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="z-40">
        <NavbarWithCTAButton height={500} />
      </div>
      <div className="bg-black">
        <div className='w-full h-screen bg-cover bg-[url("/assets/images/bgtys.png")] absolute opacity-40 md:opacity-40'></div>
        <div className="w-full h-screen md:grid md:grid-cols-2 flex items-center justify-center ">
          <div className="md:ml-14 md:pl-20 sm:px-10 px-10 md:px-0  z-10">
            <div className="text-white flex items-center font-semibold md:text-[35px] pb-3 z-20 text-2xl  ">
              {dataHeading.map((data, i) => {
                return (
                  <>
                    <p className="leading-relaxed tracking-wide">
                      {language == "en" ? data.english : data.chinese}
                    </p>
                  </>
                );
              })}
            </div>
            {dataParagraph.map((data, i) => {
              return (
                <>
                  <div className="text-white flex items-center pb-5 leading-relaxed tracking-wide md:text-[17.2px]">
                    {language == "en" ? data.english : data.chinese}
                  </div>
                </>
              );
            })}

            <a className="py-10" href="#getstart">
              <div className="text-white bg-primary p-3 w-36 mt-5 flex items-center justify-center">
                <p className=" my-auto text-center ">GET STARTED</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <p className="font-semibold text-3xl text-center pt-14 pb">
        {language == "en" ? "What Services We Offer" : "我们提供的服务"}
      </p>
      <div
        id="getstart"
        className="md:gri sm:grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:pb-10 md:pt-6 md:px-10 pb-10 px-7 py-7"
      >
        <Link href="/services/basicEstablish">
          <MainCard
            icon1={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="service-icon icon-effect h-[2rem] lg:h-[2.5rem] w-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                ></path>
              </svg>
            }
            title={
              language == "en" ? "Basic Establishment Services" : "基础服务"
            }
            text1={language == "en" ? "Company Registration" : "公司注册"}
            text2={language == "en" ? "Visa Registration" : "签证办理"}
            text3={language == "en" ? "Trademark" : "商标"}
            text4={language == "en" ? "Office Administration" : "行政办公"}
            text5={
              language == "en" ? "Construction Certifications" : "建筑工程"
            }
            text6={language == "en" ? "Factory Licenses" : "工厂许可"}
          />
        </Link>
        <Link href="/services/productCertifications">
          <MainCard
            icon2={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="service-icon icon-effect h-[2rem] lg:h-[2.5rem] w-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                ></path>
              </svg>
            }
            title={language == "en" ? "Product Certification" : "产品认证"}
            clickText1={"/services/basicEstablish/"}
            clickText2={"/services/basicEstablish/"}
            clickText3={"/services/basicEstablish/"}
            clickText4={"/services/basicEstablish/"}
            clickText5={"/services/basicEstablish/"}
            clickText6={"/services/basicEstablish/"}
            clickText7={"/services/basicEstablish/"}
            text1={language == "en" ? "BPOM Food and Drug" : "BPOM 食药化妆"}
            text2={language == "en" ? "ISO Management System" : "ISO 管理体系"}
            text3={language == "en" ? "SNI National Standard" : "SNI 国家标准"}
            text4={language == "en" ? "Medical and Hygiene" : "医疗卫生 PKRT"}
            text5={
              language == "en" ? "POSTEL Telecommunication" : "POSTEL 电通信"
            }
            text6={language == "en" ? "Alcohol And Cigarette" : "酒和烟证"}
            text7={language == "en" ? "Other Certification" : "其他证"}
          />
        </Link>
        <Link href="/services/financeAccountingTax">
          <MainCard
            icon3={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="service-icon icon-effect h-[2rem] lg:h-[2.5rem] w-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            }
            title={language == "en" ? "Finance Acounting Tax" : "财税会计服务"}
            clickText1={"/services/basicEstablish/"}
            clickText2={"/services/basicEstablish/"}
            clickText3={"/services/basicEstablish/"}
            text1={language == "en" ? "Finance Services" : "财务服务"}
            text2={language == "en" ? "Accounting Services" : "会计服务"}
            text3={language == "en" ? "Tax Services" : "税务服务"}
          />
        </Link>
        <Link href="/services/TalentRecruitmentHR">
          <MainCard
            icon4={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="service-icon icon-effect h-[2rem] lg:h-[2.5rem] w-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
            }
            title={
              language == "en" ? "Talent Recruitment HR" : "人才招聘和人事"
            }
            clickText1={"/services/basicEstablish/"}
            clickText2={"/services/basicEstablish/"}
            clickText3={"/services/basicEstablish/"}
            clickText4={"/services/basicEstablish/"}
            clickText5={"/services/basicEstablish/"}
            text1={language == "en" ? "Translator Assistant" : "翻译助理"}
            text2={language == "en" ? "Finance Accounting Tax" : "财税会计"}
            text3={language == "en" ? "Marketing Sales" : "销售和营销"}
            text4={language == "en" ? "Management Candidate" : "管理人选"}
            text5={language == "en" ? "THR Management Service" : "人事管理服务"}
          />
        </Link>
        <Link href="/services/LegalServeces">
          <MainCard
            icon5={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="service-icon icon-effect h-[2rem] lg:h-[2.5rem] w-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                ></path>
              </svg>
            }
            clickText1={"/services/basicEstablish/"}
            title={language == "en" ? "Legal Services" : "法律服务"}
            text1={language == "en" ? "Legal Administration" : "法律行政"}
          />
        </Link>
      </div>
      <p className="font-semibold text-3xl text-center py-5 ">
        {language == "en" ? "Latest Articles" : "最新文章"}
      </p>

      <div className="md:grid md:grid-cols-3 gap-4 py-4 px-10 ">
        {dataArticle.map((data, i) => {
          return (
            <>
              <div key={i}>
                <CustomCard
                  text={
                    language == "en" ? data.titleEnglish : data.titleChinese
                  }
                  isi={data.date}
                  isi2={data.content[0].contentIng}
                  id={data.id}
                  img={data.img}
                />
              </div>
            </>
          );
        })}
        <div>
          {dataArticle4.map((data, i) => {
            return (
              <>
                <a key={i} href={`/articles/article?id=${data.id}`}>
                  <div className="cursor-pointer border-b-[2px] border-[#031530]  my-4 md:my-4">
                    <div className="font-semibold text-xl hover:underline">
                      {language == "en" ? data.titleEnglish : data.titleChinese}
                    </div>
                    <h1>{data.date}</h1>
                  </div>
                </a>
              </>
            );
          })}

          <a href="/articles">
            <div className="mt-2 md:hover:translate-x-4 duration-100 ease-in-out lg:mt-auto text-primary font-medium cursor-pointer flex items-center lg:justify-center bottom-0 space-x-1 text-blue-600 md:pt-32">
              <p>{language == "en" ? "View More Articles" : "查看更多"}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-[1rem] w-auto mt-1 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="bg-slate-100 w-full py-4 mt-6">
        <div className="font-semibold text-3xl text-center pt-10 ">
          <p>
            {language == "en"
              ? "Choose The Best Package You Need"
              : "选择您需要的服务包"}
          </p>
        </div>
        <div className="md:hidden sm:hidden visible p-5">
          <Carousel
            indicators={true}
            autoPlay={true}
            infinite="true"
            showDots="true"
            arrows="true"
          >
            {dataPackage.map((data, i) => {
              return (
                <>
                  <div key={i} className="bg-white p-10 rounded-lg shadow-lg">
                    <h5 className="mb-4 text-lg text-black font-medium text-center">
                      {language == "en" ? data.titleEnglish : data.titleChinese}
                    </h5>
                    <p className="mb-4 text-base font-medium text-blue-500 text-center">
                      {data.price[0].price} 元
                    </p>

                    <ol className="my-7 space-y-5">
                      <li className="flex space-x-3">
                        <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                          <span className="">Package Include :</span>
                        </p>
                      </li>
                      {data.services.map((data, i) => {
                        return (
                          <>
                            <li key={i} className="flex space-x-3">
                              <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                &bull;{" "}
                                <span className="px-2">{data.nameIng}</span>
                              </p>
                            </li>
                          </>
                        );
                      })}
                    </ol>
                    <a
                      className=" inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                      href={`/packages/details?id=${data.id}`}
                    >
                      <p>DETAILS</p>
                    </a>
                  </div>
                </>
              );
            })}
            <>
              <div className="bg-white p-10 shadow-lg">
                <h5 className="mb-4 text-lg text-black font-medium text-center">
                  asdasdasd
                </h5>
                <p className="mb-4 text-base font-medium text-blue-500 text-center">
                  asdasd
                </p>

                <ol className="my-7 space-y-5">
                  <li className="flex space-x-3">
                    <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      &bull; <span className="px-2">Package Include :</span>
                    </p>
                  </li>

                  <>
                    <li className="flex space-x-3">
                      <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        &bull; <span className="px-2">asdasd</span>
                      </p>
                    </li>
                  </>
                </ol>
                <a className=" inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900">
                  <p>DETAILS</p>
                </a>
              </div>
            </>
            <>
              <div className="bg-white p-10 shadow-lg">
                <h5 className="mb-4 text-lg text-black font-medium text-center">
                  asdasdasd
                </h5>
                <p className="mb-4 text-base font-medium text-blue-500 text-center">
                  asdasd
                </p>

                <ol className="my-7 space-y-5">
                  <li className="flex space-x-3">
                    <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      &bull; <span className="px-2">Package Include :</span>
                    </p>
                  </li>

                  <>
                    <li className="flex space-x-3">
                      <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        &bull; <span className="px-2">asdasd</span>
                      </p>
                    </li>
                  </>
                </ol>
                <a className=" inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900">
                  <p>DETAILS</p>
                </a>
              </div>
            </>
          </Carousel>
        </div>

       {/* desktop */}
        <div className="md:visible sm:hidden hidden bg-slate-100 w-full pt-4 mt-6 md:grid md:grid-cols-3 gap-3 px-12">
          {dataPackage.map((data, i) => {
            return (
              <>
                <div key={i} className="bg-white p-14 shadow-lg rounded-xl">
                  <h5 className="mb-4 text-lg text-black font-medium text-center">
                    {data.titleEnglish}
                  </h5>
                  <p className="mb-4 text-base font-medium text-blue-500 text-center">
                    {data.price[0].price} 元
                  </p>
                  <ol className="my-7 space-y-5">
                  <p className="text-base font-normal leading-tight text-black dark:text-gray-400">
                         <span className="">Package Include :</span>
                      </p>
                    
                      
                    
                    {data.services.map((data, i) => {
                      return (
                        <>
                          <li key={i} className="flex space-x-3">
                            <p className="text-base font-normal  text-black dark:text-gray-400">
                              &bull;{" "}
                              <span className="px-2">{data.nameIng}</span>
                            </p>
                          </li>
                        </>
                      );
                    })}
                  </ol>
                  <a
                    className=" inline-flex w-full justify-center bg-primary px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                    href={`/packages/details?id=${data.id}`}
                  >
                    <p>DETAILS</p>
                  </a>
                </div>
              </>
            );
          })}
        </div>
        <div className="pb-24 pt-10 px-12">
          <div className="flex items-center justify-center font-medium text-blue-600 text-xl">
            <a href="/packages">
              {language == "en" ? "See More Packages" : "See More Packages"}
            </a>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.7"
              stroke="currentColor"
              aria-hidden="true"
              className="h-[1rem] w-auto mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
        <p className="font-semibold text-3xl text-center py-10">
          {language == "en" ? "Our Clients" : "我们客户"}
        </p>

        <MultipleCarousel />
      </div>
      <CustomFooter />
    </>
  );
};

export default Home;
