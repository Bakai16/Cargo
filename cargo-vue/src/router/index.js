import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    // Header
    {
        path: '/business',
        name: 'business',
        component: () => import('../views/Business.vue')
    },
    {
        path: '/individuals',
        name: 'individuals',
        component: () => import('../views/Individuals.vue')
    },
    // Geo NavBar
    {
        path: '/about-company',
        name: 'company',
        component: () => import('../views/Company.vue')
    },
    // About Links
    {
        path: '/about-us',
        name: 'aboutUs',
        component: () => import('../views/AboutUs.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active-navbar'
})

export default router;