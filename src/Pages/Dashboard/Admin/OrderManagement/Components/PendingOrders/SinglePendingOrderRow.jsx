import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import {
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import {
  useDeletePendingOrderStatusMutation,
  useUpdatePendingOrderStatusMutation,
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

const successNotify = () => toast.success("Successfully order approved !");
const errorNotify = () => toast.error("Something went wrong !");
const SinglePendingOrderRow = ({ pendingOrder }) => {
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);

  const [
    deletePendingOrderStatus,
    {
      isLoading: deleteStatusLoading,
      isError: deleteStatusError,
      isSuccess: deleteStatusSuccess,
    },
  ] = useDeletePendingOrderStatusMutation();
  const [
    updatePendingOrderStatus,
    {
      isLoading: updateStatusLoading,
      isError: updateStatusError,
      isSuccess: updateStatusSuccess,
    },
  ] = useUpdatePendingOrderStatusMutation();

  const handleUpdatePendingStatus = (id) => {
    setCheck(true);
    const options = { data: { flag: "payment_done", orderid: id } };
    updatePendingOrderStatus(options);
  };

  const handlePendingDelete = (id) => {
    setCheck2(true);
    const options = { data: { id: id } };
    deletePendingOrderStatus(options);
  };

  if (updateStatusSuccess && check) {
    successNotify();
    setCheck(false);
  }
  if (deleteStatusSuccess && check2) {
    successNotify();
    setCheck2(false);
  }

  if (updateStatusError && check) {
    errorNotify();
    setCheck(false);
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
            #{pendingOrder?.id}
          </Typography>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {" "}
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {pendingOrder?.order_date?.split("T")[0]}
          </Typography>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {pendingOrder?.email}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {pendingOrder?.phone}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <p style={{ maxWidth: "250px", overflow: "hidden" }}>
            {" "}
            {pendingOrder?.address}
          </p>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#007FFF",
            }}
          >
            Pending
          </span>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <span style={{ fontSize: "15px", fontWeight: "bold" }}>
            {" "}
            {pendingOrder?.total_price}
          </span>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {updateStatusLoading || updateStatusLoading ? (
            <CircularProgress />
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Tooltip title="Details">
                  <NavLink
                    to={`/dashboard/portal_admin/order_history/${pendingOrder?.id}`}
                  >
                    <IconButton aria-label="Details" size="large">
                      <ReadMoreIcon
                        fontSize="inherit"
                        style={{ color: "green" }}
                      />
                    </IconButton>
                  </NavLink>
                </Tooltip>

                <Tooltip title="Approve">
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => handleUpdatePendingStatus(pendingOrder?.id)}
                  >
                    <CheckCircleIcon
                      fontSize="inherit"
                      style={{ color: "green" }}
                    />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => handlePendingDelete(pendingOrder?.id)}
                  >
                    <CancelIcon fontSize="inherit" style={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </>
          )}
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default SinglePendingOrderRow;
