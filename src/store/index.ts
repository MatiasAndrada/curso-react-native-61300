import { configureStore } from "@reduxjs/toolkit";
//Reducers
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/shop/cartSlice";
import authSlice from "../features/auth/authSlice";
import counterReducer from "../features/count";
//Apis
import { setupListeners } from "@reduxjs/toolkit/query";
//Services
import { shopApi } from "../services/shopService";
import { authApi } from "../services/authService";
const store = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    authSlice,
    counterReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => // Add the shopApi middleware for handling API calls
    getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;
