import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartItems.module.scss";
const SingleCartItem = () => {
  return (
    <>
      <tr>
        <td>
          <div className={styles.product}>
            <div className={styles.imgDiv}>
              <img
                src={"https://i.ibb.co/109P1Zm/p1.jpg"}
                alt="product_photo"
                className={styles.imgCard}
              />
            </div>
            <Link to={`/products/l`}>
              Grand Slam Indoor Of Show Jumping Novel
            </Link>
          </div>
        </td>
        <td>
          <h4 className={styles.price}>
           110
          </h4>
        </td>
        <td className={styles.quantity}>
          <div>
            <button
            //   onClick={(event) => changeAmount(-1, item.product)}
            >
              <RemoveIcon sx={{ fontWeight: "bold" }} />
            </button>
            <input type={"number"} min={1} value={0} readOnly />
            <button
            //   onClick={(event) => changeAmount(+1, item.product)}
            >
              <AddIcon />
            </button>
          </div>
        </td>
        <td className={styles.totalPrice}>110 Tk</td>
        <td>
          <div
            className={styles.deleteBtn}
            // onClick={deleteFromCart}
            // id={product[item.product].id}
          >
            <CancelIcon />
          </div>
        </td>
      </tr>
    </>
  );
};

export default SingleCartItem;
