import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    products: [], 
    totalQuantity:0,
    totalPrice:0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCard(state,action){
                const newItem =action.payload;
                const itemIndex=state.products.find((item) =>item.id === newItem.id);
                if(itemIndex){
                    itemIndex.quantity++;
                    itemIndex.totalPrice += newItem.price;
                }
                else{
                    state.products.push({
                        id:newItem.id,
                        name:newItem.name,
                        price:newItem.price,
                        quantity:1,
                        totalPrice:newItem.price,
                        image:newItem.image
                    });
                }
                state.totalPrice += newItem.price;
                state.totalQuantity++;
        },
        removeFromCart(state,action){
            const id =action.payload;
            const findItem=state.products.find((item) =>item.id === id);
            if(findItem){
                state.totalPrice -= findItem.totalPrice;
                state.totalQuantity -= findItem.quantity;
                state.products=state.products.filter((item) => item.id !== id);



            }
        },

        increseQuantity(state,action){
            const id =action.payload;
            const findItem=state.products.find((item) =>item.id === id);
            if(findItem){
                findItem.quantity++;
                findItem.totalPrice += findItem.price;
                state.totalQuantity++;
                state.totalPrice += findItem.price;
            }
        },
        decreseQuantity(state,action){
            const id =action.payload;
            const findItem=state.products.find((item) =>item.id === id);
            if(findItem.quantity > 1){
            if(findItem){
                findItem.quantity--;
                findItem.totalPrice -= findItem.price;
                state.totalQuantity--;
                state.totalPrice -= findItem.price;
            }
        }
        },
        
    },
});


// Export the actions and reducer
export const {addToCard,removeFromCart,decreseQuantity,increseQuantity} =cartSlice.actions;
export default cartSlice.reducer;

