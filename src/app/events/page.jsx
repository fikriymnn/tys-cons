import React from "react";
import EventCard from "@/components/EventCard";
import CustomFooter from "@/components/CustomFooter";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import parse from "html-react-parser";

import {
  collection,
  addDoc,
  getDocs,
  where,
  Firestore,
} from "firebase/firestore";
import { db, storage, firebaseAnalytics } from "../../../firebase/page";

async function getDataEvents() {
  let data = [];

  try {
    const querySnapshot = await getDocs(collection(db, "events"));

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      data.push({ ...doc.data(), id: doc.id });
    });
  } catch (error) {
    console.log(error);
  }

  return data;
}
async function Events() {
  const dataEvents = await getDataEvents();
  return (
    <>
      <NavbarWithCTAButton />
      <div className="bg-gray-200  pt-24 pb-5 ps-5 pe-5 ">
        <div className="bg-white ">
          <div className="relative p-5 pt-10">
            <div className="relative">
              <input
                type="text"
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
            {dataEvents.map((data, i) => {
              return (
                <>
                  <div key={i}>
                    <a href={`/events/event?id=${data.id}`}>
                      <div className="bg-white shadow-xl hover:translate-y-[-10px] transition-transform duration-50 ease-in-out grid grid-cols-2 md:grid-cols-1">
                        <div className="h-28 md:h-36">
                          <img src={data.img} alt="" />
                        </div>
                        <div className="p-3 ">
                          <h1 className="font-medium md:text-xl text-gray-900 line-clamp-2 ">
                            {data.titleEnglish}
                          </h1>
                          <h2>{data.date}</h2>
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
