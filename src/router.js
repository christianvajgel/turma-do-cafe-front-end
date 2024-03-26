import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/pages/Home.vue";
import {HSCopyMarkup as HSStaticMethods} from "preline";
import Produtos from "@/components/pages/Produtos.vue";
import Detalhamento from "@/components/pages/Detalhamento.vue";
import EditarProduto from "@/components/pages/admin/produto/EditarProduto.vue";
import DeletarProduto from "@/components/pages/admin/produto/DeletarProduto.vue";
import AdicionarProduto from "@/components/pages/admin/produto/AdicionarProduto.vue";
import Carrinho from "@/components/pages/Carrinho.vue";
import FinalizarPedido from "@/components/pages/FinalizarPedido.vue";
import ConfirmacaoPedido from "@/components/pages/ConfirmacaoPedido.vue";
import ListarPedidos from "@/components/pages/admin/pedido/ListarPedidos.vue";
import BuscarPedido from "@/components/pages/BuscarPedido.vue";
import Equipe from "@/components/pages/institucionais/Equipe.vue";
import Loja from "@/components/pages/institucionais/Loja.vue";
import Contato from "@/components/pages/institucionais/Contato.vue";


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
        path: '/carrinho',
        component: Carrinho,
    },
    {
        path: '/finalizacao',
        component: FinalizarPedido,
    },
    {
        path: '/pedido/:localizador',
        component: ConfirmacaoPedido,
    },
    {
        path: '/detalhar-produto/:id',
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

    {
        path: '/listar-pedidos',
        component: ListarPedidos,
    },

    {
        path: '/buscar-pedido',
        component: BuscarPedido,
    },

    {
        path: '/equipe',
        component: Equipe,
    },

    {
        path: '/loja',
        component: Loja,
    },

    {
        path: '/contato',
        component: Contato,
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