import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { StyledTableCell } from "./TutorialProducts";
const SingleTableRaw = ({ singleItem }) => {
    const [quantity, setQuantity] = useState(singleItem?.quantity);
    console.log(quantity);
  return (
    <>
      <StyledTableCell align="left">{singleItem?.product_code}</StyledTableCell>
      <StyledTableCell align="left">
        {singleItem?.product?.name}
      </StyledTableCell>

      <StyledTableCell align="left">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => setQuantity(quantity - 1)}
          >
            <RemoveIcon sx={{ fontWeight: "bold" }} />
          </button>
          <input
            readOnly
            style={{
              width: "70px",
              //   height: "px",
              padding: "4px",
              fontSize: "16px",
            }}
            type="number"
            min={1}
            value={quantity}
          />
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => setQuantity(quantity + 1)}
          >
            <AddIcon />
          </button>
        </div>
      </StyledTableCell>
      <StyledTableCell align="right">
        <IconButton color="success" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </StyledTableCell>
    </>
  );
};

export default SingleTableRaw;
