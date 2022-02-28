<template>
  <nav class="menu">
    <button class="menu__close" @click.prevent="$emit('closeMenu')">
      <img src="/img/menu-close.png" alt="" />
    </button>
    <p class="menu__title">MENU</p>
    <ul class="menu__items">
      <li class="menu__item">
        <router-link to="/catalog">MAN</router-link>
        <ul class="menu__sub-items">
          <li><router-link to="/catalog">Accessories</router-link></li>
          <li><router-link to="/catalog">Bags</router-link></li>
          <li><router-link to="/catalog">Denim</router-link></li>
          <li><router-link to="/catalog">T-Shirts</router-link></li>
        </ul>
      </li>
      <li class="menu__item">
        <router-link to="/catalog">WOMAN</router-link>
        <ul class="menu__sub-items">
          <li><router-link to="/catalog">Accessories</router-link></li>
          <li><router-link to="/catalog">Jackets &amp; Coats</router-link></li>
          <li><router-link to="/catalog">Polos</router-link></li>
          <li><router-link to="/catalog">T-Shirts</router-link></li>
          <li><router-link to="/catalog">Shirts</router-link></li>
        </ul>
      </li>
      <li class="menu__item">
        <router-link to="/catalog">KIDS</router-link>
        <ul class="menu__sub-items">
          <li><router-link to="/catalog">Accessories</router-link></li>
          <li><router-link to="/catalog">Jackets &amp; Coats</router-link></li>
          <li><router-link to="/catalog">Polos</router-link></li>
          <li><router-link to="/catalog">T-Shirts</router-link></li>
          <li><router-link to="/catalog">Shirts</router-link></li>
          <li><router-link to="/catalog">Bags</router-link></li>
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
  transform: translateY(0);
  position: absolute;
  transition: transform 0.3s;
  top: 78px;
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
    border: none;
    background: transparent;
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