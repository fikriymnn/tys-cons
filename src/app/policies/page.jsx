"use client";
import {
  collection,
  getDocs,
  where,
  query,
  orderBy,
  startAt,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db, storage, firebaseAnalytics } from "../../../firebase/page";
import PoliciesDetail from "@/components/PoliciesDetail";
import Image from "next/image";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
import CustomFooter from "@/components/CustomFooter";
import { useLanguage } from "@/context/LanguageContext";
import parse from "html-react-parser";

export default function Policies() {
  const { language, changeLanguage } = useLanguage();

  const [dropdown, setDropdown] = useState(true);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [titleIng, setTitleIng] = useState("");
  const [titleChi, setTitleChi] = useState("");
  const [desChi, setDesChi] = useState("");
  const [desIng, setDesIng] = useState("");
  const [content, setContent] = useState([]);

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

  dataForeigen.sort(function (a, b) {
    if (a.subCategoryEnglish < b.subCategoryEnglish) {
      return -1;
    }
    if (a.subCategoryEnglish > b.subCategoryEnglish) {
      return 1;
    }
    return 0;
  });

  dataTak.sort(function (a, b) {
    if (a.subCategoryEnglish < b.subCategoryEnglish) {
      return -1;
    }
    if (a.subCategoryEnglish > b.subCategoryEnglish) {
      return 1;
    }
    return 0;
  });

  dataLabor.sort(function (a, b) {
    if (a.subCategoryEnglish < b.subCategoryEnglish) {
      return -1;
    }
    if (a.subCategoryEnglish > b.subCategoryEnglish) {
      return 1;
    }
    return 0;
  });

  dataImport.sort(function (a, b) {
    if (a.subCategoryEnglish < b.subCategoryEnglish) {
      return -1;
    }
    if (a.subCategoryEnglish > b.subCategoryEnglish) {
      return 1;
    }
    return 0;
  });

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
                        className={`w-full h-[60px]  border-white flex items-center cursor-pointer ${
                          selectedDetail1 == i ? "bg-blue-900" : ""
                        }`}
                        onClick={() => {
                          setContent(data.content);
                          setTitleChi(data.titleChinese);
                          setTitleIng(data.titleEnglish);
                          setDataImg(data.img);
                          setDesIng(data.descriptionEnglish);
                          setDesChi(data.descriptionChinese);
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
                {language == "en" ? "  Tax Regulation" : "税务政策"}
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
                        className={`w-full h-[60px]  border-white flex items-center cursor-pointer ${
                          selectedDetail2 == i ? "bg-blue-900" : ""
                        }`}
                        onClick={() => {
                          setContent(data.content);
                          setTitleChi(data.titleChinese);
                          setTitleIng(data.titleEnglish);
                          setDataImg(data.img);
                          setDesIng(data.descriptionEnglish);
                          setDesChi(data.descriptionChinese);
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
                        className={`w-full h-[60px]  border-white flex items-center cursor-pointer ${
                          selectedDetail3 == i ? "bg-blue-900" : ""
                        }`}
                        onClick={() => {
                          setContent(data.content);
                          setTitleChi(data.titleChinese);
                          setTitleIng(data.titleEnglish);
                          setDataImg(data.img);
                          setDesIng(data.descriptionEnglish);
                          setDesChi(data.descriptionChinese);
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
                        className={`w-full h-[60px]  border-white flex items-center cursor-pointer ${
                          selectedDetail4 == i ? "bg-blue-900" : ""
                        }`}
                        onClick={() => {
                          setContent(data.content);
                          setTitleChi(data.titleChinese);
                          setTitleIng(data.titleEnglish);
                          setDataImg(data.img);
                          setDesIng(data.descriptionEnglish);
                          setDesChi(data.descriptionChinese);
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
          <div
            className={`md:mr-5 md:w-9/12 sm:w-8/12 w-10/12 shadow-2xl mb-10 border-t mt-5 md:mt-0 sm:mt-0`}
          >
            {dataimg == "" ? (
              dataForeigen.map((data, i) => {
                return i == 0 ? (
                  <>
                    <p className="text-center my-10 md:text-3xl sm:text-xl text-base font-bold text-blue-600">
                      {language == "en" ? data.titleEnglish : data.titleChinese}
                    </p>
                    <div className="flex items-center w-full">
                      <Image
                        src={data.img}
                        width={800}
                        height={400}
                        className="m-auto"
                        alt="Image"
                      />
                    </div>
                    <div className="content mt-5 px-20">
                      <p>{parse(language == "en" ? desIng : desChi)} </p>
                    </div>
                    {data.content.map((data, i) => {
                      return (
                        <>
                          <div className="px-20">
                            <div className="h-[2px] w-full bg-gray-300  mt-5"></div>
                            <div className="flex items-center w-full">
                              <div className=" bg-blue-600 ">
                                <p className="text-center text-white text-base font-semibold p-3">
                                  {language == "en"
                                    ? data.topicIng
                                    : data.topicChi}
                                </p>
                              </div>
                              <div></div>
                            </div>
                            <div className="content py-5">
                              <p>
                                {" "}
                                {parse(
                                  language == "en"
                                    ? data.contentIng
                                    : data.contentChi
                                )}{" "}
                              </p>
                            </div>
                            {data.img == "" ? (
                              <></>
                            ) : (
                              <>
                                <img
                                  width={500}
                                  height={300}
                                  src={data.img}
                                  alt=""
                                ></img>
                              </>
                            )}
                          </div>
                        </>
                      );
                    })}
                  </>
                ) : null;
              })
            ) : (
              <>
                <h1 className="text-center my-10 md:text-2xl sm:text-xl text-base font-bold text-blue-600">
                  {language == "en" ? titleIng : titleChi}
                </h1>
                <div className="flex items-center w-full">
                  <Image
                    src={dataimg}
                    width={800}
                    height={400}
                    className="m-auto"
                    alt="Image"
                  />
                </div>
                <div className="content mt-5 px-20">
                  <p>{parse(language == "en" ? desIng : desChi)} </p>
                </div>
                {content.map((data, i) => {
                  return (
                    <>
                      <div className="px-20">
                        <div className="h-[2px] w-full bg-gray-300  mt-5"></div>
                        <div className="flex items-center w-full">
                          <div className=" bg-blue-600 ">
                            <p className="text-center text-white text-base font-semibold p-3">
                              {language == "en" ? data.topicIng : data.topicChi}
                            </p>
                          </div>
                          <div></div>
                        </div>
                        <div className="content py-5">
                          <p>
                            {" "}
                            {parse(
                              language == "en"
                                ? data.contentIng
                                : data.contentChi
                            )}{" "}
                          </p>
                        </div>
                        {data.img == "" ? (
                          <></>
                        ) : (
                          <>
                            <img
                              width={500}
                              height={300}
                              src={data.img}
                              alt=""
                            ></img>
                          </>
                        )}
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
}
