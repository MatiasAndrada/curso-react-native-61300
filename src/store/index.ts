import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/count";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/shop/cartSlice";

const store = configureStore({

  reducer: {
    counterReducer,
    shopReducer
    /*     cartReducer */

  },
});

export type RootState = ReturnType<typeof store.getState>
export default store 
