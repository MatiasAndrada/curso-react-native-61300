
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//Types 
import type { OrderState, CartItem } from "../../types";

const initialState: OrderState[] = [];

//*se muta el estado, por que cambiarlo  va en contra del principio de inmutabilidad
export const orderSlice = createSlice({
  name: "order",
  initialState: {
    value: initialState,
  },
  reducers: {
    setOrders: (state, action: PayloadAction<OrderState[]>) => {
      const updatedOrders = action.payload.map(order => {
        // Calculate total product count efficiently using reduce
        const totalProducts = order.items.reduce((acc, item) => acc + item.quantity, 0);
        // Create a new order object with the added property
        return {
          ...order, // Spread operator to include existing order properties
          productsCount: totalProducts,
        };
      });
      return {
        ...state,
        value: updatedOrders, // Return the updated orders array
      };
    }
  }
})

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;