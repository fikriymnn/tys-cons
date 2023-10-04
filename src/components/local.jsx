"use client";
import { useEffect } from "react";

export default function dataLocal() {
  let check;
  useEffect(() => {
    check = localStorage.getItem("bhs");
  }, []);
  return check;
}
