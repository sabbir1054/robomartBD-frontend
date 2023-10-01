import CancelIcon from "@mui/icons-material/Cancel";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import {
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import {
  useDeletePendingOrderStatusMutation,
  useUpdateActivesOrderStatusMutation,
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

const SingleActiveOrderRow = ({ activeOrder }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [
    updateActiveOrderStatus,
    {
      isLoading: updateStatusLoading,
      isError: updateStatusError,
      isSuccess: updateStatusSuccess,
    },
  ] = useUpdateActivesOrderStatusMutation();
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

  const handleUpdateActiveOrderStatus = (id) => {
    const options = { data: { orderid: id, flag: "served_done" } };
    updateActiveOrderStatus(options);
  };

  const handleActiveOrderDelete = (id) => {
    const options = { data: { id: id } };
    deletePendingOrderStatus(options);
  };

  if (updateStatusSuccess) {
    successNotify();
  }

  if (updateStatusError) {
    errorNotify();
  }

  return (
    <>
      <StyledTableRow>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <Typography variant="subtitle1" paddingLeft={2} fontWeight={"bold"}>
            #{activeOrder?.id}
          </Typography>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {" "}
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {activeOrder?.order_date?.split("T")[0]}
          </Typography>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {activeOrder?.email}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {activeOrder?.phone}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {activeOrder?.address}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "green",
            }}
          >
            Approved
          </span>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <span style={{ fontSize: "15px", fontWeight: "bold" }}>
            {activeOrder?.total_price}
          </span>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {updateStatusLoading || deleteStatusLoading ? (
            <CircularProgress />
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Tooltip title="Details">
                  <NavLink
                    to={`/dashboard/portal_admin/order_summary/${activeOrder?.id}`}
                  >
                    <IconButton aria-label="Details" size="large">
                      <ReadMoreIcon
                        fontSize="inherit"
                        style={{ color: "#007FFF" }}
                      />
                    </IconButton>
                  </NavLink>
                </Tooltip>

                <Button
                  variant="outlined"
                  onClick={() => handleUpdateActiveOrderStatus(activeOrder?.id)}
                  style={{
                    color: "#007FFF",
                    fontWeight: "bold",
                  }}
                >
                  Delivered
                </Button>

                <Tooltip title="Delete">
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => handleActiveOrderDelete(activeOrder?.id)}
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

export default SingleActiveOrderRow;
