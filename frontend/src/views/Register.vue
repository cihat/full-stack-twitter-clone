<script>
import { mapActions } from 'vuex'
import icons from '../components/Icons'

export default {
  name: 'register',
  components: {
    icons
  },
  data() {
    return {
      backendErrors: null,
      loading: false,
      email: '',
      password: '',
      passwordConfirmation: '',
      name: '',
      username: '',
      passwordConfirmation: ''
    }
  },
  methods: {
    ...mapActions('account', ['registerUser']),
    async submitRegister(e) {
      e.preventDefault()
      this.backendErrors = null
      this.loading = true
      try {
        await this.registerUser({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
          username: this.username
        })
        this.$router.push('/login')
      } catch (e) {
        this.backendErrors = e.response.data
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<template>
  <div class="register_container">
    <div class="register_wrapper">
      <div class="register_icon">
        <icons icon="twitter" />
      </div>
      <div class="register_header">
        <h2>Sign-up to Twitter</h2>
      </div>
      <form @submit="submitRegister">
        <div class="form-item">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            v-model="name"
          />
        </div>
        <div class="form-item">
          <input
            type="text"
            placeholder="User Name"
            name="username"
            v-model="username"
          />
        </div>
        <div class="form-item">
          <input
            type="text"
            placeholder="E-mail address"
            name="email"
            v-model="email"
          />
        </div>
        <div class="form-item">
          <input
            type="password"
            placeholder="Password"
            name="password"
            v-model="password"
          />
        </div>
        <div class="form-item">
          <input
            type="password"
            placeholder="Password confirmation"
            name="passwordConfirmation"
            v-model="passwordConfirmation"
          />
        </div>
        <div class="form-item">
          <p class="backend-errors" v-if="backendErrors">
            {{ backendErrors.message }}
          </p>
        </div>
        <div class="form-item">
          <button type="primary" html-type="submit" block="block">
            Register
          </button>
        </div>
        <p v-if="loading">Loading...</p>
        <div class="form-item">
          <p>
            I have an account&#160;
            <router-link to="/login"> <b>Login</b></router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

.register_container {
  min-width: 100vw;
  .register_wrapper {
    width: 400px;
    margin: 100px auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .register_icon {
      width: 3rem;
      svg {
        width: 100%;
        fill: $color-blue;
      }
    }
    .register_header {
      margin-bottom: 20px;
      h2 {
        font-size: 2rem;
        font-weight: black;
      }
    }

    form {
      width: 100%;

      .form-item {
        margin-bottom: 20px;
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

      .backend-errors {
        color: red;
        font-size: 14px;
        margin-top: 10px;
        font-weight: bold;
      }

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
        transition: 1s all ease;
      }
    }
  }
}
</style>
