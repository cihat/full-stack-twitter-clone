<script>
// import {login} from '@/services/api'
import icons from '../components/Icons'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'LoginView',
  components: {
    icons
  },
  data() {
    return {
      userInfo: {
        username: 'cihat',
        password: 'password'
      },
      validationError: {
        username: false,
        password: false
      }
    }
  },
  methods: {
    ...mapMutations(['toggleLoginStatus']),
    handleLogin: async function () {
      // try {
      //   const response = await login(this.userInfo)
      //   if (!response.data.user) {
      //     return
      //   }
      //   this.$store.dispatch('setLoginInfo', response.data.user)
      //   return this.$router.push('/')
      // } catch (err) {
      //   this.$notification({
      //     type: 'error',
      //     message: 'Failed when authentication'
      //   })
      // }
    },
    validateForm: function () {
      this.validationError.username = false
      this.validationError.password = false
      if (this.userInfo.username.length < 5) {
        this.validationError.username = true
      }
      if (this.userInfo.password.length < 5) {
        this.validationError.password = true
      }
    }
  }
}
</script>

<template>
  <div class="login">
    <div class="login-icon">
      <icons icon="twitter" />
    </div>
    <div class="login-header">
      <h2>Log in to Twitter</h2>
    </div>
    <div class="login-form">
      <div class="login-form-item">
        <input
          id="username"
          v-model="userInfo.username"
          type="text"
          required
          autocomplete="off"
          @keypress.enter="handleLogin"
        />
        <label for="username">Username</label>
      </div>
      <div class="login-form-item">
        <input
          id="password"
          v-model="userInfo.password"
          type="password"
          required
          autocomplete="off"
          @keypress.enter="handleLogin"
        />
        <label for="password">Password</label>
      </div>
      <div class="login-submit" @click="toggleLoginStatus()">Log in</div>
      <div class="login-footer">
        <p>
          <span>Forgot password?</span>
          <span class="dot">&#183;</span>
          <span>Sign up for Twitter</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$phone-sm: 374px;
$phone: 414px;
$tablet: 1024px;

$color-blue: #1da1f2;
$color-black: #14171a;
$color-dark-gray: #657786;
$color-light-gray: #aab8c2;
$color-extra-light-gray: #e1e8ed;
$color-bg: #15202b;
$hr-color: #38444d;

$tweet-action-green: #17bf63;
$tweet-action-blue: #1da1f2;
$tweet-action-red: #e0245e;

$shadow-white: 0px 0px 0.5rem 0px
  rgba(
    $color: $color-light-gray,
    $alpha: 0.3
  );

$border-dark: 1px solid rgb(56, 68, 77);
$border-light: 1px solid
  rgba(
    $color: $color-light-gray,
    $alpha: 0.5
  );

.login-page {
  min-width: 100vw;
}

.login {
  width: 400px;
  margin: 0 auto;
  margin-top: 20px;
  &-icon {
    width: 3rem;
    svg {
      width: 100%;
      fill: $color-blue;
    }
  }
  &-header {
    h2 {
      font-size: 2rem;
      font-weight: black;
    }
  }
  &-form {
    margin-top: 2.5rem;
    & > * {
      margin-top: 2rem;
    }
    &-item {
      position: relative;
      & + .login-form-item {
        margin-top: 2.2rem;
      }
      input {
        display: block;
        width: 100%;
        font-size: 1.2rem;
        background-color: transparent;
        // color: #fff;
        font-weight: bold;
        padding: 0.8rem 4px;
        border: 1px solid rgba($color: $color-dark-gray, $alpha: 0.3);
        &:focus {
          outline: none;
        }
        &:focus,
        &:valid {
          & ~ label {
            transform: translate(0, -3rem) scale(0.85);
            left: 0px;
          }
        }
      }
      label {
        position: absolute;
        left: 5px;
        top: 50%;
        // color: #fff;
        transform: translate(0, -50%);
        transition: 200ms ease;
        user-select: none;
        pointer-events: none;
        -webkit-user-select: none;
      }
    }
  }
  &-submit {
    background-color: $color-blue;
    font-weight: bold;
    text-align: center;
    border-radius: 999px;
    padding: 1rem;
    color: #fff;
    cursor: pointer;
  }
  &-footer {
    text-align: center;
    color: $color-blue;
    span {
      &.dot {
        margin: 0 8px;
      }
    }
  }
}
@media screen and (max-width: $phone) {
  .login {
    width: 80%;
  }
}
</style>