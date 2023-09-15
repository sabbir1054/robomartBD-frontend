import { Button, Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

const PaginationFilter = () => {
  const [anchorEl, setAnchorEl] = useState("None");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  /* pagination value */
  const handleChange = (event, value) => {
    console.log(`Selected page: ${value}`);
  };
  return (
    <div>
      <Grid container spacing={2} paddingY={1}>
        <Grid item xs={12} sm={6}>
          {" "}
          <div>
            <Button
              variant="contained"
              disableElevation
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              style={{ backgroundColor: "green" }}
            >
              All Tags
            </Button>

            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} display={"flex"} justifyContent={"end"}>
          <Stack spacing={2}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
              color="success"
            />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaginationFilter;
