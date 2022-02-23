<template>
  <div>
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
};
</script>

<style lang="scss" scoped>
</style>