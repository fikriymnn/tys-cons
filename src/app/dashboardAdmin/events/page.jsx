"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../../firebase/page";
import "@/components/admin/editor.css";
import EventsAdminPage from "@/components/admin/events/eventsPage";
import Navigation from "@/components/admin/navigation";

export default function EventsAdmin() {
  const [dataEvents, setDataEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataEvents = async () => {
    try {
      const ordersRef = collection(db, "events");
      const q = query(ordersRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });

      setDataEvents(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex">
        <Navigation events="ps-3 text-[#0d3064] bg-white rounded-sm" />
        <div className="p-5 w-full h-screen overflow-y-scroll">
          <div className="w-full bg-[#0d3064]">
            <p className="pt-5 text-center font-bold text-3xl text-white">
              Events
            </p>
            <div className="p-5 w-full">
              {/* Skeleton Button */}
              <div className="flex py-5">
                <div className="bg-blue-300 animate-pulse py-3 px-5 rounded-md w-40 h-10" />
              </div>

              {/* Skeleton Search */}
              <div className="relative py-5 pt-10">
                <div className="w-full h-12 rounded-md bg-gray-400 animate-pulse" />
              </div>

              {/* Skeleton Table Header */}
              <div className="grid grid-cols-1 gap-5 w-full">
                <div className="flex bg-slate-300 rounded-md font-semibold">
                  <div className="p-2 h-full w-[50px]">No</div>
                  <div className="p-2 h-full w-[225px] border-s-2">Image</div>
                  <div className="w-full flex">
                    <div className="w-[200px] border-s-2 flex justify-start items-center p-2">
                      Title
                    </div>
                    <div className="w-[250px] border-s-2 flex justify-start items-center p-2">
                      Content
                    </div>
                    <div className="border-x-2 w-[200px] flex justify-start items-center p-2">
                      Date
                    </div>
                  </div>
                  <div className="w-32 flex gap-3 mx-3 my-auto">Actions</div>
                </div>

                {/* Skeleton Rows */}
                <div className="h-[450px] overflow-y-auto flex flex-col gap-3">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="flex bg-slate-300 rounded-md animate-pulse mb-3"
                    >
                      {/* No */}
                      <div className="p-2 w-[50px] flex justify-start items-center">
                        <div className="h-4 w-4 bg-gray-400 rounded" />
                      </div>

                      {/* Image */}
                      <div className="p-2 w-[220px] border-s-2 flex items-center">
                        <div className="w-[150px] h-[100px] bg-gray-400 rounded" />
                      </div>

                      {/* Title + Content + Date */}
                      <div className="w-full flex">
                        <div className="w-[200px] border-s-2 flex flex-col justify-center gap-2 p-2">
                          <div className="h-4 bg-gray-400 rounded w-3/4" />
                          <div className="h-4 bg-gray-400 rounded w-1/2" />
                        </div>
                        <div className="w-[250px] border-s-2 flex flex-col justify-center gap-2 p-2">
                          <div className="h-4 bg-gray-400 rounded w-full" />
                          <div className="h-4 bg-gray-400 rounded w-5/6" />
                          <div className="h-4 bg-gray-400 rounded w-full" />
                          <div className="h-4 bg-gray-400 rounded w-4/6" />
                        </div>
                        <div className="border-x-2 w-[200px] flex justify-start items-center p-2">
                          <div className="h-4 bg-gray-400 rounded w-2/3" />
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="w-36 flex gap-3 m-3 my-auto">
                        <div className="w-[51px] h-[51px] bg-yellow-300 rounded-md" />
                        <div className="w-[51px] h-[51px] bg-red-400 rounded-md" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <EventsAdminPage data={dataEvents} />;
}
