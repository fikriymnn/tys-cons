"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../firebase/page";
import PackagesPage from "@/components/packages/packagesPage";

export default function Packages() {
  const [dataPackage, setDataPackage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataPackage() {
      try {
        const q = query(
          collection(db, "package"),
          orderBy("createdAt", "desc"),
        );

        const querySnapshot = await getDocs(q);

        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });

        setDataPackage(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getDataPackage();
  }, []);

  if (loading)
    return (
      <div className="bg-slate-100 w-full py-4 mt-20">
        {/* Title */}
        <div className="flex justify-center pt-10">
          <div className="h-8 w-80 bg-gray-300 rounded animate-pulse"></div>
        </div>

        {/* Cards */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-3 px-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white p-[50px] rounded-lg shadow-lg flex flex-col justify-between"
            >
              {/* Title */}
              <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto animate-pulse mb-4"></div>

              {/* Price */}
              <div className="h-5 bg-gray-300 rounded w-1/2 mx-auto animate-pulse mb-6"></div>

              {/* Services */}
              <div className="space-y-2 mb-6">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div
                    key={j}
                    className="h-4 bg-gray-300 rounded w-full animate-pulse"
                  ></div>
                ))}
              </div>

              {/* Button */}
              <div className="h-10 bg-gray-300 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    );

  return <PackagesPage dataPackage={dataPackage} />;
}
