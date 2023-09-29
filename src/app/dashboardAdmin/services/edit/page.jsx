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

function EditService() {
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
  const [priceIdr, setPriceIdr] = useState("");
  const [priceYuan, setPriceYuan] = useState("");
  const [service, setService] = useState("");
  const [subService, setSubService] = useState("");
  const [basicInfoIng, setBasicInfoIng] = useState("");
  const [basicInfoChi, setBasicInfoChi] = useState("");
  const [registrationIng, setRegistrationIng] = useState("");
  const [registrationChi, setRegistrationChi] = useState("");
  const [requiredIng, setRequiredIng] = useState("");
  const [requiredChi, setRequiredChi] = useState("");
  const [finishedIng, setFinishedIng] = useState("");
  const [finishedChi, setFinishedChi] = useState("");
  const [tradmarkIng, setTradmarkIng] = useState("");
  const [tradmarkChi, setTradmarkChi] = useState("");
  const [precautionIng, setprecautionIng] = useState("");
  const [precautionChi, setprecautionChi] = useState("");

  const [downloadURL, setDownloadURL] = useState("");
  const [file, setFile] = useState("");

  const id = searchParams.get("id");

  // progress
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataService();
  }, []);

  const getDataService = async () => {
    try {
      const docRef = doc(db, "service", id);
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
      setPriceIdr(data[0].priceRp);
      setPriceYuan(data[0].priceYuan);
      setService(data[0].service);
      setSubService(data[0].subService);
      setBasicInfoIng(data[0].basicInformationEnglish);
      setBasicInfoChi(data[0].basicInformationChinese);
      setRegistrationIng(data[0].registrationTimeEnglish);
      setRegistrationChi(data[0].registrationTimeChinese);
      setRequiredIng(data[0].requiredDocumentEnglish);
      setRequiredChi(data[0].requiredDocumentChinese);
      setFinishedIng(data[0].finishedRegistrationEnglish);
      setFinishedChi(data[0].finishedRegistrationChinese);
      setTradmarkIng(data[0].trademarkEnglish);
      setTradmarkChi(data[0].trademarkChinese);
      setprecautionIng(data[0].precautionsEnglish);
      setprecautionChi(data[0].precautionsChinese);
    } catch (error) {
      alert(error);
    }
  };

  const handleUpload = async (filess) => {
    const files = filess;
    try {
      setLoading(true);
      setFile(files.name);
      const storageRef = ref(storage, `/service/${files.name}`);

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
    const todoRef = doc(db, "service", id);

    if (file == "") {
      await updateDoc(todoRef, {
        basicInformationChinese: basicInfoChi,
        basicInformationEnglish: basicInfoIng,
        finishedRegistrationChinese: finishedChi,
        finishedRegistrationEnglish: finishedIng,

        precautionsChinese: precautionChi,
        precautionsEnglish: precautionIng,
        priceRp: priceIdr,
        priceYuan: priceYuan,
        registrationTimeChinese: registrationChi,
        registrationTimeEnglish: registrationIng,
        requiredDocumentChinese: requiredChi,
        requiredDocumentEnglish: requiredIng,
        service: service,
        subService: subService,
        titleChinese: titleChi,
        titleEnglish: titleIng,
        trademarkChinese: tradmarkChi,
        trademarkEnglish: tradmarkIng,
      });
    } else {
      await updateDoc(todoRef, {
        basicInformationChinese: basicInfoChi,
        basicInformationEnglish: basicInfoIng,
        finishedRegistrationChinese: finishedChi,
        finishedRegistrationEnglish: finishedIng,
        img: downloadURL,
        precautionsChinese: precautionChi,
        precautionsEnglish: precautionIng,
        priceRp: priceIdr,
        priceYuan: priceYuan,
        registrationTimeChinese: registrationChi,
        registrationTimeEnglish: registrationIng,
        requiredDocumentChinese: requiredChi,
        requiredDocumentEnglish: requiredIng,
        service: service,
        subService: subService,
        titleChinese: titleChi,
        titleEnglish: titleIng,
        trademarkChinese: tradmarkChi,
        trademarkEnglish: tradmarkIng,
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
              <a href="/dashboardAdmin/services">
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

      <div className="w-full min-h-screen fixed z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
        <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
          <div className="w-1/12"></div>
          <div className=" w-10/12 flex justify-center items-center">
            <p>Edit Service</p>
          </div>
          <div className="w-1/12 flex items-center justify-center">
            <a href="/dashboardAdmin/services">
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
            {loading ? <p>Loading</p> : <></>}
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
                type="text"
                value={titleIng ?? ""}
                onChange={(e) => setTitleIng(e.target.value)}
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
                type="text"
                value={titleChi ?? ""}
                onChange={(e) => setTitleChi(e.target.value)}
                placeholder="Insert Title"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
            </div>
          </div>

          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
              <p>Price</p>
            </div>
            <div className=" w-10/12 "></div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>IDR :</p>
            </div>
            <div className=" w-10/12 p-3">
              <input
                type="text"
                value={priceIdr ?? ""}
                onChange={(e) => setPriceIdr(e.target.value)}
                placeholder="Insert Price"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
            </div>
          </div>
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>元 :</p>
            </div>
            <div className=" w-10/12 p-3">
              <input
                type="text"
                value={priceYuan ?? ""}
                onChange={(e) => setPriceYuan(e.target.value)}
                placeholder="Insert Price"
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
              <p>Service</p>
            </div>
            <div className=" w-10/12 p-3 flex gap-3">
              <input
                type="text"
                value={service ?? ""}
                onChange={(e) => setService(e.target.value)}
                placeholder="This will be a Dropdown"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
              <input
                type="text"
                value={subService ?? ""}
                onChange={(e) => setSubService(e.target.value)}
                placeholder="This will be a Dropdown"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
            </div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
              <p>Basic Information</p>
            </div>
            <div className=" w-10/12 "></div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>English :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={basicInfoIng ?? ""}
                onChange={(e) => setBasicInfoIng(e.target.value)}
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
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Chinese :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={basicInfoChi ?? ""}
                onChange={(e) => setBasicInfoChi(e.target.value)}
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

          <div className=" flex py-1 px-20 ">
            <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
              <p>Registration Time and Flow Process</p>
            </div>
            <div className=" w-10/12 "></div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>English :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={registrationIng ?? ""}
                onChange={(e) => setRegistrationIng(e.target.value)}
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
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Chinese :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={registrationChi ?? ""}
                onChange={(e) => setRegistrationChi(e.target.value)}
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
          <div className=" flex py-1 px-20 ">
            <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
              <p>Required Documents</p>
            </div>
            <div className=" w-10/12 "></div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>English :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={requiredIng ?? ""}
                onChange={(e) => setRequiredIng(e.target.value)}
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
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Chinese :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={requiredChi ?? ""}
                onChange={(e) => setRequiredChi(e.target.value)}
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
          <div className=" flex py-1 px-20 ">
            <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
              <p>Finished Registration Documents</p>
            </div>
            <div className=" w-10/12 "></div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>English :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={finishedIng ?? ""}
                onChange={(e) => setFinishedIng(e.target.value)}
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
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Chinese :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={finishedChi ?? ""}
                onChange={(e) => setFinishedChi(e.target.value)}
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

          <div className=" flex py-1 px-20 ">
            <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
              <p>Trademark Categories/Class</p>
            </div>
            <div className=" w-10/12 "></div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>English :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={tradmarkIng ?? ""}
                onChange={(e) => setTradmarkIng(e.target.value)}
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
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Chinese :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={tradmarkChi ?? ""}
                onChange={(e) => setTradmarkChi(e.target.value)}
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
          <div className=" flex py-1 px-20 ">
            <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
              <p>Precautions</p>
            </div>
            <div className=" w-10/12 "></div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>English :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={precautionIng ?? ""}
                onChange={(e) => setprecautionIng(e.target.value)}
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
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>Chinese :</p>
            </div>
            <div className=" w-10/12 p-3">
              <textarea
                value={precautionChi ?? ""}
                onChange={(e) => setprecautionChi(e.target.value)}
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
                onClick={(e) => addData(e)}
                className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-green-400"
              >
                Edit Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditService;
