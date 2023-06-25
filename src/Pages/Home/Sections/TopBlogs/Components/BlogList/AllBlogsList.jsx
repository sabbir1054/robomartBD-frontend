import React from "react";
import SingleBlogList from "./SingleBlogList";
import styles from "./BlogList.module.scss"
const AllBlogsList = () => {
  return (
    <>
      <SingleBlogList /> <br />
      <SingleBlogList /><br />
      <SingleBlogList /><br />
    </>
  );
};

export default AllBlogsList;
