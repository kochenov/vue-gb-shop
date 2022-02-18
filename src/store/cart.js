export default {
  state: {
    cart: [],
  },
  mutations: {
    addProductInCart(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
    addProductInCart({ commit }, product) {
      commit("addProductInCart", product);
    },
  },
  getters: {
    getCart(state) {
      return state.posts;
    },
  },
};
