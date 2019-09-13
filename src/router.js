import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Work from './views/Work.vue'
import Profile from './views/Profile.vue'
import Link from './views/Link.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/link',
      name: 'link',
      component: Link
    }
  ]
})
