"use client";
import React from "react";
import { useState, useEffect } from "react";
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
import { db, storage, firebaseAnalytics } from "../../../../../firebase/page";

function EditParagraph() {
  const [isAlert, setIsAlert] = useState(false);

  const [china, setChina] = useState("");
  const [inggris, setInggris] = useState("");

  useEffect(() => {
    getDataHomeParagraph();
  }, []);

  const getDataHomeParagraph = async () => {
    try {
      const docRef = doc(db, "editHomePage", "paragraph");
      const querySnapshot = await getDoc(docRef);

      // if (querySnapshot.exists()) {
      //   console.log("Document data:", querySnapshot.data());
      // } else {
      //   // docSnap.data() will be undefined in this case
      //   console.log("No such document!");
      // }
      let data = [];

      // doc.data() is never undefined for query doc snapshots

      data.push(querySnapshot.data());

      setChina(data[0].chinese);
      setInggris(data[0].english);
    } catch (error) {
      alert(error);
    }
  };

  const update = async (e) => {
    e.preventDefault();

    try {
      const todoRef = doc(db, "editHomePage", "paragraph");

      await updateDoc(todoRef, {
        chinese: china,
        english: inggris,
      });

      alert("Success");

      // Update the "completed" field of the todo document to the value of the "checked" property of the event target.

      // Get a reference to the todo document with the given ID in the "todos" collection in Firestore.

      // After updating the todo, fetch all todos for the current user and update the state with the new data.
    } catch (error) {
      alert(error);
    }
  };

  const openAlert = () => {
    setIsAlert(true);
  };
  const closeAlert = () => {
    setIsAlert(false);
  };
  return (
    <>
      {isAlert && (
        <div className="bgtr w-screen h-screen fixed top-0 flex items-center justify-center gap-5 z-50">
          <div className="flex-col">
            <div className=" text-2xl mb-5">Change Will not be saved</div>
            <div className="flex justify-between">
              <a href="/dashboardAdmin/home">
                <button className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-red-700">
                  Oke
                </button>
              </a>
              <button
                className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-green-500"
                onClick={() => {
                  setIsAlert(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full min-h-full fixed z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
        <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
          <div className="w-1/12"></div>
          <div className=" w-10/12 flex justify-center items-center">
            <p>Edit Paragraph</p>
          </div>
          <div className="w-1/12 flex items-center justify-center">
            <a href="/dashboardAdmin/home">
              <button
                // onClick={openAlert}
                className="bg-red-600 rounded-lg py-2 px-5 text-xl"
              >
                X
              </button>
            </a>
          </div>
        </div>

        <div className="max-h-[500px] overflow-y-auto">
          <div className=" flex p-5 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>English :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={inggris || ""}
                onChange={(e) => setInggris(e.target.value)}
                name=""
                id=""
                cols="20"
                rows="5"
                placeholder="Enter New Text"
                color=" bg-transparent"
                className=" w-full resize-none rounded-lg border-slate-300 "
                maxLength={1000}
              ></textarea>
            </div>
          </div>
          <div className=" flex p-5 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Chinese :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={china || ""}
                onChange={(e) => setChina(e.target.value)}
                name=""
                id=""
                cols="20"
                rows="5"
                placeholder="Enter New Text"
                color=" bg-transparent"
                className=" w-full resize-none rounded-lg border-slate-300 "
                maxLength={1000}
              ></textarea>
            </div>
          </div>

          <div className="mx-20">
            <div className=" flex items-end justify-end mx-3">
              <button
                onClick={(e) => update(e)}
                className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-[#007aff]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditParagraph;
