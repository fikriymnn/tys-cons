"use client";
import React from "react";

import { collection, getDocs, where, query, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db, storage, firebaseAnalytics } from "../../../../firebase/page";
import CustomFooter from "@/components/CustomFooter";

import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";

import { useLanguage } from "@/context/LanguageContext";

function ProductCertifications() {
  const { language, changeLanguage } = useLanguage();
  const [dataLegalAdministration, setDataLegalAdministration] = useState([]);
  const searchParams = new URLSearchParams(location.search)
  const compValue = searchParams.get('comp');
  const [comp, setComp] = useState(compValue ? parseInt(compValue, 1) : 0)

  useEffect(() => {
    getDataLegalAdministration();
  });
  const getDataLegalAdministration = async () => {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Legal Services"),
        where("subService", "==", "Legal Administration"),
        orderBy("date", "desc")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataLegalAdministration(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NavbarWithCTAButton />
      <div className="bg-gray-200 pt-24 pb-5 ps-5 pe-5 ">
        <div className="flex pb-5">
          <p>{language == "en" ? "Services" : "服务"} </p>{" "}
          <p className="text-blue-600 ml-1">/ Legal Services</p>
        </div>
        <div className="bg-white">
          <div className="p-5 pt-3">
            <div className="overflow-auto w-full">
              <div className="flex gap-9 border-b md:w-full sm:w-[1000px] w-[1100px]  md:h-full sm:h-full h-16 ">
                <button
                  onClick={() => setComp(0)}
                  className={`${comp == 0
                      ? "text-blue-600 border-b pb-2 border-blue-600"
                      : "text-black border-0"
                    } md:text-base sm:text-sm text-sm`}
                >
                  {language == "en" ? "Legal Administration" : "法律行政"}
                </button>
              </div>
            </div>
          </div>
          {comp == 0 ? (
            <>
              <div className="grid md:grid-cols-5 md:grid sm:grid sm:grid-cols-3 grid-cols-1  gap-5 px-5 pb-5">
                {dataLegalAdministration.map((data, i) => {
                  const le = data;
                  const firsPriceRp = data.price[0].priceRupiah;
                  const lastPriceRp =
                    data.price[data.price.length - 1].priceRupiah;
                  const firsPriceYuan = data.price[0].priceYuan;
                  const lastPriceYuan =
                    data.price[data.price.length - 1].priceYuan;
                  return (
                    <>
                      <div key={i}>
                        <a href={`/services/detail?id=${data.id}`}>
                          <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                            <div
                              className=" bg-blue-700 h-48 bg-cover bg-center"
                              style={{ backgroundImage: `url(${data.img})` }}
                            ></div>
                            <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                              <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                {language == "chi" ? data.titleChinese : ""}
                                {language == "en"
                                  ? data.titleEnglish
                                  : data.titleEnglish}
                              </h1>
                              <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                {firsPriceYuan + "-" + lastPriceYuan} 元
                              </h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            false
          )}
        </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default ProductCertifications;
