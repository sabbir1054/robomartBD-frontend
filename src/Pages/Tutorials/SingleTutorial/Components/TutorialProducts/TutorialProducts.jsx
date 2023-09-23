import { Button, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import * as React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

const TutorialProducts = ({ tutorialDetails }) => {
  return (
    <Container style={{ padding: "5vh" }}>
      <Typography
        variant="h6"
        style={{ fontFamily: "Poppins", fontWeight: "bold", padding: "2vh 0" }}
      >
        Components List
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Product Code</StyledTableCell>
                <StyledTableCell align="left">Product Name</StyledTableCell>
                <StyledTableCell align="left">Quantity</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tutorialDetails?.items?.map((singleItem) => (
                <StyledTableRow
                //   key={row.name}
                >
                  <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                  <StyledTableCell align="left">
                    {singleItem?.product?.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {singleItem?.quantity}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Paper sx={{ display: "flex", justifyContent: "end", padding: "2vh" }}>
          <Button
            disableElevation
            variant="contained"
            style={{
              backgroundColor: "var(--primaryColor)",
              "&:hover": { backgroundColor: "green !important" },
            }}
          >
            Add All To Cart{" "}
          </Button>
        </Paper>
      </Paper>
    </Container>
  );
};

export default TutorialProducts;
