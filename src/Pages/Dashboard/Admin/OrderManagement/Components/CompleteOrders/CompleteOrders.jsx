import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { CircularProgress, IconButton, Tooltip, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../OrderManagement.module.scss";
import { useGetDeliveredOrdersQuery } from "../../../../../../redux/api/api";
import CompleteOrdersSingleRow from "./CompleteOrdersSingleRow";
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

const CompleteOrders = () => {
    const {
      data: deliveredOrdersData,
      isLoading,
      isError,
    } = useGetDeliveredOrdersQuery();
  return (
    <div style={{ minHeight: "70vh" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} aria-label="customized table">
          <TableHead style={{ backgroundColor: "#f2f2f2" }}>
            <TableRow>
              <StyledTableCell align="left">Order Id</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">User Email</StyledTableCell>
              <StyledTableCell align="left">Contact</StyledTableCell>
              <StyledTableCell align="left">Delivery Address</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Total</StyledTableCell>
              <StyledTableCell align="left">
                Details/Update Status
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && <CircularProgress />}
            {deliveredOrdersData?.length > 0 &&
              deliveredOrdersData?.map((deliveredOrder) => (
                <CompleteOrdersSingleRow deliveredOrder={deliveredOrder} />
              ))}
          
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CompleteOrders;
