import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/acerca',
    name: 'Acerca',
    component: () => import('../views/Acerca.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  },

  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/thanks',
    name: 'success',
    component: () => import('../components/SubmissionSuccessful.vue')
  },
  {
    path: '/404',
    name: 'fail',
    component: () => import('../components/SubmissionFail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes

})


export default router

