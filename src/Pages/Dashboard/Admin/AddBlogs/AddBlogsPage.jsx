import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ImageUploader from "../../../../Shared/ImageUploader/ImageUploader";
import TextEditor from "../../../../Shared/TextEditor/TextEditor";
import styles from "./AddBlogs.module.scss";

const AddBlogsPage = () => {
  const [imgData, setImgData] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.email && data.password) {
    } else {
    }
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
        Write Blog{" "}
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
              {" "}
              Title :
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
              Upload photo :
            </Typography>
          </label>
          <ImageUploader setImgData={setImgData} />
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
                margin: "5vh 0vh",
              }}
            >
              {" "}
              Description : <br />
            </Typography>
          </label>
          <br />
          <TextEditor />
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
                margin: "5vh 0vh",
              }}
            >
              {" "}
              Related Products : <br />
            </Typography>
          </label>
          ....page is under development
          <br />
          <input
            type="submit"
            value={"Add Blog"}
            className={styles.auth_form_submitBtn}
          />
        </form>
      </Container>
    </div>
  );
};

export default AddBlogsPage;
