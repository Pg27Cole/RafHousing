import {createRouter, createWebHistory } from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import AboutPage from './views/AboutPage.vue'
import UserPage from './views/UserPage.vue'
import ContactPage from './views/ContactPage.vue'
import LeaderboardPage from './views/LeaderboardPage.vue'

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
    },
    {
        path: '/user/:id',
        name: 'User',
        component: UserPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        component: LeaderboardPage
    }
]

const router = createRouter( {
    history: createWebHistory(),
    routes
});

export default router;