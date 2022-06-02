<script>
// import {login} from '@/services/api'
import icons from '../components/Icons'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'LoginView',
  components: {
    icons
  },
  data() {
    return {
      backendError: null,
      loading: false,
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('account', ['login']),
    async submitLogin(e) {
      e.preventDefault()
      this.backendError = null
      this.loading = true
      try {
        await this.login({
          email: this.email,
          password: this.password
        })
        this.$router.push('/')
      } catch (e) {
        console.log('e.response.data', e.response.data)

        this.backendError = e.response.data
      } finally {
        this.loading = false
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
      <form @submit="submitLogin">
        <div class="login-form-item">
          <input
            id="username"
            type="text"
            v-model="email"
            value="email"
            name="email"
            required
            autocomplete="off"
            @keypress.enter="handleLogin"
          />
          <label for="username">E-mail</label>
        </div>
        <div class="login-form-item">
          <input
            id="password"
            type="password"
            v-model="password"
            name="password"
            value="password"
            required
            autocomplete="off"
            @keypress.enter="handleLogin"
          />
          <label for="password">Password</label>
        </div>
        <div class="backend_errors_container">
          <p class="backend-errors" v-if="backendError">
            {{ backendError.message }}
          </p>
        </div>

        <div class="login-submit">
          <button type="primary" html-type="submit" block="block">Login</button>
        </div>
      </form>
      <div class="login-footer">
        <p>
          <span>Forgot password?</span>
          <span class="dot">&#183;</span>
          <router-link to="/register">
            <span>Sign up for Twitter</span>
          </router-link>
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

    .backend_errors_container {
      margin-top: 2rem;
      & > p {
        color: red;
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
      }
    }
  }
  &-submit {
    button {
      background-color: $color-blue;
      padding: 1rem;
      height: 50px;
      width: 100%;
      height: 100%;
      font-weight: bold;
      color: #fff;
      text-align: center;
      border-radius: 999px;
      cursor: pointer;
    }
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
