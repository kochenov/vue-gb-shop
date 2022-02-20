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
    // Установка корзины, выгрузка товара в STATE корзины
    setCart: (state, cart) => {
      state.cart = cart;
    },
    /**
     * Добавление товара в STATE корзины
     * @param {*} state
     * @param {*} product
     */
    setAddToCart: (state, product) => {
      if (!state.cart.some((item) => item.id === product.id)) {
        state.cart.push(product);
        ++state.countProductsInCart;
        state.sumPriceProductInCart += product.price;
      }
    },
    // Изменение значения товара в STATE корзины,
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
    /**
     * Перерасчёт количества товаров при манипуляции товарами в корзине
     * @param {*} state
     * @param {*} products
     */
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
    /**
     * Общая стоимость товаров корзины / перерасчёт при манипуляции товарами в корзине
     * @param {*} state
     */
    setSumPriceProductInCart: (state) => {
      let price = 0;
      state.cart.forEach((product) => {
        price += product.price * product.count;
      });
      state.sumPriceProductInCart = price;
    },
    /**
     * Удаляет из STATE корзины конкретный товар
     * Исключает значения товара (шт и цену) из общего стека
     * @param {*} state
     * @param {*} product
     */
    setCartDeliteProduct: (state, product) => {
      let indx = state.cart.findIndex((p) => p.id == product.id);
      state.countProductsInCart -= product.count;
      state.sumPriceProductInCart -= product.count * product.price;
      state.cart.splice(indx, 1);
    },
  },
  actions: {
    /**
     * Показывает или скрывает окно корзины с товарами
     * @param {Object} commit
     */
    actionSwithCatrStatus({ commit }) {
      commit("setCartStatusSwith");
    },
    // Загружает из БД в STATE данные корзины
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
    /**
     * Изменяет товар в корзине, а именно его количество, и итоговую цену
     * @param {*} commit
     * @param {*} product
     */
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
          commit("setCountProductsInCartPlus");
          commit("setSumPriceProductInCart");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
      commit("setCartStatusOpen");
    },
    /**
     * Добавляет товар в корзину и записывает данные в базу
     * Перед добавлением проверяет есть ли товар в корзине (если есть то не добавляет),
     * сделано для того, что бы при множественном клике на кнопку добавить в корзину товар не дублировался
     * на кнопку добавления товара
     * @param {*} commit
     * @param {*} product
     */
    actionAddProductToCart({ commit }, product) {
      if (!this.getters.getCart.some((item) => item.id === product.id)) {
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
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {});

        commit("setCartStatusOpen"); // Открывает окно корзины
      }
    },
    /**
     * Экшен удаления товаров из корзины. Удаляет сразу любое количество товара данного артикукла
     * Производит запись данных в базу через API
     * @param {*} commit
     * @param {*} product
     */
    actionDeleteProductFromCart({ commit }, product) {
      axios({
        method: "DELETE",
        url: `/api/v1/cart/delete/${product.id}`,
        params: {},
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(() => {
          commit("setCartDeliteProduct", product);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
    actionCloseCart({ commit }) {
      commit("setCartStatus");
    },
  },
};
