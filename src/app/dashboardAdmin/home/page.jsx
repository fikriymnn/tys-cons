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

function HomeAdmin() {
  //get data home page
  const [dataHomeHeading, setDataHomeHeading] = useState([]);
  const [dataHomeParagraph, setDataHomeParagraph] = useState([]);
  useEffect(() => {
    getDataHomeHeading();
    getDataHomeParagraph();
  }, []);

  //get data home page
  const getDataHomeHeading = async () => {
    try {
      const docRef = doc(db, "editHomePage", "heading");
      const querySnapshot = await getDoc(docRef);

      if (querySnapshot.exists()) {
        console.log("Document data:", querySnapshot.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      let data = [];

      // doc.data() is never undefined for query doc snapshots

      data.push(querySnapshot.data());

      setDataHomeHeading(data);
    } catch (error) {
      alert(error);
    }
  };

  const getDataHomeParagraph = async () => {
    try {
      const docRef = doc(db, "editHomePage", "paragraph");
      const querySnapshot = await getDoc(docRef);

      if (querySnapshot.exists()) {
        console.log("Document data:", querySnapshot.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      let data = [];

      // doc.data() is never undefined for query doc snapshots

      data.push(querySnapshot.data());

      setDataHomeParagraph(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="flex">
        <Navigation />
        <div className="w-full">
          <p className="pt-5 text-center font-bold text-3xl ">Homepage</p>

          <div className="p-5 w-full">
            <div className="grid grid-cols-1 gap-5 w-full">
              <div className="flex bg-slate-300 rounded-md w-full font-semibold">
                <div className="w-full flex">
                  <div className="w-2/12 border-s-2  flex justify-start items-center p-2">
                    <p>Section</p>
                  </div>
                  <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                    <p>Content</p>
                  </div>
                </div>
                <div className="w-14  flex gap-3 mx-3 my-auto">
                  <p>Edit</p>
                </div>
              </div>
              <div className="flex bg-slate-300 rounded-md">
                <div className="w-full flex">
                  <div className="w-2/12 border-s-2 font-semibold flex justify-start items-center p-2">
                    <p>Heading</p>
                  </div>
                  <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                    <div className="flex flex-col">
                      {dataHomeHeading.length > 0 &&
                        dataHomeHeading.map((data, i) => {
                          return (
                            <>
                              <p>{data.english}</p>
                              <p>{data.chinese}</p>
                            </>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="w-14  flex gap-3 m-3 my-auto">
                  <a
                    className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                    href="/dashboardAdmin/home/editHeading"
                  >
                    <button>
                      <img
                        className="w-8"
                        src="/assets/images/edit-svgrepo-com.svg"
                        alt=""
                      />
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex bg-slate-300 rounded-md">
                <div className="w-full flex">
                  <div className="w-2/12 border-s-2 font-semibold flex justify-start items-center p-2">
                    <p>Paragraph</p>
                  </div>
                  <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                    <div className="flex flex-col">
                      {dataHomeParagraph.length > 0 &&
                        dataHomeParagraph.map((data, i) => {
                          return (
                            <>
                              <p>{data.english}</p>
                              <p>{data.chinese}</p>
                            </>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="w-14  flex gap-3 m-3 my-auto">
                  <a
                    className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                    href="/dashboardAdmin/home/editParagraph"
                  >
                    <button>
                      <img
                        className="w-8"
                        src="/assets/images/edit-svgrepo-com.svg"
                        alt=""
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAdmin;
