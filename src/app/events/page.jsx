"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../firebase/page";
import EventPage from "@/components/events/eventPage";

export default function Events() {
  const [dataEvents, setDataEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataEvents() {
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
    }

    getDataEvents();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-200 min-h-[700px] pt-24 pb-5 px-5">
        <div className="bg-white">
          {/* Search */}
          <div className="p-5 pt-10">
            <div className="h-12 bg-gray-300 rounded-md animate-pulse"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 px-5 pb-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-md shadow-xl grid grid-cols-2 md:flex md:flex-col h-full overflow-hidden"
              >
                {/* Image */}
                <div className="h-28 md:h-36 bg-gray-300 animate-pulse"></div>

                {/* Content */}
                <div className="p-3 flex flex-col justify-between h-[155px]">
                  <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>

                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3 animate-pulse"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/3 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <EventPage dataEvents={dataEvents} />;
}
