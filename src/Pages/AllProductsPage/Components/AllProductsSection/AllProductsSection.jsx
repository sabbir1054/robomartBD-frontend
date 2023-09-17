import React, { useState } from "react";
import { useGetAllProductsQuery } from "../../../../redux/api/api";

import {
  Button,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Pagination,
  Typography,
} from "@mui/material";
import SingleProductCard from "../../../../Shared/SingleProductCard/SingleProductCard";

const AllProductsSection = () => {
  const { data: allProducts, isLoading, isError } = useGetAllProductsQuery();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ padding: "5vh 0" }}>
      <Typography variant="h6">Our Products</Typography>
      <Divider />
      {/* sorting */}
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{
            backgroundColor: "var(--primaryColor)",
            color: "white",
            fontWeight: "bold",
            fontFamily: "Roboto",
            marginTop: "10px",
          }}
        >
          Sort By
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Price: Low {`>`} High</MenuItem>
          <MenuItem onClick={handleClose}>Price: High {`>`} Low</MenuItem>
        </Menu>
      </div>

      <Grid container spacing={2} marginBottom={2}>
        {allProducts?.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            display={"flex"}
            justifyContent={"center"}
            marginTop={2}
          >
            <SingleProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      {/* Pagination */}
      <div style={{padding:"5vh 0",display:"flex",justifyContent:"center"}}>
        <Pagination count={100} color="success" />
      </div>
    </div>
  );
};

export default AllProductsSection;
