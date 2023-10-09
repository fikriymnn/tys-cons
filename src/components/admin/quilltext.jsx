import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: {
    container: [["bold", "italic", "underline"], ["link"]],
  },
};

const formats = ["bold", "italic", "underline", "link"];

const MyEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);

  const handleChange = (content) => {
    onChange(content);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Tab" || event.key === " ") {
      event.preventDefault();
      const quill = quillRef.current.getEditor();
      const cursorPosition = quill.getSelection().index;

      // Insert a tab or space at the cursor position
      const textToInsert = event.key === "Tab" ? "\t" : " ";
      quill.insertText(cursorPosition, textToInsert, "text", "user");

      // Move the cursor to the correct position
      quill.setSelection(cursorPosition + textToInsert.length);
    }
  };

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      ref={quillRef}
      placeholder="Type here..."
    />
  );
};

export default MyEditor;
