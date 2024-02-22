import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/pages/Home.vue";
import {HSCopyMarkup as HSStaticMethods} from "preline";
import Produtos from "@/components/pages/Produtos.vue";
import Detalhamento from "@/components/pages/Detalhamento.vue";
import GerenciarProduto from "@/components/pages/admin/produto/GerenciarProduto.vue";
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
        path: '/gerenciarproduto',
        component: GerenciarProduto,
    },

    {
        path: '/adicionar',
        component: AdicionarProduto,
    },

    {
        path: '/editar/:id',
        component: EditarProduto,
    },

    {
        path: '/deletar/:id',
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