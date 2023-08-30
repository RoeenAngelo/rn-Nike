import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200  
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product //We can find the payload property by console.log(action)
      const cartItem = state.items.find(
        (item) => item.product.id === newProduct.id
      );
      if (cartItem) {
        cartItem.quantity += 1
      console.log(newProduct) 

      } 
      else {
        state.items.push({ product: newProduct, quantity: 1 })
      console.log(newProduct) 

      }
    },
    changeQuantity: (state, action) => {

    }
  }
})

// export const selectNumberOfItems = (state) => state.cart.items.length

export const selectSubtotal = (state) =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );

export const selectNumberOfItems = (state) =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.quantity,
    0
  );