import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

const OrderSummaryProducts = ({ ordersInfo }) => {
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
              <TableCell align="center" colSpan={5}>
                Details
              </TableCell>
              <TableCell align="right">Price(BDT)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sl no </TableCell>
              <TableCell>Product Code</TableCell>
              <TableCell>Item </TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
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
                <TableCell align="right">{row?.product?.price}</TableCell>
                <TableCell align="right">{row?.price}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={5} />
              <TableCell rowSpan={5} />
              <TableCell rowSpan={5} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">
                {/* {ordersInfo?.subtotal ? ordersInfo?.subtotal : 0} */}
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
                {/* {ordersInfo?.discount ? ordersInfo?.discount : 0} */}
                {ordersInfo?.price_after_add_copun}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ordersInfo?.total_price}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Payment Status</TableCell>
              <TableCell align="right">
                {ordersInfo?.invoiceId?.status}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderSummaryProducts;
