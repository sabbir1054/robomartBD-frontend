import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const robomartApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.robomartbd.com/",
    prepareHeaders: async (headers) => {
      const storedData = localStorage.getItem("user");
      const userData = JSON.parse(storedData);
      if (userData) {
        headers.set("Authorization", `JWT ${userData}`);
      }
    },
  }),
  endpoints: (builder) => ({
    getCategoryListProducts: builder.query({
      query: () => "/api/catagorylist",
    }),
    getUser: builder.query({
      query: () => "/api/auth/users/",
    }),
    getCart: builder.query({
      query: () => "/cart/get_cart",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery, useGetCartQuery,useGetCategoryListProductsQuery } = robomartApi;
