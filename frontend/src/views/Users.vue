<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      users: [],
      errMessage: '',
      isLoading: true
    }
  },
  async mounted() {
    try {
      this.users = await this.fetchUsers()
    } catch (e) {
      this.errMessage = e.message
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<template lang="pug">
.about
  h1 Full Stack Twitter Clone
  h2 Users
  p(v-if='errMessage') {{ errMessage }}
  p(v-else-if='isLoading') Please wait...
  div(v-else)
    p There are {{ users.length }} passenger waiting
    ol
      li(v-for='user in users', :key='user.id')
        a(:href='`/users/${user._id}`') {{ user.name }}
</template>
