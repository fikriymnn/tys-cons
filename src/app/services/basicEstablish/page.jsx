"use client";
import React from "react";
import CompanyRegistrationPage from "@/components/ServicesSub/BasicEstablishmentServices/CompanyRegistrationPage";

import { Tabs } from "flowbite-react";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import CustomFooter from "@/components/CustomFooter";
import VisaRegistrationPage from "@/components/ServicesSub/BasicEstablishmentServices/VisaRegistrationPage";
import TrademarkPage from "@/components/ServicesSub/BasicEstablishmentServices/TrademarkPage";
import OfficeAdministrationPage from "@/components/ServicesSub/BasicEstablishmentServices/officeAdministrationPage";
import ConstructionCertificationsPage from "@/components/ServicesSub/BasicEstablishmentServices/ConstructionCertificationsPage";
import FactoryLicensesPage from "@/components/ServicesSub/BasicEstablishmentServices/FactoryLicensesPage";
import { collection, getDocs, where, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db, storage, firebaseAnalytics } from "../../../../firebase/page";

function Events() {
  const [comp, setComp] = useState(0);
  const [dataServiceCompany, setDataServiceCompany] = useState([]);
  const [dataServiceVisa, setDataServiceVisa] = useState([]);
  const [dataServiceTrademark, setDataServiceTrademark] = useState([]);
  const [dataServiceOffice, setDataServiceOffice] = useState([]);
  const [dataServiceConstruction, setDataServiceConstruction] = useState([]);
  const [dataServiceFactory, setDataServiceFactory] = useState([]);

  useEffect(() => {
    getDataServiceCompany();
    getDataServiceVisa();
    getDataServiceTrademark();
    getDataServiceOffice();
    getDataServiceConstruction();
    getDataServiceFactory();

  }, []);

  //get data about
  const getDataServiceCompany = async () => {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Basic Establishment Services"),
        where("subService", "==", "Company Registration")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {

        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataServiceCompany(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getDataServiceVisa = async () => {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Basic Establishment Services"),
        where("subService", "==", "Visa Registration")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {

        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataServiceVisa(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getDataServiceTrademark = async () => {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Basic Establishment Services"),
        where("subService", "==", "Trademark")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {

        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataServiceTrademark(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getDataServiceOffice = async () => {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Basic Establishment Services"),
        where("subService", "==", "Office Administration")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {

        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataServiceOffice(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getDataServiceConstruction = async () => {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Basic Establishment Services"),
        where("subService", "==", "Construction Certifications")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {

        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataServiceConstruction(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getDataServiceFactory = async () => {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Basic Establishment Services"),
        where("subService", "==", "Factory Licenses")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {

        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataServiceFactory(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarWithCTAButton />
      <div className="bg-gray-200 pt-24 pb-5 ps-5 pe-5">
        <div className="flex pb-5">
          <p>Services </p>{" "}
          <p className="text-blue-600 ml-1">/ Basic Establishment Services</p>
        </div>
        <div className="bg-white">
          <div className="p-5 pt-3">
            <div className="w-full ">
              <div className="flex gap-9 border-b w-full overflow-auto md:h-full sm:h-full h-16 ">
                <button
                  onClick={() => setComp(0)}
                  className={`${comp == 0
                    ? "text-blue-600 border-b pb-2 border-blue-600"
                    : "text-black border-0"
                    } md:text-base sm:text-sm text-sm`}
                >
                  Company Registration
                </button>
                <button
                  onClick={() => setComp(1)}
                  className={`${comp == 1
                    ? "text-blue-600 border-b pb-2 border-blue-600"
                    : "text-black border-0"
                    } md:text-base sm:text-sm text-sm`}
                >
                  Visa Registration
                </button>
                <button
                  onClick={() => setComp(2)}
                  className={`${comp == 2
                    ? "text-blue-600 border-b pb-2 border-blue-600"
                    : "text-black border-0"
                    } md:text-base sm:text-sm text-sm`}
                >
                  Trademark
                </button>
                <button
                  onClick={() => setComp(3)}
                  className={`${comp == 3
                    ? "text-blue-600 border-b pb-2 border-blue-600"
                    : "text-black border-0"
                    } md:text-base sm:text-sm text-sm`}
                >
                  OfficeAdministration
                </button>
                <button
                  onClick={() => setComp(4)}
                  className={`${comp == 4
                    ? "text-blue-600 border-b pb-2 border-blue-600"
                    : "text-black border-0"
                    } md:text-base sm:text-sm text-sm`}
                >
                  Construction Certifications
                </button>
                <button
                  onClick={() => setComp(5)}
                  className={`${comp == 5
                    ? "text-blue-600 border-b pb-2 border-blue-600"
                    : "text-black border-0"
                    } md:text-base sm:text-sm text-sm`}
                >
                  Factory Licenses
                </button>
              </div>
            </div>
          </div>
          {comp == 0 ? (
            <>
              <div className="grid md:grid-cols-5 md:grid sm:grid sm:grid-cols-3 grid-cols-1  gap-5 px-5 pb-5">
                {dataServiceCompany.map((data, i) => {
                  return (
                    <>
                      <div key={i}>
                        <a href={`/services/detail?id=${data.id}`}>
                          <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                            <div className=" bg-blue-700 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

                            </div>
                            <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                              <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                {data.titleEnglish}
                              </h1>
                              <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                {data.price[0].price}
                              </h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : comp == 1 ? (
            <>
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5">
                {dataServiceVisa.map((data, i) => {
                  return (
                    <>
                      <div key={i}>
                        <a href={`/services/detail?id=${data.id}`}>
                          <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                            <div className=" bg-blue-700 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

                            </div>
                            <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                              <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                {data.titleEnglish}
                              </h1>
                              <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                {data.price[0].price}
                              </h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : comp == 2 ? (
            <>
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5">
                {dataServiceTrademark.map((data, i) => {
                  return (
                    <>
                      <div key={i}>
                        <a href={`/services/detail?id=${data.id}`}>
                          <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                            <div className=" bg-blue-700 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

                            </div>
                            <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                              <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                {data.titleEnglish}
                              </h1>
                              <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                {data.price[0].price}
                              </h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : comp == 3 ? (
            <>
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5">
                {dataServiceOffice.map((data, i) => {
                  return (
                    <>
                      <div key={i}>
                        <a href={`/services/detail?id=${data.id}`}>
                          <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                            <div className=" bg-blue-700 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

                            </div>
                            <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                              <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                {data.titleEnglish}
                              </h1>
                              <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                {data.price[0].price}
                              </h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : comp == 4 ? (
            <>
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5">
                {dataServiceConstruction.map((data, i) => {
                  return (
                    <>
                      <div key={i}>
                        <a href={`/services/detail?id=${data.id}`}>
                          <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                            <div className=" bg-blue-700 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

                            </div>
                            <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                              <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                {data.titleEnglish}
                              </h1>
                              <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                {data.price[0].price}
                              </h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : comp == 5 ? (
            <>
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5">
                {dataServiceFactory.map((data, i) => {
                  return (
                    <>
                      <div key={i}>
                        <a href={`/services/detail?id=${data.id}`}>
                          <div className="bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72">
                            <div className=" bg-blue-700 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

                            </div>
                            <div className="p-3 md:w-full sm:w-full w-11/12 md:h-20">
                              <h1 className="font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 ">
                                {data.titleEnglish}
                              </h1>
                              <h2 className="md:text-base sm:text-sm text-sm text-blue-600">
                                {data.price[0].price}
                              </h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>{" "}
            </>
          ) : comp == 6 ? (
            components[0]
          ) : (
            false
          )}
        </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default Events;