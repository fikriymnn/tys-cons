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

function EventsAdmin() {
  const [dataEvents, setDataEvents] = useState([]);

  useEffect(() => {
    getDataEvents();
  }, []);

  //get data about
  const getDataEvents = async () => {
    try {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        let data = [];
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          data.push({ ...doc.data(), id: doc.id });
        });
        setDataEvents(data);
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
        <Navigation />
        <div className="w-full h-screen overflow-y-scroll">
          <p className="pt-5 text-center font-bold text-3xl">Events</p>

          <div className="p-5 w-full">
            <div className="flex py-5 w-full">
              <a
                className="bg-blue-500 py-3 px-5 rounded-md text-white font-bold"
                href="/dashboardAdmin/events/create"
              >
                <button
                // onClick={openAddEvent}
                >
                  New Events
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

              <div className=" h-[500px] overflow-y-auto">
                <div className=" h-[500px] overflow-y-auto">
                  {dataEvents.length > 0 &&
                    dataEvents.map((data, i) => {
                      return (
                        <>
                          <div className="flex bg-slate-300 rounded-md mb-3">
                            <div className="p-2 h-full w-[50px] flex justify-start items-center ">
                              <p>{i + 1}</p>
                            </div>
                            <div className="p-2 h-full w-[220px] border-s-2">
                              <img src={data.img} alt="" />
                            </div>
                            <div className="w-full flex">
                              <div className="w-[200px] border-s-2  flex justify-start items-center p-2">
                                <div className="flex flex-col">
                                  <p>{data.titleChinese}</p>
                                  <p>{data.titleEnglish}</p>
                                </div>
                              </div>
                              <div className="w-[250px] border-s-2  flex justify-start items-center p-2">
                                <div className="flex flex-col">
                                  <p>{data.content[0].contentIng}</p>
                                  <p>{data.content[0].contentChi}</p>
                                </div>
                              </div>
                              <div className=" border-x-2 w-[200px] flex justify-start items-center p-2">
                                <p>{data.date}</p>
                              </div>
                            </div>
                            <div className="w-36  flex gap-3 m-3 my-auto">
                              <a
                                className="bg-yellow-400 h-10 rounded-md p-3"
                                href={`/dashboardAdmin/events/edit?id=${data.id}`}
                              >
                                <button
                                // onClick={openEditEvent}
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
                                    await deleteDoc(doc(db, "events", data.id));
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
      </div>
    </>
  );
}

export default EventsAdmin;
