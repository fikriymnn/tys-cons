"use client";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  getDoc,
  updateDoc,
  doc,
  Firestore,
} from "firebase/firestore";
import { Dropdown } from "flowbite-react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "../../../../../firebase/page";
import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditPolicies() {
  const [isAlert, setIsAlert] = useState(false);
  const openAlert = () => {
    setIsAlert(true);
  };
  const closeAlert = () => {
    setIsAlert(false);
  };
  const searchParams = useSearchParams();
  const [titleIng, setTitleIng] = useState("");
  const [titleChi, setTitleChi] = useState("");
  const [category, setCategory] = useState("");
  const [subCategoryIng, setSubCategoryIng] = useState("");
  const [subCategoryChi, setSubCategoryChi] = useState("");
  const [contentIng, setContentIng] = useState("");
  const [contentChi, setContentChi] = useState("");

  const [downloadURL, setDownloadURL] = useState("");
  const [file, setFile] = useState("");

  const id = searchParams.get("id");

  // progress
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataEvents(id);
  }, [id]);

  async function getDataEvents(idd) {
    try {
      const docRef = doc(db, "policies", idd);
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

      setTitleIng(data[0].titleEnglish);
      setTitleChi(data[0].titleChinese);
      setCategory(data[0].category);
      setSubCategoryIng(data[0].subCategoryEnglish);
      setSubCategoryChi(data[0].subCategoryChinese);
      setContentIng(data[0].contentEnglish);
      setContentChi(data[0].contentChinese);
    } catch (error) {
      alert(error);
    }
  }

  const handleUpload = async (filess) => {
    const files = filess;
    try {
      setLoading(true);
      setFile(files.name);
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
    const todoRef = doc(db, "policies", id);

    if (file == "") {
      await updateDoc(todoRef, {
        titleEnglish: titleIng,
        titleChinese: titleChi,
        category: category,
        subCategory: subCategory,

        contentEnglish: contentIng,
        contentChinese: contentChi,
      });
    } else {
      await updateDoc(todoRef, {
        titleEnglish: titleIng,
        titleChinese: titleChi,
        category: category,
        subCategoryEnglish: subCategoryIng,
        subCategoryChinese: subCategoryChi,

        img: downloadURL,

        contentEnglish: contentIng,
        contentChinese: contentChi,
      });
    }

    alert("success");
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

      <div className="w-full  z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
        <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
          <div className="w-1/12"></div>
          <div className=" w-10/12 flex justify-center items-center">
            <p>Edit Policies and Regulations</p>
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

        <div className="">
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
              <p>Image</p>
            </div>
            <div className=" w-10/12 p-3">
              <input
                type="file"
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
              <p>English :</p>
            </div>
            <div className=" w-10/12 p-3">
              <input
                value={titleIng ?? ""}
                onChange={(e) => setTitleIng(e.target.value)}
                type="text"
                placeholder="Insert Title"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
            </div>
          </div>
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Chinese :</p>
            </div>
            <div className=" w-10/12 p-3">
              <input
                value={titleChi ?? ""}
                onChange={(e) => setTitleChi(e.target.value)}
                type="text"
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
                value={category ?? ""}
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
                value={subCategoryIng}
                onChange={(e) => setSubCategoryIng(e.target.value)}
                type="text"
                placeholder="Sub category english"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
              <input
                value={subCategoryChi}
                onChange={(e) => setSubCategoryChi(e.target.value)}
                type="text"
                placeholder="Sub category chinese"
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
              <p>Description :</p>
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
            <div className=" w-2/12 text-end p-3 py-5"></div>
            <div className=" w-10/12 p-3">
              <ReactQuill
                theme="snow"
                value={contentChi}
                onChange={(e) => setContentChi(e)}
                name="contentChi"
                placeholder={`Input Description Mandarin For Description`}
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
                  onClick={(e) => addData(e)}
                  className="p-3 px-7  rounded-lg mb-5 text-white bg-green-400"
                >
                  Edit Policies and Regulations
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPolicies;
