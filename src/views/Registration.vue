<template>
  <Subheader />
  <section class="registration container">
    <h2 class="hidden">Registration</h2>
    <div class="registration__form">
      <form id="registrarion">
        <p class="registration__name-group">Your Name</p>
        <input
          class="form-input"
          required=""
          placeholder="First Name"
          type="text"
        /><input
          class="form-input"
          required=""
          placeholder="Last Name"
          type="text"
        />
        <div class="group-check-box">
          <input id="male" type="radio" checked="" name="sex" /><label
            class="male"
            for="male"
            >Male</label
          ><input id="female" type="radio" name="sex" /><label
            class="female"
            for="female"
            >Female</label
          >
        </div>
        <p class="registration__name-group">Login details</p>
        <input
          class="form-input"
          required=""
          placeholder="Email"
          type="email"
        /><input
          class="form-input"
          required=""
          min="7"
          placeholder="Password"
          type="password"
        />
        <p class="registration__name-text">
          Please use 8 or more characters, with at least 1 number and a mixture
          of uppercase and lowercase letters
        </p>
        <button
          class="order__control_link order__form-submit registration__form-btn"
        >
          JOIN NOW<svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.54 0.208095C11.6058 0.142131 11.684 0.0897967 11.77 0.0540883C11.8561 0.01838 11.9483 0 12.0415 0C12.1347 0 12.2269 0.01838 12.313 0.0540883C12.399 0.0897967 12.4772 0.142131 12.543 0.208095L16.7929 4.458C16.8589 4.5238 16.9112 4.60196 16.9469 4.68802C16.9826 4.77407 17.001 4.86632 17.001 4.95949C17.001 5.05266 16.9826 5.14491 16.9469 5.23097C16.9112 5.31702 16.8589 5.39518 16.7929 5.46098L12.543 9.71089C12.41 9.84389 12.2296 9.91861 12.0415 9.91861C11.8534 9.91861 11.673 9.84389 11.54 9.71089C11.407 9.57788 11.3323 9.39749 11.3323 9.2094C11.3323 9.0213 11.407 8.84091 11.54 8.70791L15.2898 4.95949L11.54 1.21107C11.474 1.14528 11.4217 1.06711 11.386 0.981059C11.3503 0.895005 11.3319 0.802752 11.3319 0.709584C11.3319 0.616415 11.3503 0.524162 11.386 0.438109C11.4217 0.352055 11.474 0.273891 11.54 0.208095Z"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 4.95948C0 4.77162 0.0746263 4.59146 0.207462 4.45862C0.340297 4.32579 0.52046 4.25116 0.708318 4.25116H15.583C15.7708 4.25116 15.951 4.32579 16.0838 4.45862C16.2167 4.59146 16.2913 4.77162 16.2913 4.95948C16.2913 5.14734 16.2167 5.3275 16.0838 5.46033C15.951 5.59317 15.7708 5.6678 15.583 5.6678H0.708318C0.52046 5.6678 0.340297 5.59317 0.207462 5.46033C0.0746263 5.3275 0 5.14734 0 4.95948Z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
    <div class="registration__inform">
      <h2 class="registration__inform-title">LOYALTY HAS ITS PERKS</h2>
      <p class="registration__inform-description">
        Get in on the loyalty program where you can earn points and unlock
        serious perks. Starting with these as soon as you join:
      </p>
      <ul class="registration__inform-items">
        <li class="registration__inform-item">15% off welcome offer</li>
        <li class="registration__inform-item">
          Free shipping, returns and exchanges on all orders
        </li>
        <li class="registration__inform-item">
          $10 off a purchase on your birthday
        </li>
        <li class="registration__inform-item">Early access to products</li>
        <li class="registration__inform-item">
          Exclusive offers &amp; rewards
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Subheader from "@/components/page/Subheader";
export default { components: { Subheader } };
</script>

<style lang="scss" scoped>
button {
  background: none;
  border: none;
}
.order__control_link {
  padding: 17px 40px;
  text-transform: none;
}
.order__form-submit {
  background-color: #f16d7f;
  border: 1px solid #f16d7f;
  color: white;
  cursor: pointer;
  width: 100%;
  font-weight: 300;
  font-size: 16px;
  //line-height: 19px;
  &:hover {
    border: 1px solid #606060 !important;
    background: #606060;
  }
}
.registration {
  padding-top: 65px;
  padding-bottom: 92px;
  display: flex;
  justify-content: space-between;
  gap: 128px;

  &__name-group {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
  }

  .group-check-box {
    display: flex;
    align-items: center;
    padding-top: 31px;
    padding-bottom: 33px;

    input[type="radio"] {
      height: 17px;
      width: 17px;
      margin-right: 10px;
    }

    label {
      margin-right: 20px;
    }
  }

  &__name-text {
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #b1b1b1;
    padding: 15px 0 39px 0;
  }

  &__form-btn {
    display: inline-block;
    width: auto;

    svg {
      margin-left: 20px;
      fill: #ffffff;
    }
  }
}

.registration__inform {
  &-title {
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding-bottom: 32px;
  }

  &-description {
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding-bottom: 27px;
  }

  &-items {
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }

  &-item {
    list-style-image: url("/img/marker-list.png");
    padding-bottom: 16px;
    margin-left: 26px;
    padding-left: 22px;
  }
}

/* tablet */
@media (max-width: 1180px) {
  .registration__inform-title {
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 30px;
  }

  .registration__inform-description {
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 30px;
  }

  .registration__inform-item {
    padding-bottom: 16px;
    margin-left: 26px;
    padding-left: 22px;
    font-size: 16px;
    line-height: 19px;
  }

  .group-check-box {
    font-size: 11px;
  }

  .order__form-submit {
    font-size: 14px;
    line-height: 16px;
  }

  .registration {
    gap: 22px;
  }

  .registration__inform {
    width: 49%;
  }

  .registration__form {
    width: 49%;
  }
}

/*mobile*/
@media (max-width: 767px) {
  .registration {
    gap: 40px;
    flex-direction: column;
  }

  .registration__inform {
    width: 100%;
  }

  .registration__form {
    width: 100%;
  }
}
</style>