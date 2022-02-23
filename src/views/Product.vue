<template>
  <div id="product">
    <Subheader />
    <Product />
    <section class="products container">
      <ProductList :count="3" />
    </section>
  </div>
</template>

<script>
import Subheader from "@/components/page/Subheader";
import Product from "@/components/page/Product";
import ProductList from "@/components/products/ProductList";
export default {
  data() {
    return {};
  },
  components: { Subheader, Product, ProductList },
  mounted() {
    this.$store.dispatch("loadOneProduct", this.$route.params.id);
  },
};
</script>

<style lang="scss">
#product {
  .products__items {
    overflow: hidden;
    grid-auto-flow: column;
    gap: 16px;
  }
}
#product .products {
  padding: 128px 0;
}
</style>