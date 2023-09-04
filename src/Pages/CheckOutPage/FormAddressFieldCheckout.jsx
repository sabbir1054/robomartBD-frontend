import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

const FormAddressFieldCheckout = ({ data, label, setSelectedData }) => {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => {
    const selectedObject = data.find((option) => option.title === newValue);
    setSelectedData(selectedObject);
  };

  return (
    <>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        onChange={(event, newValue) => {
          handleChange(newValue); // Pass the selected object to the handleChange function
        }}
        options={data.map((option) => option?.title)}
        getOptionSelected={(option, value) => option === value}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </>
  );
};

export default FormAddressFieldCheckout;
