import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { IconButton, Tooltip, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useUpdateDeliveredOrderStatusMutation } from "../../../../../../redux/api/api";
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
  const [
    updateDeliveredOrderStatus,
    {
      isLoading: updateStatusLoading,
      isError: updateStatusError,
      isSuccess: updateStatusSuccess,
    },
  ] = useUpdateDeliveredOrderStatusMutation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdateDeliveredOrderStatus = (id) => {
    const options = { data: { orderid: id, flag: "sell_done" } };
    updateDeliveredOrderStatus(options);
  };

  if (updateStatusSuccess) {
    successNotify();
  }

  if (updateStatusError) {
    errorNotify();
    }
    console.log(deliveredOrder);
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
          {deliveredOrder?.email}
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
          </div>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default CompleteOrdersSingleRow;
