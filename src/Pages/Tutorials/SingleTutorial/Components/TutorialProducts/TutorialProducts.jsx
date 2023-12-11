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
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetUserQuery,
  usePostAllToCartMutation,
} from "../../../../../redux/api/api";
import SingleTableRaw from "./SingleTableRaw";
import styles from "./TutorialsProductTable.module.scss";

function extractProductIdAndQuantity(products) {
  // Map the array to a new array containing only product id and quantity
  const result = products.map((product) => {
    // Check if the product has 'id' and 'quantity' properties
    if (
      product &&
      product?.product?.id !== undefined &&
      product?.quantity !== undefined
    ) {
      return { product: product?.product?.id, quantity: product?.quantity };
    } else {
      // If the required properties are not present, return null or handle it accordingly
      return null;
    }
  });

  // Filter out the null values (optional, depending on your use case)
  return result.filter((item) => item !== null);
}

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
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
  const [track, setTrack] = React.useState(false);
  const navigate = useNavigate();
  const [postAllToCart, { isLoading, isError, isSuccess, errors }] =
    usePostAllToCartMutation();


  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  } = useGetUserQuery();
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    if (tutorialDetails?.items?.length > 0) {
      const results = extractProductIdAndQuantity(tutorialDetails?.items);
      setProducts(results);
    }
  }, [tutorialDetails]);

  const addToCart = () => {
    setTrack(true);
    if (!userData) {
      navigate("/login");
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Please Login First !",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const options = { product: products };
      postAllToCart(options);
    }
  };

  if (isSuccess && track) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "All products Added",
      showConfirmButton: false,
      timer: 1500,
    });
    setTrack(false);
  }

  return (
    <Container
      className={styles.product_table_container}
      style={{ padding: "5vh" }}
    >
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
                <StyledTableCell align="left">Sl no</StyledTableCell>
                <StyledTableCell align="left">Product photo</StyledTableCell>
                <StyledTableCell align="left">Product Name</StyledTableCell>
                <StyledTableCell align="center">Quantity</StyledTableCell>
                <StyledTableCell align="right">Add to cart</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tutorialDetails?.items?.map((singleItem, idx) => (
                <StyledTableRow key={idx}>
                  <SingleTableRaw singleItem={singleItem} idx={idx} />
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Paper sx={{ display: "flex", justifyContent: "end", padding: "2vh" }}>
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <Button
              disableElevation
              variant="contained"
              onClick={() => addToCart()}
              style={{
                backgroundColor: "var(--primaryColor)",
                "&:hover": { backgroundColor: "green !important" },
              }}
            >
              Add All To Cart{" "}
            </Button>
          )}
        </Paper>
      </Paper>
    </Container>
  );
};

export default TutorialProducts;
