"use client";
import {
  collection,
  getDocs,
  where,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db, storage, firebaseAnalytics } from "../../../../firebase/page";
import ProductCertification from "@/components/service/productCertification";

function ProductCertifications() {
  const [DataProductBPOM, setDataProductBPOM] = useState([]);
  const [DataProductISO, setDataProductISO] = useState([]);
  const [DataProductSNI, setDataProductSNI] = useState([]);
  const [DataProductMedical, setDataProductMedical] = useState([]);
  const [dataProductPostel, setdataProductPostel] = useState([]);
  const [DataProductAlcohol, setDataProductAlcohol] = useState([]);
  const [DataProductOther, setDataProductOther] = useState([]);

  useEffect(() => {
    getDataProductBPOM();
    getDataProductISO();
    getDataProductSNI();
    getDataProductMedical();
    getdataProductPostel();
    getDataProductAlcohol();
    getDataProductOther();
  }, []);

  async function getDataProductBPOM() {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Product Certifications"),
        where("subService", "==", "BPOM Food and Drug"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataProductBPOM(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getDataProductISO() {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Product Certifications"),
        where("subService", "==", "ISO Management System"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataProductISO(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getDataProductSNI() {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Product Certifications"),
        where("subService", "==", "SNI National Standard"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataProductSNI(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getDataProductMedical() {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Product Certifications"),
        where("subService", "==", "Medical and Hygiene"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataProductMedical(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getdataProductPostel() {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Product Certifications"),
        where("subService", "==", "POSTEL Telecommunication"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setdataProductPostel(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getDataProductAlcohol() {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Product Certifications"),
        where("subService", "==", "Alcohol and Cigarette"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataProductAlcohol(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getDataProductOther() {
    try {
      const q = query(
        collection(db, "service"),
        where("service", "==", "Product Certifications"),
        where("subService", "==", "Other Certification"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setDataProductOther(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductCertification
      dataProductBPOM={JSON.parse(JSON.stringify(DataProductBPOM))}
      dataProductISO={JSON.parse(JSON.stringify(DataProductISO))}
      dataProductSNI={JSON.parse(JSON.stringify(DataProductSNI))}
      dataProductMedical={JSON.parse(JSON.stringify(DataProductMedical))}
      dataProductPostel={JSON.parse(JSON.stringify(dataProductPostel))}
      dataProductAlcohol={JSON.parse(JSON.stringify(DataProductAlcohol))}
      dataProductOther={JSON.parse(JSON.stringify(DataProductOther))}
    />
  );
}

export default ProductCertifications;
