"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
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
import { db, storage, firebaseAnalytics } from "../../../../../firebase/page";

function CreatePackage() {
  const [dataService, setDataService] = useState([]);

  useEffect(() => {
    getDataService();
  }, []);

  //get data about
  const getDataService = async () => {
    try {
      try {
        const querySnapshot = await getDocs(collection(db, "service"));
        let data = [];
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          data.push({ ...doc.data(), id: doc.id });
        });
        setDataService(data);
      } catch (error) {
        alert(error);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      {/* {isAlert && (
                <div className="bgtr w-screen h-screen fixed top-0 flex items-center justify-center gap-5 z-50">
                    <div className="flex-col">
                        <div className=" text-2xl mb-5">Change Will not be saved</div>
                        <div className="flex justify-between">
                            <a href="/dashboardAdmin/services">
                                <button className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-red-700">
                                    Oke
                                </button>
                            </a>
                            <button
                                className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-green-500"
                                onClick={() => {
                                    setIsAlert(false);
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )} */}

      <div className="w-full z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
        <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
          <div className="w-1/12"></div>
          <div className=" w-10/12 flex justify-center items-center">
            <p>Create New Package</p>
          </div>
          <div className="w-1/12 flex items-center justify-center">
            <a href="/dashboardAdmin/packages">
              <button
                // onClick={openAlert}
                className="bg-red-600 rounded-lg py-2 px-5 text-xl"
              >
                X
              </button>
            </a>
          </div>
        </div>

        <div className="">
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
              <p>Image</p>
            </div>
            <div className=" w-10/12 p-3">
              <input type="file" />
            </div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
              <p>Title</p>
            </div>
            <div className=" w-10/12 "></div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>English :</p>
            </div>
            <div className=" w-10/12 p-3">
              <input
                type="text"
                placeholder="Insert Title"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
            </div>
          </div>
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Chinese :</p>
            </div>
            <div className=" w-10/12 p-3">
              <input
                type="text"
                placeholder="Insert Title"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
            </div>
          </div>

          <div className=" flex py-5 px-20 ">
            <div className=" w-3/12 text-end px-3 text-2xl font-semibold pt-5">
              <p>Price Option</p>
            </div>
            <div className=" w-10/12 "></div>
          </div>

          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>English :</p>
            </div>
            <div className=" w-10/12 p-3">
              <input
                type="text"
                name="option"
                placeholder="option"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
            </div>
          </div>
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Input Price :</p>
            </div>
            <div className=" w-10/12 p-3">
              <input
                type="text"
                name="price"
                placeholder="input"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />

              <div className="w-32 mt-5 bg-red-700 text-center rounded-sm text-white">
                <button>Delete option</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-10 mb-20">
            <div className="w-32 bg-blue-950 text-center rounded-xl text-white ">
              <button className="font-light">Add Option</button>
            </div>
          </div>
          {/* <p>{JSON.stringify(dataOption)}</p> */}

          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 "></div>
            <div className=" w-10/12 "></div>
          </div>
          <div className=" flex py-1 px-20 justify-center items-center">
            <div className=" w-2/12 text-end p-3 py-3 text-2xl font-semibold">
              <p>Service</p>
            </div>
            <div className=" w-10/12 p-3 flex gap-3">
              <input
                type="text"
                placeholder="This will be a Dropdown"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
            </div>
          </div>
          <Dropdown className="bg-white" label="">
            {dataService.map((data, i) => {
              return (
                <>
                  <button>
                    <div className="p-5 w-full">
                      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-7">
                        <div className=" bg-blue-700">
                          <img src={data.img} alt="" />
                        </div>
                        <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                          <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                            {data.titleEnglish}
                          </h1>
                          <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                            {data.price[0].price} 元
                          </h2>
                        </div>
                      </div>
                    </div>
                  </button>
                </>
              );
            })}
          </Dropdown>
          <div className="flex justify-center items-center gap-10 mb-20">
            <div className="w-32 bg-blue-950 text-center rounded-xl text-white ">
              <button className="font-light">Add Service</button>
            </div>
          </div>
          <div className=" flex py-1 ps-40 pt-32 ">
            <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
              <p>Content</p>
            </div>
          </div>

          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end px-3 text-2xl font-bold pt-5 text-blue-600">
              <p>1</p>
            </div>
            <div className=" w-10/12 "></div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Topic :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                name="topicIng"
                id=""
                cols="20"
                rows="5"
                placeholder="input"
                color=" bg-transparent"
                className=" w-full resize-none rounded-lg border-slate-300 "
                maxLength={1000}
              ></textarea>
            </div>
          </div>
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5"></div>
            <div className=" w-10/12 p-3">
              <textarea
                name="topicChi"
                id=""
                cols="20"
                rows="5"
                placeholder="input"
                color=" bg-transparent"
                className=" w-full resize-none rounded-lg border-slate-300 "
                maxLength={1000}
              ></textarea>
            </div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Description :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                name="contentIng"
                id=""
                cols="20"
                rows="5"
                placeholder="input"
                color=" bg-transparent"
                className=" w-full resize-none rounded-lg border-slate-300 "
                maxLength={1000}
              ></textarea>
            </div>
          </div>
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5"></div>
            <div className=" w-10/12 p-3">
              <textarea
                name="contentChi"
                id=""
                cols="20"
                rows="5"
                placeholder="input"
                color=" bg-transparent"
                className=" w-full resize-none rounded-lg border-slate-300 "
                maxLength={1000}
              ></textarea>
            </div>
          </div>
          <div className=" w-10/12 p-3 ps-72">
            <input type="file" name="img" />

            <div className="w-32 mt-5 bg-red-700 text-center rounded-sm text-white">
              <button>Delete</button>
            </div>
          </div>

          {/* <p>{JSON.stringify(data)}</p> */}
          <div className="flex justify-center items-center gap-10 mb-20">
            <div className="w-32 bg-blue-950 text-center rounded-xl text-white ">
              <button className="font-light">Add More</button>
            </div>
          </div>

          <div className="mx-20">
            <div className=" flex items-end justify-end mx-3">
              <button className="p-3 px-7  rounded-lg mb-5 text-white bg-green-400">
                Create New Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePackage;
