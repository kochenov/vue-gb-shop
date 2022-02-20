<template>
  <Transition name="bounce">
    <div v-show="cartOn == true" id="cart-info-content">
      <button
        @click.prevent="$store.dispatch('actionCloseCart')"
        class="cart__close"
      >
        <img src="/img/menu-close.png" alt="" />
      </button>
      <div v-if="products.length > 0">
        <table>
          <tbody>
            <tr>
              <th>Наименование товара</th>
              <th>Количество</th>
              <th>Цена за шт.</th>
              <th>Итог</th>
            </tr>

            <tr
              v-for="(product, index) in productsMax"
              :key="index"
              class="cart-product-item"
            >
              <td class="cart-product-name">
                <span>{{ product.title }}</span>
                <button @click="delProduct(product)" class="delete">
                  <i class="fa-solid fa-delete-left"></i>
                </button>
              </td>
              <td class="cart-product-count">
                {{ product.count }}
              </td>
              <td class="catr-product-price">${{ product.price }}</td>
              <td class="catr-product-price-count">
                ${{ product.price * product.count }}
              </td>
            </tr>
            <tr v-if="products.length > 5">
              <td colspan="4" class="max-product">
                <b>... и ещё {{ products.length - 5 }}</b>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Итого:
          <span class="products-price-count">${{ cartSumPrice }}</span>
        </p>
        <a href="cart.html">Перейти к оформлению</a>
      </div>
      <div v-else class="no-products">
        <p>
          Добавьте товары в корзину нажав на кнопку в карточке товара, кнопка
          появится при наведении курсора мыши на товар
        </p>
      </div>
    </div>
  </Transition>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      cartOn: "getCartStatus",
      products: "getCart",
      cartSumPrice: "getSumPriceProductInCart",
    }),
    productsMax() {
      let prod = null;
      if (this.products.length < 5) {
        prod = this.products;
      } else {
        prod = this.products.slice(0, 5);
      }
      return prod;
    },
  },
  methods: {
    // Удаление товара по клику
    delProduct(product) {
      this.$store.dispatch("actionDeleteProductFromCart", product);
    },
  },
};
</script>
<style lang="scss">
.delete {
  cursor: pointer;
  i {
    font-size: 12px !important;
    color: black !important;
    &:hover {
      color: #ef5b70 !important;
    }
  }
  background: none;
  border: none;
}
.cart-product-name {
  span {
    padding: 0 5px;
  }
  width: 160px;
  display: flex;
  justify-content: space-between;
}
#cart-info-content {
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.2);
  display: block;
  position: fixed;
  height: auto;
  width: 400px;
  background-color: #ffffff;
  top: 60px;
  right: 4%;
  z-index: 1;
  padding: 10px;
  padding-top: 20px;

  table {
    width: 100%;
    font-size: 11px;
    border: 1px solid #ccc;

    th {
      padding: 3px;
    }

    td {
      padding: 3px;
    }
  }

  p {
    text-align: right;
    font-weight: 600;
    font-size: 11px;
    padding: 4px;
  }

  a {
    padding: 4px 0 !important;
    display: block;
    text-align: center;
    background-color: #ef5b70;
    color: #ffffff;
    font-size: 11px;

    &:hover {
      background-color: #e2e2e2;
    }

    margin: 2px auto;
  }
}
.max-product {
  text-align: center;
  border-top: 1px solid #ccc;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
.no-products {
  p {
    text-align: center !important;
  }

  padding: 5px;
  border: 1px solid #ccc;
}
.cart__close {
  position: absolute;
  top: 3px;
  right: 5px;
  background: none;
  border: none;
  img {
    width: 10px;
  }
  cursor: pointer;
}
.cart-product-count,
.catr-product-price,
.catr-product-price-count {
  text-align: center;
}
</style>