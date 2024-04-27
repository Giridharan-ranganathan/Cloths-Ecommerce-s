import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name : "cart",
    initialState : {
    items: [],
    total: 0,
    },
    reducers: {
        saveAllProducts:( state , action) => {
            return {...state,items : action.payload}
        },

        increment: (state, action) => {
            return {
              ...state,
              items: state.items.map((item) => {
                if (item.id !== action.payload.id) {
                  return item;
                }
          
                return {
                  ...item,
                  quantity: item.quantity + action.payload.value,
                };
              }),
            };
          },
          

        decrement: ( state , action ) => {
            return {
                ...state,
                items: state.items.map((item) => {
                  if (item.id !== action.payload.id) {
                    return item;
                  }
            
                  return {
                    ...item,
                    quantity: item.quantity - action.payload.value,
                  };
                }),
              };
        },


        updateTotal: (state, action) => {
            return {
              ...state,
              total: action.payload,
            };
          },
    }
});

export const { saveAllProducts, increment , decrement , updateTotal } = CartSlice.actions;
export default CartSlice.reducer;