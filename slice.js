import toolkit from "@reduxjs/toolkit";
const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("created store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("updated store : ", store.getState());
});

// dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 10, qty: 30 }));
store.dispatch(cartSlice.actions.addToCart({ id: 20, qty: 35, price: 3000 }));
