import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  delivery: "",
  items: [],
  cupon: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCheckoutData: (state, action) => {
      state.delivery = action.payload.delivery;
      state.items = action.items;
      state.cupon = action.cupon;
    },
  },
});

export const { addCheckoutData } = checkoutSlice.actions;
export default checkoutSlice.reducer;
