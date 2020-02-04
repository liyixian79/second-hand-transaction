import Vue from 'vue'
import VueRouter from 'vue-router'
import WebHeader from '../views/layout/WebHeader'
import WebFooter from '../views/layout/WebFooter'
import BaseLayout from '../views/layout/BaseLayout'
import Home from '../views/home/Home'
import NewsItem from '../views/home/components/NewsItem'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    redirect: { name: 'NewsItem' },
    children: [
      {
        path: 'News',
        name: 'NewsItem',
        component: NewsItem,
        props: true,
      },
      {
        path: 'Trading',
        name: 'NewsItem',
        component: NewsItem,
        props: true,
      },
      {
        path: 'Graduation',
        name: 'NewsItem',
        component: NewsItem,
        props: true,
      },
      {
        path: 'Find',
        name: 'NewsItem',
        component: NewsItem,
        props: true,
      },
      {
        path: 'Corner',
        name: 'NewsItem',
        component: NewsItem,
        props: true,
      },
    ],
  },{
    path: '/baselayout',
    name: 'home',
    component: BaseLayout
  },{
    path: '/baselayout2',
    name: 'home',
    component:WebFooter
  },{
    path: '/baselayout3',
    name: 'home',
    component:WebHeader
  }
]

const router = new VueRouter({
  routes
})

export default router
