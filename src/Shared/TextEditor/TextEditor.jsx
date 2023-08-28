import FroalaEditorComponent from "react-froala-wysiwyg";

// Require Editor CSS files.
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

// Import all Froala Editor plugins;
import Froalaeditor from "froala-editor";
import "froala-editor/js/plugins.pkgd.min.js";
import { useState } from "react";

Froalaeditor.DefineIcon("insertCodeBlock", {
  NAME: "insertCodeBlock",
  SVG_KEY: "codeView",
});
Froalaeditor.RegisterCommand("insertCodeBlock", {
  title: "Write your code",
  focus: true,
  undo: true,
  refreshAfterCallback: true,
  callback: function () {
    const codeBlock = `<div class="code_area"><pre placeholder="Your code here"><code> </code></pre></div> </br>`;
    this.html.insert(codeBlock);
    this.events.focus();
  },
});

import React from "react";

const TextEditor = ({ setSectionDescription }) => {
  const [editorContent, setEditorContent] = useState("");
  const config = {
    toolbarButtons: [
      [
        "bold",
        "italic",
        "underline",
        "strikeThrough",
        "subscript",
        "superscript",
      ],

      [
        "fontFamily",
        "fontSize",
        "color",
        "inlineStyle",
        "paragraphStyle",
        "paragraphFormat",
      ],

      ["align", "formatOL", "formatUL", "outdent", "indent"],
      "-",
      ["insertLink", "insertImage", "insertVideo", "insertCodeBlock"],

      ["undo", "redo"],
    ],
    icons: {
      insertCodeBlock: '<i class="fa fa-code"></i>', // Use font-awesome icon for your custom button
    },
    language: {
      insertCodeBlock: "Insert code block", // Use custom tooltip for your custom button
    },
  };
  const handleModelChange = (model) => {
    // Update the editor content when it changes
   
    setEditorContent(model);
    setSectionDescription(model);
  };

  return (
    <>
      {" "}
      <FroalaEditorComponent
        tag="textarea"
        config={config}
        onModelChange={handleModelChange}
      />
    </>
  );
};

export default TextEditor;
