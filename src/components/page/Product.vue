<template>
  <SliderImageProduct />
  <ProductInfo />
</template>

<script>
import SliderImageProduct from "@/components/page/one-product/SliderImageProduct";
import ProductInfo from "@/components/page/one-product/ProductInfo";

export default {
  name: "Product",
  components: { SliderImageProduct, ProductInfo },
};
</script>

<style lang="scss" scoped>
</style>