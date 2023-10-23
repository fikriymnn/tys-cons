"use client";
import React from "react";
import CardTwo from "@/components/CardTwo";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import CustomFooter from "@/components/CustomFooter";
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
import { db, storage, firebaseAnalytics } from "../../../firebase/page";
import { useEffect, useState } from "react";

function Packages() {
  const [dataPackage, setDataPackage] = useState([]);
  useEffect(() => {
    getDataPackage();
  }, []);
  async function getDataPackage() {
    try {
      const ordersRef = collection(db, "package");
      const q = query(ordersRef, orderBy("date", "desc"));
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
      <NavbarWithCTAButton />
      <div className="bg-slate-100 w-full py-4 mt-20">
        <p className="font-semibold text-3xl text-center pt-10 ">
          Choose The Best Package
        </p>
        <div className="bg-slate-100 w-full pt-4 mt-6 md:grid md:grid-cols-3 grid grid-cols-1  gap-3 px-12 h-full ">
          {dataPackage.map((data, i) => {
            return (
              // <>
              //   <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col">
              //     <h5 className="mb-4 text-lg text-black font-medium text-center line-clamp-2">
              //       {data.titleEnglish}
              //     </h5>
              //     <p className="mb-4 text-base font-medium text-blue-500 text-center">
              //       {data.price[0].price} 元
              //     </p>

              //     <ol className="my-7 space-y-5">
              //       <li className="flex space-x-3">
              //         <p className="text-base font-normal leading-tight text-gray-500 ">
              //           &bull; <span className="px-2">Package Include :</span>
              //         </p>
              //       </li>
              //       {data.services.map((data, i) => {
              //         return (
              //           <>
              //             <li className="flex space-x-3">
              //               <p className="text-base font-normal leading-tight text-gray-500  line-clamp-1">
              //                 &bull;{" "}
              //                 <span className="px-2">{data.nameIng}</span>
              //               </p>
              //             </li>
              //           </>
              //         );
              //       })}
              //     </ol>
              //     <div className="mt-auto">
              //       <a
              //         className="inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              //         href={`/packages/details?id=${data.id}`}
              //       >
              //         <p>DETAILS</p>
              //       </a>
              //     </div>
              //   </div>
              // </>
              <>
                <div
                  key={i}
                  className="bg-white px-14 p-10 rounded-lg shadow-lg h-full flex flex-col justify-between"
                >
                  <h5 className="mb-4 bg- text-xl text-black font-medium text-center  h-16">
                    {data.titleEnglish}
                  </h5>
                  <p className="mb-4 text-base font-medium text-blue-500 text-center">
                    {data.price[0].price} 元
                  </p>

                  <ol className="mb-auto  pb-3 ">
                    <li className="flex space-x-3">
                      <p className="text-base my-2 font-normal leading-tight text-black ">
                        <span className="">Package Includes :</span>
                      </p>
                    </li>
                    {data.services.map((data, i) => {
                      return (
                        <>
                          <p key={i} className="flex space-x-3 my-3 ">
                            <p className="text-base font-normal leading-tight text-black ">
                              &bull;{" "}
                              <span className="px-2">{data.nameIng}</span>
                            </p>
                          </p>
                        </>
                      );
                    })}
                  </ol>

                  <a
                    className=" inline-flex w-full justify-center  bg-primary px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-cyan-200 "
                    href={`/packages/details?id=${data.id}`}
                  >
                    <p>DETAILS</p>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default Packages;
