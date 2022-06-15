<script>
export default {
  name: 'HeaderFoto'
}
</script>

<template>
  <div class="profile_foto_container">
    <div class="banner_wrapper">
      <img src="https://picsum.photos/800/400" alt="profile banner foto" />
    </div>
    <div class="profile_foto_container">
      <img src="https://picsum.photos/800/400" alt="profile foto" />
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
    img {
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
    img {
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
