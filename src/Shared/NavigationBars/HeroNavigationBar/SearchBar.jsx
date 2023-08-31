import { Button, TextField } from "@mui/material";
import React from "react";
import styles from "./HeroNavigation.module.scss";
const SearchBar = () => {
  return (
    <>
      <TextField
        InputProps={{
        //   startAdornment: <SearchIcon />,
          style: { height: "42px" },
        }}
        id="outlined-basic"
        // label="Outlined
        placeholder="Search "
        variant="outlined"
        className={styles.searchField}
      />
      <Button variant="contained" className={styles.searchBtn} disableElevation>
        Search
      </Button>
    </>
  );
};

export default SearchBar;
