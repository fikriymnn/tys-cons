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

function DetailPackages() {
  const searchParams = useSearchParams();

  const [dataPackage, setDataPackage] = useState([]);
  const [Index, setIndex] = useState();
  const id = searchParams.get("id");
  const [firsIndex, setFirsIndex] = useState([]);
  const [lastIndex, setLastIndex] = useState([]);

  useEffect(() => {
    getDataPackage();
  }, []);

  //get data about
  const getDataPackage = async () => {
    try {
      const docRef = doc(db, "package", id);
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
  };

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
                      <img
                        src="/assets/images/trademark.jpg"
                        alt=""
                        className="md:w-[350px] md:h-[350px]"
                      />
                    </div>
                    <div className="md:ps-10 ps-">
                      <p className="md:text-2xl text-2xl pb-4">
                        {data.titleEnglish}
                      </p>
                      <div className="flex pb-4">
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
                  <div className="grid grid-cols-5 gap-5 py-10">
                    <CompanyRegistrationCard
                      src={"/foto.jpg"}
                      title={"Company Registration Basic Regulation"}
                      price={"3000-2000"}
                    />

                    <CompanyRegistrationCard
                      src={"/foto.jpg"}
                      title={"Company Registration Basic Regulation"}
                      price={"3000-2000"}
                    />

                    <CompanyRegistrationCard
                      src={"/foto.jpg"}
                      title={"Company Registration Basic Regulation"}
                      price={"3000-2000"}
                    />

                    <CompanyRegistrationCard
                      src={"/foto.jpg"}
                      title={"Company Registration Basic Regulation"}
                      price={"3000-2000"}
                    />
                  </div>
                  <div className="h-[2px] w-full bg-gray-300 "></div>
                  {data.content.map((data, i) => {
                    return (
                      <>
                        <div className=" bg-blue-600  w-40 mb-2">
                          <p className="text-center text-white text-base font-semibold p-3">
                            {data.topicIng}
                          </p>
                        </div>
                        <p>{data.contentIng}</p>
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
