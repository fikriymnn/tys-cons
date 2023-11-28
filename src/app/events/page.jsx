"use client";
import React from "react";
import EventCard from "@/components/EventCard";
import CustomFooter from "@/components/CustomFooter";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import parse from "html-react-parser";
import { format } from "date-fns";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  where,
  Firestore,
} from "firebase/firestore";
import { db, storage, firebaseAnalytics } from "../../../firebase/page";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function Events() {
  const { language, changeLanguage } = useLanguage();

  const [dataEvents, setDataEvents] = useState([]);
  const [dataEventsResult, setDataEventsResult] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e);
    const results = dataEvents.filter((item) =>
      language == "en"
        ? item.titleEnglish.toLowerCase().includes(search.toLowerCase())
        : item.titleChinese.toLowerCase().includes(search.toLowerCase())
    );
    setDataEventsResult(results);
  };
  useEffect(() => {
    getDataEvents();
  }, []);
  async function getDataEvents() {
    try {
      const ordersRef = collection(db, "events");
      const q = query(ordersRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        data.push({ ...doc.data(), id: doc.id });
        setDataEvents(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <NavbarWithCTAButton />
      <div className="bg-gray-200 min-h-[700px]  pt-24 pb-5 ps-5 pe-5 ">
        <div className="bg-white ">
          <div className="relative p-5 pt-10">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search by title..."
                className="w-full h-12 pl-4 pr-10 rounded-md border-none bg-gray-200 focus:outline-none !important"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 pointer-events-none"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293 13.293a6 6 0 111.414-1.414l5 5a1 1 0 01-1.414 1.414l-5-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 16a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 px-5 pb-5">
            {search == ""
              ? dataEvents.map((data, i) => {
                  const timestamp = data.createdAt.toDate();

                  // Format tanggal
                  const formattedDate = format(timestamp, "yyyy-MM-dd");
                  return (
                    <>
                      <div key={i}>
                        <a href={`/events/event?id=${data.id}`}>
                          <div className="bg-white rounded-md shadow-xl md:hover:translate-y-[-10px] transition-transform duration-50 ease-in-out grid grid-cols-2 md:flex md:flex-col h-full ">
                            <div
                              className="bg-blue-700 md:grid grid-cols-1 h-28 md:h-36 bg-cover bg-no-repeat bg-center"
                              style={{ backgroundImage: `url(${data.img})` }}
                            ></div>
                            <div className="p-3 flex flex-col justify-between h-[155px]">
                              <h1 className="font-semibold text-black line-clamp-2  ">
                                {language == "en"
                                  ? data.titleEnglish
                                  : data.titleChinese}
                              </h1>
                              <div>
                                <h2 className="md:flex text-[11px] md:text-base md:gap-1 font-medium text-gray-800">
                                  <h3 className="mt-2">
                                    {language == "en"
                                      ? data.durationFrom
                                      : data.durationFromValue}{" "}
                                  </h3>
                                  <p className="text-lg translate-y-[1px] md:translate-y-[4px]">
                                    &#8226;
                                  </p>
                                  <h3 className="mt-2">{data.timeFrom}</h3>
                                </h2>
                                <h2 className="text-gray-500 ">
                                  {language == "en" ? "Bali" : "data.locChi"}
                                </h2>
                                <h2 className="font-medium text-gray-800">
                                  {language == "en" ? "Rp30000" : "data.feeChi"}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })
              : dataEventsResult.map((data, i) => {
                  const timestamp = data.createdAt.toDate();

                  // Format tanggal
                  const formattedDate = format(timestamp, "yyyy-MM-dd");

                  return (
                    <>
                      <div key={i}>
                        <a href={`/events/event?id=${data.id}`}>
                          <div className="bg-white shadow-xl hover:translate-y-[-10px] transition-transform duration-50 ease-in-out grid grid-cols-2 md:grid-cols-1 ">
                            <div
                              className="h-28 md:h-36 bg-cover bg-no-repeat bg-center"
                              style={{ backgroundImage: `url(${data.img})` }}
                            ></div>
                            <div className="p-3 h-64">
                              <h1 className="font-medium md:text-xl text-gray-900 line-clamp-1 ">
                                {language == "en"
                                  ? data.titleEnglish
                                  : data.titleChinese}
                              </h1>
                              <h2>
                                {language == "en" ? data.date : formattedDate}
                              </h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default Events;
