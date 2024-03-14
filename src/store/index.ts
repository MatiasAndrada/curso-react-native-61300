import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/count";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/shop/cartSlice";
//Apis
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "../services/shopService";

const store = configureStore({
  reducer: {
    counterReducer,
    shopReducer,
    cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) => // Add the shopApi middleware for handling API calls
    getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;
