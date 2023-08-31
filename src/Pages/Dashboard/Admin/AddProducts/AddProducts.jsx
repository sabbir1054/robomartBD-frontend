import { Container, Grid, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import ImageUploader from "../../../../Shared/ImageUploader/ImageUploader";
import ProductDescriptionEditor from "../../../../Shared/TextEditor/ProductDescriptionEditor";
import ProductDoc from "../../../../Shared/TextEditor/ProductDoc";
import styles from "./AddProducts.module.scss";
import FormLebel from "./FormLebel";
const AddProducts = () => {
  const [images, setImages] = useState([]);
  const [fullDescription, setFullDescription] = useState("");
  const [doc, setDoc] = useState("");
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
      categories: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "categories",
  });
  const onSubmit = (data) => {
    // create data
    data.coverPhoto = images && images[0]?.data_url;
    data.product_description = fullDescription;
    data.doc_tutorials = doc;
    data.total_review = 0;
    data.rating = 0;
    data.feedback = [];

    console.log(data);

    // // window.location.reload();
    // reset();
  };
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
        Add Product
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
          <FormLebel text={"Product name :"} />
          <input
            type="text"
            {...register("name", { required: true })}
            className={styles.auth_form_inputField}
          />
          <FormLebel text={"Product code :"} />
          <input
            type="text"
            {...register("product_code", { required: true })}
            className={styles.auth_form_inputField}
          />
          <FormLebel text={"Product Photo :"} />
          <ImageUploader images={images} setImages={setImages} />
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <FormLebel text={"Price :"} />
                <input
                  type="number"
                  {...register("price", { required: true })}
                  className={styles.auth_form_inputField}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FormLebel text={"Discount :"} />
                <input
                  type="number"
                  {...register("discount", { required: true })}
                  className={styles.auth_form_inputField}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FormLebel text={"After Discount Price :"} />
                <input
                  type="number"
                  {...register("after_discount", { required: true })}
                  className={styles.auth_form_inputField}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FormLebel text={"Buying Price :"} />
                <input
                  type="number"
                  {...register("buying_price", { required: true })}
                  className={styles.auth_form_inputField}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} paddingY={2}>
              <Grid item xs={12} sm={6}>
                <FormLebel text={"In Stock :"} />
                <input
                  type="checkbox"
                  {...register("in_stock", { required: true })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLebel text={"How many products in stock :"} />
                <input
                  type="number"
                  {...register("stock", { required: true })}
                  className={styles.auth_form_inputField}
                />
              </Grid>
            </Grid>{" "}
            <br />
            <Grid container spacing={2} paddingY={2}>
              <Grid item xs={12} sm={6}>
                <FormLebel text={"Select Category :"} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLebel text={"Select Sub-Category :"} />
              </Grid>
            </Grid>
          </div>
          <br />
          <br />
          <FormLebel text={"Short Description (40-50 words) :"} />
          <textarea
            type="text"
            style={{ fontSize: "20px !important", padding: "10px" }}
            {...register("short_description", { required: true })}
            // className={styles.auth_form_inputField}
            rows={"10"}
            cols={"90"}
          />
          <br />
          {/* Extra Section Input */}
          <FormLebel text={"Product Full Description :"} /> <br />
          <ProductDescriptionEditor setFullDescription={setFullDescription} />
          <FormLebel text={"Add Documents or Tutorials :"} /> <br />
          <ProductDoc setDoc={setDoc} />
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
                  value={"Add Product"}
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

export default AddProducts;
