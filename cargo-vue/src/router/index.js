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
    {
        path: '/services',
        name: 'services',
        component: () => import('../views/Services.vue')
    },
    {
        path: '/directions',
        name: 'directions',
        component: () => import('../views/Directions.vue')
    },
    {
        path: '/tariffs',
        name: 'tariffs',
        component: () => import('../views/Tariffs.vue')
    },
    {
        path: '/partners',
        name: 'partners',
        component: () => import('../views/Partners.vue')
    },
    {
        path: '/questions',
        name: 'questions',
        component: () => import('../views/Questions.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../views/Contacts.vue')
    },
    // About Links
    {
        path: '/about-us',
        name: 'aboutUs',
        component: () => import('../views/AboutUs.vue')
    },
    {
        path: '/our-team',
        name: 'ourTeam',
        component: () => import('../views/OurTeam.vue')
    },
    {
        path: '/career-in-DATrans',
        name: 'careerDATrans',
        component: () => import('../views/CareerDATrans.vue')
    },
    {
        path: '/documents',
        name: 'documents',
        component: () => import('../views/Documents.vue')
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: () => import('../views/Reviews.vue')
    },
    {
        path: '/donations',
        name: 'donations',
        component: () => import('../views/Donations.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active-navbar'
})

export default router;