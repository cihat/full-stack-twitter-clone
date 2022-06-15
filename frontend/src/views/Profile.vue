<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Tweet from '@/components/Tweet'
import ProfileHeader from '@/components/Profile/Header'
import HeaderFoto from '@/components/Profile/HeaderFoto'
import ProfileInfo from '@/components/Profile/ProfileInfo'

export default {
  name: 'Profile',
  data() {
    return {
      username: ''
    }
  },
  components: {
    Tweet,
    ProfileHeader,
    HeaderFoto,
    ProfileInfo
  },
  created() {
    this.username = this.$route.params.username
    this.fetchUser(this.username)
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('user', ['fetchUser'])
  }
}
</script>

<template>
  <div class="profile container">
    <div class="grid grid-center">
      <ProfileHeader :user="user" />
      <HeaderFoto />
      <ProfileInfo :user="user" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  padding: 0;
}
</style>
