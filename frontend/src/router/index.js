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
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/register',
        name: 'register',
        meta: { layout: 'auth' },
        component: Register,
        beforeenter(to, from, next) {
          if (store.state.auth.user) return next('/')
          return next()
        }
      },
      {
        path: '/login',
        name: 'auth',
        meta: { layout: 'auth' },
        component: Login,
        beforeenter(to, from, next) {
          if (store.state.auth.user) return next('/')
          return next()
        }
      },
      {
        path: '/',
        name: 'Home',
        meta: { layout: 'default' },
        component: Home,
        beforeenter(to, from, next) {
          if (!store.state.auth.user) return next('/login')
          return next()
        }
      },
      {
        path: '/users',
        name: 'Users',
        meta: { layout: 'default' },
        component: Users
      },
      {
        path: '/users/:userId',
        name: 'User',
        meta: { layout: 'default' },
        component: User
      },
      {
        path: '/about',
        name: 'About',
        meta: { layout: 'default' },
        component: About
      },
      {
        path: '/home',
        name: 'Home',
        meta: { layout: 'default' },
        component: Home
      },
      {
        path: '/explore',
        name: 'Explore',
        meta: { layout: 'default' },
        component: Explore
      },
      {
        path: '/notifications',
        name: 'Notifications',
        meta: { layout: 'default' },
        component: Notifications
      },
      {
        path: '/messages',
        name: 'Messages',
        meta: { layout: 'default' },
        component: Messages
      },
      {
        path: '/bookmarks',
        name: 'Bookmarks',
        meta: { layout: 'default' },
        component: Bookmarks
      },
      {
        path: '/lists',
        name: 'Lists',
        meta: { layout: 'default' },
        component: Lists
      },
      {
        path: '/profile/:id',
        name: 'Profile',
        meta: { layout: 'default' },
        component: Profile
      },
      {
        path: '/more',
        name: 'More',
        meta: { layout: 'default' },
        component: More
      }
    ]
  })
}
