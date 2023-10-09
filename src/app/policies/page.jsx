"use client";
import { useState } from "react";
import PoliciesDetail from "@/components/PoliciesDetail";
import Image from "next/image"; import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import CustomFooter from "@/components/CustomFooter";

export default function Policies() {
  const [dropdown, setDropdown] = useState(true);
  const [selectedDetail, setSelectedDetail] = useState(1);

  const defaultDetail = <PoliciesDetail />;
  const defaultDetail2 = <PoliciesDetail />;

  const CRBR = (
    <PoliciesDetail
      src={"/foto.jpg"}
      title={"Company Registration Basic Regulation"}
      content={
        "lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da"
      }
    />
  );

  const TCR = (
    <PoliciesDetail
      src={"/foto.jpg"}
      title={"Trading Company Regulation"}
      content={
        "lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da"
      }
    />
  );

  const ROR = (
    <PoliciesDetail
      src={"/foto.jpg"}
      title={"Representative Office Regulations"}
      content={
        "lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da"
      }
    />
  );

  const CCR = (
    <PoliciesDetail
      src={"/foto.jpg"}
      title={"Construction Company Regulation"}
      content={
        "lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da"
      }
    />
  );

  const FCR = (
    <PoliciesDetail
      src={"/foto.jpg"}
      title={"Foreign Company Registration"}
      content={
        "lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da"
      }
    />
  );

  const TR = (
    <PoliciesDetail
      src={"/foto.jpg"}
      title={"Tax Regulation"}
      content={
        "lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da"
      }
    />
  );

  const LP = (
    <PoliciesDetail
      src={"/foto.jpg"}
      title={"Labor Policy"}
      content={
        "lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da"
      }
    />
  );

  const IEPP = (
    <PoliciesDetail
      src={"/foto.jpg"}
      title={"Import Export Procedures & Policies"}
      content={
        "lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da lorema sdkjaosd asodkas odoas doasjdo asodjas da"
      }
    />
  );

  const componentDetail = [
    defaultDetail,
    CRBR,
    TCR,
    ROR,
    CCR,
    FCR,
    TR,
    LP,
    IEPP,
    defaultDetail2,
  ];

  return (
    <>
      <NavbarWithCTAButton />
      <div>
        <div className="md:flex md:justify-evenly sm:flex sm:justify-evenly grid grid-cols-1 justify-items-center   pt-24">
          <div className="md:w-3/12 sm:w-4/12 w-10/12 mx-5 h-full bg-blue-600 ">
            <div
              className={`w-full h-16  border-y border-white flex items-center cursor-pointer ${dropdown ? "bg-blue-700" : ""
                }`}
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm text-start w-full">
                Foreign Company Registration
              </p>
              {dropdown ? (
                <Image
                  src={"/dropdown.png"}
                  width={15}
                  height={15}
                  className="mr-5 rotate-180"
                />
              ) : (
                <Image
                  src={"/dropdown.png"}
                  width={15}
                  height={15}
                  className="mr-5"
                />
              )}
            </div>
            {/* dropdown */}
            {dropdown && (
              <div className="border-y border-white">
                <div
                  className={`w-full h-[50px]  border-white flex items-center cursor-pointer ${selectedDetail == 1 ? "bg-blue-900" : ""
                    }`}
                  onClick={() => {
                    setSelectedDetail(1);
                  }}
                >
                  <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm  w-full">
                    Company Registration Basic Regulation
                  </p>
                </div>
                <div
                  className={`w-full h-[50px]  border-white flex items-center cursor-pointer ${selectedDetail == 2 ? "bg-blue-900" : ""
                    }`}
                  onClick={() => {
                    setSelectedDetail(2);
                  }}
                >
                  <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm  w-full">
                    Trading Company Regulation
                  </p>
                </div>
                <div
                  className={`w-full h-[50px]  border-white flex items-center cursor-pointer ${selectedDetail == 3 ? "bg-blue-900" : ""
                    }`}
                  onClick={() => {
                    setSelectedDetail(3);
                  }}
                >
                  <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm  w-full">
                    Representative Office Regulations
                  </p>
                </div>
                <div
                  className={`w-full h-[50px]  border-white flex items-center cursor-pointer ${selectedDetail == 4 ? "bg-blue-900" : ""
                    }`}
                  onClick={() => {
                    setSelectedDetail(4);
                  }}
                >
                  <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm  w-full">
                    Construction Company Regulation
                  </p>
                </div>
                <div
                  className={`w-full h-[50px]  border-white flex items-center cursor-pointer ${selectedDetail == 5 ? "bg-blue-900" : ""
                    }`}
                  onClick={() => {
                    setSelectedDetail(5);
                  }}
                >
                  <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm  w-full">
                    Factory Company Regulation
                  </p>
                </div>
              </div>
            )}

            <div
              className={`w-full h-16  border-y border-white flex items-center cursor-pointer ${selectedDetail == 6 ? "bg-blue-900" : ""
                }`}
            >
              <p
                className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm  w-full"
                onClick={() => {
                  setSelectedDetail(6);
                }}
              >
                Tax Regulation
              </p>
            </div>
            <div
              className={`w-full h-16  border-y border-white flex items-center cursor-pointer ${selectedDetail == 7 ? "bg-blue-900" : ""
                }`}
            >
              <p
                className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm w-full"
                onClick={() => {
                  setSelectedDetail(7);
                }}
              >
                Labor Policy
              </p>
            </div>
            <div
              className={`w-full h-16  border-y border-white flex items-center cursor-pointer ${selectedDetail == 8 ? "bg-blue-900" : ""
                }`}
              onClick={() => {
                setSelectedDetail(8);
              }}
            >
              <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm  w-full">
                Import Export Procedures & Policies
              </p>
            </div>

          </div>

          {componentDetail[selectedDetail]}

        </div>
      </div>
    </>
  );
}