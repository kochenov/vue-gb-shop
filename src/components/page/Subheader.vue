<template>
  <section class="subheader">
    <div class="subheader__wrap container">
      <h1 class="subheader__title">NEW ARRIVALS</h1>
      <ul class="subheader__breadcrumbs">
        <li><a href="/">HOME</a></li>
        <li><a href="catalog.html">MEN</a></li>
        <li>NEW ARRIVALS</li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "Subheader",
};
</script>
<style lang="scss">
.subheader {
  background: #f8f3f4;
  height: 148px;
  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  &__title {
    font-size: 24px;
    line-height: 29px;
    color: #f16d7f;
  }
  &__breadcrumbs {
    display: flex;
    list-style: none;
    li {
      a {
        text-decoration: none;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: #636363;
      }
    }
    li::after {
      content: " / ";
      padding: 0px 5px;
      color: #636363;
    }
    li:last-child {
      color: #f16d7f;
      font-weight: bold;
    }
    li:last-child::after {
      content: "";
    }
  }
}

@media (max-width: 1180px) {
  .subheader__wrap {
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>