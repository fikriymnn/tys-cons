"use client";
import React from "react";
import { useState, useEffect } from "react";
import Navigation from "@/components/admin/navigation";
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
import { db, storage, firebaseAnalytics } from "../../../../firebase/page";

function ServicesAdmin() {
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
  const deleteProd = async (id) => {
    try {
      // Delete the todo document with the given ID from the "todos" collection in Firestore.
      await deleteDoc(doc(db, "promo", id));
      alert("delete success");
      location.reload();
      console.log("Deleted successfully");
    } catch (error) {
      console.error("An error occured", error);
    }
  };
  return (
    <>
      <div className="flex">
        <Navigation />
        <div>
          <p className="pt-5 text-center font-bold text-3xl">Services</p>
          <div className="p-5">
            <div className="flex py-5">
              <a
                className="bg-blue-500 py-3 px-5 rounded-md text-white font-bold"
                href="/dashboardAdmin/services/create"
              >
                <button
                //onClick={openAddService}
                >
                  Add New Service
                </button>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <div className="flex bg-slate-300 rounded-md  font-semibold">
                <div className="p-2 h-full w-[50px] ">No</div>
                <div className="p-2 h-full w-[200px] border-s-2">
                  <p>Image</p>
                </div>
                <div className="w-full flex">
                  <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                    <p>Title</p>
                  </div>
                  <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                    <p>Price</p>
                  </div>
                  <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                    <p>Category</p>
                  </div>
                </div>
                <div className="w-[230px]  flex gap-3 mx-3 my-auto">
                  <p>Actions</p>
                </div>
              </div>

              <div className=" h-[500px] overflow-y-auto">
                {dataService.length > 0 &&
                  dataService.map((data, i) => {
                    return (
                      <>
                        <div className="flex bg-slate-300 rounded-md mb-3">
                          <div className="p-2 h-full w-[50px] flex justify-start items-center ">
                            <p>{i + 1}</p>
                          </div>
                          <div className="p-2 h-full w-[200px] border-s-2">
                            <img src={data.img} alt="" />
                          </div>
                          <div className="w-full flex">
                            <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                              <div className="flex flex-col">
                                <p>{data.titleEnglish}</p>
                                <p>{data.titleChinese}</p>
                              </div>
                            </div>
                            <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                              <div className="flex flex-col">
                                <p>{data.priceYuan} 元</p>
                                <p>IDR {data.priceRp}</p>
                              </div>
                            </div>
                            <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                              <div className="flex flex-col">
                                <p>{data.service}</p>
                                <p className="text-blue-600">
                                  {data.subService}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-56  flex gap-3 m-3 my-auto">
                            <button className="bg-green-600  h-10 rounded-md p-3 ">
                              {" "}
                              <img
                                src="/assets/images/view-svgrepo-com.svg"
                                alt=""
                              />
                            </button>
                            <a
                              className="bg-yellow-400 h-10 rounded-md p-3"
                              href={`/dashboardAdmin/services/edit?id=${data.id}`}
                            >
                              <button
                              //onClick={openEditService}
                              >
                                <img
                                  src="/assets/images/edit-svgrepo-com.svg"
                                  alt=""
                                />
                              </button>
                            </a>
                            <button
                              onClick={async (e) => {
                                try {
                                  // Delete the todo document with the given ID from the "todos" collection in Firestore.
                                  await deleteDoc(doc(db, "service", data.id));
                                  alert("delete success");
                                  location.reload();
                                  console.log("Deleted successfully");
                                } catch (error) {
                                  console.error("An error occured", error);
                                }
                              }}
                              className="bg-red-600 h-10 rounded-md p-3"
                            >
                              <img
                                src="/assets/images/delete-1-svgrepo-com.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesAdmin;