import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Work from './views/Work.vue'
import Profile from './views/Profile.vue'
import TestPage from './views/TestPage.vue'

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
      path: '/testpage',
      name: 'testPage',
      component: TestPage
    }
  ]
})
