import {createRouter, createWebHistory } from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import AboutPage from './views/AboutPage.vue'

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingPage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    }
]

const router = createRouter( {
    history: createWebHistory(),
    routes
});

export default router;