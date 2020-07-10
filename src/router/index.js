import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import EquipInfo from '../views/EquipInfo.vue'
import TableEle from '../views/tableEle.vue'
import ChooseMedio from '../views/chooseMedio.vue'
import PlatDetail from '../views/platDetail.vue'
import MedioConfig from '../views/medioConfig.vue'
import PreviewConfig from '../views/previewConfig.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path:'/equipinfo/',
    name:'equipInfo',
    component: EquipInfo
  },
  {
    path:'/ChooseMedio/',
    name:'ChooseMedio',
    component: ChooseMedio
  },
  {
    path:'/PlatDetail/',
    name:'PlatDetail',
    component: PlatDetail
  },
  {
    path:'/MedioConfig/',
    name:'MedioConfig',
    component: MedioConfig
  },
  {
    path: '/PreviewConfig/',
    name: 'PreviewConfig',
    component: PreviewConfig
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/tableEle',
    name: 'TableEle',
    component: TableEle
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
