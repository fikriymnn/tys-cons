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
      <NavbarWithCTAButton />
      <div className="bg-slate-100 w-full py-4 mt-20">
        <p className="font-semibold text-3xl text-center pt-10 ">
          Choose The Best Package
        </p>
        <div className="bg-slate-100 w-full pt-4 mt-6 md:grid md:grid-cols-3 gap-3 px-12">
          {dataPackage.map((data, i) => {
            return (
              <>
                <div className="bg-white p-10 rounded-lg shadow-lg">
                  <h5 className="mb-4 text-lg text-black font-medium text-center">
                    {data.titleEnglish}
                  </h5>
                  <p className="mb-4 text-base font-medium text-blue-500 text-center">
                    {data.price[0].price} 元
                  </p>

                  <ol className="my-7 space-y-5">
                    <li className="flex space-x-3">
                      <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        &bull; <span className="px-2">Package Include :</span>
                      </p>
                    </li>
                    {data.services.map((data, i) => {
                      return (
                        <>
                          <li className="flex space-x-3">
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
                    className="inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
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
