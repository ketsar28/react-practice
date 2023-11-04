/* eslint-disable no-unused-vars */
import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");
const addToLogin = createAction("ADD_SESSION");

// const initialState = {
//     cart: []
// }

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(addToLogin, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer
  },
});

console.log("on create store : ", store.getState());

store.subscribe(() => {
  console.log("updated store : ", store.getState());
});
store.dispatch(addToCart({ id: 1, qty: 10 }));
store.dispatch(addToCart({ id: 2, qty: 8 }));
store.dispatch(addToCart({ id: 3, qty: 18, price: 2500 }));
store.dispatch(addToLogin());
