import {
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "../../Shared/SingleProductCard/SingleProductCard";
import { retrieveAndDecryptData } from "../../utils/encript";

const ProductSearch = () => {
  // const { data, isLoading, isError } = useGetAllProductsQuery();
  const [data, setData] = useState();
  const [products, setProducts] = useState([]);
    const params = useParams();
    const dcryptData = retrieveAndDecryptData();
  useEffect(() => {
    
    setData(dcryptData);
    const filteredSuggestions = data?.filter(
      (product) =>
        product?.name.toLowerCase().includes(params?.searchTerm.toLowerCase())
      // product?.code?.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(filteredSuggestions);
  }, [params,data]);

  return (
    <div style={{ minHeight: "70vh" }}>
      <Container maxWidth>
        <Typography
          variant="h5"
          style={{ textAlign: "center", paddingTop: "3vh" }}
        >
          {" "}
          Your desired products for :{" "}
          <span style={{ fontWeight: "bold" }}>{params?.searchTerm}</span>{" "}
        </Typography>
        <Divider />

        {!products?.length && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        )}
        { products?.length === 0 && (
          <Typography
            variant="h5"
            style={{ textAlign: "center", padding: "5vh 0" }}
          >
            {" "}
            No result found
          </Typography>
        )}

        <Grid container spacing={1} paddingY={3}>
          {products?.map((product) => (
            <Grid item>
              <SingleProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductSearch;
