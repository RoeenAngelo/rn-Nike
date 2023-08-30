import { createSlice, createSelector } from '@reduxjs/toolkit';

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
      

      } 
      else {
        state.items.push({ 
          product: newProduct, 
          quantity: 1 
        })

      }
    },
    changeQuantity: (state, action) => {
      const { amount, productId } = action.payload
      const cartItem = state.items.find(
        (item) => item.product.id === productId
      )

      if (cartItem) {
        cartItem.quantity += amount
      }

      if (cartItem.quantity <= 0) {
        state.items = state.items.filter((item) => item !== cartItem)
      } 
    }
  }
})

// Quantity in cart
export const selectCartQuantity = (state) =>
  state.cart.items.reduce(
    (p, c) => p + c.quantity,
    0
  );

// Subtotal
export const selectSubtotal = (state) =>
  state.cart.items.reduce(
    (p, c) => p + c.product.price * c.quantity,
    0
  );

const cartSelector = (state) => state.cart

// Delivery Price
export const selectDeliveryFee = createSelector(
  cartSelector,
  selectSubtotal,
  (cart, subtotal) => (subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
)

// Total
export const selectTotal = createSelector(
  selectSubtotal,
  selectDeliveryFee,
  (subtotal, deliveryFee) => subtotal + deliveryFee
)
