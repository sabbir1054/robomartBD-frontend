import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const OrderSummaryProducts = ({ ordersInfo }) => {
  return (
    <div>
      {" "}
      <TableContainer style={{borderBottom:"1px solid black"}} >
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
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
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
                <TableCell align="right">{row?.price}</TableCell>
                <TableCell align="right">
                  {row?.quantity * row?.price}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={5} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">
                {ordersInfo?.subtotal ? ordersInfo?.subtotal : 0}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>Shipping</TableCell>
              <TableCell align="right">
                {ordersInfo?.shipping ? ordersInfo?.shipping : 0}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Discount</TableCell>
              <TableCell align="right">
                {ordersInfo?.discount ? ordersInfo?.discount : 0}
              </TableCell>
            </TableRow>

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

export default OrderSummaryProducts;
