// LanguageContext.js
"use client"
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import Cookies from 'js-cookie';


const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [languagee,setLanguagee]=useState("")
    
    // useEffect(() => {
    // getLang();
    // }, [])

    // function getLang(){
    //     if (typeof window !== 'undefined') {
    //         // Perform localStorage action
    //         const lang=  sessionStorage.getItem('language');
    //         setLanguagee(sessionStorage.getItem('language'));
    //         console.log(languagee)
    //       }
    // }
// let data;
//     if (typeof window !== 'undefined') {
//         console.log('You are on the browser')
//         // 👉️ can use localStorage here
      
//          data=  sessionStorage.getItem('language');
         
      
        
       
//       } else {
//         console.log('You are on the server');
        

//       }
     // const lang=  sessionStorage.getItem('language');

    // console.log(data);
  // Bahasa Inggris (default)
  const [language, setLanguage] = useState("en"); 

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
