"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../firebase/page";
import ArticlePage from "@/components/articles/articlePage";

export default function Articles() {
  const [dataArticle, setDataArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataArticles() {
      try {
        const ordersRef = collection(db, "articles");
        const q = query(ordersRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });

        setDataArticle(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    }

    getDataArticles();
  }, []);

  if (loading) {
    return (
      <div className="p-5">
        {/* Search bar */}
        <div className="mb-5">
          <div className="h-12 bg-gray-300 rounded-md animate-pulse"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
              {/* Image */}
              <div className="h-40 bg-gray-300 animate-pulse"></div>

              {/* Text */}
              <div className="p-3 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <ArticlePage dataArticle={dataArticle} />;
}
