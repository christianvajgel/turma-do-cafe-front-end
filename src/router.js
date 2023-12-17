import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/pages/Home.vue";
import {HSCopyMarkup as HSStaticMethods} from "preline";
import Produtos from "@/components/pages/Produtos.vue";
import Detalhamento from "@/components/pages/Detalhamento.vue";


const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/produtos',
        component: Produtos,
    },
    {
        path: '/detalhamento',
        component: Detalhamento,
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