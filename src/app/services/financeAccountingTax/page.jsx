"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, where, query, orderBy } from "firebase/firestore";
import { db } from "../../../../firebase/page";
import FinaceAccountingPage from "@/components/service/finaceAccountingPage";

export default function FinanceAccountingTax() {
  const [data, setData] = useState({
    finance: [],
    accounting: [],
    tax: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllData() {
      try {
        const [financeSnap, accountingSnap, taxSnap] = await Promise.all([
          getDocs(
            query(
              collection(db, "service"),
              where("service", "==", "Finance Accounting Tax"),
              where("subService", "==", "Finance Services"),
              orderBy("createdAt", "desc"),
            ),
          ),
          getDocs(
            query(
              collection(db, "service"),
              where("service", "==", "Finance Accounting Tax"),
              where("subService", "==", "Accounting Services"),
              orderBy("createdAt", "desc"),
            ),
          ),
          getDocs(
            query(
              collection(db, "service"),
              where("service", "==", "Finance Accounting Tax"),
              where("subService", "==", "Tax Services"),
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
          finance: mapData(financeSnap),
          accounting: mapData(accountingSnap),
          tax: mapData(taxSnap),
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getAllData();
  }, []);

  // 🔥 Loading Skeleton (SAMA seperti sebelumnya)
  if (loading) {
    return (
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
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="w-32 h-4 bg-gray-300 rounded animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Card Grid */}
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
                  <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-blue-300 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <FinaceAccountingPage
      dataFinanceServices={data.finance}
      dataFinanceAccounting={data.accounting}
      dataFinanceTax={data.tax}
    />
  );
}
