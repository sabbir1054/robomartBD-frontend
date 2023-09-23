import {
  Button,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SingleProductCard from "../../../../Shared/SingleProductCard/SingleProductCard";
import { useGetAllProductsQuery } from "../../../../redux/api/api";

const AllProductsSection = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();
  const [allProducts, setAllProducts] = useState(data);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50); // Set the number of items per page

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Sorting function (to be implemented)
  const handleSort = (option) => {
    let sortedProducts = [...allProducts]; // Create a copy of the products array

    if (option === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price); // Sort by price from low to high
    } else if (option === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price); // Sort by price from high to low
    }

    setAllProducts(sortedProducts); // Update the state with the sorted array
    setCurrentPage(1); // Reset to the first page after sorting
    handleClose();
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProducts?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          <MenuItem onClick={() => handleSort("lowToHigh")}>
            Price: Low {`>`} High
          </MenuItem>
          <MenuItem onClick={() => handleSort("highToLow")}>
            Price: High {`>`} Low
          </MenuItem>
        </Menu>
      </div>

      <Grid container spacing={2} marginBottom={2}>
        {currentItems?.map((product) => (
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
      <div
        style={{ padding: "5vh 0", display: "flex", justifyContent: "center" }}
      >
        <Pagination
          count={Math.ceil(allProducts?.length / itemsPerPage)}
          color="success"
          onChange={(event, page) => paginate(page)}
        />
      </div>
    </div>
  );
};

export default AllProductsSection;
