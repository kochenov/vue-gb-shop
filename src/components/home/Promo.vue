<template>
  <section class="promo">
    <div class="container promo-wrapper">
      <h1 class="promo__title">
        THE BRAND<br /><span class="promo__title-small"
          >OF LUXERIOUS<span class="promo__title-pink">FASHION</span></span
        >
      </h1>
    </div>
  </section>
</template>
<style lang="scss">
.promo {
  background: #f1e4e6;
  .promo-wrapper {
    height: 764px;
    background-image: url(/img/slider/1.png);
    background-repeat: no-repeat;
    background-position-x: -225px;
    background-position-y: bottom;
    //background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__title {
    font-weight: 900;
    font-size: 48px;
    line-height: 40px;
    color: #222222;
    border-left: 12px solid #f16d7f;
    padding-left: 16px;
    margin-right: 94px;
  }

  &__title-small {
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
  }

  &__title-pink {
    color: #f16d7f;
    padding-left: 8px;
  }
}
/* tablet */
@media (max-width: 1180px) {
  .promo-wrapper {
    height: 368px !important;
    background-size: 386px auto !important;
    background-position-x: -40px !important;
    background-position-y: bottom !important;
  }
  .promo__title {
    margin-right: 0;
  }
}

/*mobile*/
@media (max-width: 767px) {
  .promo-wrapper {
    background: none !important;
  }
  .promo__title {
    margin: 0 auto;
    font-size: 38px;
    line-height: 30px;
  }
  .promo__title-small {
    font-size: 20px;
    line-height: 24px;
  }
}
</style>