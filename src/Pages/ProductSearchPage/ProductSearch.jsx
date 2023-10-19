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
import styles from "./ProductSearch.module.scss";
const ProductSearch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [products, setProducts] = useState([]);
  const params = useParams();
  const dcryptData = retrieveAndDecryptData();
  useEffect(() => {
    setLoading(true);
    setData(dcryptData);
    const filteredSuggestions = data?.filter(
      (product) =>
        product?.name.toLowerCase().includes(params?.searchTerm.toLowerCase())
      // product?.code?.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(filteredSuggestions);
    setLoading(false)
  }, [params, data]);

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

        {loading && (
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
        {products?.length === 0 && (
          <Typography
            variant="h5"
            style={{ textAlign: "center", padding: "5vh 0" }}
          >
            {" "}
            No result found
          </Typography>
        )}

        <Grid container spacing={2} paddingY={3}>
          {products?.map((product) => (
            <>
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                lg={2}
                xl={2}
                display={"flex"}
                justifyContent={"center"}
                className={styles.item_small_screen}
              >
                <SingleProductCard product={product} />
              </Grid>
              <Grid
                item
                style={{ display: "block" }}
                className={styles.item_big_screen}
              >
                <SingleProductCard product={product} />
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductSearch;
