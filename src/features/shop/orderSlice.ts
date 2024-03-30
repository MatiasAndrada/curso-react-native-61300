
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Types 
import type { OrderState } from "../../types";

const initialState: OrderState[] = [{
    id: "",
    total: 0,
    items: [],
    productsCount: 0,
    user: null
}];
//*se muta el estado, por que cambiarlo  va en contra del principio de inmutabilidad
export const orderSlice = createSlice({
    name: "order",
    initialState: {
        value: initialState,
    },
    reducers: {
        setOrders: (state, action: PayloadAction<OrderState[]>) => {
            const newOrders = action.payload;
            const totalProductsCount = newOrders.reduce((acc, order) => {
                return acc + order.items.reduce((itemAcc, item) => itemAcc + item.quantity, 0);
            }, 0);
            console.log("total product reducer:", totalProductsCount)
            0
        }
    }
})

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;