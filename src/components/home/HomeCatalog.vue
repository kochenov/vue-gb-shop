<template>
  <section class="products container">
    <h2 class="products__section-title">Fetured Items</h2>
    <p class="products__section-description">
      Shop for items based on what we featured in this week
    </p>
    <ProductList :count="6" />
    <div class="products__wrap-button">
      <a class="products__button" href="catalog.html">Browse All Product</a>
    </div>
  </section>
</template>
<script>
import ProductList from "@/components/products/ProductList";

export default {
  components: {
    ProductList,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
.products {
  padding: 31px 0 95px 0;

  &__item {
    width: 360px;
    background: #f8f8f8;
  }

  &__img-wrap {
    position: relative;
    overflow: hidden;
  }
  &__item {
    margin-bottom: 30px;
    &:hover {
      .products__overlay {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
  &__overlay {
    transform: scale(0);
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
    background-color: rgba(58, 56, 56, 0.86);
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1), opacity 0.5s;
    //transition-timing-function: cubic-bezier(0, 0, 0, 1.28), ease;
  }

  .btn-add {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 1px solid #ffffff;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    padding: 8px 15px;
    cursor: pointer;
    svg {
      padding-right: 11px;
    }
    transition: background-color 0.3s;
    &:hover {
      background-color: #f16d7f;
      border: 1px solid #f16d7f;
      color: #fff;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, 360px);
    grid-template-rows: auto;
    //gap: 30px;
    justify-content: space-between;
    padding-bottom: 48px;
  }

  &__wrap-description {
    padding: 0 24px 20px 18px;
  }

  &__section-title {
    font-size: 30px;
    line-height: 36px;
    color: #222222;
    text-align: center;
  }

  &__section-description {
    font-size: 14px;
    line-height: 17px;
    color: #9f9f9f;
    text-align: center;
    margin-bottom: 48px;
  }

  &__title {
    padding-top: 24px;
    padding-bottom: 12px;
    &-link {
      font-size: 13px;
      line-height: 16px;
      color: black;
      display: block;
    }
  }

  &__description {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #5d5d5d;
    padding-bottom: 18px;
  }

  &__price {
    font-size: 16px;
    line-height: 19px;
    color: #f16d7f;
  }

  &__wrap-button {
    display: flex;
    justify-content: center;
  }
  &__button {
    border: 1px solid #ff6a6a;
    padding: 14px 38px;
    text-decoration: none;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    color: #f26376;
  }
  &__button:hover {
    background-color: #f26376;
    color: #ffffff !important;
  }
}

/* tablet */
@media (max-width: 1180px) {
  #catalog {
    .products__item {
      margin-bottom: 15px;
      &:last-child {
        display: none;
      }
    }
  }

  #product {
    .products__items {
      overflow: hidden;
      grid-auto-flow: column;
      gap: 16px;
    }
  }
}

/*mobile*/
@media (max-width: 767px) {
  .products__item {
    margin-bottom: 15px;
    &:last-child {
      display: block;
    }
  }
  #product {
    .products__items {
      //overflow: hidden;
      grid-auto-flow: row;
      gap: 16px;
    }
  }
}
</style>