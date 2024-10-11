import Vue from 'vue'
import Router from 'vue-router'
import { Message } from 'element-ui'
import Welcome from '@/view/welcome/Welcome.vue'
import Index from '@/component/Index.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Index',
            component: Index,
            redirect: '/index/welcome',
            children: [
                { path: '/index/welcome', name: Welcome.name, component: Welcome },
            ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    next()
    // if (to.name === 'musicList') {
    //     if (window.sessionStorage.getItem('userToken')) {
    //         next()
    //     } else {
    //         Message.error("请先登录")
    //     }
    // }else{
    //     next()
    // }
})

export default router