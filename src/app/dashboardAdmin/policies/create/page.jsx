"use client";
import React from "react";
import { Dropdown } from "flowbite-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  updateDoc,
  doc,
  Firestore,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "../../../../../firebase/page";
import DropdownDef1 from "@/components/dropdownDef";
import DropdownDef2 from "@/components/dropdownDef2";

function CreatePolicies() {
  const [isAlert, setIsAlert] = useState(false);
  const openAlert = () => {
    setIsAlert(true);
  };
  const closeAlert = () => {
    setIsAlert(false);
  };

  const [titleIng, setTitleIng] = useState("");
  const [titleChi, setTitleChi] = useState("");
  const [category, setCategory] = useState("");
  const [subCategoryIng, setSubCategoryIng] = useState("");
  const [subCategoryChi, setSubCategoryChi] = useState("");
  const [contentIng, setContentIng] = useState("");
  const [contentChi, setContentChi] = useState("");
  const [downloadURL, setDownloadURL] = useState("");

  // progress
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (filess) => {
    const files = filess;
    try {
      setLoading(true);
      const storageRef = ref(storage, `/policies/${files.name}`);

      // progress can be paused and resumed. It also exposes progress updates.
      // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, files);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          // download url

          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            setDownloadURL(url);
            setLoading(false);
          });
        }
      );
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  const addData = async (e) => {
    e.preventDefault();
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const docRef = await addDoc(collection(db, "policies"), {
      titleEnglish: titleIng,
      titleChinese: titleChi,
      category: category,
      subCategoryEnglish: subCategoryIng,
      subCategoryChinese: subCategoryChi,

      img: downloadURL,
      date: date,
      contentEnglish: contentIng,
      contentChinese: contentChi,
    });

    alert("success");
  };
  const handleClick = () => {
    setData([
      ...data,
      { topicIng: "", topicChi: "", contentIng: "", contentChi: "", img: "" },
    ]);
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...data];
    onchangeVal[i][name] = value;
    setData(onchangeVal);
  };
  const handleDelete = (i) => {
    const deleteVal = [...data];
    deleteVal.splice(i, 1);
    setData(deleteVal);
  };

  return (
    <>
      {isAlert && (
        <div className="bgtr w-screen h-screen fixed top-0 flex items-center justify-center gap-5 z-50">
          <div className="flex-col">
            <div className=" text-2xl mb-5">Change Will not be saved</div>
            <div className="flex justify-between">
              <a href="/dashboardAdmin/policies">
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

      <div className="w-full  z-40 rounded-xl border-[#007aff] border-2  top-0">
        <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
          <div className="w-1/12"></div>
          <div className=" w-10/12 flex justify-center items-center">
            <p>Create New Policies and Regulations</p>
          </div>
          <div className="w-1/12 flex items-center justify-center">
            <a href="/dashboardAdmin/policies">
              <button
                // onClick={openAlert}
                className="bg-red-600 rounded-lg py-2 px-5 text-xl"
              >
                X
              </button>
            </a>
          </div>
        </div>
        <form onSubmit={addData}>
          <div className="">
            <div className=" flex py-1 px-20 ">
              <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                <p>Image</p>
              </div>
              <div className=" w-10/12 p-3">
                <input
                  type="file"
                  required
                  onChange={(event) => handleUpload(event.target.files[0])}
                />
              </div>
            </div>
            <div className=" flex py-1 px-20 ">
              <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                <p>Title</p>
              </div>
              <div className=" w-10/12 "></div>
            </div>
            <div className=" flex py-1 px-20 ">
              <div className=" w-2/12 text-end p-3 py-5">
                <p>
                  title <span className="text-red-400">English</span> :
                </p>
              </div>
              <div className=" w-10/12 p-3">
                <input
                  onChange={(e) => setTitleIng(e.target.value)}
                  type="text"
                  required
                  placeholder="Insert Title"
                  color=" bg-transparent"
                  className=" rounded-lg w-full border-slate-300 "
                />
              </div>
            </div>
            <div className=" flex py-1 px-20">
              <div className=" w-2/12 text-end p-3 py-5">
                <p>
                  title <span className="text-red-400">Chinese</span> :
                </p>
              </div>
              <div className=" w-10/12 p-3">
                <input
                  onChange={(e) => setTitleChi(e.target.value)}
                  type="text"
                  required
                  placeholder="Insert Title"
                  color=" bg-transparent"
                  className=" rounded-lg w-full border-slate-300 "
                />
              </div>
            </div>

            <div className=" flex py-1 px-20 ">
              <div className=" w-2/12 "></div>
              <div className=" w-10/12 "></div>
            </div>
            <div className=" flex py-1 px-20 ">
              <div className=" w-2/12 text-end p-3 py-5 text-2xl font-semibold">
                <p>Category</p>
              </div>
              <div className=" w-10/12 p-3 flex gap-3">
                <Dropdown
                  className="bg-white"
                  label={category == "" ? "Categories" : category}
                >
                  <div className="grid grid-cols-1 ">
                    <button
                      onClick={() => {
                        setCategory("Foreign Company Registration");
                      }}
                    >
                      <div className="p-2">Foreign Company Registration</div>
                    </button>
                    <button
                      onClick={() => {
                        setCategory("Tax Regulation");
                      }}
                    >
                      <div className="p-2">Tax Regulation</div>
                    </button>
                    <button
                      onClick={() => {
                        setCategory("Labor Policy");
                      }}
                    >
                      <div className="p-2">Labor Policy</div>
                    </button>
                    <button
                      onClick={() => {
                        setCategory("Import Export Procedures & Policies");
                      }}
                    >
                      <div className="p-2">
                        Import Export Procedures & Policies
                      </div>
                    </button>
                  </div>
                </Dropdown>

                {/* <input
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="This will be a Dropdown"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              /> */}
              </div>
            </div>
            <div className=" flex py-1 px-20 ">
              <div className=" w-2/12 text-end p-3 py-5 text-2xl font-semibold">
                <p> Sub Category</p>
              </div>
              <div className=" w-10/12 p-3 flex gap-3">
                <input
                  onChange={(e) => setSubCategoryIng(e.target.value)}
                  type="text"
                  required
                  placeholder="Sub category english language"
                  color=" bg-transparent"
                  className=" rounded-lg w-full border-slate-300 "
                />
                <input
                  onChange={(e) => setSubCategoryChi(e.target.value)}
                  type="text"
                  required
                  placeholder="Sub category chinese language"
                  color=" bg-transparent"
                  className=" rounded-lg w-full border-slate-300 "
                />
              </div>
            </div>

            <div className=" flex py-1 px-20 ">
              <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
                <p>Content</p>
              </div>
              <div className=" w-10/12 "></div>
            </div>
            <div className=" flex py-1 px-20 ">
              <div className=" w-2/12 text-end p-3 py-5">
                <p>
                  Description <span className="text-red-400">English</span> :
                </p>
              </div>
              <div className=" w-10/12 p-3">
                <ReactQuill
                  theme="snow"
                  value={contentIng}
                  onChange={(e) => setContentIng(e)}
                  name="contentIng"
                  placeholder={`Input Description English For Description`}
                  maxLength={2000}
                  className="h-[200px] "
                />
              </div>
            </div>
            <div className=" flex py-1 px-20">
              <div className=" w-2/12 text-end p-3 py-5">
                <p>
                  Description <span className="text-red-400">Chinese</span> :
                </p>
              </div>
              <div className=" w-10/12 p-3">
                <ReactQuill
                  theme="snow"
                  value={contentChi}
                  onChange={(e) => setContentChi(e)}
                  name="contentChi"
                  placeholder={`Input Description Chinese For Description`}
                  maxLength={2000}
                  className="h-[200px] my-10 "
                />
              </div>
            </div>

            <div className="mx-20">
              <div className=" flex items-end justify-end mx-3">
                {loading ? (
                  <p>Loading</p>
                ) : (
                  <button
                    type="submit"
                    className="p-3 px-7  rounded-lg mb-5 text-white bg-green-400"
                  >
                    Create New Policies and Regulations
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreatePolicies;
