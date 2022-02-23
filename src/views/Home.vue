<template>
  <Promo />
  <Categories />
  <HomeCatalog />
  <Features />
</template>
<script>
import Promo from "@/components/home/Promo";
import Categories from "@/components/home/Categories";
import HomeCatalog from "@/components/home/HomeCatalog";
import Features from "@/components/home/Features";
export default {
  name: "Home",
  computed: {},
  components: {
    Promo,
    Categories,
    Features,
    HomeCatalog,
  },
  methods: {},
};
</script>
<style lang="scss">
</style>
