import { base_url } from "../firebase/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product, OrderState } from "../types";

export const shopApi: any = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products.json'
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response: { [key: string]: Product }) => {
                const products = Object.values(response);
                return products;
            }
        }),
        getCategories: builder.query({
            query: () => "categories.json",
        }),
        getOrders: builder.query({
            query: (userId) => `orders.json?orderBy="userId"&equalTo="${userId}"`,
            transformResponse: (response: { [key: string]: OrderState }) => {
                const orders = Object.values(response);
                return orders;
            }
        }),
        postOrder: builder.mutation({
            query: (order: OrderState) => ({
                url: "orders.json",
                method: "POST",
                body: order,
            }),
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
        }),
        postProfileImage: builder.mutation({
            query: ({ localId, image }) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image,
                },
            }),
        }),
        getUserLocation: builder.query({
            query: (localId) => `locations/${localId}.json`,
        }),
        postUserLocation: builder.mutation({
            query: ({ localId, location }) => ({
                url: `locations/${localId}.json`,
                method: "PUT",
                body: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    address: location.address
                },
            })
        }),

    }),
});

export const {
    useGetProductsByCategoryQuery,
    useGetCategoriesQuery,
    usePostOrderMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
    useGetUserLocationQuery,
    usePostUserLocationMutation,
    useGetOrdersQuery,
} = shopApi;
