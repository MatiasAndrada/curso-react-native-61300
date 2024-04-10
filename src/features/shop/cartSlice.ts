import type { CartItem } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define el estado inicial
interface CartState {
    user: string | null;
    updatedAt: string | null;
    total: number;
    items: CartItem[];
}

const initialState: CartState = {
    user: null,
    updatedAt: null,
    total: 0,
    items: [],
};
//*se muta el estado, por que cambiarlo  va en contra del principio de inmutabilidad
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: initialState,
    },
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const productRepeated = state.value.items.find(
                (item) => item.id === action.payload.id
            );
            if (productRepeated) {
                state.value.items = state.value.items.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity;
                    }
                    return item;
                });
            } else {
                state.value.items.push(action.payload);
            }
            state.value.total = state.value.items.reduce(
                (acc, currentItem) => acc + currentItem.price * currentItem.quantity, 0);
            state.value.updatedAt = new Date().toLocaleString();
        },
        emptyCart: (state) => {
            // Mutate the state directly
            state.value.user = null;
            state.value.updatedAt = null;
            state.value.total = 0;
            state.value.items = [];
        },
    },
    /*   removeItem: (state, action ) */



});

export const { addItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;