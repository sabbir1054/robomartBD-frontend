import React from "react";
import { Link } from "react-router-dom";
import styles from "./TutorialCategoryList.module.scss";
const TutorialCategoryNav = () => {
  return (
    <div>
      <ul className={styles.categoryList}>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Small Project
          </Link>{" "}
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Large Project
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            {" "}
            Arduino Project
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            IOT Projects
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            {" "}
            Ar Vr
          </Link>{" "}
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            {" "}
            Micro Controller
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Wireless System
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home Automation
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TutorialCategoryNav;
