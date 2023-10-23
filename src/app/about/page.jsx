"use client";
import React from "react";
import Iframe from "react-iframe";
import CustomFooter from "@/components/CustomFooter";
import Image from "next/image";
import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";
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
import { db, storage, firebaseAnalytics } from "../../../firebase/page";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { LanguageProvider } from "@/context/LanguageContext";
const About = () => {
  const { language, changeLanguage } = useLanguage();
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [chinaHeading, setChinaHeading] = useState("");
  const [inggrisHeading, setInggrisHeading] = useState("");
  const [chinaParagraph, setChinaParagraph] = useState("");
  const [inggrisParagraph, setInggrisParagraph] = useState("");
  const [phone, setPhone] = useState("");

  const [sendEmail, setSendEmail] = useState("");
  const [name, setName] = useState("");
  const [sendPhone, setSendPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getDataAboutAdress();

    getDataAboutEmail();

    getDataHomeHeading();

    getDataHomeParagraph();
    getDataAboutPhone();
  }, []);

  async function getDataAboutPhone() {
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
  }

  async function getDataHomeParagraph() {
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
  }

  async function getDataHomeHeading() {
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
  }

  async function getDataAboutAdress() {
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
  }

  async function getDataAboutEmail() {
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
  }
  const form = useRef();

  const sendMail = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lu2s5ci",
        "template_9nqk4cb",
        form.current,
        "-Ogru2wb76QTdI6Ci"
      )
      .then(
        (result) => {
          alert("message send");
        },
        (error) => {
          alert("message error");
        }
      );
  };

  return (
    <>
      <NavbarWithCTAButton />
      <div className=" px-5 md:px-16 sm:px-10 pt-36 ">
        <p className="text-blue-600 text-3xl font-semibold pb-4 font-sans">
          {language == "en" ? inggrisHeading : chinaHeading}
        </p>
        <p className=" text-[19px] font-sans">
          {language == "en" ? inggrisParagraph : chinaParagraph}
        </p>
        <div className="md:grid md:grid-cols-2 py-10 gap-2 text-sm">
          <div>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126941.19501629066!2d106.73087!3d-6.142476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7fc6ab10259%3A0x8b5219b3d0af9b39!2sCitra%20Garden%20City%2C%20West%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1694419390459!5m2!1sen!2sid"
              width=""
              height=""
              id=""
              className="w-full h-80 md:pr-4"
              display="block"
              position=""
            />
            <div className="flex gap-4  space-x-3 pt-6">
              <Image
                src={"/assets/images/map (1).png"}
                width={20}
                height={20}
                alt=""
                className=""
              />
              <p className=" my-auto">{address}</p>
            </div>
            <div className="flex gap-4 space-x-3 pt-6">
              <Image
                src={"/assets/images/call (1).png"}
                width={20}
                height={20}
                alt=""
                className=" "
              />
              <p className=" my-auto">{phone}</p>
            </div>
            <div className="flex gap-4 space-x-3 pt-6">
              <Image
                src={"/assets/images/email (3).png"}
                width={20}
                height={20}
                alt=""
                className=" "
              />
              <p className=" my-auto">{email}</p>
            </div>
          </div>
          {/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form> */}
          <div>
            <form ref={form} onSubmit={(e) => sendMail(e)}>
              <div className="">
                <h1 className=" text-md pb-3">Name</h1>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Input your name"
                  color=" bg-transparent"
                  className=" rounded-lg w-full border-slate-300 "
                />
              </div>
              <div className=" py-5">
                <h1 className=" text-md pb-3">Email</h1>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Input your email"
                  color=" bg-transparent"
                  className=" rounded-lg w-full border-slate-300 "
                />
              </div>
              <div className="">
                <h1 className=" text-md pb-3">Phone Number</h1>
                <input
                  type="text"
                  name="phone"
                  placeholder="Input your phone number"
                  color=" bg-transparent"
                  className=" rounded-lg w-full border-slate-300 "
                />
              </div>
              <div className=" py-5">
                <h1 className=" text-md pb-3">Message</h1>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Input your message"
                  color=" bg-transparent"
                  className=" w-full resize-none rounded-lg border-slate-300 "
                  maxLength={100}
                ></textarea>
              </div>
              <button
                className=" w-full h-12 bg-blue-600 py-3 px-5"
                type="submit"
                value="Send"
              >
                <div>
                  <p className=" text-white text-center my-auto ">
                    Send Message
                  </p>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default About;
