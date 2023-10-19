import { Autocomplete, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../../../redux/api/api";

const AddRelatedProducts = ({ setRelatedProducts }) => {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  const [selectedItems, setSelectedItems] = useState([]);

  const makePIDArr = (arr) => {
    const pidArr = [];
    arr?.map((item) => {
      pidArr.push(item?.split("-PID:")[1]);
    });
    setRelatedProducts(pidArr);
  };
  const handleChange = (event, newValue) => {
    
    setSelectedItems(newValue);
    makePIDArr(newValue);
  };

  return (
    <>
      <Grid container spacing={2} margin={"10px 0px"}>
        <Grid item xs={12} md={8}>
          {data && (
            <Autocomplete
              multiple
              id="multi-select"
              options={
                data
                  ? data?.map((item) => item?.name + "-PID: " + item?.id)
                  : ""
              }
              value={selectedItems}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Select multiple products"
                />
              )}
            />
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {" "}
          <div style={{ marginLeft: "10px" }}>
            <h3>Selected Items:</h3>
            <ol>
              {selectedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default AddRelatedProducts;
