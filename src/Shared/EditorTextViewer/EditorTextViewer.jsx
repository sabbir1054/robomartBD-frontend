import React from "react";
function addClassToTextImages(htmlContent, className) {
  // Create a temporary div element to hold the HTML content
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlContent;

  // Find all img elements within the div
  const imgElements = tempDiv.querySelectorAll("img");

  // Add the specified class to each img element
  imgElements.forEach((img) => {
    img.classList.add(className);
  });

  // Return the updated HTML content
  return tempDiv.innerHTML;
}
const EditorTextViewer = ({ froalaHTML }) => {
  const updatedHtml = addClassToTextImages(froalaHTML, "section_img");

  const removeString =
    '<p data-f-id="pbf" style="text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;">Powered by <a href="https://www.froala.com/wysiwyg-editor?pb=1" title="Froala Editor">Froala Editor</a></p>';
  const newText = updatedHtml?.replace(removeString, "");

  return <div dangerouslySetInnerHTML={{ __html: newText }} />;
};

export default EditorTextViewer;
