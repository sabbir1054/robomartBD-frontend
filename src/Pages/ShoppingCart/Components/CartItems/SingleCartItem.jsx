import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveIcon from "@mui/icons-material/Remove";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  useChangeQuantityMutation,
  useDeleteProductFromCartMutation,
} from "../../../../redux/api/api";
import styles from "./CartItems.module.scss";
const successNotify = () => toast.success("Successfully cart updated !");
const errorNotify = () => toast.error("Something went wrong !");
const SingleCartItem = ({ product, setIsDataChange }) => {
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [deleteProductFromCart, { isLoading, isError, isSuccess }] =
    useDeleteProductFromCartMutation();
  const [
    changeQuantity,
    {
      isLoading: updateQuantityLoading,
      isError: updateQuantityError,
      isSuccess: updateQuantitySuccess,
    },
  ] = useChangeQuantityMutation();

  const handleDeleteItemFromCart = () => {
    setCheck2(true);
    const options = { data: { id: product?.id } };

    deleteProductFromCart(options);
    setIsDataChange(true);
  };

  const handleQuantity = (flag) => {
    setCheck(true);
    const options = { data: { flag: flag, id: product?.id } };
    changeQuantity(options);
    setIsDataChange(true);
  };

  if (isSuccess && check2) {
    successNotify();
    setCheck2(false);
  }
  if (updateQuantitySuccess && check) {
    successNotify();
    setCheck(false);
  }
  if (isError && check2) {
    errorNotify();
    setCheck2(false);
  }
  if (updateQuantityError && check) {
    errorNotify();
    setCheck(false);
  }
  return (
    <>
      <tr>
        <td>
          <div className={styles.product}>
            <div className={styles.imgDiv}>
              <img
                src={
                  product?.product?.photo
                    ? `https://robomartbd.com${product?.product?.photo}`
                    : "assets/no-img.jpg"
                }
                alt="product_photo"
                className={styles.imgCard}
              />
            </div>
            <Link
              to={`/product/${
                product?.product?.id
              }/${(product?.product?.name).replace(/ /g, "_")}`}
            >
              {product?.product?.name}
            </Link>
          </div>
        </td>
        <td>
          <h4 className={styles.price}>{product?.product?.price}</h4>
        </td>
        <td className={styles.quantity}>
          {updateQuantityLoading ? (
            <CircularProgress sx={{ color: "green" }} />
          ) : (
            <div>
              <button onClick={() => handleQuantity("d")}>
                <RemoveIcon sx={{ fontWeight: "bold" }} />
              </button>
              <input
                type={"number"}
                min={1}
                value={product?.quantity}
                readOnly
              />
              <button onClick={() => handleQuantity("i")}>
                <AddIcon />
              </button>
            </div>
          )}
        </td>
        <td className={styles.totalPrice}>
          {(product?.product?.price * product?.quantity).toFixed(2)}
        </td>
        <td>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <div
              className={styles.deleteBtn}
              onClick={handleDeleteItemFromCart}
              // id={product[item.product].id}
            >
              <CancelIcon />
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default SingleCartItem;
