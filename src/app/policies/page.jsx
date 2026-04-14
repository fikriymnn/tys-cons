"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/page";
import PoliciesPage from "@/components/policies/policiesPage";

export default function Policies() {
  const [data, setData] = useState({
    foreign: [],
    tax: [],
    labor: [],
    import: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllData() {
      try {
        const [fo, tax, labor, imp] = await Promise.all([
          getDocs(
            query(
              collection(db, "policies"),
              where("category", "==", "Foreign Company Registration"),
            ),
          ),
          getDocs(
            query(
              collection(db, "policies"),
              where("category", "==", "Tax Regulation"),
            ),
          ),
          getDocs(
            query(
              collection(db, "policies"),
              where("category", "==", "Labor Policy"),
            ),
          ),
          getDocs(
            query(
              collection(db, "policies"),
              where("category", "==", "Import Export Procedures & Policies"),
            ),
          ),
        ]);

        const mapData = (snapshot) => {
          const arr = [];
          snapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
          });
          return arr;
        };

        setData({
          foreign: mapData(fo),
          tax: mapData(tax),
          labor: mapData(labor),
          import: mapData(imp),
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getAllData();
  }, []);

  if (loading)
    return (
      <div className="pt-24 px-5">
        <div className="md:flex justify-evenly grid grid-cols-1 gap-5">
          {/* Sidebar */}
          <div className="md:w-3/12 w-full bg-blue-600 p-3 space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-12 bg-blue-400 rounded animate-pulse"
              ></div>
            ))}
          </div>

          {/* Content */}
          <div className="md:w-9/12 w-full bg-white shadow-2xl p-5 space-y-5">
            {/* Title */}
            <div className="h-8 w-1/2 bg-gray-300 rounded mx-auto animate-pulse"></div>

            {/* Image */}
            <div className="h-60 bg-gray-300 rounded animate-pulse"></div>

            {/* Description */}
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6 animate-pulse"></div>
            </div>

            {/* Content blocks */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-6 w-40 bg-blue-300 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  return (
    <PoliciesPage
      dataForeigen={data.foreign}
      dataTak={data.tax}
      dataLabor={data.labor}
      dataImport={data.import}
    />
  );
}
