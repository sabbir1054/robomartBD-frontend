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
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Item </TableCell>
              <TableCell align="right">Qty.</TableCell>
              {/* <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersInfo?.items?.map((row) => (
              <TableRow key={row?.id}>
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
                    {row?.product?.name}
                  </div>
                </TableCell>
                <TableCell align="right">{row?.quantity}</TableCell>
                {/* <TableCell align="right">{row?.product?.price}</TableCell>
                <TableCell align="right">{row?.price}</TableCell> */}
              </TableRow>
            ))}
           {/*  <TableRow>
              <TableCell rowSpan={5} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">
              
                {ordersInfo?.items && subTotal}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>Shipping</TableCell>
              <TableCell align="right">
                {ordersInfo?.shiping ? ordersInfo?.shiping : 0}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Discount</TableCell>
              <TableCell align="right">
            
                {ordersInfo?.price_after_discount
                  ? subTotal + shiping - ordersInfo?.price_after_discount
                  : 0}
              </TableCell>
            </TableRow> */}

            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ordersInfo?.total_price}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PayBillProduct;
