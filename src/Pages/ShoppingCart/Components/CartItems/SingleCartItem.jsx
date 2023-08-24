import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useChangeQuantityMutation, useDeleteProductFromCartMutation } from "../../../../redux/api/api";
import styles from "./CartItems.module.scss";
const successNotify = () => toast.success("Successfully cart updated !");
const errorNotify = () => toast.error("Something went wrong !");
const SingleCartItem = ({ product }) => {
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
    const options = { data: { id: product?.id } };

    deleteProductFromCart(options);
  };

  const handleQuantity = (flag) => {
    const options = { data: { flag: flag, id: product?.id } };
    changeQuantity(options);
  };

  if ((isSuccess, updateQuantitySuccess)) {
    successNotify();
  }
  if ((isError, updateQuantityError)) {
    errorNotify();
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
                    ? `https://api.robomartbd.com${product?.product?.photo}`
                    : "assets/no-img.jpg"
                }
                alt="product_photo"
                className={styles.imgCard}
              />
            </div>
            <Link to={`/products/l`}>{product?.product?.name}</Link>
          </div>
        </td>
        <td>
          <h4 className={styles.price}>{product?.product?.price}</h4>
        </td>
        <td className={styles.quantity}>
          <div>
            <button onClick={() => handleQuantity("d")}>
              <RemoveIcon sx={{ fontWeight: "bold" }} />
            </button>
            <input type={"number"} min={1} value={product?.quantity} readOnly />
            <button onClick={() => handleQuantity("i")}>
              <AddIcon />
            </button>
          </div>
        </td>
        <td className={styles.totalPrice}>
          {(product?.product?.price * product?.quantity).toFixed(2)}
        </td>
        <td>
          <div
            className={styles.deleteBtn}
            onClick={handleDeleteItemFromCart}
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
