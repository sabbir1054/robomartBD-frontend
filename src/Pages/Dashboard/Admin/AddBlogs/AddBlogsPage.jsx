import { Container, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ImageUploader from "../../../../Shared/ImageUploader/ImageUploader";
import styles from "./AddBlogs.module.scss";
import AddRelatedProducts from "./AddRelatedProducts";
import TutorialsSections from "./TutorialsSections";
const AddBlogsPage = () => {
  const [finalData, setFinalData] = useState({});
  const [checkBeforeSubmit, setCheckBeforeSubmit] = useState(false);
  const [images, setImages] = useState([]);
  const [sections, setSections] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
 


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


  const handleSubmitBtn = () => {
    if (
      finalData.title &&
      finalData.coverPhoto &&
      finalData.sections &&
      finalData.relatedProducts
    ) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Tutorial Added",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Fill up the form",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  
  const onSubmit = (data) => {
    // create data
    data.coverPhoto = images && images[0]?.data_url;
    delete data.sectionTitle;
    const cacheSections = JSON.parse(localStorage.getItem("cacheSections"));
    data.sections = cacheSections;
    localStorage.removeItem("cacheSections");
    data.relatedProducts = relatedProducts;
    setFinalData(data);
   

    // // window.location.reload();
    // reset();
  };
  useEffect(() => {
    localStorage.removeItem("cacheSections");
  }, []);
  return (
    <div style={{ minHeight: "70vh" }}>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          padding: "5vh 0",
          paddingBottom: "0",
          fontFamily: "Poppins",
          fontWeight: "bold",
        }}
      >
        {" "}
        Make Tutorial{" "}
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Typography
          variant="title2"
          style={{
            textAlign: "center",
            padding: "2vh 0",
            paddingBottom: "5vh",
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: "red",
          }}
        >
          {" "}
          Note: Without Submit form not reload this page. If reload page this
          form will reset and you lost data.
        </Typography>
      </div>

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
            type="text"
            {...register("title", { required: true })}
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
          <ImageUploader images={images} setImages={setImages} />
          <br />

          <br />
          <Typography
            variant="h3"
            style={{
              textDecoration: "underline",
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
            setCheckBeforeSubmit={setCheckBeforeSubmit}
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
          <AddRelatedProducts setRelatedProducts={setRelatedProducts} />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "3vh 0",
            }}
          >
            <Tooltip title="Please Save all section first">
              <div>
                <input
                  // disabled={checkBeforeSubmit ? false : true}
                  type="submit"
                  value={"Add Tutorial"}
                  style={{ backgroundColor: "#d8d8d8 !important" }}
                  className={styles.auth_form_submitBtn}
                />
              </div>
            </Tooltip>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddBlogsPage;
