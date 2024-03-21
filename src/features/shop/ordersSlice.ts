
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Types 
import type { OrderState, CartItem } from "../../types";

const initialState: OrderState = {
    total: 0,
    items: [],
    user: null
};
//*se muta el estado, por que cambiarlo  va en contra del principio de inmutabilidad
export const orderSlice = createSlice({
    name: "order",
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
            //state.value.updatedAt = new Date().toLocaleString();
        },
    },
    /*   removeItem: (state, action ) */
});

export const { addItem } = orderSlice.actions;

export default orderSlice.reducer;