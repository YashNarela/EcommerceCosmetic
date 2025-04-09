import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "mycart",

  initialState: {
    cart: [],
  },

  reducers: {
    addtoCart: (state, actions) => {
      console.log(actions.payload);

      const cartData = state.cart.filter(
        (key) => key._id == actions.payload._id
      );
      if (cartData.length >= 1) {
        alert("Product Aleready Added!!!");
      } else {
        state.cart.push(actions.payload);
      }

      console.log(state.cart);
      
    },

    qntyIncrease: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i]._id == actions.payload) {
          state.cart[i].qty++;
        }
      }
    },
    qntyDecrease: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i]._id == actions.payload) {
          if (state.cart[i].qty <= 1) {
            alert("Quantity not less than 1 ");
          } else {
            state.cart[i].qty--;
          }
        }
      }
    },

    productRemove: (state, actions) => {
      state.cart = state.cart.filter((key) => key._id != actions.payload);
    },
  },
});

export const { addtoCart, qntyIncrease, qntyDecrease, productRemove } =
  cartSlice.actions;
export default cartSlice.reducer;
