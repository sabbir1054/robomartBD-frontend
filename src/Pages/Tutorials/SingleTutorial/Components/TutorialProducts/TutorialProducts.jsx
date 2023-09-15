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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const TutorialProducts = () => {
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container style={{ padding: "5vh" }}>
      <Typography
        variant="h6"
        style={{ fontFamily: "Poppins", fontWeight: "bold",padding:"2vh 0" }}
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
              <StyledTableRow
              //   key={row.name}
              >
                <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                <StyledTableCell align="left">Arduino Nano</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
              //   key={row.name}
              >
                <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                <StyledTableCell align="left">Arduino Nano</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
              //   key={row.name}
              >
                <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                <StyledTableCell align="left">Arduino Nano</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
              //   key={row.name}
              >
                <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                <StyledTableCell align="left">Arduino Nano</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
              //   key={row.name}
              >
                <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                <StyledTableCell align="left">Arduino Nano</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
              //   key={row.name}
              >
                <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                <StyledTableCell align="left">Arduino Nano</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
              //   key={row.name}
              >
                <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                <StyledTableCell align="left">Arduino Nano</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
              //   key={row.name}
              >
                <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                <StyledTableCell align="left">Arduino Nano</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
              //   key={row.name}
              >
                <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                <StyledTableCell align="left">Arduino Nano</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
              //   key={row.name}
              >
                <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                <StyledTableCell align="left">Arduino Nano</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
              //   key={row.name}
              >
                <StyledTableCell align="left">SKO-AR5541</StyledTableCell>
                <StyledTableCell align="left">Arduino Nano</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
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
