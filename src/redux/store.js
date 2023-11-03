import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("store created : ", store.getState());

store.subscribe(() => {
  console.log("store changed : ", store.getState());
});
