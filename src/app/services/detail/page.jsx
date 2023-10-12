"use client";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  getDoc,
  updateDoc,
  doc,
  Firestore,
} from "firebase/firestore";
import parse from "html-react-parser";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { db, storage } from "../../../../firebase/page";
import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CustomFooter from "@/components/CustomFooter";
import Image from "next/image";
import { Label, Radio } from "flowbite-react";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import { useLanguage } from "@/context/LanguageContext";

function DetailServices() {
  const { language, changeLanguage } = useLanguage();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [dataService, setDataService] = useState([]);
  const [currency, setCurrency] = useState(1);
  const [firsIndex, setFirsIndex] = useState([]);
  const [firsIndexRp, setFirsIndexRp] = useState([]);
  const [lastIndex, setLastIndex] = useState([]);
  const [lastIndexRp, setLastIndexRp] = useState([]);

  const [Index, setIndex] = useState();

  useEffect(() => {
    getDataService(id);
  }, [id]);

  async function getDataService(idd) {
    try {
      const docRef = doc(db, "service", idd);
      const querySnapshot = await getDoc(docRef);

      let data = [];

      data.push(querySnapshot.data());

      setDataService(data);
      setFirsIndexRp(data[0].price[0].priceRupiah);
      setFirsIndex(data[0].price[0].priceYuan);
      const le = data[0].price;

      setLastIndex(le[le.length - 1].priceYuan);
      setLastIndexRp(le[le.length - 1].priceRupiah);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <NavbarWithCTAButton />
      {dataService.map((data, i) => {
        return (
          <>
            <div key={i} className="bg-gray-200 pt-28 pb-5 ps-5 pe-5">
              <div className="flex pb-5 gap-1">
                <p onClick={() => console.log(lastIndex)}>
                  {language == "en" ? "Services" : "服务"}{" "}
                </p>{" "}
                <p>&gt;</p>
                <p className="text-blue-600">
                  {data.titleChinese} {data.titleEnglish}
                </p>
              </div>
              <div className="bg-white">
                <div className="relative p-5 ">
                  <p>{data.date}</p>
                  <div className="flex gap-1 my-2">
                    <p>{data.service} </p>
                    <p>&gt;</p>
                    <p> {data.subService}</p>
                  </div>

                  <div className="md:flex sm:grid sm:grid-cols-1 grid grid-cols-1 mb-5">
                    <div className="bg-gray-100 md:w-[500px] md:h-[300px] ms:w-full ms:h-full mt-2">
                      <img
                        src={data.img}
                        alt="Image"
                        className="md:w-[350px] md:h-[300px]"
                      />
                    </div>
                    <div className="md:ps-4 ps-">
                      <p className="md:text-2xl text-2xl pb-4">
                        {data.titleChinese} {data.titleEnglish}
                      </p>
                      <div className="flex pb-6">
                        {currency == 1 ? <p>RP. </p> : ""}
                        <p className="text-blue-600 text-2xl">
                          {currency == 1
                            ? Index == null
                              ? `${firsIndexRp} - ${lastIndexRp}`
                              : data.price[Index].priceRupiah
                            : Index == null
                            ? `${firsIndex} - ${lastIndex}`
                            : data.price[Index].priceYuan}
                        </p>
                        {currency == 2 ? <p>元</p> : ""}
                      </div>
                      <p className="pb-4">
                        {language == "en" ? "Options Currency:" : "选项"}
                      </p>
                      <fieldset className="flex gap-3 pb-4" id="radio">
                        <>
                          <div className="flex items-center gap-2   border-gray-200  border p-3">
                            <Radio
                              id="rupiah"
                              name="currency"
                              value="1"
                              checked={currency === parseInt("1", 10)}
                              onChange={() => setCurrency(1)}
                            />
                            <Label htmlFor="rupiah">rupiah</Label>
                          </div>
                          <div className="flex items-center gap-2   border-gray-200  border p-3">
                            <Radio
                              id="Yuan"
                              name="currency"
                              value="Yuan"
                              onChange={() => setCurrency(2)}
                            />
                            <Label htmlFor="Yuan">Yuan</Label>
                          </div>
                        </>
                      </fieldset>
                      <p className="pb-4">
                        {language == "en" ? "Options:" : "选项"}
                      </p>
                      <fieldset className="flex gap-3 pb-4" id="radio">
                        {data.price.map((data, i) => {
                          return (
                            <>
                              <div className="flex items-center gap-2   border-gray-200  border p-3">
                                <Radio
                                  key={i}
                                  id={data.option}
                                  name="countries"
                                  value={data.option}
                                  onChange={() => setIndex(i)}
                                />
                                <Label htmlFor={data.option}>
                                  {data.option}
                                </Label>
                              </div>
                            </>
                          );
                        })}
                      </fieldset>
                    </div>
                  </div>

                  {data.content.map((data, i) => {
                    return (
                      <>
                        <div className="h-[2px] w-full bg-gray-300 "></div>
                        <div className="flex">
                          <div className=" bg-blue-600  mb-2">
                            <p className="text-center text-white text-base font-semibold p-3">
                              {language == "en" ? data.topicIng : data.topicChi}
                            </p>
                          </div>
                          <div></div>
                        </div>
                        <div className="content pb-10">
                          <p>
                            {" "}
                            {parse(
                              language == "en"
                                ? data.contentIng
                                : data.contentChi
                            )}{" "}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        );
      })}

      <CustomFooter />
    </>
  );
}

export default DetailServices;
