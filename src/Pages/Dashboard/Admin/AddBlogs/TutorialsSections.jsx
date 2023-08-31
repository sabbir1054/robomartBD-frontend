import { Button, Divider } from "@mui/material";
import React from "react";
import styles from "./AddBlogs.module.scss";
import SingleTutorialSections from "./SingleTutorialSections";
const TutorialsSections = ({
  fields,
  append,
  remove,
  control,
  register,
  sectionSaveChecker,
  setSectionSaveChecker,
  setCheckBeforeSubmit,
}) => {
  const handleAppendBtn = () => {
    setCheckBeforeSubmit(false);
     append({
       sectionTitle: "",
       sectionDescription: "",
     });
  };
  return (
    <>
      <>
        {fields.map((field, index) => (
          <SingleTutorialSections
            setCheckBeforeSubmit={setCheckBeforeSubmit}
            field={field}
            index={index}
            append={append}
            remove={remove}
            control={control}
          />
        ))}
        <Button
          variant="contained"
          className={styles.addBtn}
          disableElevation
          onClick={() => handleAppendBtn()}
        >
          Add New Section
        </Button>
      </>
      <Divider />
    </>
  );
};

export default TutorialsSections;
