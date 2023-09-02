import { configureStore } from "@reduxjs/toolkit";
import { robomartApi } from "./api/api";
import CheckoutReducer from "./features/checkoutSlice";
export default configureStore({
  reducer: {
    [robomartApi.reducerPath]: robomartApi.reducer,
    checkoutData: CheckoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(robomartApi.middleware),
});
