import React from "react";

const Notfound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <img
        src="/assets/page-not-found.jpg"
        alt=""
        style={{ maxWidth: "400px" }}
        srcset=""
      />
    </div>
  );
};

export default Notfound;
