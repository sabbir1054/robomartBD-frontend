import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
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

const SmallSearch = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="text"
        sx={{ color: "#333", textDecoration: "underline" }}
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
          />
          <Button
            variant="contained"
            className={styles.searchBtn}
            disableElevation
          >
            Search
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default SmallSearch;
