<template>
  <section class="products container">
    <h2 class="products__section-title">Fetured Items</h2>
    <p class="products__section-description">
      Shop for items based on what we featured in this week
    </p>
    <ProductList :count="6" />
    <div class="products__wrap-button">
      <router-link class="products__button" to="/catalog"
        >Browse All Product</router-link
      >
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