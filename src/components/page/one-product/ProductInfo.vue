<template>
  <section class="product-info container">
    <div class="product-info__category">WOMEN COLLECTION</div>
    <h2 class="product-info__name">{{ typeof product }}</h2>
    <div class="product-info__description">
      <p>
        Compellingly actualize fully researched processes before proactive
        outsourcing. Progressively syndicate collaborative architectures before
        cutting-edge services. Completely visualize parallel core competencies
        rather than exceptional portals.
      </p>
      <p class="product-info__price">$561</p>
      <ul class="sort__items">
        <li class="sort__item"><a href="#">CHOOSE COLOR</a></li>
        <li class="sort__item"><a href="#">CHOOSE SIZE</a></li>
        <li class="sort__item"><a href="#">QUANTITY</a></li>
      </ul>
      <div class="products__wrap-button">
        <a class="products__button" href="cart.html">
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
    ...mapGetters({
      products: "getProducts",
    }),
  },
  mounted() {
    console.log(this.product);
  },
};
</script>

<style lang="scss" scoped>
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