"use client";
import React from "react";
import { useState, useEffect } from "react";
import Navigation from "@/components/admin/navigation";

function PackageAdmin() {
    return (
        <>
            <div className="flex">
                <Navigation />
                <div className="p-5 w-full h-screen overflow-y-scroll">
                    <div className="w-full bg-[#0d3064] ">
                        <p className="pt-5 text-center font-bold text-3xl text-white">Services</p>
                        <div className="p-5">
                            <div className="flex py-5">
                                <a
                                    className="bg-blue-500 py-3 px-5 rounded-md text-white font-bold"
                                    href="/dashboardAdmin/package/create"
                                >
                                    <button
                                    //onClick={openAddService}
                                    >
                                        Add New Package
                                    </button>
                                </a>
                            </div>
                            <div className="grid grid-cols-1 gap-5">
                                <div className="flex bg-slate-300 rounded-md  font-semibold">
                                    <div className="p-2 h-full w-[50px] ">No</div>
                                    <div className="p-2 h-full w-[225px] border-s-2">
                                        <p>Image</p>
                                    </div>
                                    <div className="w-full flex">
                                        <div className="w-[400px] border-s-2  flex justify-start items-center p-2">
                                            <p>Title</p>
                                        </div>
                                        <div className="border-s-2  flex justify-start items-center p-2">
                                            <p>Price</p>
                                        </div>

                                    </div>
                                    <div className="w-[230px]  flex gap-3 mx-3 my-auto">
                                        <p>Actions</p>
                                    </div>
                                </div>

                                <div className=" h-[500px] overflow-y-auto">


                                    <>
                                        <div className="flex bg-slate-300 rounded-md mb-3">
                                            <div className="p-2 h-full w-[50px] flex justify-start items-center ">
                                                <p>1</p>
                                            </div>
                                            <div className="p-2 h-full w-[209px] border-s-2">
                                                <p>Image</p>
                                            </div>
                                            <div className="w-full flex">
                                                <div className="w-[400px] border-s-2  flex justify-start items-center p-2">
                                                    <div className="flex flex-col">
                                                        <p>Title</p>
                                                        <p>Title</p>
                                                    </div>
                                                </div>
                                                <div className=" border-s-2  flex justify-start items-center p-2">
                                                    <div className="flex flex-col">
                                                        <p>Harga 元</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="w-32  flex gap-3 m-3 my-auto justify-center items-center">
                                                <a
                                                    className="bg-yellow-400  rounded-md p-1"
                                                    href=""
                                                >
                                                    <button
                                                    //onClick={openEditService}
                                                    >
                                                        <img
                                                            src="/assets/images/edit-svgrepo-com.svg"
                                                            alt=""
                                                        />
                                                    </button>
                                                </a>
                                                <button

                                                    className="bg-red-600  rounded-md p-1"
                                                >
                                                    <img
                                                        src="/assets/images/delete-1-svgrepo-com.svg"
                                                        alt=""
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackageAdmin