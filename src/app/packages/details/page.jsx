"use client";
import React from "react";
import CustomFooter from "@/components/CustomFooter";
import Image from "next/image";
import { Label, Radio } from "flowbite-react";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import CompanyRegistrationCard from "@/components/CompanyRegistrationCard";
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

import { db } from "../../../../firebase/page";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import parse from "html-react-parser";

function DetailPackages() {
  const searchParams = useSearchParams();

  const [dataPackage, setDataPackage] = useState([]);
  const [Index, setIndex] = useState();
  const id = searchParams.get("id");
  const [firsIndex, setFirsIndex] = useState([]);
  const [lastIndex, setLastIndex] = useState([]);

  useEffect(() => {
    getDataPackage(id);
  }, [id]);

  //get data about
  async function getDataPackage(idd) {
    try {
      const docRef = doc(db, "package", idd);
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

      setDataPackage(data);
      setFirsIndex(data[0].price[0].price);
      const le = data[0].price;
      setLastIndex(le[le.length - 1].price);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <NavbarWithCTAButton />
      {dataPackage.map((data, i) => {
        return (
          <>
            <div className="bg-gray-200 pt-24 pb-5 ps-5 pe-5">
              <div className="flex pb-5 gap-1">
                <p>Packages </p> <p>&gt;</p>
                <p className="text-blue-600">{data.titleEnglish}</p>
              </div>
              <div className="bg-white">
                <div className="relative p-5 pt-10">
                  <p>{data.date}</p>
                  <div className="flex gap-1 mt-5">
                    <p className="text-sm">Packages</p>
                    <p className="text-sm">&gt;</p>
                    <p className="text-sm ">{data.titleEnglish}</p>
                  </div>
                  <div className="md:flex sm:grid sm:grid-cols-1 grid grid-cols-1 mb-5">
                    <div className="bg-gray-100 md:w-[400px] md:h-[350px] ms:w-full ms:h-full mt-2">
                      <Image
                        src="/assets/images/trademark.jpg"
                        alt=""
                        className="md:w-[350px] md:h-[350px]"
                        width={350}
                        height={350}
                      />
                    </div>
                    <div className="md:ps-10 ps-">
                      <p className="md:text-2xl text-2xl pb-4">
                        {data.titleEnglish}
                      </p>
                      <div className="flex ">
                        <p className="text-blue-600 text-xl">
                          {" "}
                          {Index == null
                            ? `${firsIndex} - ${lastIndex}`
                            : data.price[Index].price}{" "}
                        </p>
                        <p className="">元</p>
                      </div>
                      <p className="pb-4">Options:</p>
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
                  <div className="text-2xl font-medium">
                    <p>Services: / 服务:</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 py-10">
                    {data.services.map((data, i, arr) => {
                      return (
                        <div className="md:flex" >
                          <div className="md:w-60 " key={i}>
                            <a href={`/services/detail?id=${data.id}`}>
                              <div className="bg-white shadow-xl md:hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 ">
                                <div
                                  className="bg-blue-700 h-48 bg-cover bg-center"
                                  style={{
                                    backgroundImage: `url(${data.img})`,
                                  }}
                                ></div>
                                <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                                  <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 md:line-clamp-1 line-clamp-3 ">
                                    {data.nameIng}
                                  </h1>
                                  <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                    {data.price[0].price}
                                  </h2>
                                </div>
                              </div>
                            </a>
                          </div>
                          {i < arr.length - 1 && (
                            <div className=" flex items-center justify-center text-center m-2">
                              <span className="text-5xl font-bold">+</span>
                            </div>
                          )}
                        </div>
                      );
                    })}

                  </div>
                  <div className="h-[2px] w-full bg-gray-300 "></div>
                  {data.content.map((data, i) => {
                    return (
                      <>
                        <div className=" flex mb-2">
                          <p className="bg-blue-600 text-white text-base font-semibold p-3">
                            {data.topicIng}
                          </p>
                          <div className=""></div>
                        </div>
                        <div>{parse(data.contentIng)}</div>
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

export default DetailPackages;
