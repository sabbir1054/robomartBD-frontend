import React, { useState } from "react";
import CheckOutPageForm from "./CheckOutPageForm";
import { useSelector } from "react-redux";
const CheckOutPage = () => {
  const [formData, setFormData] = useState({});
 
  return (
    <>
      <CheckOutPageForm />
    </>
  );
};

export default CheckOutPage;
