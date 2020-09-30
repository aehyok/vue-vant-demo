import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由机制
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
        },
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: '关于',
        },
        component: () => import('@/views/About.vue'),
    },
]

const router = new VueRouter({
    routes,
})

export default router