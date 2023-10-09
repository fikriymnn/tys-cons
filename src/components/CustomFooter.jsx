
import React from "react";
import Image from "next/image";
import {

  getDoc,

  doc,

} from "firebase/firestore";
import { db, storage, firebaseAnalytics } from "../../firebase/page";

async function GetDataFb() {
  let data = [];
  const docRefFb = doc(db, "editAbout", "facebook");
  const querySnapshot = await getDoc(docRefFb);
  data.push(querySnapshot.data());
  return data;
}
async function GetDataIg() {
  let data = [];
  const docRefFb = doc(db, "editAbout", "ig");
  const querySnapshot = await getDoc(docRefFb);
  data.push(querySnapshot.data());
  return data;
}
async function GetDataLinkedid() {
  let data = [];
  const docRefFb = doc(db, "editAbout", "linkedin");
  const querySnapshot = await getDoc(docRefFb);
  data.push(querySnapshot.data());
  return data;
}
async function GetDataWechat() {
  let data = [];
  const docRefFb = doc(db, "editAbout", "wechat");
  const querySnapshot = await getDoc(docRefFb);
  data.push(querySnapshot.data());
  return data;
}
async function getDataAboutParagraph() {
  let data = [];
  try {
    const docRef = doc(db, "editAbout", "paragraph");
    const querySnapshot = await getDoc(docRef);

    // doc.data() is never undefined for query doc snapshots

    data.push(querySnapshot.data());
  } catch (error) {
    console.log(error);
  }
  return data;
}
async function getDataAboutAdrress() {
  let data = [];
  try {
    const docRef = doc(db, "editAbout", "address");
    const querySnapshot = await getDoc(docRef);

    data.push(querySnapshot.data());
  } catch (error) {
    console.log(error);
  }
  return data;
}

async function getDataAboutPhone() {
  let data = [];
  try {
    const docRef = doc(db, "editAbout", "phone");
    const querySnapshot = await getDoc(docRef);

    data.push(querySnapshot.data());
  } catch (error) {
    console.log(error);
  }
  return data;
}

async function getDataAboutEmail() {
  let data = [];
  try {
    const docRef = doc(db, "editAbout", "email");
    const querySnapshot = await getDoc(docRef);

    // doc.data() is never undefined for query doc snapshots

    data.push(querySnapshot.data());
  } catch (error) {
    console.log(error);
  }
  return data;
}

const CustomFooter = async () => {
  const dataIg = await GetDataIg();
  const dataFb = await GetDataFb();
  const dataLinkedin = await GetDataLinkedid();
  const dataWechat = await GetDataWechat();
  const dataParagraph = await getDataAboutParagraph();
  const dataAddress = await getDataAboutAdrress();
  const dataPhone = await getDataAboutPhone();
  const dataEmail = await getDataAboutEmail();
  return (
    <div className=" w-full bg-[#031530] ">
      <div className=" md:grid md:grid-cols-3 p-5 sm:p-8 md:p-12 gap-10 items-center">
        <div>
          <Image src={"/assets/images/tys-logo.png"} width={200} height={75} />
          <p className=" py-4 text-white text-[15px]">
            {dataParagraph[0].english}
          </p>
        </div>
        <div>
          <p className=" uppercase font-bold text-white">Contact Us</p>
          <p className=" text-white pt-3 pb-2">{dataAddress[0].address}</p>
          <div className=" flex gap-3 py-2">
            <img
              src="/assets/images/call (2).png"
              alt=""
              className="w-5 h-5 my-auto"
            />
            <p className=" text-white my-auto">{dataPhone[0].no}</p>
          </div>
          <div className=" flex gap-3 py-2">
            <img
              src="/assets/images/email (4).png"
              alt=""
              className="w-5 h-5 my-auto"
            />
            <p className=" text-white my-auto">{dataEmail[0].email}</p>
          </div>
        </div>
        <div className=" py-4 md:py-0">
          <p className=" text-white font-bold">Our Social Media</p>
          <div className=" flex gap-4">
            <img src="/assets/images/qr-tys.jpg" alt="" className=" w-40" />
            <div className=" ">
              <a href={dataFb[0].link}>
                <img
                  src="/assets/images/facebook-circular-logo.png"
                  alt=""
                  className=" w-6 h-6 hover:scale-110"
                />
              </a>
              <a href={dataLinkedin[0].link}>
                <img
                  src="/assets/images/linkedin.png"
                  alt=""
                  className=" w-6 h-6 hover:scale-110 my-5"
                />
              </a>
              <a href={dataIg[0].link}>
                <img
                  src="/assets/images/instagram (2).png"
                  alt=""
                  className=" w-6 h-6 hover:scale-110 mb-5"
                />
              </a>
              <a href={dataWechat[0].link}>
                <img
                  src="/assets/images/youtube.png"
                  alt=""
                  className=" w-6 h-6 hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className=" w-full bg-white " />
      <div className=" md:flex lg:justify-between md:p-5 pt-5  text-center">
        <span className=" text-white ">
          Copyright &copy; 2022 tysconsultant.com
        </span>
        <br />
        <span className=" text-white lg:visible invisible">
          Powered by tysconsultant.com
        </span>
      </div>
    </div>
  );
};

export default CustomFooter;
