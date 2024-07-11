import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path:'/', redirect:'/chess' }, // 默认路径重定向至首页
    { path:'/chess', name:'chess_rule', component: () => import('../components/rule.vue') },
    // { path:'/shopfloor/collectionFile', name:'collectionFile', component: () => import('@/views/CollectionFile/index.vue') },
    // { path:'/shopfloor/powerPanel', name:'powerPanel', component: () => import('../views/PowerPanel/index.vue') },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:routes
})

export default router;