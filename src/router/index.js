import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import teacher from '@/components/teacher'
import Class from '@/components/class'
import list from '@/components/list'
import menu from '@/components/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {path:'/menu',component:menu,
        children:[
              { path:'teacher',component:teacher},
              { path:'class',component:Class},
              { path:'home',component:home},
              { path:'list',component:list}
        ]
    }
  ],
  routerLinkActive:'active'
})
