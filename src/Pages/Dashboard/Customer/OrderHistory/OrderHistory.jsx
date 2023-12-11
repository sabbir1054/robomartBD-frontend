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
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { backendUrl } from "../../../../utils/backendApiUrlProvider";
import styles from "./OrderHistory.module.scss";
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
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    const userDataStorage = JSON.parse(storedData);
    fetch(`${backendUrl}/order/get_order`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${userDataStorage}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, []);

  

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
        <TableContainer component={Paper} style={{ marginBottom: "5vh" }}>
          <Table sx={{ minWidth: 1000 }} aria-label="customized table">
            <TableHead style={{ backgroundColor: "#f2f2f2" }}>
              <TableRow>
                <StyledTableCell align="left">Order Id</StyledTableCell>
                <StyledTableCell align="left">Date</StyledTableCell>
                <StyledTableCell align="left">Items</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Total</StyledTableCell>
                <StyledTableCell align="left">Details</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderData?.length > 0 &&
                orderData &&
                orderData?.reverse().map((order) => (
                  <>
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
                          #{order?.id}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        className={styles.tdStyle}
                      >
                        <Typography variant="subtitle1" fontWeight={"bold"}>
                          {order?.order_date?.split("T")[0]}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        className={styles.tdStyle}
                      >
                        {/* <Typography variant="subtitle3"> */}
                        <div>
                          {order?.items?.map((product) => (
                            <Link
                              to={`/product/${
                                product?.product?.id
                              }/${product?.product?.name?.replace(/ /g, "_")}`}
                            >
                              <span style={{ margin: "0px 5px" }}>
                                {product?.product?.name}
                              </span>{" "}
                              ,
                            </Link>
                          ))}
                        </div>
                        {/* </Typography> */}
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        className={styles.tdStyle}
                      >
                        {order?.is_served ? "Shipping" : "Pending"}
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        className={styles.tdStyle}
                      >
                        BDT {order?.total_price}
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        className={styles.tdStyle}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          {" "}
                          <Tooltip title="Details">
                            <IconButton aria-label="Details" size="large">
                              <NavLink
                                to={`/dashboard/user/order_history/${order?.id}`}
                              >
                                {" "}
                                <ReadMoreIcon
                                  fontSize="inherit"
                                  style={{ color: "green" }}
                                />
                              </NavLink>
                            </IconButton>
                          </Tooltip>
                          {/* <Tooltip title="Delete">
                            <IconButton aria-label="delete" size="large">
                              <CancelIcon
                                fontSize="inherit"
                                style={{ color: "red" }}
                              />
                            </IconButton>
                          </Tooltip> */}
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  </>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default OrderHistory;
