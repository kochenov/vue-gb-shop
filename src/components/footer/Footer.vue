<template>
  <footer class="footer">
    <div class="container footer-wrapper">
      <div class="footer__copyright">© 2021 Brand All Rights Reserved.</div>
      <ul class="footer__social-links">
        <li>
          <a class="footer__social-link" href="#">
            <i class="fab fa-facebook-f" aria-hidden="true"></i
          ></a>
        </li>
        <li>
          <a class="footer__social-link" href="#">
            <i class="fab fa-instagram" aria-hidden="true"></i
          ></a>
        </li>
        <li>
          <a class="footer__social-link" href="#">
            <i class="fab fa-pinterest-p" aria-hidden="true"></i
          ></a>
        </li>
        <li>
          <a class="footer__social-link" href="#">
            <i class="fab fa-twitter" aria-hidden="true"></i
          ></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang="scss">
.footer {
  background: #222224;
  .footer-wrapper {
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__copyright {
    font-size: 16px;
    line-height: 19px;
    color: #fbfbfb;
  }
  &__social-links {
    display: flex;
  }
  &__social-link {
    display: block;
    width: 32px;
    height: 32px;
    background: #ffffff;
    color: black;
    margin-left: 7px;
    text-align: center;
    padding-top: 6px;
  }
  &__social-link:hover {
    background: #f16d7f;
    i {
      color: white;
    }
  }
}

/*mobile*/
@media (max-width: 767px) {
  .footer-wrapper {
    padding-top: 43px !important;
    flex-direction: column-reverse;
  }
  .footer__social-links {
    padding-bottom: 43px;
  }
}
</style>