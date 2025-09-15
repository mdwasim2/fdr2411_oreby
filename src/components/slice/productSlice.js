import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem:[],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state,action) => {
        let findProduct = state.cartItem.findIndex((item)=> item.id == action.payload.id)

        if(findProduct !== -1){
            state.cartItem[findProduct].qun += 1;
        }else{
          state.cartItem = [{ ...action.payload, qun: 1 }];
          
        }
        
        
        
        
    },

  
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions;
export default productSlice.reducer;