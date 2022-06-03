<script>
import { mapActions } from 'vuex'
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
          <p>Home</p>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <p>Settings</p>
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          <p>Profile</p>
        </router-link>
      </li>
      <li>
        <router-link to="/help">
          <p>Help</p>
        </router-link>
      </li>
      <li @click="submitLogout">
        <!-- <router-link to="/login"> -->
        <span>Sign Out</span>
        <!-- <icons class="ticks" icon="more-fill" /> -->
        <!-- </router-link> -->
      </li>
    </ul>
    <!-- <div class="close-button" v-on:click="hidePopup">
      <icons class="ticks" icon="more-fill" />
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.settings-popup-container {
  display: flex;
  align-content: center;
  justify-content: space-between;
  position: absolute;
  top: 56px;
  right: 16px;
  width: 260px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  z-index: 10;

  .settings-popup {
    margin-top: 16px;
  }

  ul {
    width: 100%;
    li {
      &:hover {
        background-color: #f5f5f5;
        text-decoration: underline;
      }

      p {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
