import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import Bookmarks from '../views/Bookmarks.vue'
import Explore from '../views/Explore.vue'
import Home from '../views/Home.vue'
import Lists from '../views/Lists.vue'
import Messages from '../views/Messages.vue'
import More from '../views/More.vue'
import Notifications from '../views/Notifications.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/users/:userId',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: Bookmarks
  },
  {
    path: '/lists',
    name: 'Lists',
    component: Lists
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/more',
    name: 'More',
    component: More
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
