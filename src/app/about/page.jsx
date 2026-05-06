"use client";

import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/page";
import AboutPage from "@/components/about/aboutPage";

export default function About() {
  const [data, setData] = useState({
    address: "",
    email: "",
    phone: "",
    heading: { chi: "", ing: "" },
    paragraph: { chi: "", ing: "" },
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAboutData() {
      try {
        const [phone, paragraph, heading, address, email] = await Promise.all([
          getDoc(doc(db, "editAbout", "phone")),
          getDoc(doc(db, "editAbout", "paragraph")),
          getDoc(doc(db, "editAbout", "heading")),
          getDoc(doc(db, "editAbout", "address")),
          getDoc(doc(db, "editAbout", "email")),
        ]);

        setData({
          phone: phone.data()?.no || "",
          paragraph: {
            chi: paragraph.data()?.chinese || "",
            ing: paragraph.data()?.english || "",
          },
          heading: {
            chi: heading.data()?.chinese || "",
            ing: heading.data()?.english || "",
          },
          address: address.data()?.address || "",
          email: email.data()?.email || "",
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getAboutData();
  }, []);

  if (loading)
    return (
      <>
        <div className="px-5 md:px-[5%] sm:px-10 pt-36 animate-pulse">
          {/* Heading */}
          <div className="h-10 bg-gray-300 w-1/2 mb-4 rounded"></div>

          {/* Paragraph */}
          <div className="h-5 bg-gray-300 w-full mb-2 rounded"></div>
          <div className="h-5 bg-gray-300 w-5/6 mb-2 rounded"></div>
          <div className="h-5 bg-gray-300 w-4/6 mb-6 rounded"></div>

          {/* Grid */}
          <div className="md:grid md:grid-cols-2 py-10 gap-5">
            {/* Left (map + info) */}
            <div>
              <div className="w-full h-80 bg-gray-300 rounded mb-6"></div>

              <div className="h-5 bg-gray-300 w-3/4 mb-4 rounded"></div>
              <div className="h-5 bg-gray-300 w-2/3 mb-4 rounded"></div>
              <div className="h-5 bg-gray-300 w-1/2 mb-4 rounded"></div>
            </div>

            {/* Right (form) */}
            <div>
              <div className="h-5 bg-gray-300 w-1/3 mb-2 rounded"></div>
              <div className="h-10 bg-gray-300 w-full mb-4 rounded"></div>

              <div className="h-5 bg-gray-300 w-1/3 mb-2 rounded"></div>
              <div className="h-10 bg-gray-300 w-full mb-4 rounded"></div>

              <div className="h-5 bg-gray-300 w-1/3 mb-2 rounded"></div>
              <div className="h-10 bg-gray-300 w-full mb-4 rounded"></div>

              <div className="h-5 bg-gray-300 w-1/3 mb-2 rounded"></div>
              <div className="h-24 bg-gray-300 w-full mb-4 rounded"></div>

              <div className="h-12 bg-gray-400 w-full rounded"></div>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <AboutPage
      address={data.address}
      email={data.email}
      chinaHeading={data.heading.chi}
      inggrisHeading={data.heading.ing}
      chinaParagraph={data.paragraph.chi}
      inggrisParagraph={data.paragraph.ing}
      phone={data.phone}
    />
  );
}
