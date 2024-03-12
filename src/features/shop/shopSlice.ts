import { createSlice } from "@reduxjs/toolkit";
import type { Product, Category } from "../../types";

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        value: {
            products: null as Product[] | null,
            productsFilteredByCategory: null as Product[] | null,
            categorySelected: null as Category | null,
            productIdSelected: null as string | null,
        },
    },
    reducers: {
        setCategorySelected: (state, action) => {
            const categorySelected = action.payload;
            state.value.categorySelected = categorySelected;
        },
        setProductsFilteredByCategory: (state, action) => {
            const productsFilteredByCategory = action.payload;
            state.value.productsFilteredByCategory = productsFilteredByCategory;
        },
    },
});

export const { setCategorySelected, setProductsFilteredByCategory } = shopSlice.actions;

export default shopSlice.reducer;