"use client";
import React from "react";
import Image from "next/image";
import { getDoc, doc } from "firebase/firestore";
import { db, storage, firebaseAnalytics } from "../../firebase/page";
import { useState, useEffect } from "react";

const CustomFooter = () => {
  const [address, setAddress] = useState("");
  const [barcode, setBarcode] = useState("");
  const [email, setEmail] = useState("");
  const [fb, setFb] = useState("");
  const [chinaHeading, setChinaHeading] = useState("");
  const [inggrisHeading, setInggrisHeading] = useState("");
  const [ig, setIg] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [chinaParagraph, setChinaParagraph] = useState("");
  const [inggrisParagraph, setInggrisParagraph] = useState("");
  const [phone, setPhone] = useState("");
  const [wechat, setWechat] = useState("");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    getDataAboutAdress();
    getDataAboutBarcode();
    getDataAboutEmail();
    getDataAboutFb();
    getDataHomeHeading();
    getDataAboutIg();
    getDataAboutLinkedin();
    getDataHomeParagraph();
    getDataAboutPhone();
    getDataAboutWechat();
    getDataLogoFooter();
  }, []);

  const getDataAboutWechat = async () => {
    try {
      const docRef = doc(db, "editAbout", "wechat");
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

      setWechat(data[0].link);
    } catch (error) {
      alert(error);
    }
  };

  const getDataAboutPhone = async () => {
    try {
      const docRef = doc(db, "editAbout", "phone");
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

      setPhone(data[0].no);
    } catch (error) {
      alert(error);
    }
  };

  const getDataHomeParagraph = async () => {
    try {
      const docRef = doc(db, "editAbout", "paragraph");
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

      setChinaParagraph(data[0].chinese);
      setInggrisParagraph(data[0].english);
    } catch (error) {
      alert(error);
    }
  };

  const getDataAboutLinkedin = async () => {
    try {
      const docRef = doc(db, "editAbout", "linkedin");
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

      setLinkedin(data[0].link);
    } catch (error) {
      alert(error);
    }
  };

  const getDataAboutIg = async () => {
    try {
      const docRef = doc(db, "editAbout", "ig");
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

      setIg(data[0].link);
    } catch (error) {
      alert(error);
    }
  };

  const getDataHomeHeading = async () => {
    try {
      const docRef = doc(db, "editAbout", "heading");
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

      setChinaHeading(data[0].chinese);
      setInggrisHeading(data[0].english);
    } catch (error) {
      alert(error);
    }
  };

  const getDataAboutAdress = async () => {
    try {
      const docRef = doc(db, "editAbout", "address");
      const querySnapshot = await getDoc(docRef);

      let data = [];

      // doc.data() is never undefined for query doc snapshots

      data.push(querySnapshot.data());

      setAddress(data[0].address);
    } catch (error) {
      alert(error);
    }
  };
  const getDataAboutBarcode = async () => {
    try {
      const docRef = doc(db, "editAbout", "barcode");
      const querySnapshot = await getDoc(docRef);

      let data = [];

      // doc.data() is never undefined for query doc snapshots

      data.push(querySnapshot.data());

      setBarcode(data[0].img);
    } catch (error) {
      alert(error);
    }
  };
  const getDataAboutEmail = async () => {
    try {
      const docRef = doc(db, "editAbout", "email");
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

      setEmail(data[0].email);
    } catch (error) {
      alert(error);
    }
  };

  const getDataAboutFb = async () => {
    try {
      const docRef = doc(db, "editAbout", "facebook");
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

      setFb(data[0].link);
    } catch (error) {
      alert(error);
    }
  };
  const getDataLogoFooter = async () => {
    try {
      const docRef = doc(db, "editHomePage", "logoFooter");
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

      setLogo(data[0].img);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className=" w-full bg-[#031530] ">
      <div className=" md:grid md:grid-cols-3 p-5 sm:p-8 md:p-12 gap-10 items-center">
        <div>
          <img src={logo} width={200} height={75} />
          {/* <Image src={logo} width={200} height={75} /> */}
          <p className=" py-4 text-white text-[15px]">{inggrisParagraph}</p>
        </div>
        <div>
          <p className=" uppercase font-bold text-white">Contact Us</p>
          <p className=" text-white pt-3 pb-2">{address}</p>
          <div className=" flex gap-3 py-2">
            <img
              src="/assets/images/call (2).png"
              alt=""
              className="w-5 h-5 my-auto"
            />
            <p className=" text-white my-auto">{phone}</p>
          </div>
          <div className=" flex gap-3 py-2">
            <img
              src="/assets/images/email (4).png"
              alt=""
              className="w-5 h-5 my-auto"
            />
            <p className=" text-white my-auto">{email}</p>
          </div>
        </div>
        <div className=" py-4 md:py-0">
          <p className=" text-white font-bold">Our Social Media</p>
          <div className=" flex gap-4">
            <img src="/assets/images/qr-tys.jpg" alt="" className=" w-40" />
            <div className=" ">
              <a href={fb}>
                <img
                  src="/assets/images/facebook-circular-logo.png"
                  alt=""
                  className=" w-6 h-6 hover:scale-110"
                />
              </a>
              <a href={linkedin}>
                <img
                  src="/assets/images/linkedin.png"
                  alt=""
                  className=" w-6 h-6 hover:scale-110 my-5"
                />
              </a>
              <a href={ig}>
                <img
                  src="/assets/images/instagram (2).png"
                  alt=""
                  className=" w-6 h-6 hover:scale-110 mb-5"
                />
              </a>
              <a href={wechat}>
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
