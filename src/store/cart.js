import axios from "axios";

export default {
  state: {
    cart: [], // Корзина товаров
    sumPriceProductInCart: 0, // Цена всех товаров в корзине
    countProductsInCart: 0, // Количество товара в корзине
    cartStatus: false, // Open / Close
  },
  getters: {
    getCart: (state) => [...state.cart],
    getCountProductsInCart: (state) => state.countProductsInCart,
    getSumPriceProductInCart: (state) => state.sumPriceProductInCart,
    getCartStatus: (state) => state.cartStatus,
  },
  mutations: {
    // Установка корзины, выгрузка товара в корзину
    setCart: (state, cart) => {
      state.cart = cart;
    },
    // Добавление товара в корзину
    setAddToCart: (state, product) => {
      let productCart = state.cart.find((item) => item.id === product.id);
      if (typeof productCart === "undefined") {
        state.cart.push(product);
        ++state.countProductsInCart;
      }
    },
    // Добавление товара в корзину
    setEditCart: (state, product) => {
      let indx = state.cart.findIndex((item) => item.id === product.id);
      state.cart[indx] = product;
    },
    // Увеличение количества товара в корзине
    setCountProductsInCartPlus: (state) => {
      ++state.countProductsInCart;
    },
    // Уменьшение количества товара в корзине
    setCountProductsInCartMinus: (state) => {
      --state.countProductsInCart;
    },
    setCountProductsInCart: (state, products) => {
      let count = 0;
      products.forEach((product) => {
        count += product.count;
      });
      state.countProductsInCart = count;
    },
    // Показывает корзину
    setCartStatusOpen: (state) => {
      state.cartStatus = true;
    },
    // Скрывает корзину
    setCartStatus: (state) => {
      state.cartStatus = false;
    },
    // Открывает - закрывает корзину
    setCartStatusSwith: (state) => {
      state.cartStatus = !state.cartStatus;
    },
    // Общая сумма в корзине
    setSumPriceProductInCart: (state) => {
      let price = 0;
      state.cart.forEach((product) => {
        price += product.price * product.count;
      });
      state.sumPriceProductInCart = price;
    },
    setCartDeliteProduct: (state, product) => {
      let indx = state.cart.findIndex((p) => p.id == product.id);
      state.countProductsInCart -= product.count;
      state.cart.splice(indx, 1);
    },
  },
  actions: {
    actionSwithCatrStatus({ commit }) {
      commit("setCartStatusSwith");
    },
    loadProductsFromCart({ commit }) {
      axios({
        method: "GET",
        url: `/api/v1/cart`,
        params: {
          //user_key_id: "USER_KEY_ID",
        },
        data: {},
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          commit("setCart", response.data);
          commit("setCountProductsInCart", response.data);
          commit("setSumPriceProductInCart");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
    actionEditProductFromCart({ commit }, product) {
      ++product.count;
      axios({
        method: "PUT",
        url: `/api/v1/cart/${product.id}`,
        params: {
          //user_key_id: "USER_KEY_ID",
        },
        data: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(() => {
          //commit("setAddToCart", product);
          commit("setCountProductsInCartPlus");
          commit("setSumPriceProductInCart");
          //console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
      commit("setCartStatusOpen");
    },
    actionAddProductToCart({ commit }, product) {
      let productCart = this.getters.getCart.find(
        (item) => item.id === product.id
      );
      console.log(productCart);
      if (typeof productCart === "undefined") {
        // Если в корзине есть товар
        product.count = 1;
        axios({
          method: "POST",
          url: `/api/v1/cart`,
          params: {
            //user_key_id: "USER_KEY_ID",
          },
          data: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then(() => {
            commit("setAddToCart", product);
            commit("setSumPriceProductInCart");
            //console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {});

        commit("setCartStatusOpen");
      }
    },
    actionDeleteProductFromCart({ commit }, product) {
      axios({
        method: "DELETE",
        url: `/api/v1/cart/delete/${product.id}`,
        params: {
          //user_key_id: "USER_KEY_ID",
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(() => {
          commit("setCartDeliteProduct", product);
          commit("setSumPriceProductInCart");

          //console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
  },
};
