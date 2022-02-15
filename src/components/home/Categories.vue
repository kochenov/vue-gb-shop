<template>
  <section class="categories">
    <h2 class="hidden">Product categories</h2>
    <div class="container">
      <div class="categories-wrapper">
        <div class="categories__item categories__for-womаn">
          <div class="categories__overlay"></div>
          <p class="categories__sale">30% OFF</p>
          <p class="categories__name"><a href="catalog.html">FOR WOMEN </a></p>
        </div>
        <div class="categories__item categories__for-mаn">
          <div class="categories__overlay"></div>
          <p class="categories__sale">HOT DEA</p>
          <p class="categories__name"><a href="catalog.html">FOR MAN</a></p>
        </div>
        <div class="categories__item categories__for-kids">
          <div class="categories__overlay"></div>
          <p class="categories__sale">NEW ARRIVALS</p>
          <p class="categories__name"><a href="catalog.html">FOR KIDS</a></p>
        </div>
        <div class="categories__item categories__for-accesories">
          <div class="categories__overlay"></div>
          <p class="categories__sale">LUXIROUS &amp; TRENDY</p>
          <p class="categories__name"><a href="catalog.html">ACCESORIES</a></p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.categories-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.categories {
  padding: 65px 0;

  &__item {
    background-color: #cccccc;
    width: 360px;
    margin-bottom: 30px;
    height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: relative;

    &::before {
      content: "";
      transition: background-color 0.5s, text-shadow 0s;
      background-color: rgba(33, 22, 22, 0.7);
      position: absolute;
      height: 100%;
      width: 100%;
    }

    &:hover::before {
      content: "";
      background-color: rgba(33, 22, 22, 0);
    }
    &:hover {
      text-shadow: 1px 1px 2px black;
    }
  }
  // &__overlay {
  //     transition: background-color 0.5s, text-shadow 0s;
  //     background-color: rgba(33, 22, 22, 0.7);
  //     position: absolute;
  //     height: 100%;
  //     width: 100%;
  // }
  &__for-womаn {
    background: url(/img/image-home-grid/1.jpg) no-repeat;
  }

  &__for-mаn {
    background: url(/img/image-home-grid/2.jpg) no-repeat;
  }

  &__for-kids {
    background: url(/img/image-home-grid/3.jpg) no-repeat;
  }

  &__for-accesories {
    height: 180px;
    width: 100% !important;
    background: url(/img/image-home-grid/4.jpg) no-repeat;
  }

  &__sale {
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    z-index: 1000;
  }
  &__name {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    a {
      color: #f16d7f;
    }
    z-index: 1000;
  }
}

/* tablet */
@media (max-width: 1180px) {
  .categories {
    &__item {
      width: 232px;
      background-size: cover;
      background-position: center center;
    }
    &__for-accesories {
      width: 100%;
    }
  }
}

/*mobile*/
@media (max-width: 767px) {
  .categories-wrapper {
    justify-content: center;
  }
  .categories__item {
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>