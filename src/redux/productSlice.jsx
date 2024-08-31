import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the product slice
const initialState = {
    products: [], 
    searchTerm : '',
    filteredData : [],// Example initial state
};

const productSlice = createSlice({
    name: "product",
    initialState,  // Make sure to use the correctly spelled 'initialState'
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload.id);
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
            state.filteredData = state.products.filter(product =>
                product.name.toLowercase().includes(state.searchTerm.toLowerCase()))
        },
    },
});

// Export the actions and reducer
export const { setProducts, addProduct, removeProduct,setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
