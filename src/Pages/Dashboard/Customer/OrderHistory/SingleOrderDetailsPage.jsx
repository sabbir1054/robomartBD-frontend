import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./OrderHistory.module.scss";

const SingleOrderDetailsPage = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <Container style={{ padding: "4vh" }}>
        <Typography
          variant="h5"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          Order ID #56858779
        </Typography>
        <Typography
          variant="h6"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          Order Status:
        </Typography>
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
                      <tr>
                        <td>
                          <div className={styles.product}>
                            <div className={styles.imgDiv}>
                              <img
                                src={
                                  //   product?.product?.photo
                                  //     ? `https://api.robomartbd.com${product?.product?.photo}`
                                  //                                       :
                                  "assets/no-img.jpg"
                                }
                                alt="product_photo"
                                className={styles.imgCard}
                              />
                            </div>
                            <Link
                            //   to={`/product/${
                            //     product?.product?.id
                            //   }/${(product?.product?.name).replace(/ /g, "_")}`}
                            >
                              {/* {product?.product?.name} */}
                              Arduino Uno
                            </Link>
                          </div>
                        </td>
                        <td>
                          <h4 className={styles.price}>
                            {/* {product?.product?.price} */}
                            1000
                          </h4>
                        </td>
                        <td className={styles.quantity}>
                          <h4 className={styles.price}>3</h4>
                        </td>
                        <td className={styles.totalPrice}>
                          {/* {(
                            product?.product?.price * product?.quantity
                          ).toFixed(2)} */}
                          3000
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className={styles.product}>
                            <div className={styles.imgDiv}>
                              <img
                                src={
                                  //   product?.product?.photo
                                  //     ? `https://api.robomartbd.com${product?.product?.photo}`
                                  //                                       :
                                  "assets/no-img.jpg"
                                }
                                alt="product_photo"
                                className={styles.imgCard}
                              />
                            </div>
                            <Link
                            //   to={`/product/${
                            //     product?.product?.id
                            //   }/${(product?.product?.name).replace(/ /g, "_")}`}
                            >
                              {/* {product?.product?.name} */}
                              Arduino Uno
                            </Link>
                          </div>
                        </td>
                        <td>
                          <h4 className={styles.price}>
                            {/* {product?.product?.price} */}
                            1000
                          </h4>
                        </td>
                        <td className={styles.quantity}>
                          <h4 className={styles.price}>3</h4>
                        </td>
                        <td className={styles.totalPrice}>
                          {/* {(
                            product?.product?.price * product?.quantity
                          ).toFixed(2)} */}
                          3000
                        </td>
                      </tr>
                  
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
                      Norshingopur, Ashulia,Savar,Dhaka
                    </h5>
                    <p>
                      Subtotal: <span>6000</span>
                    </p>
                    <p style={{ color: "#025a0e", fontWeight: "bold" }}>
                      Discount: <span> - {150}</span>
                    </p>
                    <p>
                      Shipping Cost: <span> 200 </span>
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
                      6050
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

export default SingleOrderDetailsPage;
