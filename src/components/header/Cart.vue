<template>
  <Transition name="bounce">
    <div v-show="cartOn == true" id="cart-info-content">
      <table>
        <tbody>
          <tr>
            <th>Наименование товара</th>
            <th>Количество</th>
            <th>Цена за штуку</th>
            <th>Итого</th>
          </tr>
          {{
            products.lengh
          }}
          <tr
            class="cart-product-item"
            v-for="(product, index) in products"
            :key="index"
          >
            <td class="cart-product-name">
              <span>{{ product.title }}</span>
              <button @click="delProduct(product, index)" class="delete">
                <i class="fa-solid fa-delete-left"></i>
              </button>
            </td>
            <td class="cart-product-count">{{ product.count }}</td>
            <td class="catr-product-price">${{ product.price }}</td>
            <td class="catr-product-price-count">
              ${{ product.price * product.count }}
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
  </Transition>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //cartOn: false,
      //cartSumPrice: this.$root.cartSumPrice,
    };
  },
  computed: {
    ...mapGetters({
      cartOn: "getCartStatus",
      products: "getCart",
      cartSumPrice: "getSumPriceProductInCart",
    }),
  },
  methods: {
    delProduct(price, index) {
      this.$root.delCart(price, index);
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

  table {
    width: 100%;
    font-size: 12px;
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
</style>