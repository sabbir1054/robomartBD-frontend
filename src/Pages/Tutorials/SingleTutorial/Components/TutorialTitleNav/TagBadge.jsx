import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../SingleTutorial.module.scss";

const TagBadge = ({ tag, tagId }) => {
  const navigate = useNavigate();
  const handleTagNavigate = () => {
    navigate(`/tutorials/tag/${tagId}/${tag.replace(/ /g, "_")}`);
  };
  return (
    <>
      <small
        onClick={handleTagNavigate}
        className={styles.tagStyle}
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
