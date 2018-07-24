import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: () => import('@/components/demo1')
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: () => import('@/components/demo2')
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: () => import('@/components/demo3')
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: () => import('@/components/demo4')
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: () => import('@/components/demo5')
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: () => import('@/components/demo6')
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: () => import('@/components/demo7')
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: () => import('@/components/demo8')
    },
    {
      path: '/demo9',
      name: 'demo9',
      component: () => import('@/components/demo9')
    },
    {
      path: '/demo10',
      name: 'demo10',
      component: () => import('@/components/demo10')
    },
    {
      path: '/demo11',
      name: 'demo11',
      component: () => import('@/components/demo11')
    },
    {
      path: '/demo12',
      name: 'demo12',
      component: () => import('@/components/demo12')
    },
    {
      path: '/demo13',
      name: 'demo13',
      component: () => import('@/components/demo13')
    }
  ]
})
