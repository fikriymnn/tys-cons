"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../../../../firebase/page";
import BasicEstablisPage from "@/components/service/basicEstablisPage";

export default function Events() {
  const [data, setData] = useState({
    company: [],
    visa: [],
    trademark: [],
    office: [],
    construction: [],
    factory: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllData() {
      try {
        const [
          companySnap,
          visaSnap,
          trademarkSnap,
          officeSnap,
          constructionSnap,
          factorySnap,
        ] = await Promise.all([
          getDocs(
            query(
              collection(db, "service"),
              where("service", "==", "Basic Establishment Services"),
              where("subService", "==", "Company Registration"),
              orderBy("createdAt", "desc"),
            ),
          ),
          getDocs(
            query(
              collection(db, "service"),
              where("service", "==", "Basic Establishment Services"),
              where("subService", "==", "Visa Registration"),
              orderBy("createdAt", "desc"),
            ),
          ),
          getDocs(
            query(
              collection(db, "service"),
              where("service", "==", "Basic Establishment Services"),
              where("subService", "==", "Trademark"),
              orderBy("createdAt", "desc"),
            ),
          ),
          getDocs(
            query(
              collection(db, "service"),
              where("service", "==", "Basic Establishment Services"),
              where("subService", "==", "Office Administration"),
              orderBy("createdAt", "desc"),
            ),
          ),
          getDocs(
            query(
              collection(db, "service"),
              where("service", "==", "Basic Establishment Services"),
              where("subService", "==", "Construction Certifications"),
              orderBy("createdAt", "desc"),
            ),
          ),
          getDocs(
            query(
              collection(db, "service"),
              where("service", "==", "Basic Establishment Services"),
              where("subService", "==", "Factory Licenses"),
              orderBy("createdAt", "desc"),
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
          company: mapData(companySnap),
          visa: mapData(visaSnap),
          trademark: mapData(trademarkSnap),
          office: mapData(officeSnap),
          construction: mapData(constructionSnap),
          factory: mapData(factorySnap),
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getAllData();
  }, []);

  if (loading) {
    return (
      <>
        <div className="pt-24 px-5 bg-gray-200 min-h-[700px]">
          {/* Breadcrumb */}
          <div className="flex pb-5 gap-2">
            <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="w-40 h-4 bg-blue-300 rounded animate-pulse"></div>
          </div>

          <div className="bg-white">
            {/* Tabs */}
            <div className="p-5 pt-3">
              <div className="flex gap-5 border-b overflow-auto h-16 items-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-32 h-4 bg-gray-300 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>

            {/* Grid Card Skeleton */}
            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-5 px-5 pb-5">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white shadow-xl md:h-72 grid md:block sm:block grid-cols-2"
                >
                  {/* Image */}
                  <div className="h-40 bg-gray-300 animate-pulse"></div>

                  {/* Content */}
                  <div className="p-3 space-y-3">
                    {/* Title */}
                    <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>

                    {/* Price */}
                    <div className="h-4 w-1/2 bg-blue-300 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <BasicEstablisPage
      dataServiceCompany={data.company}
      dataServiceVisa={data.visa}
      dataServiceTrademark={data.trademark}
      dataServiceOffice={data.office}
      dataServiceConstruction={data.construction}
      dataServiceFactory={data.factory}
    />
  );
}
