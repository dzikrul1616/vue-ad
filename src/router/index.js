import { createRouter,createWebHistory } from "vue-router";
import dashboardContent from '../views/dashboardContent.vue'
import MyUser from '../views/MyUser.vue'

const routes = [
    {
        path: '/',
        name: 'dashboardContent',
        component: dashboardContent
    },
    {
        path: '/user',
        name: 'User',
        component :MyUser
    },
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router