"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase/page";
import HomePage from "@/components/home/homePage";

export default function Home() {
  const [data, setData] = useState({
    heading: [],
    paragraph: [],
    article: [],
    article4: [],
    package: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllData() {
      try {
        const [
          headingSnap,
          paragraphSnap,
          articleSnap,
          article4Snap,
          packageSnap,
        ] = await Promise.all([
          getDoc(doc(db, "editHomePage", "heading")),
          getDoc(doc(db, "editHomePage", "paragraph")),
          getDocs(
            query(
              collection(db, "articles"),
              orderBy("createdAt", "desc"),
              limit(2),
            ),
          ),
          getDocs(
            query(
              collection(db, "articles"),
              orderBy("createdAt", "desc"),
              limit(5),
            ),
          ),
          getDocs(
            query(
              collection(db, "package"),
              orderBy("createdAt", "desc"),
              limit(3),
            ),
          ),
        ]);

        const mapDocs = (snapshot) => {
          const arr = [];
          snapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
          });
          return arr;
        };

        setData({
          heading: [headingSnap.data()],
          paragraph: [paragraphSnap.data()],
          article: mapDocs(articleSnap),
          article4: mapDocs(article4Snap),
          package: mapDocs(packageSnap),
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getAllData();
  }, []);

  // 🔥 LOADING SKELETON HOMEPAGE (custom sesuai layout kamu)
  if (loading) {
    return (
      <div className="animate-pulse">
        {/* HERO */}
        <div className="bg-gray-300 h-[400px] w-full"></div>

        {/* SERVICES */}
        <div className="p-6">
          <div className="h-8 w-64 bg-gray-300 mx-auto mb-6 rounded"></div>

          <div className="grid md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-200 p-5 space-y-4 rounded">
                <div className="h-6 bg-gray-300 w-2/3 rounded"></div>
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="h-4 bg-gray-300 w-full rounded"></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ARTICLES */}
        <div className="p-6">
          <div className="h-8 w-64 bg-gray-300 mx-auto mb-6 rounded"></div>

          <div className="grid md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-40 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* PACKAGES */}
        <div className="p-6 bg-gray-100">
          <div className="h-8 w-64 bg-gray-300 mx-auto mb-6 rounded"></div>

          <div className="grid md:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white p-6 space-y-4 rounded shadow">
                <div className="h-5 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="h-3 bg-gray-300 rounded"></div>
                ))}
                <div className="h-8 bg-blue-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <HomePage
      dataHeading={data.heading}
      dataParagraph={data.paragraph}
      dataArticle={data.article}
      dataArticle4={data.article4}
      dataPackage={data.package}
    />
  );
}
