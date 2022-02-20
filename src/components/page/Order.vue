<template>
  <section class="order container">
    <h2 class="hidden">Content Cart</h2>
    <div class="order__products">
      <div class="order__product-items">
        <div
          v-if="products.length === 0"
          style="text-align: center; margin: 100px 0"
        >
          <h3 style="padding: 30px">
            Нет товаров в корзине, доступных к покупке.
          </h3>
          <router-link to="/products" class="order__control_link">
            Перейти в каталог товаров</router-link
          >
        </div>

        <div
          v-for="product in products"
          :key="product.id"
          class="order__product-item"
        >
          <div class="order__product-img">
            <img :src="product.image" alt="product.title" />
          </div>
          <div class="order__product-info">
            <h3 class="order__product-name">
              <router-link :to="'/product/' + product.id">{{
                product.title
              }}</router-link>
            </h3>
            <div class="order__product-description">
              <p>
                Price:<span class="pink">${{ product.price }}</span>
              </p>
              <p>Color: Red</p>
              <p>Size: Xl</p>
              <p>Quantity:<InputCount :product="product" /></p>
            </div>
            <a
              @click="delProduct(product)"
              class="order__delete-product-link"
              href="#"
            >
              <img src="/img/menu-close.png" alt=""
            /></a>
          </div>
        </div>
      </div>
      <div v-if="products.length > 0" class="order__control-buttons">
        <a class="order__control_link" href="#">Clear shopping cart</a
        ><a class="order__control_link" href="#">Continue shopping</a>
      </div>
    </div>
    <div class="order__form">
      <div class="order__form-wrap">
        <form class="order__form_elements">
          <h3 class="order__form_title">SHIPPING ADRESS</h3>
          <input
            class="form-input"
            name="sity"
            type="text"
            placeholder="Bangladesh"
          /><input
            class="form-input"
            name="stat"
            type="text"
            placeholder="State"
          /><input
            class="form-input"
            name="zipcode"
            type="text"
            placeholder="Postcode"
          /><button class="order__form_submit" type="submit">
            GET A QUOTE
          </button>
        </form>
        <div v-if="products.length > 0" class="order__total">
          <p class="order__sub-total">
            SUB TOTAL<span>{{ cartSumPrice }}</span>
          </p>
          <p class="order__total-price">
            GRAND TOTAL<span>{{ cartSumPrice }}</span>
          </p>
          <button class="order__control_link order__form-submit">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import InputCount from "@/components/page/orderUI/InputCount";

export default {
  components: {
    InputCount,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("actionCloseCart");
  },
  computed: {
    ...mapGetters({
      products: "getCart",
      cartSumPrice: "getSumPriceProductInCart",
    }),
  },
  methods: {
    // Удаление товара по клику
    delProduct(product) {
      this.$store.dispatch("actionDeleteProductFromCart", product);
    },
    editProductInCart(count) {
      console.log(count);
    },
  },
};
</script>
<style lang="scss">
.order {
  display: flex;
  justify-content: space-between;
  //flex-direction: column;
  padding-top: 96px;
  //gap: px;

  &__products {
    width: 652px;
  }
  &__form {
    width: 360px;
  }

  &__product-items {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  &__product-item {
    display: flex;
    // filter: drop-shadow(17px 19px 24px rgba(0, 0, 0, 0.13));
    box-shadow: 17px 19px 24px 0px rgba(0, 0, 0, 0.13);
    position: relative;
  }
  &__product-img {
    max-height: 306px;
    max-width: 262px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__product-info {
    padding: 22px 22px 0px 31px;
    width: 262px;
  }

  &__delete-product {
    text-align: right;
    flex: auto;
    padding: 22px 28px;
  }
  &__delete-product-link {
    position: absolute;
    top: 28px;
    right: 22px;
    &:hover {
      animation: rotate-center 0.6s ease-in-out both;
    }
  }
  &__product-name {
    a {
      font-size: 24px;
      line-height: 29px;
      color: #222222;
    }
  }
  &__product-description {
    padding-top: 42px;
    p {
      font-size: 22px;
      line-height: 26px;
      color: #575757;
      padding-top: 6px;
    }
  }
  &__product-quant {
    margin-left: 40px;
    border: 1px solid #eaeaea;
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    color: #656565;
    display: inline-block;
    width: 44px;
  }

  &__control-buttons {
    display: flex;
    justify-content: space-between;
    padding-top: 72px;
    padding-bottom: 128px;
  }
  &__control_link {
    padding: 17px 40px;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    border: 1px solid #a4a4a4;
    color: #000000;
    text-transform: uppercase;
    &:hover {
      background-color: #f16d7f;
      color: #ffffff !important;
      border: 1px solid #f16d7f;
    }
  }

  &__form_title {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
  }
  &__form_elements {
    display: flex;
    flex-direction: column;
  }

  &__form_submit {
    margin-top: 20px;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 11px;
    padding-bottom: 11px;
    width: 104px;
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    color: #4a4a4a;
    border: 1px solid #a4a4a4;
    background: #ffffff;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: #f16d7f;
    }
  }

  &__total {
    background: #f5f3f3;
    padding: 37px 34px 42px 44px;
    margin-top: 57px;
  }
  &__sub-total {
    text-align: right;
    font-size: 11px;
    line-height: 13px;
    color: #4a4a4a;
    padding-bottom: 12px;
    span {
      padding-left: 26px;
    }
  }
  &__total-price {
    text-align: right;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
    padding-bottom: 21px;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 17px;
    padding-right: 3px;

    span {
      font-weight: bold;
      padding-left: 25px;
      color: #f16d7f;
    }
  }
  &__form-submit {
    background-color: #f16d7f;
    color: white;
    cursor: pointer;
    width: 100%;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    &:hover {
      border: 1px solid #606060 !important;
      background: #606060;
    }
  }
}
@keyframes rotate-center {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (max-width: 1180px) {
  .order {
    flex-direction: column;
    align-items: center;
    padding-bottom: 128px;
  }
  .order__form {
    width: 100%;
  }
  .order__form-wrap {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }
  .order__form_elements {
    width: 100%;
  }
  .order__total {
    width: 100%;
    margin-top: 38px;
  }
  .order__control-buttons {
    justify-content: space-evenly;
  }
}

/*mobile*/
@media (max-width: 767px) {
  .order {
    padding-bottom: 96px;
    padding-top: 36px;
  }
  .order__products {
    width: 100%;
  }
  .order__product-img {
    height: 188px;
    width: 143px;
    img {
      object-fit: cover;
    }
  }
  .order__product-name a {
    font-size: 16px;
    line-height: calc(16px * 1.5);
  }
  .order__product-info {
    padding: 13px 0px 0px 17px;
    width: 143px;
  }
  .order__delete-product-link {
    top: 17px;
    right: 14px;
  }
  .order__product-description {
    padding-top: 25px;
  }
  .order__product-description p {
    font-size: 14px;
    line-height: 17px;
    padding-top: 2px;
  }
  .order__product-quant {
    text-align: center;
    font-size: 10px;
    line-height: 12px;
    width: 24px;
  }
  .order__control_link {
    padding: 10px 28px;
    font-size: 12px;
    line-height: 16px;
    text-transform: none;
  }
  .order__form-wrap {
    flex-direction: column;
  }
}
.order__form-wrap {
  position: sticky;
  top: 5px;
  padding-bottom: 120px;
}
</style>