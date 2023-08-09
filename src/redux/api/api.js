import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import localforage from "localforage";

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
      // try {
      //   const accessToken = await localforage.getItem("accessToken");

      //   if (accessToken) {
      //     headers.set("Authorization", `JWT ${accessToken}`);
      //   }

      //   return headers;
      // } catch (error) {
      //   console.error("Error retrieving access token:", error);
      //   return headers;
      // }
    },
  }),
  endpoints: (builder) => ({
    // getNews: builder.query({
    //   query: () => `/news`,
    // }),
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
export const { useGetUserQuery,useGetCartQuery } = robomartApi;
