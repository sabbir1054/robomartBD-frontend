import { Container, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import ImageUploader from "../../../../Shared/ImageUploader/ImageUploader";
import styles from "./AddBlogs.module.scss";
import TutorialsSections from "./TutorialsSections";

const AddBlogsPage = () => {
  const [sections, setSections] = useState([]);
  const [imgData, setImgData] = useState("");

  const {
    register,
    control,
    handleSubmit,
    unregister,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sections: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sections",
  });

  const onSubmit = (data) => {
    delete data.sectionTitle;
    const cacheSections = JSON.parse(localStorage.getItem("cacheSections"));
    data.sections = cacheSections;
    localStorage.removeItem("cacheSections");
    console.log(data);
  };

  return (
    <div style={{ minHeight: "70vh" }}>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          padding: "5vh 0",
          fontFamily: "Poppins",
          fontWeight: "bold",
        }}
      >
        {" "}
        Make Tutorial{" "}
      </Typography>
      <Container maxWidth="md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.submitBlogForm}
        >
          <label htmlFor="title" className={styles.auth_label}>
            <Typography
              variant="title1"
              style={{
                textAlign: "center",
                padding: "5vh 0",
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Tutorial Title :
            </Typography>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className={styles.auth_form_inputField}
          />
          <br />
          <label htmlFor="image" className={styles.auth_label}>
            <Typography
              variant="title1"
              style={{
                textAlign: "center",
                padding: "5vh 0",
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {" "}
              Upload Tutorial thumbnail photo :
            </Typography>
          </label>
          <ImageUploader setImgData={setImgData} />
          <br />
        
          <br />
          <Typography
            variant="h3"
            style={{
              textDecoration:"underline",
              textAlign: "center",
              padding: "2vh 0",
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "18px",
              margin: "1vh 0vh",
            }}
          >
            {" "}
            Add Necessary Sections for Tutorial
          </Typography>
          <br />
         
          <br />
          {/* Added Sections Part */}
          <TutorialsSections
            register={register}
            fields={fields}
            append={append}
            remove={remove}
            control={control}
          />
          <br />
          <label
            htmlFor="image"
            className={styles.auth_label}
            id="relatedProduct"
          >
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
              Related Products : <br />
            </Typography>
          </label>
          ....page is under development
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "3vh 0",
            }}
          >
            <input
              type="submit"
              value={"Add Blog"}
              className={styles.auth_form_submitBtn}
            />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddBlogsPage;
