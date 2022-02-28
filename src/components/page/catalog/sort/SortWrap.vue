<template>
  <section class="sort container">
    <h2 class="hidden">Инструменты фильтрации и сортировки товаров</h2>
    <Filter />
    <Sort />
  </section>
</template>
<script>
import Sort from "@/components/page/catalog/sort/Sort";
import Filter from "@/components/page/catalog/filter/Filter";

export default {
  components: {
    Sort,
    Filter,
  },
  methods: {},
};
</script>
<style lang="scss">
</style>