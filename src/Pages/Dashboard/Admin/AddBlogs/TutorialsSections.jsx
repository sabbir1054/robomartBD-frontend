import { Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import TextEditor from "../../../../Shared/TextEditor/TextEditor";
import styles from "./AddBlogs.module.scss";
const TutorialsSections = ({ fields, append, remove, control, register }) => {
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionDescription, setSectionDescription] = useState("");
  const [checkSave, setCheckSave] = useState(false);

  const saveToCache = (data) => {
    const cacheSections = localStorage.getItem("cacheSections");

    if (cacheSections) {
      const sectionsArr = JSON.parse(cacheSections);
      sectionsArr.push(data);
      localStorage.setItem("cacheSections", JSON.stringify(sectionsArr));
    } else {
      const sectionsArr = [];
      sectionsArr.push(data);
      localStorage.setItem("cacheSections", JSON.stringify(sectionsArr));
    }

    setCheckSave(true);
  };

  const removeFromCache = (indexToRemove) => {
    const cacheSections = localStorage.getItem("cacheSections");

    if (cacheSections) {
      const sectionsArr = JSON.parse(cacheSections);
      const newArray = sectionsArr.filter(
        (item, index) => index !== indexToRemove
      );
      localStorage.setItem("cacheSections", JSON.stringify(newArray));
    }
  };

  const handleTitle = (value) => {
    setCheckSave(false);
    setSectionTitle(value);
  };

  useEffect(() => {
    setCheckSave(false);
  }, [sectionDescription]);

  return (
    <>
      <>
        {fields.map((field, index) => (
          <div key={field.id}>
            <Controller
              name={`sectionTitle[${index}].title`}
              control={control}
              defaultValue={field.title}
              render={({ field }) => (
                <>
                  {" "}
                  <label htmlFor="image" className={styles.auth_label}>
                    <Typography
                      variant="title1"
                      style={{
                        textAlign: "center",
                        padding: "5vh 0",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: "18px",
                        margin: "5vh 0vh",
                      }}
                    >
                      {" "}
                      Section Title : <br />
                    </Typography>
                  </label>{" "}
                  <input
                    {...field}
                    onChange={(e) => handleTitle(e.target.value)}
                    placeholder="Title"
                    className={styles.auth_form_inputField}
                  />
                </>
              )}
            />

            <Controller
              name={`sections[${index}].sectionDescription`}
              control={control}
              render={({ field }) => (
                <>
                  <label htmlFor="image" className={styles.auth_label}>
                    <Typography
                      variant="title1"
                      style={{
                        textAlign: "center",
                        padding: "5vh 0",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: "18px",
                        margin: "5vh 0vh",
                      }}
                    >
                      Section Details : <br />
                    </Typography>
                  </label>
                  <TextEditor setSectionDescription={setSectionDescription} />
                </>
              )}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "end",
                margin: "10px 0",
              }}
            >
              <Button
                size="small"
                variant="contained"
                className={styles.removeBtn}
                sx={{
                  backgroundColor: "var(--primaryColor) !important",
                  "&:hover": {
                    backgroundColor: "#006000 !important",
                    color: "white",
                  },
                }}
                disableElevation
                onClick={() =>
                  saveToCache({
                    sectionTitle: sectionTitle,
                    sectionDescription: sectionDescription,
                  })
                }
              >
                {checkSave ? "Saved" : "Please Save"}
              </Button>
              <Button
                size="small"
                variant="contained"
                className={styles.removeBtn}
                disableElevation
                onClick={() => {
                  removeFromCache(index), remove(index);
                }}
              >
                Remove
              </Button>
            </div>
       
            <br />
          </div>
        ))}
        <Button
          variant="contained"
          className={styles.addBtn}
          disableElevation
          onClick={() => append({ sectionTitle: "", sectionDescription: "" })}
        >
          Add New Section
        </Button>
      </>
      <Divider/>
    </>
  );
};

export default TutorialsSections;
