import DeleteIcon from "@mui/icons-material/Delete";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { IconButton, Tooltip, Typography } from "@mui/material";
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

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

const PendingOrders = () => {
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
                Details/Approved/Cancel
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                scope="row"
                className={styles.tdStyle}
              >
                <Typography
                  variant="subtitle1"
                  paddingLeft={2}
                  fontWeight={"bold"}
                >
                  #1254785
                </Typography>
              </StyledTableCell>
              <StyledTableCell
                component="th"
                scope="row"
                className={styles.tdStyle}
              >
                {" "}
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  2023-09-23
                </Typography>
              </StyledTableCell>
              <StyledTableCell
                component="th"
                scope="row"
                className={styles.tdStyle}
              >
                sabbir@gmail.com ,{/* </Typography> */}
              </StyledTableCell>
              <StyledTableCell
                component="th"
                scope="row"
                className={styles.tdStyle}
              >
                017332805458
              </StyledTableCell>
              <StyledTableCell
                component="th"
                scope="row"
                className={styles.tdStyle}
              >
                Norshinghopur,Ashulia,Savar,Dhaka
              </StyledTableCell>
              <StyledTableCell
                component="th"
                scope="row"
                className={styles.tdStyle}
              >
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
              <StyledTableCell
                component="th"
                scope="row"
                className={styles.tdStyle}
              >
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {" "}
                  1212.364
                </span>
              </StyledTableCell>
              <StyledTableCell
                component="th"
                scope="row"
                className={styles.tdStyle}
              >
                <div style={{display:"flex",justifyContent:"space-around"}}>
                  <Tooltip title="Details">
                    <IconButton aria-label="Details" size="large">
                      <NavLink to="/dashboard/user/order_history/fgsdgff">
                        {" "}
                        <ReadMoreIcon
                          fontSize="inherit"
                          style={{ color: "green" }}
                        />
                      </NavLink>
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Approve">
                    <IconButton aria-label="delete" size="large">
                      <CheckCircleIcon
                        fontSize="inherit"
                        style={{ color: "green" }}
                      />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton aria-label="delete" size="large">
                      <CancelIcon fontSize="inherit" style={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PendingOrders;
