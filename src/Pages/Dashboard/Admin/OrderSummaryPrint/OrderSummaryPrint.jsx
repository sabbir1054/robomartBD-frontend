import { Container, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderSummaryHeader from "./Components/OrderSummaryHeader";
import OrderSummaryProducts from "./Components/OrderSummaryProducts";
import OrderSummaryFooter from "./Components/OrderSummaryFooter";

const OrderSummaryPrint = () => {
  const params = useParams();
  const [orderData, setOrderData] = useState({});
  const printPageArea = (areaID) => {
    let printContent = document.getElementById(areaID).innerHTML;
    let originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  };

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    const userDataStorage = JSON.parse(storedData);
    fetch(
      `https://api.robomartbd.com/order_management/get_order/${params?.orderId}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `JWT ${userDataStorage}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, [params]);
  console.log(orderData);
  return (
    <>
      <Container
        maxWidth={"lg"}
        style={{
          minHeight: "80vh",
          padding: "5vh 0",
        }}
      >
        <button onClick={() => printPageArea("printAbleArea")}>Print</button>
        <div
          style={{ border: "1px dashed #e2e2e2", padding: "10px" }}
          id="printAbleArea"
        >
          <OrderSummaryHeader ordersInfo={orderData} />
          <Divider color={"black"} />
          <div>
            <OrderSummaryProducts ordersInfo={orderData} />
          </div>
          <OrderSummaryFooter />
        </div>
      </Container>
    </>
  );
};

export default OrderSummaryPrint;
