import Vue from 'vue'
import Router from 'vue-router'
import { Message } from 'element-ui'
import Welcome from '@/view/welcome/Welcome.vue'
import IndexPage from '@/view/page/IndexPage.vue'
import LoginPage from '@/view/page/LoginPage.vue'
import CodeGen from '@/view/system/codeGen/CodeGen.vue'

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
                { path: '/system/codeGen', name: CodeGen.name, component: CodeGen },
            ]
        },
    ]
})

/**
 * 路由守卫
 */
const loginPath = '/login'
router.beforeEach((to, from, next) => {
    /**
     * 除登录页以外，从sessionStorage中校验token，未携带token时拦截，跳转到登录页
     */
    // if (to.path !== loginPath) {
    //     if (window.sessionStorage.getItem('token')) {
    //         next()
    //     } else {
    //         Message.error("请先登录")
    //         next({
    //             path: loginPath,
    //             replace: true
    //         })
    //     }
    // }else{
    //     next()
    // }

    next()
})

export default router