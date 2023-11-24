import { Container, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProductDescriptionEditor from "../../../../Shared/TextEditor/ProductDescriptionEditor";
import ProductDoc from "../../../../Shared/TextEditor/ProductDoc";
import styles from "./AddProducts.module.scss";
import FormLebel from "./FormLebel";
import { backendUrl } from "../../../../utils/backendApiUrlProvider";

const exampleData = [
  {
    id: 1,
    name: "Development Board",
    sub_category: [
      {
        id: 1,
        name: "Arduino Board",
        image: "/uploads/SubCategoryImage/2023-05-31-09-39-43.jpg",
      },
      {
        id: 2,
        name: "PI board",
        image: null,
      },
      {
        id: 3,
        name: "SMT board",
        image: null,
      },
    ],
  },
];

const AddProducts = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
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
    // defaultValues: {
    //   categories: [],
    // },
  });
  //   const { fields, append, remove } = useFieldArray({
  //     control,
  //     name: "categories",
  //   });
  const onSubmit = (data) => {
    // create data
    data.coverPhoto = images && images[0]?.data_url;
    data.product_description = fullDescription;
    data.doc_tutorials = doc;
    data.total_review = 0;
    data.rating = 0;
    data.feedback = [];
    data.category = selectedCategory;
    data.subCategory = selectedSubCategory;

    // // window.location.reload();
    // reset();
  };

  useEffect(() => {
    fetch(`${backendUrl}/api/catagorylist`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    if (selectedCategory) {
      categories?.map((category) => {
        if (category?.id == selectedCategory) {
          setSubCategories(category?.sub_category);
        }
      });
    }
  }, [selectedCategory]);
  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangeSubCategory = (event) => {
    setSelectedSubCategory(event.target.value);
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
        Add Product Description
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
          {/* <FormLebel text={"Product name :"} />
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
            <Grid container spacing={2} paddingY={2} border={"2"}>
              <Grid item xs={12} sm={6}>
                <FormLebel text={"Select Category :"} />
                <Select
                  className={styles.auth_form_inputField}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedCategory}
                  onChange={handleChangeCategory}
                >
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLebel text={"Select Sub-Category :"} />
                {subCategories?.length > 0 && (
                  <Select
                    className={styles.auth_form_inputField}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedSubCategory}
                    onChange={handleChangeSubCategory}
                  >
                    {subCategories?.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </Grid>
            </Grid>
          </div>
          <br /> */}
          {/* Full Description ADDED */}
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
