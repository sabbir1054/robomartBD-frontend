import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MobileNavigation.module.scss";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  display: "flex",
  flexDirection: "column",
};

const SmallSearch = ({ toggleDrawer }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSmallSearch = () => {
    navigate(`/products/search=/${query}`);
    handleClose();
    toggleDrawer();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        startIcon={<SearchIcon />}
        sx={{ width: "100%" }}
        variant="contained"
        className={styles.searchBtn}
        disableElevation
      >
        Search
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-basic"
            // label="Outlined
            placeholder="Search "
            variant="outlined"
            className={styles.searchField}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            variant="contained"
            className={styles.searchBtn}
            disableElevation
            onClick={handleSmallSearch}
          >
            Search
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default SmallSearch;
