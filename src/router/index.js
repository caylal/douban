import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MoreList from '@/components/MoreList'
import Detail from '@/components/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/more-list/:type',
      name: 'more-list',
      component: MoreList
    },
    {
      path:'/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
