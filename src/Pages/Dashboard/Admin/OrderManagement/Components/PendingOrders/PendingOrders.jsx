import { CircularProgress, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGetPendingOrdersQuery } from "../../../../../../redux/api/api";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  const {
    data: pendingOrdersData,
    isLoading,
    isError,
  } = useGetPendingOrdersQuery();

  const handleSearch = () => {
    const filtered = pendingOrdersData?.filter((order) =>
      Object?.values(order)?.some((value) => {
        if (typeof value === "string" || typeof value === "number") {
          const stringValue =
            typeof value === "number" ? value.toString() : value;
          return stringValue.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
      })
    );
    setFilteredOrders(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  return (
    <div style={{ minHeight: "70vh" }}>
      <div
        style={{ padding: "10px 0", display: "flex", justifyContent: "end" }}
      >
        <TextField
          style={{ minWidth: "400px" }}
          id="standard-basic"
          label="Search"
          variant="outlined"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Order Id, Email, or Phone Number"
        />
      </div>

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
            {(filteredOrders?.length > 0
              ? filteredOrders
              : pendingOrdersData
            )?.map((pendingOrder) => (
              <SinglePendingOrderRow pendingOrder={pendingOrder} />
            ))}
          </TableBody>
          {/*  <TableBody>
            {isLoading && <CircularProgress />}
            {pendingOrdersData?.length > 0 &&
              pendingOrdersData?.map((pendingOrder) => (
                <SinglePendingOrderRow pendingOrder={pendingOrder} />
              ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </div>
  );
};

export default PendingOrders;
