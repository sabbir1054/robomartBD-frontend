import React from "react";

const TagBadge = ({ tag }) => {
  return (
    <>
      <small
        style={{
          margin: "10px 5px ",
          padding: "5px",
          backgroundColor: "black",
          fontWeight: "500",
          color: "white",
          fontSize: "14px",
          borderRadius: "10px",
        }}
      >
        {tag}
      </small>
    </>
  );
};

export default TagBadge;
