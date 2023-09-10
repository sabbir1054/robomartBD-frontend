import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  delivery: "",
  cupon: "",
  useBalance: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCheckoutData: (state, action) => {
      state.delivery = action.payload.delivery;
      state.cupon = action.payload.cupon;
      state.useBalance = action.payload.useBalance;
    },
  },
});

export const { addCheckoutData } = checkoutSlice.actions;
export default checkoutSlice.reducer;
