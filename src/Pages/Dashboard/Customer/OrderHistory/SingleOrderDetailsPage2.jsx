import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { backendUrl } from "../../../../utils/backendApiUrlProvider";
import styles from "./OrderHistory.module.scss";

const SingleOrderDetailsPage2 = () => {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(
    location?.pathname?.includes("portal_admin") ? true : false
  );
  const params = useParams();
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    const userDataStorage = JSON.parse(storedData);
    fetch(`${backendUrl}/order_management/get_order/${params?.orderId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${userDataStorage}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, [params]);
  const subTotal = orderData?.items?.reduce(
    (acc, product) => acc + product.price,
    0
  );
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };
  console.log(orderData?.price_after_add_copun);
  return (
    <div style={{ minHeight: "70vh" }}>
      <Container style={{ padding: "4vh" }}>
        <Typography
          variant="h5"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "5vh",
          }}
        >
          Order Details
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Order ID # {orderData?.id}
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Order Status: {orderData?.is_served ? "Approved" : "Pending"}
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Order Date:{" "}
              {orderData?.order_date && formatDate(orderData?.order_date)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {" "}
            {orderData && (
              <>
                <p style={{ fontSize: "16px", fontFamily: "Roboto" }}>
                  <span style={{ fontWeight: "bold" }}>Billing Option :</span>{" "}
                  {orderData?.billing_option}
                </p>
                <p style={{ fontSize: "16px", fontFamily: "Roboto" }}>
                  <span style={{ fontWeight: "bold" }}>Payment Method :</span>{" "}
                  {orderData?.payment_method}
                </p>
                <p style={{ fontSize: "16px", fontFamily: "Roboto" }}>
                  <span style={{ fontWeight: "bold" }}>Payment ID :</span>{" "}
                  {orderData?.payment_id}
                </p>
                <p style={{ fontSize: "16px", fontFamily: "Roboto" }}>
                  <span style={{ fontWeight: "bold" }}> Payment Number : </span>{" "}
                  {orderData?.payment_number}
                </p>
              </>
            )}
          </Grid>
        </Grid>
      </Container>

      <hr
        style={{
          margin: "0 0 40px",
          border: "none",
          borderBottom: "1px solid #ebebeb",
        }}
      />
      <>
        <Container maxWidth={"xl"}>
          <>
            <Grid container spacing={2} paddingBottom={5}>
              <Grid item xs={12} sm={12} md={12} lg={8}>
                <table className={styles.table}>
                  <thead style={{ backgroundColor: "#f2f2f2" }}>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <>
                      {orderData?.items?.map((item) => (
                        <tr>
                          <td>
                            <div className={styles.product}>
                              <div className={styles.imgDiv}>
                                <img
                                  src={
                                    item?.product?.photo
                                      ? `${item?.product?.photo}`
                                      : "assets/no-img.jpg"
                                  }
                                  alt="product_photo"
                                  className={styles.imgCard}
                                />
                              </div>
                              <Link
                                to={`/product/${
                                  item?.product?.id
                                }/${(item?.product?.name).replace(/ /g, "_")}`}
                              >
                                {item?.product?.name}
                              </Link>
                            </div>
                          </td>
                          <td>
                            <h4 className={styles.price}>
                              {item?.product?.price}
                            </h4>
                          </td>
                          <td className={styles.quantity}>
                            <h4 className={styles.price}>{item?.quantity}</h4>
                          </td>
                          <td className={styles.totalPrice}>
                            {(item?.product?.price * item?.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </>
                  </tbody>
                </table>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                {" "}
                <div className={styles.checkOutProcess}>
                  <div className={styles.cartDetail}>
                    <h5>
                      <span style={{ fontWeight: "bold" }}>
                        Billing Address:
                      </span>{" "}
                      {orderData?.address}
                    </h5>
                    <p>
                      Subtotal: <span>{subTotal}</span>
                    </p>
                    <p style={{ color: "#025a0e", fontWeight: "bold" }}>
                      Discount: <span> {orderData?.price_after_add_copun}</span>
                    </p>
                    <p>
                      Shipping Cost: <span> {orderData?.shiping} </span>
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={"bold"}
                      color={"red"}
                      fontFamily={"Roboto"}
                    >
                      Grand Total <small>(BDT)</small>:
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={"bold"}
                      color={"red"}
                      fontFamily={"Roboto"}
                    >
                      {orderData?.total_price}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </>
        </Container>
      </>
    </div>
  );
};

export default SingleOrderDetailsPage2;
