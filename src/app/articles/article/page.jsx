import React from "react";
import SolidBackground from "@/components/BreadcrumbArticle";
import CustomFooter from "@/components/CustomFooter";
import BreadcrumbArticle from "@/components/BreadcrumbArticle";
import Image from "next/image";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";

function Article() {
  return (
    <>
      <NavbarWithCTAButton />
      <div className="bg-gray-200 pt-24 pb-5 ps-5 pe-5">
        <BreadcrumbArticle className="ps-0" />
        <div className="bg-white">
          <div className="relative p-5">
            <div className="w-full h-1000px">
              <h3>Mon Dec 10 2022</h3>
              <h1 className="text-4xl text-center p-5 font-semibold">
                Article Title
              </h1>
              <div className="bg-blue-500 h-[500px] relative">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover"
                  style={{ backgroundImage: "url(/assets/images/article.png)" }}
                >
                  {/* <Image
                                    src={'/assets/images/article.png'}
                                    width={1080}
                                    height={1080}
                                    alt=''
                                /> */}
                </div>
              </div>
              <div className="bg-gray-400 h-[2px] mt-5  "></div>
              <div className="w-100px flex items-center justify-center">
                <div className="bg-blue-600 h-[50px] flex items-center">
                  <h2 className="mx-5 text-xl text-center font-semibold text-white">
                    New Article
                  </h2>
                </div>
              </div>
              <div className="py-5">
                <p>Lorem Ipsum dolor sit amet</p>
                <p>abcd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default Article;
