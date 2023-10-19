import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TutorialCategoryList.module.scss";
const TutorialCategoryNav = () => {
  const [categories, setCategories] = useState([]);
  const getCategoriesData = async () => {
    const dataToDb = await fetch(
      `https://api.robomartbd.com/blog/get_all_category`
    );
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
                to={`/tutorials/category/${category?.id}/${(category?.name).replace(
                  / /g,
                  "_"
                )}`}
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
