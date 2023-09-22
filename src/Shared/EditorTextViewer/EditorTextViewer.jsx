import React from "react";

const EditorTextViewer = ({ froalaHTML }) => {
  const removeString =
    '<p data-f-id="pbf" style="text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;">Powered by <a href="https://www.froala.com/wysiwyg-editor?pb=1" title="Froala Editor">Froala Editor</a></p>';
  const newText = froalaHTML?.replace(removeString, "");
  return <div dangerouslySetInnerHTML={{ __html: newText }} />;
};

export default EditorTextViewer;
