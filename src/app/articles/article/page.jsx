'use client'
import React from "react";
import SolidBackground from "@/components/BreadcrumbArticle";
import CustomFooter from "@/components/CustomFooter";
import BreadcrumbArticle from "@/components/BreadcrumbArticle";
import Image from "next/image";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import { useSearchParams } from "next/navigation";
import {
  getDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "../../../../firebase/page";
import parse from 'html-react-parser';

async function getDataArticles() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  let data = [];
  try {
    const docRef = doc(db, "articles", id);
    const querySnapshot = await getDoc(docRef);



    data.push(querySnapshot.data());

    setTitleIng(data[0].titleEnglish);
    setTitleChi(data[0].titleChinese);
    setData(data[0].content);
  } catch (error) {
    console.log(error);
  }
  return data;
};
async function Article() {
  const dataArticle = await getDataArticles();
  return (
    <>
      <NavbarWithCTAButton />
      <div className="bg-gray-200 pt-24 pb-5 ps-5 pe-5">
        <BreadcrumbArticle className="ps-0" />
        <div className="bg-white">
          <div className="relative p-5">
            <div className="w-full h-1000px">
              <h3>{dataArticle[0].date}</h3>
              <h1 className="text-4xl text-center p-5 font-semibold">
                {dataArticle[0].titleEnglish}
              </h1>
              <div className="bg-blue-500 h-[500px] relative">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover"
                  style={{ backgroundImage: `url(${dataArticle[0].img})` }}
                >
                  {/* <Image
                                    src={'/assets/images/article.png'}
                                    width={1080}
                                    height={1080}
                                    alt=''
                                /> */}
                </div>
              </div>

              {dataArticle[0].content.map((data, i) => {
                return (
                  <>

                    <div className="bg-gray-400 h-[2px] mt-5  "></div>
                    <div className="w-100px flex items-center justify-center">
                      <div className="bg-blue-600 h-[50px] flex items-center">
                        <h2 className="mx-5 text-xl text-center font-semibold text-white">
                          {data.topicIng}
                        </h2>
                      </div>
                    </div>
                    <div className="py-5" dangerouslySetInnerHTML={{ __html: data.contentIng }} />

                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default Article;
