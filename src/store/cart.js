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
      state.cart.push(product);
    },
    // Увеличение количества товара в корзине
    setCountProductsInCartPlus: (state) => {
      ++state.countProductsInCart;
    },
    // Уменьшение количества товара в корзине
    setCountProductsInCartMinus: (state) => {
      --state.countProductsInCart;
    },
    setCountProductsInCart: (state, count) => {
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
          let count = 0;
          response.data.forEach((product) => {
            count += product.count;
            console.log(count);
          });
          commit("setCountProductsInCart", count);
          commit("setSumPriceProductInCart");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
    actionAddProductToCart({ commit }, product) {
      if (this.getters.getCart.find((item) => item.id === product.id)) {
        console.log("Товар есть, значит изменить его");
      } else {
        console.log("Товара нет, значит нужно добавить");
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
            commit("setCountProductsInCartPlus");
            commit("setSumPriceProductInCart");
            //console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {});
      }
      commit("setCartStatusOpen");
    },
  },
};
