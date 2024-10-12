import Vue from 'vue'
import Router from 'vue-router'
import { Message } from 'element-ui'
import Welcome from '@/view/welcome/Welcome.vue'
import IndexPage from '@/component/IndexPage.vue'
import LoginPage from '@/component/LoginPage.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: LoginPage.name,
            component: LoginPage,
        },
        {
            path: '/index',
            name: IndexPage.name,
            component: IndexPage,
            redirect: '/index/welcome',
            children: [
                { path: '/index/welcome', name: Welcome.name, component: Welcome },
            ]
        },
    ]
})

/**
 * 除登录页以外，从sessionStorage中校验token，未携带token时拦截，跳转到登录页
 */
const loginPath = '/login'
router.beforeEach((to, from, next) => {
    if (to.path !== loginPath) {
        if (window.sessionStorage.getItem('userToken')) {
            next()
        } else {
            Message.error("请先登录")
            next({
                path: loginPath,
                replace: true
            })
        }
    }else{
        next()
    }
})

export default router