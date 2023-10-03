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

function EditEvent() {
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

  const [durationFrom, setDurationFrom] = useState("");
  const [durationTo, setDurationTo] = useState("");

  const [data, setData] = useState([
    { topicIng: "", topicChi: "", contentIng: "", contentChi: "", img: "" },
  ]);

  const [dataOption, setDataOption] = useState([{ option: "", price: "" }]);

  const [downloadURL, setDownloadURL] = useState("");
  const [file, setFile] = useState("");

  const id = searchParams.get("id");

  // progress
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataEventse();
  }, []);

  const getDataEventse = async () => {
    try {
      const docRef = doc(db, "events", id);
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
      setData(data[0].content);
      setDurationFrom(data[0].durationFrom);
      setDurationTo(data[0].durationTo);
    } catch (error) {
      alert(error);
    }
  };

  const handleUpload = async (filess) => {
    const files = filess;
    try {
      setLoading(true);
      setFile(files.name);
      const storageRef = ref(storage, `/events/${files.name}`);

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

  const handleUpload2 = async (filess, e, i) => {
    const files = filess;
    const { name, value } = e.target;
    const onchangeVal = [...data];

    try {
      setLoading(true);
      const storageRef = ref(storage, `/events/${files.name}`);

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

            onchangeVal[i][name] = url;
            setData(onchangeVal);
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
    const todoRef = doc(db, "events", id);

    if (file == "") {
      await updateDoc(todoRef, {
        titleEnglish: titleIng,
        titleChinese: titleChi,
        durationFrom: durationFrom,
        durationTo: durationTo,

        content: data,
      });
    } else {
      await updateDoc(todoRef, {
        itleEnglish: titleIng,
        titleChinese: titleChi,
        durationFrom: durationFrom,
        durationTo: durationTo,

        img: downloadURL,

        content: data,
      });
    }

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

  const handleClickOption = () => {
    setDataOption([...dataOption, { option: "", price: "" }]);
  };
  const handleChangeOption = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...dataOption];
    onchangeVal[i][name] = value;
    setDataOption(onchangeVal);
  };
  const handleDeleteOption = (i) => {
    const deleteVal = [...dataOption];
    deleteVal.splice(i, 1);
    setDataOption(deleteVal);
  };
  return (
    <>
      {isAlert && (
        <div className="bgtr w-screen h-screen fixed top-0 flex items-center justify-center gap-5 z-50">
          <div className="flex-col">
            <div className=" text-2xl mb-5">Change Will not be saved</div>
            <div className="flex justify-between">
              <a href="/dashboardAdmin/events">
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
            <p>Edit Event</p>
          </div>
          <div className="w-1/12 flex items-center justify-center">
            <a href="/dashboardAdmin/events">
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
            <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
              <p>Duration</p>
            </div>
            <div className=" w-10/12 "></div>
          </div>
          <div className=" flex py-1 px-20 ">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>From :</p>
            </div>
            <div className=" w-10/12 p-3">
              <input
                value={durationFrom ?? ""}
                onChange={(e) => setDurationFrom(e.target.value)}
                type="date"
                placeholder="Insert Duration"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
            </div>
          </div>
          <div className=" flex py-1 px-20">
            <div className=" w-2/12 text-end p-3 py-5">
              <p>To :</p>
            </div>
            <div className=" w-10/12 p-3">
              <input
                value={durationTo ?? ""}
                onChange={(e) => setDurationTo(e.target.value)}
                type="date"
                placeholder="Insert Duration"
                color=" bg-transparent"
                className=" rounded-lg w-full border-slate-300 "
              />
            </div>
          </div>
          {data.map((val, i) => {
            return (
              <>
                <div className=" flex py-1 px-20 ">
                  <div className=" w-2/12 text-end px-3 text-2xl font-bold pt-5 text-blue-600">
                    <p>{i + 1}</p>
                  </div>
                  <div className=" w-10/12 "></div>
                </div>
                <div className=" flex py-1 px-20 ">
                  <div className=" w-2/12 text-end p-3 py-5">
                    <p>Topic :</p>
                  </div>
                  <div className=" w-10/12 p-3">
                    <textarea
                      name="topicIng"
                      value={val.topicIng}
                      onChange={(e) => handleChange(e, i)}
                      id=""
                      cols="20"
                      rows="5"
                      placeholder={`Input Topic English For Description ${
                        i + 1
                      }`}
                      color=" bg-transparent"
                      className=" w-full resize-none rounded-lg border-slate-300 "
                      maxLength={1000}
                    ></textarea>
                  </div>
                </div>
                <div className=" flex py-1 px-20">
                  <div className=" w-2/12 text-end p-3 py-5"></div>
                  <div className=" w-10/12 p-3">
                    <textarea
                      name="topicChi"
                      value={val.topicChi}
                      onChange={(e) => handleChange(e, i)}
                      id=""
                      cols="20"
                      rows="5"
                      placeholder={`Input Topic Mandarin For Description ${
                        i + 1
                      }`}
                      color=" bg-transparent"
                      className=" w-full resize-none rounded-lg border-slate-300 "
                      maxLength={1000}
                    ></textarea>
                  </div>
                </div>
                <div className=" flex py-1 px-20 ">
                  <div className=" w-2/12 text-end p-3 py-5">
                    <p>Description :</p>
                  </div>
                  <div className=" w-10/12 p-3">
                    <textarea
                      name="contentIng"
                      value={val.contentIng}
                      onChange={(e) => handleChange(e, i)}
                      id=""
                      cols="20"
                      rows="5"
                      placeholder={`Input Description English For Description ${
                        i + 1
                      }`}
                      color=" bg-transparent"
                      className=" w-full resize-none rounded-lg border-slate-300 "
                      maxLength={1000}
                    ></textarea>
                  </div>
                </div>
                <div className=" flex py-1 px-20">
                  <div className=" w-2/12 text-end p-3 py-5"></div>
                  <div className=" w-10/12 p-3">
                    <textarea
                      name="contentChi"
                      value={val.contentChi}
                      onChange={(e) => handleChange(e, i)}
                      id=""
                      cols="20"
                      rows="5"
                      placeholder={`Input Description Mandarin For Description ${
                        i + 1
                      }`}
                      color=" bg-transparent"
                      className=" w-full resize-none rounded-lg border-slate-300 "
                      maxLength={1000}
                    ></textarea>
                  </div>
                </div>
                <div className=" w-10/12 p-3 ps-72">
                  <input
                    type="file"
                    name="img"
                    onChange={(event) =>
                      handleUpload2(event.target.files[0], event, i)
                    }
                  />
                  {data.length !== 1 && (
                    <div className="w-32 mt-5 bg-red-700 text-center rounded-sm text-white">
                      <button onClick={(e) => handleDelete(i)}>Delete</button>
                    </div>
                  )}
                </div>
              </>
            );
          })}
          {/* <p>{JSON.stringify(data)}</p> */}
          <div className="flex justify-center items-center gap-10 mb-20">
            <div className="w-32 bg-blue-950 text-center rounded-xl text-white ">
              <button onClick={handleClick} className="font-light">
                Add More
              </button>
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
                  Create Event
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditEvent;
