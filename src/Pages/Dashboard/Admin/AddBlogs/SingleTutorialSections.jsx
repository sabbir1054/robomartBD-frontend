import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import styles from "./AddBlogs.module.scss"
import { Typography } from '@mui/material';
import TextEditor from '../../../../Shared/TextEditor/TextEditor';
const SingleTutorialSections = ({
  control,
  field,
  index,
  append,
  remove,
  setCheckBeforeSubmit,
}) => {
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionDescription, setSectionDescription] = useState("");
  const [titleCheck, setTitleCheck] = useState(false);

  const handleTitle = (value) => {
    setSectionTitle(value);
  };
  return (
    <>
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
              <TextEditor
                sectionTitle={sectionTitle}
                sectionDescription={sectionDescription}
                setSectionDescription={setSectionDescription}
                append={append}
                remove={remove}
                index={index}
                setCheckBeforeSubmit={setCheckBeforeSubmit}
              />
            </>
          )}
        />

        <br />
      </div>
    </>
  );
};

export default SingleTutorialSections;