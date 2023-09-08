import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const robomartApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.robomartbd.com/",
    prepareHeaders: async (headers) => {
      const storedData = await localStorage.getItem("user");
      const userData = await JSON.parse(storedData);
      if (userData) {
        headers.set("Authorization", `JWT ${userData}`);
      }
    },
  }),
  tagTypes: ["cartProduct", "profile"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/api/products",
    }),
    getCategoryListProducts: builder.query({
      query: () => "/api/catagorylist",
    }),
    getUser: builder.query({
      query: () => "/api/auth/users/",
    }),
    getUserProfile: builder.query({
      query: () => "/api/profile",
      providesTags: ["profile"],
    }),
    updateUserProfile: builder.mutation({
      query: ({ updatedData }) => ({
        url: "/api/profile",
        method: "POST",
        body: updatedData,
      }),
      invalidatesTags: ["profile"],
    }),
    postToCart: builder.mutation({
      query: ({ product }) => ({
        url: `/cart/get_cart`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["cartProduct"],
    }),
    deleteProductFromCart: builder.mutation({
      query: ({ data }) => ({
        url: `/cart/get_cart`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["cartProduct"],
    }),
    changeQuantity: builder.mutation({
      query: ({ data }) => ({
        url: "/cart/control_quantity",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cartProduct"],
    }),
    getCart: builder.query({
      query: () => "/cart/get_cart",
      providesTags: ["cartProduct"],
    }),
    getHomeData: builder.query({
      query: () => `/api/home`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserQuery,
  useGetCartQuery,
  useGetCategoryListProductsQuery,
  useGetHomeDataQuery,
  usePostToCartMutation,
  useDeleteProductFromCartMutation,
  useChangeQuantityMutation,
  useGetAllProductsQuery,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} = robomartApi;
