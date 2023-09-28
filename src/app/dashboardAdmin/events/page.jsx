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
  return (
    <>
      <div className="flex">
        <Navigation />
        <div className="w-full">
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
                <div className="p-2 h-full w-[200px] border-s-2">
                  <p>Image</p>
                </div>
                <div className="w-full flex">
                  <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                    <p>Title</p>
                  </div>
                  <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                    <p>Content</p>
                  </div>
                  <div className=" border-x-2 w-2/12 flex justify-start items-center p-2">
                    <p>Date</p>
                  </div>
                </div>
                <div className="w-64  flex gap-3 mx-3 my-auto">
                  <p>Actions</p>
                </div>
              </div>

              <div className=" h-[500px] overflow-y-auto">
                <div className=" h-[500px] overflow-y-auto">
                  <div className="flex bg-slate-300 rounded-md mb-3">
                    <div className="p-2 h-full w-[50px] flex justify-start items-center ">
                      <p>1</p>
                    </div>
                    <div className="p-2 h-full w-[200px] border-s-2">
                      <img src="/foto.jpg" alt="" />
                    </div>
                    <div className="w-full flex">
                      <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                        <div className="flex flex-col">
                          <p>Title</p>
                          <p>Chinese</p>
                        </div>
                      </div>
                      <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                        <div className="flex flex-col">
                          <p>Content</p>
                          <p>Chinese</p>
                        </div>
                      </div>
                      <div className=" border-x-2 w-2/12 flex justify-start items-center p-2">
                        <p>DD/MM/YY</p>
                      </div>
                    </div>
                    <div className="w-56  flex gap-3 m-3 my-auto">
                      <button className="bg-green-600  h-10 rounded-md p-3 ">
                        {" "}
                        <img src="/assets/images/view-svgrepo-com.svg" alt="" />
                      </button>
                      <a
                        className="bg-yellow-400 h-10 rounded-md p-3"
                        href="/dashboardAdmin/events/edit"
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
                      <button className="bg-red-600 h-10 rounded-md p-3">
                        <img
                          src="/assets/images/delete-1-svgrepo-com.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
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