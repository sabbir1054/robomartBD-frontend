import FroalaEditorComponent from "react-froala-wysiwyg";
import styles from "./Editor.module.scss";
// Require Editor CSS files.
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

// Import all Froala Editor plugins;
import Froalaeditor from "froala-editor";
import "froala-editor/js/plugins.pkgd.min.js";
import { useEffect, useState } from "react";

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

import { Button } from "@mui/material";
import React from "react";

const TextEditor = ({
  setSectionDescription,
  append,
  remove,
  index,
  sectionTitle,
  sectionDescription,
  setCheckBeforeSubmit,
}) => {
  const [editorContent, setEditorContent] = useState("");
  const [checkSave, setCheckSave] = useState(false);

  const saveToCache = (data) => {
    const cacheSections = localStorage.getItem("cacheSections");
    const check = false;

    if (cacheSections) {
      const sectionsArr = JSON.parse(cacheSections);
      sectionsArr.map((section) => {
        if (section.sectionTitle == data.sectionTitle) {
          sectionDescription = data?.sectionDescription;
        } else {
          sectionsArr.push(data);
        }
      });

      localStorage.setItem("cacheSections", JSON.stringify(sectionsArr));
    } else {
      const sectionsArr = [];
      sectionsArr.push(data);
      localStorage.setItem("cacheSections", JSON.stringify(sectionsArr));
    }

    setCheckSave(true);
  };
  useEffect(() => {
    setCheckSave(false);
  }, [sectionDescription, sectionTitle]);

  useEffect(() => {
    if (checkSave) {
      setCheckBeforeSubmit(true);
    }
  }, [checkSave]);

  const removeFromCache = (indexToRemove) => {
    const cacheSections = localStorage.getItem("cacheSections");

    if (cacheSections) {
      const sectionsArr = JSON.parse(cacheSections);
      const newArray = sectionsArr.filter(
        (item, index) => index !== indexToRemove
      );
      localStorage.setItem("cacheSections", JSON.stringify(newArray));
    }
  };

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
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          margin: "10px 0",
        }}
      >
        <Button
          size="small"
          variant="contained"
          className={styles.removeBtn}
          sx={{
            backgroundColor: "var(--primaryColor) !important",
            "&:hover": {
              backgroundColor: "#006000 !important",
              color: "white",
            },
          }}
          disableElevation
          onClick={() =>
            saveToCache({
              sectionTitle: sectionTitle,
              sectionDescription: sectionDescription,
            })
          }
        >
          {checkSave ? "Saved" : "Please Save"}
        </Button>
        <Button
          size="small"
          variant="contained"
          className={styles.removeBtn}
          disableElevation
          onClick={() => {
            removeFromCache(index), remove(index);
          }}
        >
          Remove
        </Button>
      </div>
    </>
  );
};

export default TextEditor;
