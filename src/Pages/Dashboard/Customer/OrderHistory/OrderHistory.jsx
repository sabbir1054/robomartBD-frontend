import DeleteIcon from "@mui/icons-material/Delete";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Container, IconButton, Tooltip, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React from "react";
import styles from "./OrderHistory.module.scss";
import { NavLink } from "react-router-dom";

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

const OrderHistory = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <Container maxWidth={"lg"}>
        <Typography
          variant="h5"
          style={{
            padding: "4vh",
            fontFamily: "Poppins",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          My Orders
        </Typography>

        <hr
          style={{
            margin: "0 0 40px",
            border: "none",
            borderBottom: "1px solid #ebebeb",
          }}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }} aria-label="customized table">
            <TableHead style={{ backgroundColor: "#f2f2f2" }}>
              <TableRow>
                <StyledTableCell align="left">Order Id</StyledTableCell>
                <StyledTableCell align="left">Date</StyledTableCell>
                <StyledTableCell align="left">Items</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Total</StyledTableCell>
                <StyledTableCell align="left">Details/Cancel</StyledTableCell>
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
                  {/* <Typography variant="subtitle3"> */}
                  <div>
                    {" "}
                    <a
                      href=""
                      style={{ margin: "0 5px", fontFamily: "Roboto" }}
                    >
                      Robotics Project Package 3
                    </a>{" "}
                    <a href="" style={{ margin: "0 5px" }}>
                      Arduino Uno
                    </a>
                    ,
                    <a href="" style={{ margin: "0 5px" }}>
                      Motor Driver
                    </a>
                    <br />
                    <a href="" style={{ margin: "0 5px" }}>
                      Robotics Project Package 3
                    </a>
                    ,
                    <a href="" style={{ margin: "0 5px" }}>
                      Arduino Uno
                    </a>
                    ,
                    <a href="" style={{ margin: "0 5px" }}>
                      Motor Driver
                    </a>
                  </div>
                  ,{/* </Typography> */}
                </StyledTableCell>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className={styles.tdStyle}
                >
                  Delivered
                </StyledTableCell>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className={styles.tdStyle}
                >
                  BDT 1578
                </StyledTableCell>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className={styles.tdStyle}
                >
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

                  <Tooltip title="Delete">
                    <IconButton aria-label="delete" size="large">
                      <DeleteIcon fontSize="inherit" style={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default OrderHistory;
