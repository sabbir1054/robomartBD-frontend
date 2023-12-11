import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

const PayBillProduct = ({ ordersInfo }) => {
  const subTotal = ordersInfo?.items?.reduce(
    (acc, product) => acc + product.price,
    0
  );
 
  return (
    <div>
      {" "}
      <TableContainer style={{ borderBottom: "1px solid black" }}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            
            <TableRow>
              <TableCell>Sl no </TableCell>
              <TableCell>Product Code</TableCell>
              <TableCell>Item </TableCell>
              <TableCell align="right">Qty.</TableCell>
              {/* <TableCell align="right">Unit</TableCell> */}
              {/* <TableCell align="right">Sum</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersInfo?.items?.map((row, idx) => (
              <TableRow key={row?.id}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{row?.product?.product_code}</TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {" "}
                    <img
                      src={row?.product?.photo}
                      alt=""
                      width={"50px"}
                      srcset=""
                    />
                    <span style={{ marginLeft: "10px" }}>
                      {row?.product?.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell align="right">{row?.quantity}</TableCell>
                {/* <TableCell align="right">{row?.product?.price}</TableCell> */}
                {/* <TableCell align="right">{row?.price}</TableCell> */}
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PayBillProduct;
