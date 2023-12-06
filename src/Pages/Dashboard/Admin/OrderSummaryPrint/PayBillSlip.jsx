import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { Button, Container, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../../../utils/backendApiUrlProvider";
import OrderSummaryFooter from "./Components/OrderSummaryFooter";
import OrderSummaryHeader from "./Components/OrderSummaryHeader";
import OrderSummaryProducts from "./Components/OrderSummaryProducts";
import PayBillHeader from "./Components/PayBillHeader";
import PayBillProduct from "./Components/PayBillProduct";
const PayBillSlip = () => {
  const params = useParams();
  const [orderData, setOrderData] = useState({});
  const [allUserData, setAllUserData] = useState([]);
  const [customerData, setCustomerData] = useState({});
  const printPageArea = (areaID) => {
    let printContent = document.getElementById(areaID).innerHTML;
    let originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  };
  const getCustomerInfo = () => {
    const storedData = localStorage.getItem("user");
    const userDataStorage = JSON.parse(storedData);

    fetch(`${backendUrl}/api/auth/users`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${userDataStorage}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllUserData(data);
      });
  };

  useEffect(() => {
    const customer = allUserData?.find((item) => item?.id === orderData?.user);
    setCustomerData(customer);
  }, [allUserData]);

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
      .then((data) => {
        setOrderData(data);
        if (data?.user) {
          getCustomerInfo();
        }
      });
  }, [params]);

  return (
    <>
      <Container
        maxWidth={"lg"}
        style={{
          minHeight: "80vh",
          padding: "5vh 0",
        }}
      >
        <div style={{ textAlign: "right", margin: "10px 0" }}>
          <Button
            startIcon={<LocalPrintshopIcon />}
            variant="contained"
            disableElevation
            marginY={2}
            style={{ backgroundColor: "green" }}
            onClick={() => printPageArea("printAbleArea")}
          >
            Print
          </Button>
        </div>
        <div
          style={{ border: "1px dashed #e2e2e2", padding: "10px" }}
          id="printAbleArea"
        >
          <PayBillHeader ordersInfo={orderData} customerInfo={customerData} />
          <Divider color={"black"} />
          <div>
            <PayBillProduct ordersInfo={orderData} />
          </div>
          <OrderSummaryFooter />
        </div>
      </Container>
    </>
  );
};

export default PayBillSlip;
