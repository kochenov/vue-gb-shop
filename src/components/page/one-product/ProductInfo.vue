<template>
  <section class="product-info container">
    <div class="product-info__category">WOMEN COLLECTION</div>
    <h2 class="product-info__name">{{ product.title }}</h2>
    <div class="product-info__description">
      <p>
        {{ product.description }}
      </p>
      <p class="product-info__price">${{ product.price }}</p>

      <ul class="sort__items">
        <li class="sort__item"><a href="#">CHOOSE COLOR</a></li>
        <li class="sort__item"><a href="#">CHOOSE SIZE</a></li>
        <li class="sort__item"><a href="#">QUANTITY</a></li>
      </ul>

      <div class="products__wrap-button">
        <a
          @click.prevent="addCart(product)"
          class="products__button"
          href="/cart"
        >
          <img src="/img/product/cart-pink.svg" alt="" />Add to Cart
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductInfo",

  computed: {
    // product() {
    //   //console.log(this.$store.getters.getOneProduct);
    //   return this.$store.getters.getOneProduct;
    // },
    ...mapGetters({
      product: "getOneProduct",
      cartProducts: "getCart",
    }),
  },
  methods: {
    addCart(product) {
      let productCart = this.cartProducts.find(
        (item) => item.id === product.id
      );
      // Если товар есть в корзине
      if (productCart) {
        ++productCart.count;
        this.$store.dispatch("actionUpdateProductFromCart", productCart);
      } else {
        this.$store.dispatch("actionAddProductToCart", product);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sort {
  padding-top: 51px;
  padding-bottom: 64px;
  display: flex;

  &__menu-link {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #000000;

    img {
      padding-left: 11px;
    }
  }

  &__items {
    display: flex;
    gap: 37px;
    // margin-left: 30px;
    padding-top: 20px;
  }
  &__item-details::-webkit-details-marker {
    display: none;
  }
  &__item-summary {
    display: block;
  }
  &_item,
  &__item-sort-summary {
    font-size: 15px;
    line-height: 17px;
    color: #6f6e6e;
  }
  &__item {
    position: relative;
    .sort__item-details {
      font-size: 15px;
      line-height: 17px;
      color: #6f6e6e;
    }
    a {
      color: #6f6e6e;
    }
  }
  &__item::after {
    content: url("/img/sort_sort.png");
    padding-left: 10px;
    color: #6f6e6e;
    position: absolute;
    right: -17px;
    top: -3px;
  }
  // Фильтры
  &__filter {
    width: 360px;
    position: relative;
  }
  &__filter-content {
    width: 360px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    margin-bottom: -2px;
    position: absolute;
    background-color: #ffffff;
    z-index: 10000;
    box-shadow: 6px 27px 27px rgba(0, 0, 0, 0.21);
  }
  &__menu-summary {
    padding-left: 16px;
    padding-top: 16px;
    transition: 0.3s;
    list-style: none;
    svg {
      margin-left: 12px;
      fill: #000000;
    }
  }
  &__menu-sub-details::-webkit-details-marker,
  &__menu-details::-webkit-details-marker,
  &__item-sort-details::-webkit-details-marker {
    display: none;
  }
  &__item-sort-details {
    position: relative;
  }
  &__menu-details[open] {
    background: #ffffff;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    color: #f16d7f;
    svg {
      fill: #f16d7f;
    }
  }
  &__menu-sub-summary,
  &__menu-summary {
    display: block;
    cursor: pointer;
    box-sizing: border-box;
  }
  &__menu-sub-summary {
    border-left: 5px solid #f16d7f;
    border-bottom: 1px solid #ebebeb;
    padding: 13px;
    margin-top: 18px;
  }
  &__menu-sub-summary-items {
    padding: 24px 0px 12px 34px;
  }
  &__menu-sub-summary-item {
    margin-bottom: 11px;
    a {
      font-size: 14px;
      line-height: 17px;
      color: #6f6e6e;
    }
  }
  &__item-sort-summary {
    font-size: 15px;
    line-height: 17px;
    color: #6f6e6e;
    cursor: pointer;
    display: block;
  }
  &__item-sort-summary-items {
    position: absolute;
    z-index: 10000;
    background-color: #ffffff;
    min-width: 80px;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    padding: 7px 0px 0px 9px;
    top: 25px;
  }
  &__item-sort-summary-item {
    margin-bottom: 9px;
    input {
      margin-right: 9px;
    }
    label {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 16px;
      color: #6f6e6e;
    }
  }
}
.product-info {
  position: relative; // добавил потому что не работали слои
  border: 1px solid #eaeaea;
  padding: 65px 0;
  background-color: #ffffff;
  z-index: 1;
  margin-top: -65px !important;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__category {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #f16d7f;
    padding-bottom: 12px;
    position: relative;
  }

  &__category::before {
    position: absolute;
    content: "";
    background-color: #f16d7f;
    color: #f16d7f;
    width: 63px;
    height: 3px;
    bottom: 0;
    left: 43px;
  }

  &__name {
    padding: 12px 0;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #4d4d4d;
  }
  &__description {
    padding: 36px 0;
    width: 554px;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #5e5e5e;
  }
  &__price {
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #ef5b70;
    padding-bottom: 64px;
    //width: 642px;
    padding-top: 32px;
    text-align: center;
    border-bottom: 1px solid #eaeaea;
  }
}

#product {
  .sort__items {
    padding-top: 64px;
    padding-bottom: 48px;
    justify-content: center;
  }
  .products__wrap-button {
    a {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 19px;
      color: #f26376;
    }
    img {
      padding-right: 23px;
      height: 23px;
    }
    :hover {
      img {
        filter: brightness(0%) invert(1);
      }
    }
  }

  .products {
    padding: 128px 0;
  }
}

/* tablet */
@media (max-width: 1180px) {
  .product-info {
    margin-top: 0 !important;
    border: none;
  }
}
/*mobile*/
@media (max-width: 767px) {
  .product-info__description {
    width: 100%;
    p {
      padding: 0 24px;
    }
  }
  .product-info__price {
    //width: 175px;
    padding-top: 32px !important;
    padding-bottom: 64px !important;
  }
  .sort__item a {
    font-size: 10px;
  }
}
</style>