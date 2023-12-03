import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./TutorialCategoryList.module.scss";
import { backendUrl } from "../../../../../utils/backendApiUrlProvider";
const TutorialCategoryNav = () => {
  const location = useLocation();
  
  const [categories, setCategories] = useState([]);
  const getCategoriesData = async () => {
    const dataToDb = await fetch(`${backendUrl}/blog/get_all_category`);
    const result = await dataToDb.json();
    setCategories(result);
  };
  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <div>
      <ul className={styles.categoryList}>
        {categories?.length > 0 &&
          categories?.map((category) => (
            <li>
              <Link
                to={`/${location?.pathname === "tutorials"?"tutorials":"blogs"}/category/${
                  category?.id
                }/${(category?.name).replace(/ /g, "_")}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {category?.name}
              </Link>{" "}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TutorialCategoryNav;
