<script>
import SkeletonLoaderVue from 'skeleton-loader-vue'
export default {
  name: 'HeaderFoto',
  data() {
    return {
      isLoadedBannerImage: false,
      isLoadedProfileImage: false
    }
  },
  components: {
    SkeletonLoaderVue
  },
  methods: {
    onBannerImageLoad() {
      this.isLoadedBannerImage = true
    },
    onProfileImageLoad() {
      this.isLoadedBannerImage = true
    }
  }
}
</script>

<template>
  <div class="profile_foto_container">
    <div class="banner_wrapper">
      <SkeletonLoaderVue
        v-if="!isLoadedBannerImage"
        type="rect"
        :width="600"
        :height="200"
        animation="fade"
        class="banner_foto"
      />

      <img
        v-else
        class="banner_foto"
        src="https://picsum.photos/800/400"
        alt="profile banner foto"
        loading="lazy"
        @load="onBannerImageLoad"
      />
    </div>
    <div class="profile_foto_container">
      <SkeletonLoaderVue
        v-if="isLoadedProfileImage"
        class="profile_foto"
        type="circle"
        :width="135"
        :height="135"
        animation="fade"
      />

      <img
        v-else
        class="profile_foto"
        src="https://picsum.photos/800/400"
        alt="profile foto"
        @load="onProfileImageLoad"
        loading="lazy"
      />
    </div>
    <div class="edit_profile_wrapper">
      <button>Edit Profile</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile_foto_container {
  position: relative;

  .banner_wrapper {
    min-height: 200px;
    .banner_foto {
      width: 600px;
      height: auto;
      max-height: 200px;
      cursor: pointer;
    }
  }

  .profile_foto_container {
    cursor: pointer;
    position: absolute;
    top: 133px;
    left: 20px;
    .profile_foto {
      width: 135px;
      height: 135px;
      max-height: 200px;
      border-radius: 50%;
      outline: 4px solid #fff;
    }
  }

  .edit_profile_wrapper {
    display: flex;
    justify-content: flex-end;
    margin: 12px 16px 0 0;
    margin-bottom: 30px;

    button {
      padding: 12px 16px;
      border-radius: 36px;
      border: 1px solid #1da1f2;
      cursor: pointer;
      background-color: white;
      font-size: 15px;
      font-weight: 700;
      color: #1da1f2;

      &:hover {
        background-color: #1da1f2;
        color: white;
        transition: 200ms all;
      }
    }
  }
}
</style>
