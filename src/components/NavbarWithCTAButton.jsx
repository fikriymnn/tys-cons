"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/page";

export default function NavbarWithCTAButton({ height }) {
  const [open2, setOpen2] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const [logo, setLogo] = useState("");
  const [logoWhite, setLogoWhite] = useState("");
  const [navbar, setNavbar] = useState(false);

  // =========================
  // CHANGE LANGUAGE
  // =========================
  const handleChangeLanguage = (newLanguage) => {
    changeLanguage(newLanguage);
    sessionStorage.setItem("language", newLanguage);
  };

  // =========================
  // SCROLL EFFECT (FIX MEMORY LEAK)
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= height) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [height]);

  // =========================
  // FETCH LOGO
  // =========================
  useEffect(() => {
    const getLogo = async () => {
      try {
        const navLogo = await getDoc(doc(db, "editHomePage", "logoNav"));
        const whiteLogo = await getDoc(doc(db, "editHomePage", "logoWhite"));

        setLogo(navLogo.data()?.img || "");
        setLogoWhite(whiteLogo.data()?.img || "");
      } catch (error) {
        console.log(error);
      }
    };

    getLogo();
  }, []);

  // =========================
  // DROPDOWN SERVICES
  // =========================
  const DropdownServices = () => {
    return (
      <div className="bg-white absolute mt-10 z-10 shadow-lg">
        <Link href="/services/basicEstablish?comp=0">
          <div className="py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600 cursor-pointer">
            {language == "en" ? "Basic Establishment Services" : "基础服务"}
          </div>
        </Link>

        <Link href="/services/productCertifications?comp=0">
          <div className="py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600 cursor-pointer">
            {language == "en" ? "Product Certification" : "产品认证"}
          </div>
        </Link>

        <Link href="/services/financeAccountingTax?comp=0">
          <div className="py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600 cursor-pointer">
            {language == "en" ? "Finance Accounting Tax" : "财税会计服务"}
          </div>
        </Link>

        <Link href="/services/TalentRecruitmentHR?comp=0">
          <div className="py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600 cursor-pointer">
            {language == "en" ? "Talent Recruitment HR" : "人才招聘和人事"}
          </div>
        </Link>

        <Link href="/services/LegalServices?comp=0">
          <div className="py-3 px-4 hover:bg-blue-500 hover:text-white text-slate-600 cursor-pointer">
            {language == "en" ? "Legal Services" : "法律服务"}
          </div>
        </Link>
      </div>
    );
  };

  return (
    <Navbar
      className={`fixed w-full top-0 z-30 transition-all duration-300 ${
        navbar ? "bg-[#d9d9d943]" : "bg-white"
      }`}
      fluid
    >
      {/* ================= LOGO ================= */}
      <Navbar.Brand>
        <Link href="/">
          <img
            src={navbar ? logoWhite : logo}
            alt="logo"
            className="md:w-52 md:h-12 sm:w-36 sm:h-10 w-40"
          />
        </Link>
      </Navbar.Brand>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex md:w-72 w-52 md:order-3 gap-1">
        {/* LANGUAGE */}
        <button onClick={() => handleChangeLanguage("en")}>
          <div className="flex gap-2 md:mr-3">
            <Image
              src="/assets/images/united-states.png"
              width={40}
              height={10}
              alt="en"
            />
            <p
              className={`${navbar ? "text-white" : "text-black"} md:block hidden`}
            >
              English
            </p>
          </div>
        </button>

        <button onClick={() => handleChangeLanguage("chi")}>
          <div className="flex gap-2 md:mr-3">
            <Image
              src="/assets/images/china.png"
              width={40}
              height={10}
              alt="chi"
            />
            <p
              className={`${navbar ? "text-white" : "text-black"} md:block hidden`}
            >
              简体中文
            </p>
          </div>
        </button>

        <Navbar.Toggle />
      </div>

      {/* ================= MENU ================= */}
      <Navbar.Collapse className="md:order-1">
        <Navbar.Link as={Link} href="/">
          <span className={navbar ? "text-white" : "text-black"}>
            {language == "en" ? "Home" : "首页"}
          </span>
        </Navbar.Link>

        <Navbar.Link as={Link} href="/about">
          <span className={navbar ? "text-white" : "text-black"}>
            {language == "en" ? "About Us" : "关于我们"}
          </span>
        </Navbar.Link>

        {/* SERVICES DROPDOWN */}
        <div className="relative">
          <div
            className="flex gap-1 cursor-pointer"
            onClick={() => setOpen2(!open2)}
          >
            <span className={navbar ? "text-white" : "text-black"}>
              {language == "en" ? "Services" : "服务"}
            </span>
            <svg
              className={`w-4 h-4 my-auto ${
                navbar ? "text-white" : "text-slate-700"
              }`}
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="48"
                d="M112 184l144 144 144-144"
              />
            </svg>
          </div>

          {open2 && <DropdownServices />}
        </div>

        <Navbar.Link as={Link} href="/articles">
          <span className={navbar ? "text-white" : "text-black"}>
            {language == "en" ? "Articles" : "必读"}
          </span>
        </Navbar.Link>

        <Navbar.Link as={Link} href="/events">
          <span className={navbar ? "text-white" : "text-black"}>
            {language == "en" ? "Events" : "活动"}
          </span>
        </Navbar.Link>

        <Navbar.Link as={Link} href="/policies">
          <span className={navbar ? "text-white" : "text-black"}>
            {language == "en" ? "Policies & Regulations" : "政策法规"}
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
