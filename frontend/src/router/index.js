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
import TweetDetail from '../views/TweetDetail.vue'

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
        beforeEnter(to, from, next) {
          if (store.state.account.user) return next('/')
          return next()
        }
      },
      {
        path: '/login',
        name: 'auth',
        meta: { layout: 'auth' },
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.account.user) return next('/')
          return next()
        }
      },
      {
        path: '/',
        name: 'Home',
        meta: { layout: 'default' },
        component: Home,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/home',
        name: 'Home',
        meta: { layout: 'default' },
        component: Home,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/:username/status/:tweetId',
        name: 'TweetDetail',
        meta: { layout: 'default' },
        component: TweetDetail,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/users',
        name: 'Users',
        meta: { layout: 'default' },
        component: Users,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/users/:userId',
        name: 'User',
        meta: { layout: 'default' },
        component: User,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/about',
        name: 'About',
        meta: { layout: 'default' },
        component: About,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/explore',
        name: 'Explore',
        meta: { layout: 'default' },
        component: Explore,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/notifications',
        name: 'Notifications',
        meta: { layout: 'default' },
        component: Notifications,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/messages',
        name: 'Messages',
        meta: { layout: 'default' },
        component: Messages,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/bookmarks',
        name: 'Bookmarks',
        meta: { layout: 'default' },
        component: Bookmarks,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/lists',
        name: 'Lists',
        meta: { layout: 'default' },
        component: Lists,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/more',
        name: 'More',
        meta: { layout: 'default' },
        component: More,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/:username',
        name: 'Profile',
        meta: { layout: 'default' },
        component: Profile,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      }
      // {
      //   path: '/*',
      //   meta: { layout: 'default' },
      //   beforeEnter(to, from, next) {
      //     if (!store.state.account.user) return next('/login')
      //     return next('/')
      //   }
      // }
    ]
  })
}
