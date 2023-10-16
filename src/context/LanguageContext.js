// LanguageContext.js
"use client";
import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [languagee, setLanguagee] = useState("");
  let data;
  if (typeof window !== "undefined") {
    console.log("You are on the browser");
    // 👉️ can use localStorage here

    data = sessionStorage.getItem("language");
  } else {
    console.log("You are on the server");
  }

  const [language, setLanguage] = useState(data || "en");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
