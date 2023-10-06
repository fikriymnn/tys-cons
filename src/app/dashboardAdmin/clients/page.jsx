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

function ClientAdmin() {
  const [dataClient, setDataClient] = useState([]);

  useEffect(() => {
    getDataClient();
  }, []);

  //get data about
  const getDataClient = async () => {
    try {
      try {
        const querySnapshot = await getDocs(collection(db, "clients"));
        let data = [];
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          data.push({ ...doc.data(), id: doc.id });
        });
        setDataClient(data);
      } catch (error) {
        alert(error);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="flex">
        <Navigation />
        <div className="p-5 w-full h-screen overflow-y-scroll">
          <div className="w-full bg-[#0d3064] ">
            <p className="pt-5 text-center font-bold text-3xl text-white">
              Customers
            </p>

            <div className="p-5 w-full">
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-7">
                {dataClient.map((data, i) => {
                  return (
                    <>
                      <div key={i} className="border-2 p-2">
                        <img src={data.img} alt="" />
                        <div className=" flex gap-2 w-24 pt-2">
                          <a
                            href={`/dashboardAdmin/clients/edit?id=${data.id}`}
                            className="bg-yellow-400 h-10 rounded-md p-3"
                          >
                            <button className="">
                              <img
                                src="/assets/images/edit-svgrepo-com.svg"
                                alt=""
                              />
                            </button>
                          </a>
                          <button
                            onClick={async (e) => {
                              try {
                                // Delete the todo document with the given ID from the "todos" collection in Firestore.
                                await deleteDoc(doc(db, "clients", data.id));
                                alert("delete success");
                                location.reload();
                              } catch (error) {
                                console.error("An error occured", error);
                              }
                            }}
                            className="bg-red-600 h-10 rounded-md p-3"
                          >
                            <img
                              src="/assets/images/delete-1-svgrepo-com.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}

                <a
                  href="/dashboardAdmin/clients/create/"
                  className="flex justify-center items-center bg-slate-300 hover:translate-y-[-10px]"
                >
                  <button>
                    <div>
                      <p className="text-5xl text-center">+</p>
                      <p className="font-extralight text-sm">Add New Logo</p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientAdmin;
