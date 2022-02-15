<template>
  <section class="features">
    <h2 class="hidden">How are we better than others?</h2>
    <ul class="features__items container">
      <li class="features__item">
        <img class="features__img" src="/img/feature/1.svg" alt="" />
        <h3 class="features__item-title">Free Delivery</h3>
        <p class="features__item-description">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </li>
      <li class="features__item">
        <img class="features__img" src="/img/feature/2.svg" alt="" />
        <h3 class="features__item-title">Free Delivery</h3>
        <p class="features__item-description">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </li>
      <li class="features__item">
        <img class="features__img" src="/img/feature/3.svg" alt="" />
        <h3 class="features__item-title">Free Delivery</h3>
        <p class="features__item-description">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </li>
    </ul>
  </section>
</template>
<style lang="scss">
.features {
  background: #222224;

  &__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: space-between;
    padding: 104px 0 104px 0;
  }
  &__item {
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    width: 360px;
    &:hover {
      img {
        animation: rotate-center 0.6s ease-in-out alternate forwards;
      }
    }
  }

  &__img {
    padding-bottom: 28px;
  }
  &__item-title {
    padding-bottom: 16px;
    font-size: 19.96px;
    line-height: 24px;
    color: #fbfbfb;
  }

  &__item-description {
    font-weight: 300;
    font-size: 13.972px;
    line-height: 17px;
    text-align: center;
    color: #fbfbfb;
  }
}

/* tablet */
@media (max-width: 1180px) {
  .features__items {
    flex-direction: column;
    padding-bottom: 35px;
  }
  .features__item {
    padding-bottom: 46px;
  }
}

@keyframes rotate-center {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>