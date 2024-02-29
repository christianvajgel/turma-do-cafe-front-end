import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/pages/Home.vue";
import {HSCopyMarkup as HSStaticMethods} from "preline";
import Produtos from "@/components/pages/Produtos.vue";
import Detalhamento from "@/components/pages/Detalhamento.vue";
import EditarProduto from "@/components/pages/admin/produto/EditarProduto.vue";
import DeletarProduto from "@/components/pages/admin/produto/DeletarProduto.vue";
import AdicionarProduto from "@/components/pages/admin/produto/AdicionarProduto.vue";


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
        path: '/detalhamento/:id',
        component: Detalhamento,
    },

    {
        path: '/adicionar-produto',
        component: AdicionarProduto,
    },

    {
        path: '/editar-produto/:id',
        component: EditarProduto,
    },

    {
        path: '/deletar-produto/:id',
        component: DeletarProduto,
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