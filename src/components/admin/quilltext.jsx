import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  clipboard: {
    matchVisual: false,
    onPaste: (e, delta, source, editor) => {
      if (e.clipboardData && e.clipboardData.getData("text/plain")) {
        const text = e.clipboardData.getData("text/plain");
        const quill = editor.getEditor();

        // Check if the pasted text starts with "1." and "*" and if it's not already a list
        if (
          (/^\d+\./.test(text) || /^\*/.test(text)) &&
          !quill.getFormat().list
        ) {
          // Remove the list character ("1." or "*") from the beginning of the text
          const newText = text
            .replace(/^\d+\./, "")
            .replace(/^\*/, "")
            .trim();

          // Insert the modified text
          quill.clipboard.dangerouslyPasteHTML(newText, "api");
          return false; // Prevent Quill's default behavior
        }
      }

      return true; // Allow Quill to handle other paste operations
    },
  },
  toolbar: {
    container: [["bold", "italic", "underline"], ["link"]],
  },
};

const formats = ["bold", "italic", "underline", "link"];

const MyEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
      placeholder="Type here..."
    />
  );
};

export default MyEditor;
