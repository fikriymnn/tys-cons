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

function PackageAdmin() {
  const [dataPackage, setDataPackage] = useState([]);

  useEffect(() => {
    getDataPackage();
  }, []);

  //get data about
  const getDataPackage = async () => {
    try {
      try {
        const querySnapshot = await getDocs(collection(db, "package"));
        let data = [];
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          data.push({ ...doc.data(), id: doc.id });
        });
        setDataPackage(data);
      } catch (error) {
        alert(error);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div className="flex">
        <Navigation packages="ps-3 text-[#0d3064] bg-white rounded-sm" />
        <div className="p-5 w-full h-screen overflow-y-scroll">
          <div className="w-full bg-[#0d3064] ">
            <p className="pt-5 text-center font-bold text-3xl text-white">
              Packages
            </p>
            <div className="p-5">
              <div className="flex py-5">
                <a
                  className="bg-blue-500 py-3 px-5 rounded-md text-white font-bold"
                  href="/dashboardAdmin/packages/create"
                >
                  <button
                  //onClick={openAddService}
                  >
                    Add New Package
                  </button>
                </a>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex bg-slate-300 rounded-md  font-semibold">
                  <div className="p-2 h-full w-[50px] ">No</div>
                  <div className="p-2 h-full w-[225px] border-s-2">
                    <p>Image</p>
                  </div>
                  <div className="w-full flex">
                    <div className="w-[400px] border-s-2  flex justify-start items-center p-2">
                      <p>Title</p>
                    </div>
                    <div className="border-s-2  flex justify-start items-center p-2">
                      <p>Price</p>
                    </div>
                  </div>
                  <div className="w-[230px]  flex gap-3 mx-3 my-auto">
                    <p>Actions</p>
                  </div>
                </div>

                <div className=" h-[500px] overflow-y-auto">
                  {dataPackage.map((data, i) => {
                    return (
                      <>
                        <div className="flex bg-slate-300 rounded-md mb-3">
                          <div className="p-2 h-full w-[50px] flex justify-start items-center ">
                            <p>{i + 1}</p>
                          </div>
                          <div className="p-2 h-full w-[209px] border-s-2">
                            <img src={data.img} alt="" />
                          </div>
                          <div className="w-full flex">
                            <div className="w-[400px] border-s-2  flex justify-start items-center p-2">
                              <div className="flex flex-col">
                                <p>{data.titleEnglish}</p>
                                <p>{data.titleChinese}</p>
                              </div>
                            </div>
                            <div className=" border-s-2  flex justify-start items-center p-2">
                              <div className="flex flex-col">
                                <p>{data.price[0].price} 元</p>
                              </div>
                            </div>
                          </div>
                          <div className="w-32  flex gap-3 m-3 my-auto justify-center items-center">
                            <a
                              className="bg-yellow-400  rounded-md p-1"
                              href={`/dashboardAdmin/packages/edit?id=${data.id}`}
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
                                  await deleteDoc(doc(db, "package", data.id));
                                  alert("delete success");
                                  location.reload();
                                  console.log("Deleted successfully");
                                } catch (error) {
                                  console.error("An error occured", error);
                                }
                              }}
                              className="bg-red-600  rounded-md p-1"
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
      </div>
    </>
  );
}

export default PackageAdmin;