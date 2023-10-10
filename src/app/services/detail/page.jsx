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

function DetailServices() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [dataService, setDataService] = useState([]);
  const [firsIndex, setFirsIndex] = useState([]);
  const [lastIndex, setLastIndex] = useState([]);

  const [Index, setIndex] = useState();

  useEffect(() => {
    getDataService();
  }, []);

  const getDataService = async () => {
    try {
      const docRef = doc(db, "service", id);
      const querySnapshot = await getDoc(docRef);

      let data = [];

      data.push(querySnapshot.data());

      setDataService(data);
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
      {dataService.map((data, i) => {
        return (
          <>
            <div key={i} className="bg-gray-200 pt-24 pb-5 ps-5 pe-5">
              <div className="flex pb-5 gap-1">
                <p onClick={() => console.log(lastIndex)}>Services </p>{" "}
                <p>&gt;</p>
                <p className="text-blue-600">{data.titleEnglish}</p>
              </div>
              <div className="bg-white">
                <div className="relative p-5 pt-10">
                  <p>{data.date}</p>

                  <div className="md:flex sm:grid sm:grid-cols-1 grid grid-cols-1 mb-5">
                    <div className="bg-gray-100 md:w-[400px] md:h-[350px] ms:w-full ms:h-full mt-2">
                      <img
                        src={data.img}
                        alt="Image"
                        className="md:w-[350px] md:h-[350px]"
                      />
                    </div>
                    <div className="md:ps-10 ps-">
                      <p className="md:text-2xl text-2xl pb-4">
                        {data.titleEnglish}
                      </p>
                      <div className="flex pb-4">
                        <p className="text-blue-600 text-xl">
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
                  <div className="h-[2px] w-full bg-gray-300 "></div>
                  {data.content.map((data, i) => {
                    return (
                      <>
                        <div className=" bg-blue-600  w-40 mb-2">
                          <p className="text-center text-white text-base font-semibold p-3">
                            {data.topicIng}
                          </p>
                        </div>
                        <div className="content">

                          <p>{parse(data.contentIng)}</p>
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
