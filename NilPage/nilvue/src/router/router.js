import Vue from 'vue'
import Router from 'vue-router'

import Stone from '../views/Stone.vue'
import Home from '../views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history', // history -> path 앞에 # 삭제
  routes: [
  { 
    path: '/home', 
    name: 'Home',
    component: Home 
  },
  { 
    path: '/stone', 
    name: 'Stone',
    component: Stone 
    }
  ]
})

export default router;


