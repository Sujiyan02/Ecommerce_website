import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,  // Make sure this is correctly mapped
        products: productSlice,
    },
});

export default store;
