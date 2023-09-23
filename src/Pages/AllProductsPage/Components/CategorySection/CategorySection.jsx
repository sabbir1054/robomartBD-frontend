import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const CategorySection = ({ categoryList }) => {
  return (
    <>
      <div>
        <Typography variant="h6"> Categories & Sub categories</Typography>
        <Divider />
      </div>
      <div>
        <Grid container spacing={3} paddingY={2}>
          {categoryList &&
            categoryList?.map((singleCategory) => (
              <>
                {" "}
                <Grid item xs={4} sm={3} md={2}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <NavLink
                      to={`/products/categories/${
                        singleCategory?.id
                      }/${singleCategory?.name?.replace(/ /g, "_")}`}
                      style={{
                        width: "150px",
                        height: "150px",
                        border: "1px solid #d6d4d4",
                      }}
                    >
                      {" "}
                      <img
                        src={`${singleCategory?.image}`}
                        style={{
                          width: "150px",
                          height: "150px",
                          // border: "1px solid #d6d4d4",
                        }}
                        alt="category-image"
                        srcset=""
                      />
                    </NavLink>
                  </div>
                  <Typography variant="subtitle1" textAlign={"center"} fontWeight={"bold"}>
                    {singleCategory?.name}
                  </Typography>
                </Grid>
                <>
                  {singleCategory?.sub_category?.map((item) => (
                    <>
                      {" "}
                      <Grid item xs={4} sm={3} md={2}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <NavLink
                            to={`/products/scategories/${
                              item?.id
                            }/${item?.name?.replace(/ /g, "_")}`}
                            style={{
                              width: "150px",
                              height: "150px",
                              border: "1px solid #d6d4d4",
                            }}
                          >
                            <img
                              src={`${item?.image}`}
                              style={{
                                width: "150px",
                                height: "150px",
                                // border: "1px solid #d6d4d4",
                              }}
                              alt="category-image"
                              srcset=""
                            />
                          </NavLink>
                        </div>
                        <Typography variant="subtitle1" textAlign={"center"} fontWeight={"bold"}>
                          {item?.name}
                        </Typography>
                      </Grid>
                    </>
                  ))}
                </>
              </>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default CategorySection;
