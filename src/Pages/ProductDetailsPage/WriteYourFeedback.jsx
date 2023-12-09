import CreateIcon from "@mui/icons-material/Create";
import { Button, Modal, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useGetUserQuery } from "../../redux/api/api";
import { backendUrl } from "../../utils/backendApiUrlProvider";
import styles from "./ProductDetail.module.scss";
const WriteYourFeedback = ({ productDetails, getAllFeedData }) => {
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

  const postFeedbackData = (data) => {
    const storedData = localStorage.getItem("user");
    const userDataStorage = JSON.parse(storedData);
    fetch(`${backendUrl}/feedback/get_feedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${userDataStorage}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status == 201 || res.status == 200) {
          getAllFeedData();
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Comment Submitted !",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            // position: "top-end",
            icon: "error",
            title: "Something went wrong !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        return res.json();
      })
      .then((result) => {});
  };

  const handleSubmit = (e) => {
    const newFeedBack = {
      product: productDetails?.id,
      ratting: value,
      review: feedback,
    };

    postFeedbackData(newFeedBack);

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
        onClick={handleReviewOpenBtn}
        sx={{
          marginTop: "10px",
          backgroundColor: "var(--primaryColor)",
          "&:hover": { backgroundColor: "green" },
        }}
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
