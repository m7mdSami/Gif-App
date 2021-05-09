import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Favorite from '@/views/Favorite/index.vue'
import Details from '@/views/Details/index.vue';
import NotFound from '@/views/NotFound/index.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  { 
    path: '/404', 
    component: NotFound 
  },  
  { 
    path: '*', 
    redirect: '/404' 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
