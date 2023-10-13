"use client";
import { collection, getDocs, where, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db, storage, firebaseAnalytics } from "../../../firebase/page";
import PoliciesDetail from "@/components/PoliciesDetail";
import Image from "next/image";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import CustomFooter from "@/components/CustomFooter";
import { useLanguage } from "@/context/LanguageContext";

export default function Policies() {
  const { language, changeLanguage } = useLanguage();

  const [dropdown, setDropdown] = useState(true);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [titleIng, setTitleIng] = useState("");
  const [titleChi, setTitleChi] = useState("");
  const [contentIng, setContentIng] = useState("");
  const [contentChi, setContentChi] = useState("");
  const [dataimg, setDataImg] = useState("");
  const [selectedDetail1, setSelectedDetail1] = useState();
  const [selectedDetail2, setSelectedDetail2] = useState();
  const [selectedDetail3, setSelectedDetail3] = useState();
  const [selectedDetail4, setSelectedDetail4] = useState();
  const [dataForeigen, setDataForeigen] = useState([]);
  const [dataTak, setDataTak] = useState([]);
  const [dataLabor, setDataLabor] = useState([]);
  const [dataImport, setDataImport] = useState([]);

  useEffect(() => {
    getDataFo();
    getDataTak();
    getDataLabor();
    getDataImport();
  }, []);

  const getDataFo = async () => {
    try {
      const q = query(
        collection(db, "policies"),
        where("category", "==", "Foreign Company Registration")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataForeigen(data);
      setContentChi(data[0].contentChinese);
      setContentIng(data[0].contentEnglish);
      setTitleChi(data[0].titleChinese);
      setTitleIng(data[0].titleEnglish);
      setDataImg(data[0].img);
      setSelectedDetail1(0);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataTak = async () => {
    try {
      const q = query(
        collection(db, "policies"),
        where("category", "==", "Tax Regulation")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataTak(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataLabor = async () => {
    try {
      const q = query(
        collection(db, "policies"),
        where("category", "==", "Labor Policy")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataLabor(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataImport = async () => {
    try {
      const q = query(
        collection(db, "policies"),
        where("category", "==", "Import Export Procedures & Policies")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataImport(data);
    } catch (error) {
      console.log(error);
    }
  };

  const defaultDetail = <PoliciesDetail />;
  const defaultDetail2 = <PoliciesDetail />;

  return (
    <>
      <NavbarWithCTAButton />
      <div>
        <div className="md:flex md:justify-evenly sm:flex sm:justify-evenly grid grid-cols-1 justify-items-center   pt-24">
          <div className="md:w-3/12 sm:w-4/12 w-10/12 mx-5 h-full bg-blue-600 ">
            <div
              className={`w-full h-16  border-y border-white flex items-center cursor-pointer ${
                dropdown ? "bg-blue-700" : ""
              }`}
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm text-start w-full">
                {language == "en"
                  ? " Foreign Company Registration"
                  : "外资公司注册"}
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
                {dataForeigen.map((data, i) => {
                  return (
                    <>
                      <div
                        className={`w-full h-[50px]  border-white flex items-center cursor-pointer ${
                          selectedDetail1 == i ? "bg-blue-900" : ""
                        }`}
                        onClick={() => {
                          setContentChi(data.contentChinese);
                          setContentIng(data.contentEnglish);
                          setTitleChi(data.titleChi);
                          setTitleIng(data.titleEnglish);
                          setDataImg(data.img);
                          setSelectedDetail1(i);
                          setSelectedDetail2();
                          setSelectedDetail3();
                          setSelectedDetail4();
                        }}
                      >
                        <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm  w-full">
                          {language == "en"
                            ? data.subCategoryEnglish
                            : data.subCategoryChinese}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            )}

            <div
              className={`w-full h-16  border-y border-white flex items-center cursor-pointer ${
                dropdown2 ? "bg-blue-700" : ""
              }`}
              onClick={() => {
                setDropdown2(!dropdown2);
              }}
            >
              <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm text-start w-full">
                {language == "en" ? "  Tak Regulation" : "税务政策"}
              </p>
              {dropdown2 ? (
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
            {dropdown2 && (
              <div className="border-y border-white">
                {dataTak.map((data, i) => {
                  return (
                    <>
                      <div
                        className={`w-full h-[50px]  border-white flex items-center cursor-pointer ${
                          selectedDetail2 == i ? "bg-blue-900" : ""
                        }`}
                        onClick={() => {
                          setContentChi(data.contentChinese);
                          setContentIng(data.contentEnglish);
                          setTitleChi(data.titleChi);
                          setTitleIng(data.titleEnglish);
                          setDataImg(data.img);
                          setSelectedDetail2(i);
                          setSelectedDetail3();
                          setSelectedDetail4();
                          setSelectedDetail1();
                        }}
                      >
                        <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm  w-full">
                          {language == "en"
                            ? data.subCategoryEnglish
                            : data.subCategoryChinese}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            )}

            <div
              className={`w-full h-16  border-y border-white flex items-center cursor-pointer ${
                dropdown3 ? "bg-blue-700" : ""
              }`}
              onClick={() => {
                setDropdown3(!dropdown3);
              }}
            >
              <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm text-start w-full">
                {language == "en" ? "  Labor Policy" : "劳动政策"}
              </p>
              {dropdown3 ? (
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
            {dropdown3 && (
              <div className="border-y border-white">
                {dataLabor.map((data, i) => {
                  return (
                    <>
                      <div
                        className={`w-full h-[50px]  border-white flex items-center cursor-pointer ${
                          selectedDetail3 == i ? "bg-blue-900" : ""
                        }`}
                        onClick={() => {
                          setContentChi(data.contentChinese);
                          setContentIng(data.contentEnglish);
                          setTitleChi(data.titleChi);
                          setTitleIng(data.titleEnglish);
                          setDataImg(data.img);
                          setSelectedDetail3(i);
                          setSelectedDetail2();
                          setSelectedDetail1();
                          setSelectedDetail4();
                        }}
                      >
                        <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm  w-full">
                          {language == "en"
                            ? data.subCategoryEnglish
                            : data.subCategoryChinese}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            )}

            <div
              className={`w-full h-16  border-y border-white flex items-center cursor-pointer ${
                dropdown4 ? "bg-blue-700" : ""
              }`}
              onClick={() => {
                setDropdown4(!dropdown4);
              }}
            >
              <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm text-start w-full">
                {language == "en"
                  ? "   Import Export Procedures & Policies"
                  : "进出口手续政策"}
              </p>
              {dropdown4 ? (
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
            {dropdown4 && (
              <div className="border-y border-white">
                {dataImport.map((data, i) => {
                  return (
                    <>
                      <div
                        className={`w-full h-[50px]  border-white flex items-center cursor-pointer ${
                          selectedDetail4 == i ? "bg-blue-900" : ""
                        }`}
                        onClick={() => {
                          setContentChi(data.contentChinese);
                          setContentIng(data.contentEnglish);
                          setTitleChi(data.titleChi);
                          setTitleIng(data.titleEnglish);
                          setDataImg(data.img);
                          setSelectedDetail4(i);
                          setSelectedDetail1();
                          setSelectedDetail2();
                          setSelectedDetail3();
                        }}
                      >
                        <p className="ml-5 mr-5 text-white md:text-[15px] sm:text-xs text-sm  w-full">
                          {language == "en"
                            ? data.subCategoryEnglish
                            : data.subCategoryChinese}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>

          <PoliciesDetail
            src={dataimg}
            title={language == "en" ? titleIng : titleChi}
            content={language == "en" ? contentIng : contentChi}
          />
        </div>
      </div>
      <CustomFooter />
    </>
  );
}
