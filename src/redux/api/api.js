import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import localforage from "localforage";

// Define a service using a base URL and expected endpoints
export const robomartApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.robomartbd.com/api/",
    prepareHeaders: async (headers) => {
     try {
        const accessToken = await localforage.getItem("accessToken");
        
        if (accessToken) {
          headers.set("Authorization", `JWT ${accessToken}`);
        }
        
        return headers;
      } catch (error) {
        console.error("Error retrieving access token:", error);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    // getNews: builder.query({
    //   query: () => `/news`,
    // }),
    getUser: builder.query({
      query: () => "/auth/users/",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery } = robomartApi;
