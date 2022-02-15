<template>
  <input id="menu" type="checkbox" />
  <nav class="menu">
    <label class="menu__close" for="menu">
      <img src="/img/menu-close.png" alt=""
    /></label>
    <p class="menu__title">MENU</p>
    <ul class="menu__items">
      <li class="menu__item">
        <a href="catalog.html">MAN</a>
        <ul class="menu__sub-items">
          <li><a href="catalog.html">Accessories</a></li>
          <li><a href="catalog.html">Bags</a></li>
          <li><a href="catalog.html">Denim</a></li>
          <li><a href="catalog.html">T-Shirts</a></li>
        </ul>
      </li>
      <li class="menu__item">
        <a href="catalog.html">WOMAN</a>
        <ul class="menu__sub-items">
          <li><a href="catalog.html">Accessories</a></li>
          <li><a href="catalog.html">Jackets &amp; Coats</a></li>
          <li><a href="catalog.html">Polos</a></li>
          <li><a href="catalog.html">T-Shirts</a></li>
          <li><a href="catalog.html">Shirts</a></li>
        </ul>
      </li>
      <li class="menu__item">
        <a href="catalog.html">KIDS</a>
        <ul class="menu__sub-items">
          <li><a href="catalog.html">Accessories</a></li>
          <li><a href="catalog.html">Jackets &amp; Coats</a></li>
          <li><a href="catalog.html">Polos</a></li>
          <li><a href="catalog.html">T-Shirts</a></li>
          <li><a href="catalog.html">Shirts</a></li>
          <li><a href="catalog.html">Bags</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss">
.menu {
  overflow: hidden;
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
  background: #ffffff;
  transform: translateY(-120%);
  position: absolute;
  transition: transform 0.3s;
  top: 77.5px;
  right: 0px;
  width: 232px;
  min-height: 764px;
  z-index: 9999;

  &__close {
    display: block;
    text-align: right;
    padding: 16px;
    padding-bottom: 0;
    top: 0;
    right: 0;
    cursor: pointer;
    position: absolute;
  }

  &__title {
    margin-top: 9px;
    margin-left: 34px;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin-bottom: 4px;
    padding-top: 38px;
  }

  &__items {
    padding-left: 33px;
  }

  &__item {
    padding-top: 20px;
    font-size: 14px;
    line-height: 17px;

    a {
      color: #f16d7f;
    }
  }

  &__sub-items {
    padding-left: 22px;

    li {
      font-size: 14px;
      line-height: 17px;
      padding-top: 11px;

      a {
        color: #6f6e6e;
      }
    }
  }
}
</style>