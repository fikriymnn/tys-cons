"use client";
import React from "react";

import { useState, useEffect } from "react";
import parse from "html-react-parser";
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
import Image from "next/image";

function ArticlesAdmin() {
  const [dataArticles, setDataArticles] = useState([]);

  useEffect(() => {
    getDataArticles();
  }, []);

  //get data about
  const getDataArticles = async () => {
    try {
      try {
        const querySnapshot = await getDocs(collection(db, "articles"));
        let data = [];
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          data.push({ ...doc.data(), id: doc.id });
        });
        setDataArticles(data);
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
        <Navigation articles="ps-3 text-[#0d3064] bg-white rounded-sm" />
        <div className="p-5 w-full h-screen overflow-y-scroll">
          <div className="w-full bg-[#0d3064] ">
            <p className="pt-5 text-center font-bold text-3xl text-white">
              Articles
            </p>
            <div className="p-5 w-full">
              <div className="flex py-5">
                <a
                  className="bg-blue-500 py-3 px-5 rounded-md text-white font-bold"
                  href="/dashboardAdmin/articles/create"
                >
                  <button
                  //onClick={openAddService}
                  >
                    Add New Article
                  </button>
                </a>
              </div>
              <div className="grid grid-cols-1 gap-5 w-full">
                <div className="flex bg-slate-300 rounded-md  font-semibold">
                  <div className="p-2 h-full w-[50px] ">No</div>
                  <div className="p-2 h-full w-[225px] border-s-2">
                    <p>Image</p>
                  </div>
                  <div className="w-full flex">
                    <div className="w-[200px] border-s-2  flex justify-start items-center p-2">
                      <p>Title</p>
                    </div>
                    <div className="w-[250px] border-s-2  flex justify-start items-center p-2">
                      <p>Content</p>
                    </div>
                    <div className=" border-x-2 w-[200px] flex justify-start items-center p-2">
                      <p>Date</p>
                    </div>
                  </div>
                  <div className="w-32  flex gap-3 mx-3 my-auto">
                    <p>Actions</p>
                  </div>
                </div>

                <div className=" h-[450px] overflow-y-auto">
                  {dataArticles.length > 0 &&
                    dataArticles.map((data, i) => {
                      return (
                        <>
                          <div className="flex bg-slate-300 rounded-md">
                            <div className="p-2 h-full w-[50px] flex justify-start items-center ">
                              <p>{i + 1}</p>
                            </div>
                            <div className="px-4 py-2 h-full w-[212px] border-s-2">
                              <img src={data.img} alt="" />
                            </div>
                            <div className="w-full flex ">
                              <div className="w-[200px] border-s-2  flex justify-start items-center p-2">
                                <div className="flex flex-col">
                                  <p>{data.titleEnglish}</p>
                                  <p>{data.titleChinese}</p>
                                </div>
                              </div>
                              <div className="w-[250px] border-s-2  flex justify-start items-center p-2">
                                <div className="flex flex-col content">

                                  <div className="line-clamp-2">{parse(data.content[0].contentIng)}</div>
                                  <div className="line-clamp-2">{parse(data.content[0].contentChi)}</div>

                                </div>
                              </div>
                              <div className=" border-x-2 w-[200px] flex justify-start items-center p-2">
                                <p>{data.date}</p>
                              </div>
                            </div>
                            <div className="w-32  flex gap-3 m-3 my-auto">
                              <a
                                className="bg-yellow-400  rounded-md p-2"
                                href={`/dashboardAdmin/articles/edit?id=${data.id}`}
                              >

                                <Image
                                  width={35}
                                  height={35}
                                  src="/assets/images/edit-svgrepo-com.svg"
                                  alt=""
                                />

                              </a>
                              <button
                                onClick={async (e) => {
                                  try {
                                    // Delete the todo document with the given ID from the "todos" collection in Firestore.
                                    await deleteDoc(
                                      doc(db, "articles", data.id)
                                    );
                                    alert("delete success");
                                    location.reload();
                                    console.log("Deleted successfully");
                                  } catch (error) {
                                    console.error("An error occured", error);
                                  }
                                }}
                                className="bg-red-600 rounded-md p-2"
                              >
                                <Image
                                  width={35}
                                  height={35}
                                  src="/assets/images/delete-1-svgrepo-com.svg"
                                  alt=""
                                />
                              </button>
                            </div>
                          </div>
                          ;
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

export default ArticlesAdmin;
