import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/pages/Home.vue";
import {HSCopyMarkup as HSStaticMethods} from "preline";


const routes = [
    {
        path: '/',
        component: Home,
    },

    // ADD NEW ROUTES HERE

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to, from, failure) => {
    if (!failure) {
        setTimeout(() => {
            HSStaticMethods.autoInit();
        }, 100)
    }
});

export default router;