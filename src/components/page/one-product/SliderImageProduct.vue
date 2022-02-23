<template>
  <section class="slider">
    <h2 class="hidden">Фото товаров</h2>
    <div class="slider__slides">
      <img
        class="slide"
        src="/img/product/slide.jpg"
        alt="Product Image"
      /><button class="slider__previous" type="button">
        <svg
          width="13"
          height="23"
          viewBox="0 0 13 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z"
          ></path>
        </svg></button
      ><button class="slider__next" type="button">
        <svg
          width="13"
          height="23"
          viewBox="0 0 13 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z"
          ></path>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "SliderImageProduct",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.slider {
  z-index: -1;
  //position: relative;
  height: 777px;
  &__slides {
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__sliders {
    position: relative;
  }
  // &__control-buttons {
  //     position: absolute;
  //     top: 0;
  //     display: flex;
  //     justify-content: space-between;
  //     height: 777px;
  //     width: 100%;
  //     align-items: center;
  // }
  &__previous,
  &__next {
    position: absolute;
    top: 588px;
    right: 0;
    display: inline-block;
    width: 47px;
    height: 47px;
    cursor: pointer !important;
    background: rgba(42, 42, 42, 0.15);
    border: none;
    svg {
      width: 100%;
      height: 100%;
      padding: 12px 17px;
      fill: #000000;
    }

    &:hover {
      svg {
        fill: #ffffff;
      }

      background-color: #f16d7f;
    }
  }

  &__previous {
    img {
      transform: rotate(180deg);
    }
    left: 0;
  }
}
@media (max-width: 1180px) {
  .slider {
    height: 624px;

    &__previous,
    &__next {
      top: 435px;
    }
  }
}
</style>