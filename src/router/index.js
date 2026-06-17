import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Doacao from '../views/Doacao.vue'
import Campanhas from '../views/Campanhas.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/doacao',
        name: 'doacao',
        alias: '/Doacao',
        component: Doacao
    },
    {
        path: '/campanhas',
        name: 'Campanhas',
        alias: '/Campanhas',
        component: () => Campanhas
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0 }
    }
})

export default router