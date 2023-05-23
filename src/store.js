import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addToCart(state, item) {
      state.cart.push(item);
    },
    removeFromCart(state, item) {
      const index = state.cart.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    cartTotalPrice(state) {
      return state.cart.reduce((total, item) => total + item.price, 0);
    },
  },
});

export default store;
