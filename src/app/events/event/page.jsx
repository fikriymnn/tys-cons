"use client";

import SolidBackground from "@/components/BreadcrumbArticle";
import CustomFooter from "@/components/CustomFooter";
import BreadcrumbArticle from "@/components/BreadcrumbArticle";
import Image from "next/image";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import { useSearchParams } from "next/navigation";
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
} from "firebase/firestore";
import { db, storage } from "../../../../firebase/page";
import parse from "html-react-parser";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

function Event() {
  const { language, changeLanguage } = useLanguage();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [dataEvents, setDataEvents] = useState([]);

  useEffect(() => {
    getDataEventse(id);
  }, [id]);

  async function getDataEventse(idd) {
    try {
      const docRef = doc(db, "events", idd);
      const querySnapshot = await getDoc(docRef);

      // if (querySnapshot.exists()) {
      //   console.log("Document data:", querySnapshot.data());
      // } else {
      //   // docSnap.data() will be undefined in this case
      //   console.log("No such document!");
      // }
      let data = [];

      // doc.data() is never undefined for query doc snapshots

      data.push(querySnapshot.data());

      setDataEvents(data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <NavbarWithCTAButton />
      <div className="bg-gray-200 pt-24 pb-5 ps-5 pe-5">
        {dataEvents.map((data, i) => {
          return (
            <>
              <div className="md:flex justify-center items-center">
                <div></div>
                <div className="md:w-4/6">
                  {" "}
                  <div className="py-2 flex gap-1 ">
                    <a href="/events">Events</a>
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
                    <p className="text-blue-500">
                      {" "}
                      {language == "en" ? data.titleEnglish : data.titleChinese}
                    </p>
                  </div>
                  <div className="bg-white">
                    <div className="relative p-5  ">
                      <div className="w-full">
                        <div className="">
                          <p>Posted at: {data.date}</p>
                        </div>
                        <h1 className="text-4xl text-center p-5 font-semibold">
                          {language == "en"
                            ? data.titleEnglish
                            : data.titleChinese}
                        </h1>
                        <div className="bg-blue-500 h-[200px] md:h-[500px] relative">
                          <div
                            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-fill"
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
                        <h3 className="my-3">
                          Duration: {data.durationFrom} - {data.durationTo}
                        </h3>
                        <h3 className="my-3">
                          Time: {data.timeFrom} - {data.timeTo}
                        </h3>
                        {data.content.map((data, i) => {
                          return (
                            <>
                              <div className="bg-gray-400 h-[2px] "></div>
                              <div className="w-100px flex">
                                <div className="bg-blue-600 h-[50px] flex items-center">
                                  <h2 className="mx-5 text-xl text-center font-semibold text-white">
                                    {language == "en"
                                      ? data.topicIng
                                      : data.topicChi}
                                  </h2>
                                </div>
                              </div>
                              <div className="py-5 content">
                                <p>
                                  {parse(
                                    language == "en"
                                      ? data.contentIng
                                      : data.contentChi
                                  )}
                                </p>
                              </div>
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
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </>
          );
        })}
      </div>
      <CustomFooter />
    </>
  );
}

export default Event;
