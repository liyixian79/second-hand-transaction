import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsAdd from '../views/news/newsAdd'
import NewsDetail from '../views/news/newsDetail'
import BaseLayout from '../views/layout/BaseLayout'
import Home from '../views/home/Home'
import NewsItem from '../views/home/components/NewsItem'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home,
		redirect: {
			name: 'NewsItem'
		},
		children: [{
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
	}, {
		path: '/baselayout',
		name: 'home',
		component: BaseLayout
	},
	{
		path: '/News/id/:id',
		name: 'NewsDetail',
		component: NewsDetail,
	},
	{
		path: '/News/add',
		name: 'NewsAdd',
		component: NewsAdd,
	},
	{
		path: '*',
		redirect: {
			name: 'Home'
		},
	}
]

const router = new VueRouter({
	routes
})

export default router
