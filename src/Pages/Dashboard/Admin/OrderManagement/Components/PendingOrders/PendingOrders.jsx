import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import {
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import {
  useGetPendingOrdersQuery,
  useUpdatePendingOrderStatusMutation,
} from "../../../../../../redux/api/api";
import styles from "../../OrderManagement.module.scss";
import SinglePendingOrderRow from "./SinglePendingOrderRow";

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

const PendingOrders = () => {
  const {
    data: pendingOrdersData,
    isLoading,
    isError,
  } = useGetPendingOrdersQuery();

  

  return (
    <div style={{ minHeight: "70vh" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} aria-label="customized table">
          <TableHead style={{ backgroundColor: "#f2f2f2" }}>
            <TableRow>
              <StyledTableCell align="left">Order Id</StyledTableCell>
              <StyledTableCell align="left">
                Date <small>(y/mm/dd)</small>{" "}
              </StyledTableCell>
              <StyledTableCell align="left">User Email</StyledTableCell>
              <StyledTableCell align="left">Contact</StyledTableCell>
              <StyledTableCell align="left">Delivery Address</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Total</StyledTableCell>
              <StyledTableCell align="left">
                Details/Approved/Cancel
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && <CircularProgress />}
            {pendingOrdersData?.length > 0 &&
              pendingOrdersData?.map((pendingOrder) => (
                <SinglePendingOrderRow pendingOrder={pendingOrder} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PendingOrders;
