import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { IconButton, Tooltip, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import {
  useDeletePendingOrderStatusMutation,
  useUpdateDeliveredOrderStatusMutation,
} from "../../../../../../redux/api/api";
import styles from "../../OrderManagement.module.scss";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,

    fontSize: "15px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const successNotify = () => toast.success("Successfully status changed !");
const errorNotify = () => toast.error("Something went wrong !");
const CompleteOrdersSingleRow = ({ deliveredOrder }) => {
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [
    updateDeliveredOrderStatus,
    {
      isLoading: updateStatusLoading,
      isError: updateStatusError,
      isSuccess: updateStatusSuccess,
    },
  ] = useUpdateDeliveredOrderStatusMutation();
  const [
    deletePendingOrderStatus,
    {
      isLoading: deleteStatusLoading,
      isError: deleteStatusError,
      isSuccess: deleteStatusSuccess,
    },
  ] = useDeletePendingOrderStatusMutation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleActiveOrderDelete = (id) => {
    setCheck2(true);
    const options = { data: { id: id } };
    deletePendingOrderStatus(options);
  };
  const handleUpdateDeliveredOrderStatus = (id) => {
    setCheck(true);
    const options = { data: { orderid: id, flag: "sell_done" } };
    updateDeliveredOrderStatus(options);
  };

  if (updateStatusSuccess && check) {
    successNotify();
    setCheck(false);
  }

  if (updateStatusError && check) {
    errorNotify();
    setCheck(false);
  }

  if (deleteStatusSuccess && check2) {
    successNotify();
    setCheck2(false);
  }

  if (deleteStatusError && check2) {
    errorNotify();
    setCheck2(false);
  }
  return (
    <>
      <StyledTableRow>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <Typography variant="subtitle1" paddingLeft={2} fontWeight={"bold"}>
            #{deliveredOrder?.id}
          </Typography>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {" "}
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {deliveredOrder?.order_date?.split("T")[0]}
          </Typography>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {deliveredOrder?.email}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {deliveredOrder?.phone}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {deliveredOrder?.address}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#007FFF",
            }}
          >
            Delivered
          </span>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <span style={{ fontSize: "15px", fontWeight: "bold" }}>
            {deliveredOrder?.total_price}
          </span>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Tooltip title="Details">
              <NavLink
                to={`/dashboard/portal_admin/order_summary/${deliveredOrder?.id}`}
              >
                <IconButton aria-label="Details" size="large">
                  {" "}
                  <ReadMoreIcon fontSize="inherit" style={{ color: "green" }} />
                </IconButton>{" "}
              </NavLink>
            </Tooltip>

            <Button
              variant="outlined"
              style={{ fontWeight: "bold" }}
              color="warning"
              onClick={() =>
                handleUpdateDeliveredOrderStatus(deliveredOrder?.id)
              }
            >
              Order Done
            </Button>
            <Tooltip title="Return">
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => handleActiveOrderDelete(deliveredOrder?.id)}
              >
                <ReplyAllIcon fontSize="inherit" style={{ color: "red" }} />
              </IconButton>
            </Tooltip>
          </div>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default CompleteOrdersSingleRow;
