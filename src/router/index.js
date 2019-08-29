import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Add from '../components/Add.vue'
import Collect from '../components/Collect.vue'
import Details from '../components/Details.vue'
import List from '../components/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/details',
      component: Details
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/list',
      component: List
    }
  ]
})
