import Vue from 'vue'
import VueRouter from 'vue-router'
import Pos from '@/views/Pos.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', 
    component: Pos
  },

]

const router = new VueRouter({
  routes
})

export default router
