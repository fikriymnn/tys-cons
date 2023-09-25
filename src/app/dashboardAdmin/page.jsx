"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import CrudTable from "@/components/admin/crudTable";
import CrudCat from "@/components/admin/crudCat";
import CrudCat2 from "@/components/admin/crudCat2";
import AdminHomepage from "@/components/admin/pages/AdminHomepage";
import AdminAbout from "@/components/admin/pages/AdminAbout";

// Form Edit Content Homepage & About = Line 263
// Form Input Services = Line 332
// Form Edit Service = Line 705
// Form Input Article = Line 1076
// Form Edit Article = Line 1226
// Form Input Event = Line 1377
// Form Edit Event = Line 1558
// Form Input Pol n Reg = Line 1739
// Form Edit Pol n Reg = Line  1871

function dashboarAdmin() {
  const [bar, setBar] = useState(1);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [isInputService, setIsInputService] = useState(false);
  const [isEditService, setIsEditService] = useState(false);
  const [isInputArticle, setIsInputArticle] = useState(false);
  const [isEditArticle, setIsEditArticle] = useState(false);
  const [isInputEvent, setIsInputEvent] = useState(false);
  const [isEditEvent, setIsEditEvent] = useState(false);
  const [isInputPolicies, setIsInputPolicies] = useState(false);
  const [isEditPolicies, setIsEditPolicies] = useState(false);

  const toggleBar = () => {
    setBar((prevBar) => (prevBar === 1 ? 0 : 1));
  };
  const [comp, setComp] = useState(0);

  const openEdit = () => {
    setIsEditOpen(true);
  };
  const closeEdit = () => {
    setIsEditOpen(false);
  };

  const openAddService = () => {
    setIsInputService(true);
  };
  const closeAddService = () => {
    setIsInputService(false);
  };
  const openAddEvent = () => {
    setIsInputEvent(true);
  };
  const closeAddEvent = () => {
    setIsInputEvent(false);
  };
  const openEditEvent = () => {
    setIsEditEvent(true);
  };
  const closeEditEvent = () => {
    setIsEditEvent(false);
  };
  const openAddArticle = () => {
    setIsInputArticle(true);
  };
  const closeAddArticle = () => {
    setIsInputArticle(false);
  };
  const openAddPolicies = () => {
    setIsInputPolicies(true);
  };
  const closeAddPolicies = () => {
    setIsInputPolicies(false);
  };

  const openEditService = () => {
    setIsEditService(true);
  };
  const closeEditService = () => {
    setIsEditService(false);
  };
  const openEditArticle = () => {
    setIsEditArticle(true);
  };
  const closeEditArticle = () => {
    setIsEditArticle(false);
  };
  const openEditPolicies = () => {
    setIsEditPolicies(true);
  };
  const closeEditPolicies = () => {
    setIsEditPolicies(false);
  };

  const openAlert = () => {
    setIsAlert(true);
  };
  const closeAlert = () => {
    setIsAlert(false);
    setIsEditOpen(false);
    setIsInputService(false);
    setIsEditService(false);
    setIsInputArticle(false);
    setIsEditArticle(false);
    setIsInputEvent(false);
    setIsEditEvent(false);
    setIsInputPolicies(false);
    setIsEditPolicies(false);
  };

  return (
    <>
      <div>Administration</div>

      {/* ======================Card Alert====================== */}
      {isAlert && (
        <div className="bgtr w-screen h-screen fixed top-0 flex items-center justify-center gap-5 z-50">
          <div className="flex-col">
            <div className=" text-2xl mb-5">Change Will not be saved</div>
            <div className="flex justify-between">
              <button
                className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-red-700"
                onClick={closeAlert}
              >
                Oke
              </button>
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

      {/* ====================== SIDEBAR ====================== */}
      <div className="flex">
        <div
          className={`${
            bar == 1
              ? " w-[200px] duration-100 ease-in-out"
              : " w-[80px] duration-100 ease-in-out"
          } h-screen shadow-md flex-col`}
        >
          <div className="w-full h-[80px] mt-10 shadow-md  ">
            <button className="w-full h-full" onClick={toggleBar}>
              CO
            </button>
          </div>
          <button
            onClick={() => {
              if (!isEditOpen) {
                setComp(0);
              } else {
                setIsAlert(true);
              }
            }}
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? <p>H</p> : <p className="">Homepage</p>}
          </button>
          <button
            onClick={() => {
              if (!isEditOpen) {
                setComp(1);
              } else {
                setIsAlert(true);
              }
            }}
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? <p>A</p> : <p>About</p>}
          </button>
          <button
            onClick={() => {
              if (!isEditOpen) {
                setComp(2);
              } else {
                setIsAlert(true);
              }
            }}
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? (
              <p>S</p>
            ) : (
              <>
                <p>Services</p>
                {}
              </>
            )}
          </button>
          <button
            onClick={() => {
              if (!isEditOpen) {
                setComp(3);
              } else {
                setIsAlert(true);
              }
            }}
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? <p>A</p> : <p>Articles</p>}
          </button>
          <button
            onClick={() => {
              if (!isEditOpen) {
                setComp(4);
              } else {
                setIsAlert(true);
              }
            }}
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? <p>E</p> : <p>Event</p>}
          </button>
          <button
            onClick={() => {
              if (!isEditOpen) {
                setComp(5);
              } else {
                setIsAlert(true);
              }
            }}
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? <p>PR</p> : <p>Pol and Reg</p>}
          </button>
        </div>

        {/* ====================== MAIN WINDOW ====================== */}
        <div className="w-full">
          <div className="bg-slate-200 rounded-xl m-5 mt-16">
            {/* ====================== FORM EDIT TEXT COMPONENT ====================== */}

            {isEditOpen && (
              <div className="w-10/12 m-2 fixed z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
                <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
                  <div className="w-1/12"></div>
                  <div className=" w-10/12 flex justify-center items-center">
                    <p>Edit "Component Name"</p>
                  </div>
                  <div className="w-1/12 flex items-center justify-center">
                    <button
                      onClick={openAlert}
                      className="bg-red-600 rounded-lg py-2 px-5 text-xl"
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  <div className=" flex p-5 px-20 ">
                    <div className=" w-2/12 text-end p-3 py-5">
                      <p>English :</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <textarea
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
                        className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-[#007aff]"
                        onClick={closeEdit}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ====================== FORM INPUT SERVICE ====================== */}
            {isInputService && (
              <div className="w-10/12 m-2 fixed z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
                <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
                  <div className="w-1/12"></div>
                  <div className=" w-10/12 flex justify-center items-center">
                    <p>Edit "Component Name"</p>
                  </div>
                  <div className="w-1/12 flex items-center justify-center">
                    <button
                      onClick={openAlert}
                      className="bg-red-600 rounded-lg py-2 px-5 text-xl"
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Image</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <input type="file" />
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
                        type="text"
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
                        placeholder="This will be a Dropdown"
                        color=" bg-transparent"
                        className=" rounded-lg w-full border-slate-300 "
                      />
                      <input
                        type="text"
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
                        className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-[#007aff]"
                        onClick={closeAddService}
                      >
                        Add New Service
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ====================== FORM EDIT SERVICE ====================== */}
            {isEditService && (
              <div className="w-10/12 m-2 fixed z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
                <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
                  <div className="w-1/12"></div>
                  <div className=" w-10/12 flex justify-center items-center">
                    <p>Edit "Component Name"</p>
                  </div>
                  <div className="w-1/12 flex items-center justify-center">
                    <button
                      onClick={openAlert}
                      className="bg-red-600 rounded-lg py-2 px-5 text-xl"
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Image</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <input type="file" />
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
                        type="text"
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
                        placeholder="This will be a Dropdown"
                        color=" bg-transparent"
                        className=" rounded-lg w-full border-slate-300 "
                      />
                      <input
                        type="text"
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
                        className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-green-400"
                        onClick={closeEditService}
                      >
                        Edit Service
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ====================== FORM INPUT Article ====================== */}
            {isInputArticle && (
              <div className="w-10/12 m-2 fixed z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
                <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
                  <div className="w-1/12"></div>
                  <div className=" w-10/12 flex justify-center items-center">
                    <p>Create New Article</p>
                  </div>
                  <div className="w-1/12 flex items-center justify-center">
                    <button
                      onClick={openAlert}
                      className="bg-red-600 rounded-lg py-2 px-5 text-xl"
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Image</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <input type="file" />
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
                        type="text"
                        placeholder="Insert Title"
                        color=" bg-transparent"
                        className=" rounded-lg w-full border-slate-300 "
                      />
                    </div>
                  </div>

                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Head Text</p>
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
                        placeholder="Insert Price"
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
                    <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
                      <p>Article Content</p>
                    </div>
                    <div className=" w-10/12 "></div>
                  </div>
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end p-3 py-5">
                      <p>English :</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <textarea
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
                        className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-[#007aff]"
                        onClick={closeAddService}
                      >
                        Add New Article
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ====================== FORM EDIT Article ====================== */}
            {isEditArticle && (
              <div className="w-10/12 m-2 fixed z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
                <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
                  <div className="w-1/12"></div>
                  <div className=" w-10/12 flex justify-center items-center">
                    <p>Edit Article</p>
                  </div>
                  <div className="w-1/12 flex items-center justify-center">
                    <button
                      onClick={openAlert}
                      className="bg-red-600 rounded-lg py-2 px-5 text-xl"
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Image</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <input type="file" />
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
                        type="text"
                        placeholder="Insert Title"
                        color=" bg-transparent"
                        className=" rounded-lg w-full border-slate-300 "
                      />
                    </div>
                  </div>

                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Head Text</p>
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
                        placeholder="Insert Price"
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
                    <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
                      <p>Article Content</p>
                    </div>
                    <div className=" w-10/12 "></div>
                  </div>
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end p-3 py-5">
                      <p>English :</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <textarea
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
                        className="p-3 px-7  rounded-lg mb-5 text-white bg-green-400"
                        onClick={closeEditArticle}
                      >
                        Edit Article
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ====================== FORM INPUT EVENT ====================== */}
            {isInputEvent && (
              <div className="w-10/12 m-2 fixed z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
                <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
                  <div className="w-1/12"></div>
                  <div className=" w-10/12 flex justify-center items-center">
                    <p>Create New Article</p>
                  </div>
                  <div className="w-1/12 flex items-center justify-center">
                    <button
                      onClick={openAlert}
                      className="bg-red-600 rounded-lg py-2 px-5 text-xl"
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Image</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <input type="file" />
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
                        type="text"
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
                        type="text"
                        placeholder="Insert Duration"
                        color=" bg-transparent"
                        className=" rounded-lg w-full border-slate-300 "
                      />
                    </div>
                  </div>
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Head Text</p>
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
                        placeholder="Insert Price"
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
                    <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
                      <p>Event Content</p>
                    </div>
                    <div className=" w-10/12 "></div>
                  </div>
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end p-3 py-5">
                      <p>English :</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <textarea
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
                        className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-[#007aff]"
                        onClick={closeAddEvent}
                      >
                        Add New Event
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ====================== FORM EDIT Event ====================== */}
            {isEditEvent && (
              <div className="w-10/12 m-2 fixed z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
                <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
                  <div className="w-1/12"></div>
                  <div className=" w-10/12 flex justify-center items-center">
                    <p>Edit Event</p>
                  </div>
                  <div className="w-1/12 flex items-center justify-center">
                    <button
                      onClick={openAlert}
                      className="bg-red-600 rounded-lg py-2 px-5 text-xl"
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Image</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <input type="file" />
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
                        type="text"
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
                        type="text"
                        placeholder="Insert Duration"
                        color=" bg-transparent"
                        className=" rounded-lg w-full border-slate-300 "
                      />
                    </div>
                  </div>
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Head Text</p>
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
                        placeholder="Insert Price"
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
                    <div className=" w-10/12 px-3 text-2xl font-semibold pt-5">
                      <p>Event Content</p>
                    </div>
                    <div className=" w-10/12 "></div>
                  </div>
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end p-3 py-5">
                      <p>English :</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <textarea
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
                        className="p-3 px-7  rounded-lg mb-5 text-white bg-green-400"
                        onClick={closeEditEvent}
                      >
                        Edit Event
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ====================== FORM INPUT POLICIES ====================== */}
            {isInputPolicies && (
              <div className="w-10/12 m-2 fixed z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
                <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
                  <div className="w-1/12"></div>
                  <div className=" w-10/12 flex justify-center items-center">
                    <p>Add Policies and Regulations</p>
                  </div>
                  <div className="w-1/12 flex items-center justify-center">
                    <button
                      onClick={openAlert}
                      className="bg-red-600 rounded-lg py-2 px-5 text-xl"
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Image</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <input type="file" />
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
                      <input
                        type="text"
                        placeholder="This will be a Dropdown"
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
                      <p>English :</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <textarea
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
                        className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-[#007aff]"
                        onClick={closeAddPolicies}
                      >
                        Add New Policies and Regulations
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ====================== FORM EDIT POLICIES ====================== */}
            {isEditPolicies && (
              <div className="w-10/12 m-2 fixed z-40 rounded-xl border-[#007aff] border-2 bgtr top-0">
                <div className=" bg-[#007aff] flex  text-2xl font-semibold py-7 rounded-t-xl text-white ">
                  <div className="w-1/12"></div>
                  <div className=" w-10/12 flex justify-center items-center">
                    <p>Edit Policies and Regulations</p>
                  </div>
                  <div className="w-1/12 flex items-center justify-center">
                    <button
                      onClick={openAlert}
                      className="bg-red-600 rounded-lg py-2 px-5 text-xl"
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  <div className=" flex py-1 px-20 ">
                    <div className=" w-2/12 text-end px-3 text-2xl font-semibold pt-5">
                      <p>Image</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <input type="file" />
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
                      <input
                        type="text"
                        placeholder="This will be a Dropdown"
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
                      <p>English :</p>
                    </div>
                    <div className=" w-10/12 p-3">
                      <textarea
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
                        className="p-3 px-7 hover:bg-blue-500 rounded-lg mb-5 text-white bg-[#007aff]"
                        onClick={closeEditPolicies}
                      >
                        Edit Policies and Regulations
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ====================== COMPONENT WINDOW ====================== */}

            {comp == 0 ? (
              <>
                {/* ====================== HOMEPAGE ====================== */}
                <p className="pt-5 text-center font-bold text-3xl">Homepage</p>

                <div className="p-5">
                  <div className="grid grid-cols-1 gap-5">
                    <div className="flex bg-slate-300 rounded-md  font-semibold">
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
                            <p>
                              Establish Your Business in Indonesia Conveniently
                            </p>
                            <p>轻松开展印尼公司</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button
                          onClick={openEdit}
                          className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                        >
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex bg-slate-300 rounded-md">
                      <div className="w-full flex">
                        <div className="w-2/12 border-s-2 font-semibold flex justify-start items-center p-2">
                          <p>Paragraph</p>
                        </div>
                        <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                          <div className="flex flex-col">
                            <p>
                              TYS Consulting is a Business Consultant with main
                              business in providing one-stop enterprise
                              consultation services for enterprises or
                              individuals who wants to establish business in
                              Indonesia. Our team are equipped to communicate in
                              Mandarin, English and Bahasa Indonesia with
                              experiences on helping numerous customers in
                              various sectors from establishment till ready to
                              start business operation.
                            </p>
                            <p>
                              TYS
                              咨询是一家咨询公司，主要业务是为有意在印尼开展业务的企业或个人提供一站式企业咨询
                              服务。我们的团队能够用普通话、英语和印度尼西亚语进行交流，并在帮助各行各业的众多客户
                              从成立到准备开始业务运营方面拥有丰富的经验
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button
                          onClick={openEdit}
                          className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                        >
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex bg-slate-300 rounded-md">
                      <div className="w-full flex">
                        <div className="w-2/12 font-semibold flex justify-start items-center p-2">
                          <p>Service</p>
                        </div>
                        <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                          <div className="flex flex-col">
                            <p>What Service We Offer</p>
                            <p>我们提供的服务</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button
                          onClick={openEdit}
                          className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                        >
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex bg-slate-300 rounded-md">
                      <div className="w-full flex">
                        <div className="w-2/12 font-semibold flex justify-start items-center p-2">
                          <p>Article</p>
                        </div>
                        <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                          <div className="flex flex-col">
                            <p>Latest Article</p>
                            <p>最新文章</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button
                          onClick={openEdit}
                          className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                        >
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex bg-slate-300 rounded-md">
                      <div className="w-full flex">
                        <div className="w-2/12 font-semibold flex justify-start items-center p-2">
                          <p>Package</p>
                        </div>
                        <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                          <div className="flex flex-col">
                            <p>Choose The Best Package You Need</p>
                            <p>选择您需要的服务包</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button
                          onClick={openEdit}
                          className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                        >
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex bg-slate-300 rounded-md">
                      <div className="w-full flex">
                        <div className="w-2/12  font-semibold flex justify-start items-center p-2">
                          <p>Clients</p>
                        </div>
                        <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                          <div className="flex flex-col">
                            <p>Our Clients</p>
                            <p>我们客户</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button
                          onClick={openEdit}
                          className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                        >
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : comp == 1 ? (
              <>
                {/* ====================== ABOUT ====================== */}
                <p className="pt-5 text-center font-bold text-3xl">About</p>
                <div className="p-5">
                  <div className="grid grid-cols-1 gap-5">
                    <div className="flex bg-slate-300 rounded-md  font-semibold">
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
                            <p>About Us</p>
                            <p>Chinese</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button
                          onClick={openEdit}
                          className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                        >
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex bg-slate-300 rounded-md">
                      <div className="w-full flex">
                        <div className="w-2/12 border-s-2 font-semibold flex justify-start items-center p-2">
                          <p>Paragraph</p>
                        </div>
                        <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                          <div className="flex flex-col">
                            <p>
                              TYS Consulting is a Business Consultant with main
                              business in providing one-stop enterprise
                              consultation services for enterprises or
                              individuals who wants to establish business in
                              Indonesia. Our team are equipped to communicate in
                              Mandarin, English and Bahasa Indonesia with
                              experiences on helping numerous customers in
                              various sectors from establishment till ready to
                              start business operation.
                            </p>
                            <p>Chinese</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button
                          onClick={openEdit}
                          className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                        >
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex bg-slate-300 rounded-md">
                      <div className="w-full flex">
                        <div className="w-2/12 font-semibold flex justify-start items-center p-2">
                          <p>Address</p>
                        </div>
                        <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                          <p>Citra garden, Kalideres, Jakarta Barat 11840</p>
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button
                          onClick={openEdit}
                          className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                        >
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex bg-slate-300 rounded-md">
                      <div className="w-full flex">
                        <div className="w-2/12 font-semibold flex justify-start items-center p-2">
                          <p>Phone</p>
                        </div>
                        <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                          <p>0812-1355-1038</p>
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button
                          onClick={openEdit}
                          className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                        >
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex bg-slate-300 rounded-md">
                      <div className="w-full flex">
                        <div className="w-2/12  font-semibold flex justify-start items-center p-2">
                          <p>EMail</p>
                        </div>
                        <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                          <p>marketing@.com</p>
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button
                          onClick={openEdit}
                          className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto"
                        >
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex bg-slate-300 rounded-md">
                      <div className="w-full flex">
                        <div className="w-2/12 font-semibold flex justify-start items-center p-2">
                          <p>Barcode</p>
                        </div>
                        <div className="w-8/12 border-s-2  flex justify-start items-center p-2">
                          <img
                            className="w-20"
                            src="/assets/images/qr-tys.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="w-14  flex gap-3 m-3 my-auto">
                        <button className="bg-yellow-400 w-full h-10 rounded-md flex items-center justify-center m-auto">
                          <img
                            className="w-8"
                            src="/assets/images/edit-svgrepo-com.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : comp == 2 ? (
              <>
                {/* ====================== SERVICES ====================== */}
                <p className="pt-5 text-center font-bold text-3xl">Services</p>
                <div className="p-5">
                  <div className="flex py-5">
                    <button
                      onClick={openAddService}
                      className="bg-blue-500 py-3 px-5 rounded-md text-white font-bold"
                    >
                      New Service
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-5">
                    <div className="flex bg-slate-300 rounded-md  font-semibold">
                      <div className="p-2 h-full w-[50px] ">No</div>
                      <div className="p-2 h-full w-[200px] border-s-2">
                        <p>Image</p>
                      </div>
                      <div className="w-full flex">
                        <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                          <p>Title</p>
                        </div>
                        <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                          <p>Price</p>
                        </div>
                        <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                          <p>Category</p>
                        </div>
                        <div className=" border-x-2 w-[150px] flex justify-start items-center p-2">
                          <p>Date</p>
                        </div>
                      </div>
                      <div className="w-[230px]  flex gap-3 mx-3 my-auto">
                        <p>Actions</p>
                      </div>
                    </div>

                    <div className=" h-[500px] overflow-y-auto">
                      <div className="flex bg-slate-300 rounded-md mb-3">
                        <div className="p-2 h-full w-[50px] flex justify-start items-center ">
                          <p>1</p>
                        </div>
                        <div className="p-2 h-full w-[200px] border-s-2">
                          <img src="/foto.jpg" alt="" />
                        </div>
                        <div className="w-full flex">
                          <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                            <div className="flex flex-col">
                              <p>Title</p>
                              <p>Chinese</p>
                            </div>
                          </div>
                          <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                            <div className="flex flex-col">
                              <p>3000-2000 元</p>
                              <p>IDR 4,211,692.00</p>
                            </div>
                          </div>
                          <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                            <div className="flex flex-col">
                              <p>Basic Establishment Services</p>
                              <p className="text-blue-600">Trademark</p>
                            </div>
                          </div>
                          <div className=" border-x-2 w-2/12 flex justify-start items-center p-2">
                            <p>DD/MM/YY</p>
                          </div>
                        </div>
                        <div className="w-56  flex gap-3 m-3 my-auto">
                          <button className="bg-green-600  h-10 rounded-md p-3 ">
                            {" "}
                            <img
                              src="/assets/images/view-svgrepo-com.svg"
                              alt=""
                            />
                          </button>
                          <button
                            onClick={openEditService}
                            className="bg-yellow-400 h-10 rounded-md p-3"
                          >
                            <img
                              src="/assets/images/edit-svgrepo-com.svg"
                              alt=""
                            />
                          </button>
                          <button className="bg-red-600 h-10 rounded-md p-3">
                            <img
                              src="/assets/images/delete-1-svgrepo-com.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : comp == 3 ? (
              <>
                {/* ====================== ARTICLES ====================== */}
                <p className="pt-5 text-center font-bold text-3xl">Articles</p>
                <div className="p-5">
                  <div className="flex py-5">
                    <button
                      onClick={openAddArticle}
                      className="bg-blue-500 py-3 px-5 rounded-md text-white font-bold"
                    >
                      New Article
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-5">
                    <div className="flex bg-slate-300 rounded-md  font-semibold">
                      <div className="p-2 h-full w-[50px] ">No</div>
                      <div className="p-2 h-full w-[200px] border-s-2">
                        <p>Image</p>
                      </div>
                      <div className="w-full flex">
                        <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                          <p>Title</p>
                        </div>
                        <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                          <p>Content</p>
                        </div>
                        <div className=" border-x-2 w-2/12 flex justify-start items-center p-2">
                          <p>Date</p>
                        </div>
                      </div>
                      <div className="w-64  flex gap-3 mx-3 my-auto">
                        <p>Actions</p>
                      </div>
                    </div>

                    <div className=" h-[500px] overflow-y-auto">
                      <div className="flex bg-slate-300 rounded-md mb-3">
                        <div className="p-2 h-full w-[50px] flex justify-start items-center ">
                          <p>1</p>
                        </div>
                        <div className="p-2 h-full w-[200px] border-s-2">
                          <img src="/foto.jpg" alt="" />
                        </div>
                        <div className="w-full flex">
                          <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                            <div className="flex flex-col">
                              <p>Title</p>
                              <p>Chinese</p>
                            </div>
                          </div>
                          <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                            <div className="flex flex-col">
                              <p>Content</p>
                              <p>Chinese</p>
                            </div>
                          </div>
                          <div className=" border-x-2 w-2/12 flex justify-start items-center p-2">
                            <p>DD/MM/YY</p>
                          </div>
                        </div>
                        <div className="w-56  flex gap-3 m-3 my-auto">
                          <button className="bg-green-600  h-10 rounded-md p-3 ">
                            {" "}
                            <img
                              src="/assets/images/view-svgrepo-com.svg"
                              alt=""
                            />
                          </button>
                          <button
                            onClick={openEditArticle}
                            className="bg-yellow-400 h-10 rounded-md p-3"
                          >
                            <img
                              src="/assets/images/edit-svgrepo-com.svg"
                              alt=""
                            />
                          </button>
                          <button className="bg-red-600 h-10 rounded-md p-3">
                            <img
                              src="/assets/images/delete-1-svgrepo-com.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : comp == 4 ? (
              <>
                {/* ====================== EVENTS ====================== */}
                <p className="pt-5 text-center font-bold text-3xl">Events</p>

                <div className="p-5">
                  <div className="flex py-5">
                    <button
                      onClick={openAddEvent}
                      className="bg-blue-500 py-3 px-5 rounded-md text-white font-bold"
                    >
                      New Events
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-5">
                    <div className="flex bg-slate-300 rounded-md  font-semibold">
                      <div className="p-2 h-full w-[50px] ">No</div>
                      <div className="p-2 h-full w-[200px] border-s-2">
                        <p>Image</p>
                      </div>
                      <div className="w-full flex">
                        <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                          <p>Title</p>
                        </div>
                        <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                          <p>Content</p>
                        </div>
                        <div className=" border-x-2 w-2/12 flex justify-start items-center p-2">
                          <p>Date</p>
                        </div>
                      </div>
                      <div className="w-64  flex gap-3 mx-3 my-auto">
                        <p>Actions</p>
                      </div>
                    </div>

                    <div className=" h-[500px] overflow-y-auto">
                      <div className=" h-[500px] overflow-y-auto">
                        <div className="flex bg-slate-300 rounded-md mb-3">
                          <div className="p-2 h-full w-[50px] flex justify-start items-center ">
                            <p>1</p>
                          </div>
                          <div className="p-2 h-full w-[200px] border-s-2">
                            <img src="/foto.jpg" alt="" />
                          </div>
                          <div className="w-full flex">
                            <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                              <div className="flex flex-col">
                                <p>Title</p>
                                <p>Chinese</p>
                              </div>
                            </div>
                            <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                              <div className="flex flex-col">
                                <p>Content</p>
                                <p>Chinese</p>
                              </div>
                            </div>
                            <div className=" border-x-2 w-2/12 flex justify-start items-center p-2">
                              <p>DD/MM/YY</p>
                            </div>
                          </div>
                          <div className="w-56  flex gap-3 m-3 my-auto">
                            <button className="bg-green-600  h-10 rounded-md p-3 ">
                              {" "}
                              <img
                                src="/assets/images/view-svgrepo-com.svg"
                                alt=""
                              />
                            </button>
                            <button
                              onClick={openEditEvent}
                              className="bg-yellow-400 h-10 rounded-md p-3"
                            >
                              <img
                                src="/assets/images/edit-svgrepo-com.svg"
                                alt=""
                              />
                            </button>
                            <button className="bg-red-600 h-10 rounded-md p-3">
                              <img
                                src="/assets/images/delete-1-svgrepo-com.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : comp == 5 ? (
              <>
                {/* ====================== POLICIES AND REGULATIONS ====================== */}
                <p className="pt-5 text-center font-bold text-3xl">
                  Policies and Regulation
                </p>
                <div className="p-5">
                  <div className="flex py-5">
                    <button
                      onClick={openAddPolicies}
                      className="bg-blue-500 py-3 px-5 rounded-md text-white font-bold"
                    >
                      New Content
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-5">
                    <div className="flex bg-slate-300 rounded-md  font-semibold">
                      <div className="p-2 h-full w-[50px] ">No</div>
                      <div className="p-2 h-full w-[200px] border-s-2">
                        <p>Image</p>
                      </div>
                      <div className="w-full flex">
                        <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                          <p>Title</p>
                        </div>
                        <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                          <p>Content</p>
                        </div>
                        <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                          <p>Category</p>
                        </div>
                        <div className=" border-x-2 w-[150px] flex justify-start items-center p-2">
                          <p>Date</p>
                        </div>
                      </div>
                      <div className="w-[230px]  flex gap-3 mx-3 my-auto">
                        <p>Actions</p>
                      </div>
                    </div>

                    <div className=" h-[500px] overflow-y-auto">
                      <div className="flex bg-slate-300 rounded-md mb-3">
                        <div className="p-2 h-full w-[50px] flex justify-start items-center ">
                          <p>1</p>
                        </div>
                        <div className="p-2 h-full w-[200px] border-s-2">
                          <img src="/foto.jpg" alt="" />
                        </div>
                        <div className="w-full flex">
                          <div className="w-4/12 border-s-2  flex justify-start items-center p-2">
                            <div className="flex flex-col">
                              <p>Title</p>
                              <p>Chinese</p>
                            </div>
                          </div>
                          <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                            <div className="flex flex-col">
                              <p>Content Chinese</p>
                            </div>
                          </div>
                          <div className="w-6/12 border-s-2  flex justify-start items-center p-2">
                            <div className="flex flex-col">
                              <p>Foreign Company Registration</p>
                              <p className="text-blue-600">
                                Trading Company Regulation
                              </p>
                            </div>
                          </div>
                          <div className=" border-x-2 w-2/12 flex justify-start items-center p-2">
                            <p>DD/MM/YY</p>
                          </div>
                        </div>
                        <div className="w-56  flex gap-3 m-3 my-auto">
                          <button className="bg-green-600  h-10 rounded-md p-3 ">
                            {" "}
                            <img
                              src="/assets/images/view-svgrepo-com.svg"
                              alt=""
                            />
                          </button>
                          <button
                            onClick={openEditPolicies}
                            className="bg-yellow-400 h-10 rounded-md p-3"
                          >
                            <img
                              src="/assets/images/edit-svgrepo-com.svg"
                              alt=""
                            />
                          </button>
                          <button className="bg-red-600 h-10 rounded-md p-3">
                            <img
                              src="/assets/images/delete-1-svgrepo-com.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div>0</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default dashboarAdmin;
