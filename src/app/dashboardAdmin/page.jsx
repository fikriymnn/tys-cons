"use client";
import React from "react";
import { useState, useEffect } from "react";
import Navigation from "@/components/admin/navigation";

function page() {
  return (
    <>
      <div className="flex">
        <Navigation />
        <div className="w-full h-screen flex justify-center items-center">
          <p className="text-2xl font-bold">Selamat datang</p>
        </div>
      </div>
    </>
  );
}

export default page;
