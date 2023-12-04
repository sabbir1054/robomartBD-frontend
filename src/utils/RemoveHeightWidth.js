export function removeWidthAndHeight(htmlText) {
  // Remove width attribute
  htmlText = htmlText.replace(/width="[^"]*"/g, "");

  // Remove height attribute
  htmlText = htmlText.replace(/height="[^"]*"/g, "");

  return htmlText;
}
