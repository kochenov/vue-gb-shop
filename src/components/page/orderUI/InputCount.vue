<template>
  <input
    class="order__product-quant"
    type="number"
    v-model="mcount"
    min="1"
    @change.prevent="editProductInCart()"
  />
</template>
<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      mcount: null,
    };
  },
  mounted() {
    this.mcount = this.product.count;
  },
  methods: {
    editProductInCart() {
      console.log(this.mcount);
      let product = this.product;
      if (this.mcount <= 0 || typeof this.mcount !== "number") {
        this.mcount = 1;
      }
      product.count = this.mcount;

      this.$store.dispatch("actionUpdateProductFromCart", product);
    },
  },
};
</script>