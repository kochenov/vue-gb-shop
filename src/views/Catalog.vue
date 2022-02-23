<template>
  <Subheader />
  <SortWrap />
  <main class="products container">
    <ProductList :count="12" />
    <div class="products__wrap-button">
      <ul class="pagination">
        <li>
          <a href="catalog.html">
            <img src="/img/catalog/paginate-left.png" alt="back"
          /></a>
        </li>
        <li><a class="active" href="catalog.html">1</a></li>
        <li><a href="catalog.html">2</a></li>
        <li><a href="catalog.html">3</a></li>
        <li><a href="catalog.html">4</a></li>
        <li><a href="catalog.html">5</a></li>
        <li><a href="catalog.html">6</a></li>
        <li class="disable"><a href="catalog.html">.....</a></li>
        <li><a href="catalog.html">20 </a></li>
        <li>
          <a href="catalog.html">
            <img src="/img/catalog/paginate-right.png" alt="next"
          /></a>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import Subheader from "@/components/page/Subheader";
import ProductList from "@/components/products/ProductList";
import SortWrap from "@/components/page/catalog/sort/SortWrap";

export default {
  name: "Catalog",
  components: {
    Subheader,
    ProductList,
    SortWrap,
  },
  methods: {},
};
</script>
<style lang="scss">
#catalog {
  .sort {
    &__items {
      margin-left: 30px;
    }
  }
}
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

#catalog {
  .card {
    &__items {
      padding-bottom: 48px !important;
    }

    padding-bottom: 14px !important;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebebeb;
  width: fit-content;
  margin: 0 auto;
  box-sizing: border-box;

  li {
    padding: 15px;

    a {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      color: #c4c4c4;
    }

    a.active {
      color: #ef5b70;
    }

    &:nth-child(7) {
      padding-right: 0;
    }

    &:nth-child(9) {
      padding-left: 0;
    }
  }

  .disable {
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media (max-width: 1180px) {
  .sort {
    justify-content: space-between;
    align-items: center;
    &__items {
      padding-right: 0px;
      padding-top: 0px;
      margin: 0;
      margin-right: 20px;
    }
  }
  .sort__item-sort-summary {
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .sort__filter {
    width: 50px;
  }
  .sort__menu-summary {
    padding-left: 0px;
    svg {
      width: 27px;
      height: 30px;
    }
  }
  .sort__item-sort-summary {
    font-size: 10px;
  }
}
</style>