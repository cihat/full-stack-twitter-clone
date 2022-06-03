<script>
import { mapActions, mapGetters } from 'vuex'
import Icons from '@/components/Icons'

export default {
  name: 'popup',
  props: {
    showPopup: {
      type: Function
    },
    hidePopup: {
      type: Function
    }
  },
  components: {
    Icons
  },
  computed: {
    ...mapGetters('account', ['user'])
  },
  methods: {
    ...mapActions('account', ['logout']),
    async submitLogout(e) {
      e.preventDefault()
      try {
        await this.logout()
        this.$router.push('/login')
      } catch (e) {
        console.log('e.response.data', e.response.data)
      }
    }
  }
}
</script>

<template>
  <div class="settings-popup-container">
    <ul>
      <li>
        <router-link to="/">
          <p>Add an existing account</p>
        </router-link>
      </li>
      <li @click="submitLogout">
        <p>
          Sign Out&#160;
          <span> @{{ this.user.username }} </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.settings-popup-container {
  display: flex;
  align-content: center;
  justify-content: space-between;
  position: absolute;
  top: 80px;
  right: 10px;
  width: 260px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.135);
  padding: 16px;
  z-index: 10;

  .settings-popup {
    margin-top: 16px;
  }

  ul {
    width: 100%;
    li {
      padding: 10px;
      &:hover {
        background-color: #f5f5f5;
        text-decoration: underline;
        cursor: pointer;
      }

      p {
        span {
          font-weight: 700;
          color: #333333;
        }
      }
    }
  }
}
</style>
