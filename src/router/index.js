import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // 当页面切换时滚动条处于什么位置
    scrollBehavior() {
        return { x: 0, y: 0 } // 最上、最左边
    },
    routes: [
        {
            path: '/',
            name: 'Index',
            component: resolve => require(['@/pages/index/Index'], resolve)
        }
    ]
})
