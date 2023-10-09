"use client";
import React from "react";
import CompanyRegistrationPage from "@/components/ServicesSub/BasicEstablishmentServices/CompanyRegistrationPage";
import { useState } from "react";
import { Tabs } from "flowbite-react";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import CustomFooter from "@/components/CustomFooter";
import VisaRegistrationPage from "@/components/ServicesSub/BasicEstablishmentServices/VisaRegistrationPage";
import TrademarkPage from "@/components/ServicesSub/BasicEstablishmentServices/TrademarkPage";
import OfficeAdministrationPage from "@/components/ServicesSub/BasicEstablishmentServices/officeAdministrationPage";
import ConstructionCertificationsPage from "@/components/ServicesSub/BasicEstablishmentServices/ConstructionCertificationsPage";
import FactoryLicensesPage from "@/components/ServicesSub/BasicEstablishmentServices/FactoryLicensesPage";
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

async function getDataService() {
  let data = [];
  try {
    try {
      const querySnapshot = await getDocs(collection(db, "service"));
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {


        data.push({ ...doc.data(), id: doc.id });
      });
      setDataService(data);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
async function Events() {
  const components = [<CompanyRegistrationPage />];
  const [comp, setComp] = useState(0);
  const dataService = await getDataService();

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
                <CompanyRegistrationPage />
              </div>
            </>
          ) : comp == 1 ? (
            <>
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5">
                <VisaRegistrationPage />
              </div>
            </>
          ) : comp == 2 ? (
            <>
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5">
                <TrademarkPage />
              </div>
            </>
          ) : comp == 3 ? (
            <>
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5">
                <OfficeAdministrationPage />
              </div>
            </>
          ) : comp == 4 ? (
            <>
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5">
                <ConstructionCertificationsPage />
              </div>
            </>
          ) : comp == 5 ? (
            <>
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1   gap-5 px-5 pb-5">
                <FactoryLicensesPage />
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
