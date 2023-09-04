import React, { useState } from "react";
import CheckOutPageForm from "./CheckOutPageForm";
const CheckOutPage = () => {
    const [formData, setFormData] = useState({});
    
  return (
    <>
      <CheckOutPageForm />
    </>
  );
};

export default CheckOutPage;
