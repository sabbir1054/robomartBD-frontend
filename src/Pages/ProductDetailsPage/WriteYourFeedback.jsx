import CreateIcon from "@mui/icons-material/Create";
import { Button, Modal, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useGetUserQuery } from "../../redux/api/api";
import styles from "./ProductDetail.module.scss";
const WriteYourFeedback = ({ productDetails }) => {
  const { data: userData, isLoading, isError } = useGetUserQuery();
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(5);
  const [feedback, setFeedback] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(userData);

  const postFeedbackData = (data) => {
    fetch(`https://api.robomartbd.com/api/auth/jwt/create/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {});
  };

  const handleSubmit = (e) => {
    const newFeedBack = {
      product: productDetails?.id,
      ratting: value,
      review: feedback,
    };

    postFeedbackData(newFeedBack);
    console.log(feedback);
    console.log(value);
    e.preventDefault();
    handleClose();
  };

  const handleReviewOpenBtn = () => {
    if (!userData) {
      Swal.fire({
        // position: "top-end",
        icon: "error",
        title: "Please login first !",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      handleOpen();
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleReviewOpenBtn}
        sx={{ marginTop: "10px" }}
        startIcon={<CreateIcon />}
      >
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={styles.reviewSubmit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default WriteYourFeedback;
