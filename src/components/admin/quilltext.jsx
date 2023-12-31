"use client";
import React from "react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: {
    container: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["code-block", "link"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme

      [{ align: [] }],

      ["clean"],
    ],
  },
};
const formats = [
  "strike",
  "bold",
  "italic",
  "underline",
  "link",
  "align",
  "direction",
  "list",
  "code-block",
  "script",
  "indent",
  "direction",
  "color",

  "background",
];
function Quilltext({ ...props }) {
  return (
    <ReactQuill
      {...props}
      modules={modules}
      format={formats}
      theme="snow"
      maxLength={1000}
      className="h-[200px] w-full  pb-10 "
    />
  );
}

export default Quilltext;
