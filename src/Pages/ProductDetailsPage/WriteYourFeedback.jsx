import { Button, Modal, Rating, TextField } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import React, { useState } from "react";
import styles from "./ProductDetail.module.scss";
const WriteYourFeedback = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState("");
  const [value, setValue] = useState(3);
  const [feedback, setFeedback] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen} sx={{marginTop:"10px"}} startIcon={<CreateIcon/>}>
        Write your review
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        className={styles.ModalContainer}
      >
        <div className={styles.ModalWrapper}>
          <form onSubmit={handleSubmit}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            <TextField
              label="Feedback Message"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" type="submit" className={styles.reviewSubmit} >
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default WriteYourFeedback;
