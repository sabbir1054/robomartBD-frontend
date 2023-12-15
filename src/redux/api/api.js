import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backendUrl } from "../../utils/backendApiUrlProvider";

// Define a service using a base URL and expected endpoints
export const robomartApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${backendUrl}/`,
    prepareHeaders: async (headers) => {
      const storedData = await localStorage.getItem("user");
      const userData = await JSON.parse(storedData);
      if (userData) {
        headers.set("Authorization", `JWT ${userData}`);
      }
    },
  }),
  tagTypes: [
    "cartProduct",
    "profile",
    "pendingOrders",
    "activeOrders",
    "deliveredOrders",
    "successOrders",
    "returnOrders",
  ],
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
    postAllToCart: builder.mutation({
      query: ({ product }) => ({
        url: `/cart/add_to_cart_array`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["cartProduct"],
    }),
    postOrder: builder.mutation({
      query: ({ data }) => ({
        url: `/order/get_order`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cartProduct", "profile"],
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
    /* admin Panel */
    getPendingOrders: builder.query({
      query: () => `/order_management/get_pending_order`,
      providesTags: ["pendingOrders"],
    }),
    updatePendingOrderStatus: builder.mutation({
      query: ({ data }) => ({
        url: "/order_management/get_pending_order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["pendingOrders", "activeOrders"],
    }),
    deletePendingOrderStatus: builder.mutation({
      query: ({ data }) => ({
        url: `/order_management/get_pending_order/${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        "pendingOrders",
        "activeOrders",
        "successOrders",
        "returnOrders",
        "deliveredOrders",
      ],
    }),
    getActivesOrders: builder.query({
      query: () => `/order_management/get_active_order`,
      providesTags: ["activeOrders"],
    }),
    updateActivesOrderStatus: builder.mutation({
      query: ({ data }) => ({
        url: "/order_management/get_active_order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        "activeOrders",
        "deliveredOrders",
        "returnOrders",
        "successOrders",
      ],
    }),
    getDeliveredOrders: builder.query({
      query: () => `/order_management/get_served_order`,
      providesTags: ["deliveredOrders"],
    }),
    updateDeliveredOrderStatus: builder.mutation({
      query: ({ data }) => ({
        url: "/order_management/get_served_order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        "deliveredOrders",
        "activeOrders",
        "returnOrders",
        "successOrders",
      ],
    }),
    getSuccessOrders: builder.query({
      query: () => `/order_management/get_all_success_order`,
      providesTags: ["successOrders"],
    }),
    getReturnOrders: builder.query({
      query: () => `/order_management/get_all_cancel_order`,
      providesTags: ["returnOrders"],
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
  usePostAllToCartMutation,
  useDeleteProductFromCartMutation,
  useChangeQuantityMutation,

  useGetAllProductsQuery,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,

  usePostOrderMutation,

  useGetPendingOrdersQuery,
  useUpdatePendingOrderStatusMutation,
  useDeletePendingOrderStatusMutation,

  useGetActivesOrdersQuery,
  useUpdateActivesOrderStatusMutation,

  useGetDeliveredOrdersQuery,
  useUpdateDeliveredOrderStatusMutation,

  useGetSuccessOrdersQuery,
  useGetReturnOrdersQuery,
} = robomartApi;
