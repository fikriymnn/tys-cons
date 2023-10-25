"use client";
import React from "react";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import CustomFooter from "@/components/CustomFooter";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  getDoc,
  deleteDoc,
  orderBy,
  updateDoc,
  doc,
  Firestore,
} from "firebase/firestore";
import { db, storage, firebaseAnalytics } from "../../../firebase/page";
import { useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

// async function getDataArticles() {
//   let data = [];
//   try {
//     const querySnapshot = await getDocs(collection(db, "articles"));

//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       //   console.log(doc.id, " => ", doc.data());
//       data.push({ ...doc.data(), id: doc.id });
//     });
//   } catch (error) {
//     console.log("error");
//   }
//   return data;
// }

function Articles() {
  const [dataArticle, setDataArticle] = useState([]);
  const { language, changeLanguage } = useLanguage();

  const [dataArticleResult, setDataArticleResult] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e);
    const results = dataArticle.filter((item) =>
      language == "en"
        ? item.titleEnglish.toLowerCase().includes(search.toLowerCase())
        : item.titleChinese.toLowerCase().includes(search.toLowerCase())
    );
    setDataArticleResult(results);
  };

  useEffect(() => {
    getDataArticles();
  }, []);
  async function getDataArticles() {
    try {
      const ordersRef = collection(db, "articles");
      const q = query(ordersRef, orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
        setDataArticle(data);
      });
    } catch (error) {
      console.log("error");
    }
  }
  return (
    <>
      <NavbarWithCTAButton />
      <div className="bg-gray-200 pt-24 pb-5 ps-5 pe-5 min-h-[700px]">
        <div className="bg-white ">
          <div className="relative p-5 pt-10">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search by title..."
                className="w-full h-12 pl-4 pr-10 rounded-md border-none bg-gray-200 focus:outline-none !important"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 pointer-events-none"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293 13.293a6 6 0 111.414-1.414l5 5a1 1 0 01-1.414 1.414l-5-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 16a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 px-5 pb-5">
            {search == ""
              ? dataArticle.map((data, i) => {
                  return (
                    <>
                      <ArticleCard
                        key={i}
                        date={data.date}
                        id={data.id}
                        img={data.img}
                        title={
                          language == "en"
                            ? data.titleEnglish
                            : data.titleChinese
                        }
                      />
                    </>
                  );
                })
              : dataArticleResult.map((data, i) => {
                  return (
                    <>
                      <ArticleCard
                        key={i}
                        date={data.date}
                        id={data.id}
                        img={data.img}
                        title={
                          language == "en"
                            ? data.titleEnglish
                            : data.titleChinese
                        }
                      />
                    </>
                  );
                })}
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default Articles;
