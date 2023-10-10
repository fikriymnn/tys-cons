"use client";
import { useState, useEffect } from "react";
import SolidBackground from "@/components/BreadcrumbArticle";
import CustomFooter from "@/components/CustomFooter";
import BreadcrumbArticle from "@/components/BreadcrumbArticle";
import Image from "next/image";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import { useSearchParams } from "next/navigation";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase/page";
import parse from "html-react-parser";

function Article() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [dataArticle, setDataArticle] = useState([]);
  useEffect(() => {
    getDataArticles();
  }, []);

  const getDataArticles = async () => {
    try {
      const docRef = doc(db, "articles", id);
      const querySnapshot = await getDoc(docRef);

      let data = [];

      data.push(querySnapshot.data());

      setDataArticle(data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <NavbarWithCTAButton />
      <div className="bg-gray-200 pt-24 pb-5 ps-5 pe-5">
        <BreadcrumbArticle className="ps-0" />
        <div className="bg-white">
          <div className="relative p-5">
            {dataArticle.map((data, i) => {
              return (
                <>
                  <div className="w-full h-1000px">
                    <h3>{data.date}</h3>
                    <h1 className="text-4xl text-center p-5 font-semibold">
                      {data.titleEnglish}
                    </h1>
                    <div className="bg-blue-500 h-[500px] relative">
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover"
                        style={{ backgroundImage: `url(${data.img})` }}
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
                              <h2 className="mx-5 text-xl text-center font-semibold text-white ">
                                {data.topicIng}
                              </h2>
                            </div>
                          </div>

                          <div
                            className="py-5 content"
                            dangerouslySetInnerHTML={{
                              __html: data.contentIng,
                            }}
                          />
                          {data.img == "" ? (
                            <></>
                          ) : (
                            <>
                              <img
                                width={500}
                                height={300}
                                src={data.img}
                              ></img>
                            </>
                          )}
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* <CustomFooter /> */}
    </>
  );
}

export default Article;
