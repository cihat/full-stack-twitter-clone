<script>
import Icons from '@/components/Icons'
import SettingsPopup from './settings-popup.vue'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showPopupState: false
    }
  },
  components: {
    Icons,
    SettingsPopup
  },
  computed: {
    ...mapGetters('account', ['user'])
  },
  methods: {
    showPopup() {
      this.showPopupState = true
    },
    hidePopup() {
      this.showPopupState = false
    }
  }
}
</script>

<template>
  <div class="sidebar_left_container">
    <ul>
      <li>
        <router-link to="/home" tag="a">
          <icons icon="home-fill" v-if="$route.name === 'Home'" />
          <icons icon="home" v-else />
          <h4 :class="{ active: $route.name === 'Home' }">Home</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/explore" tag="a">
          <icons icon="explore-fill" v-if="$route.name === 'Explore'" />
          <icons icon="explore" v-else />
          <h4 :class="{ active: $route.name === 'Explore' }">Explore</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/notifications" tag="a">
          <icons
            icon="notifications-fill"
            v-if="$route.name === 'Notifications'"
          />
          <icons icon="notifications" v-else />

          <h4 :class="{ active: $route.name === 'Notifications' }">
            Notifications
          </h4>
        </router-link>
      </li>
      <li>
        <router-link to="/messages" tag="a">
          <icons icon="messages-fill" v-if="$route.name === 'Messages'" />
          <icons icon="messages" v-else />
          <h4 :class="{ active: $route.name === 'Messages' }">Messages</h4>
        </router-link>
      </li>
      <li class="bookmarks">
        <router-link to="/bookmarks" tag="a">
          <icons icon="bookmarks-fill" v-if="$route.name === 'Bookmarks'" />
          <icons icon="bookmarks" v-else />
          <h4 :class="{ active: $route.name === 'Bookmarks' }">Bookmarks</h4>
        </router-link>
      </li>
      <li class="lists">
        <router-link to="/lists" tag="a">
          <icons icon="lists-fill" v-if="$route.name === 'Lists'" />
          <icons icon="lists" v-else />
          <h4 :class="{ active: $route.name === 'Lists' }">Lists</h4>
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: `/${user.username}` }" tag="a">
          <icons icon="profile-fill" v-if="$route.name === 'Profile'" />
          <icons icon="profile" v-else />
          <h4 :class="{ active: $route.name === 'Profile' }">Profile</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/more" tag="a">
          <icons icon="more-fill" v-if="$route.name === 'More'" />
          <icons icon="more" v-else />
          <h4 :class="{ active: $route.name === 'More' }">More</h4>
        </router-link>
      </li>
      <li>
        <button>Tweet</button>
        <icons icon="hidden" class="hidden" />
      </li>
      <li>
        <div
          class="user_status_wrapper"
          v-on:click="showPopup"
          v-click-outside="hidePopup"
        >
          <img
            class="user_image"
            src="../../assets/img/twitter_egg_blue.png"
            alt=""
          />
          <div class="user_info">
            <p class="name">{{ user.name }}</p>
            <p class="username">{{ `@${user.username}` }}</p>
          </div>
          <icons class="ticks" icon="more-fill" />
        </div>
        <div class="popup-container" v-if="showPopupState">
          <SettingsPopup
            :showPopup="showPopup"
            :hidePopup="hidePopup"
          ></SettingsPopup>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.sidebar_left_container {
  position: relative;
  height: calc(100% - 50px);

  ul {
    align-content: center;
    padding: auto;
    height: calc(100vh - 50px);

    li {
      &:nth-last-child(3) {
        margin-bottom: 20px;
      }
      a {
        transition: background-color 0.1s;
        padding: 12px;
        box-sizing: content-box;
        border-radius: 9999px;
        display: inline-flex;
        align-items: center;
        border-radius: 100px;

        &:hover {
          background-color: rgba(#1da1f2, 0.1);
        }
        svg {
          transition: fill 0.1s;
          width: 26px;
          margin-right: 20px;
        }
        h4 {
          transition: color 0.1s;
          font-weight: 700;
          font-size: 20px;
          line-height: 22.27px;
          color: #333333;
        }
      }
      a:hover {
        svg {
          fill: #1da1f2;
        }

        h4 {
          color: #1da1f2;
        }
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 232px;
        height: 48px;
        padding: 16px 69px;
        border-radius: 100px;
        font-weight: 700;
        font-size: 15px;
        line-height: 17.58px;
        color: #fff;
        background-color: #1da1f2;
        transition: 1s color, 1s background-color;
        svg {
          display: none;
        }
      }
      button:hover {
        color: #1da1f2;
        background-color: #fff;
        border: 1px solid #1da1f2;
      }
      button:active {
        outline: none;
        border: none;
      }
      button:focus {
        outline: 0;
      }

      .hidden {
        display: none;
      }
    }
  }

  .active {
    color: #1da1f2;
  }

  @media (max-width: 1264px) {
    ul {
      margin-left: auto;
      margin-right: auto;
      li {
        a {
          h4 {
            display: none;
          }
          svg {
            margin-left: auto;
            margin-right: auto;
            margin-left: 0.4rem;
            margin-right: 0.4rem;
          }
        }
        button {
          display: none;
        }
        .hidden {
          display: inline;
          transition: fill 0.5s;
          fill: #fff;
          background-color: #1da1f2;
          margin-right: 8px;
          margin-left: 8px;
          width: 46px;
          padding: 8px;
          border-radius: 100px;
        }

        &.bookmarks {
          display: none;
        }

        &.lists {
          display: none;
        }
      }
    }
  }
  .user_status_wrapper {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
    min-width: 230px;
    padding: 10px;
    border-radius: 100px;
    border: #1da1f2 solid 1px;

    &:hover {
      cursor: pointer;
      background-color: #33333347;
      transition: 500ms all;
    }

    .user_image {
      width: 40px;
      height: 40px;
      border-radius: 100px;
      margin-right: 8px;
    }

    .user_info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      p:first-child {
        font-weight: 700;
        font-size: 20px;
        line-height: 22.27px;
        color: #333333;
      }
      p:last-child {
        font-weight: 400;
        font-size: 15px;
        line-height: 17.58px;
        color: #333333;
      }
    }

    .ticks {
      width: 30px;
      height: 30px;
      margin-left: auto;
    }
  }

  .popup-container {
    position: absolute;
    left: 250px;
    bottom: 280px;
    z-index: 100;
  }
}
</style>
