import { configureStore } from "@reduxjs/toolkit";
import { robomartApi } from "./api/api";

export default configureStore({
  reducer: { [robomartApi.reducerPath]: robomartApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(robomartApi.middleware),
});
