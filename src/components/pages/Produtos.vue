<script setup>

import {onMounted, ref} from 'vue';
import axios from 'axios';
import router from "@/router.js";
import {obterIdDoCarrinho} from "@/global/functions.js";

const data = ref(null);
const loading = ref(true);

onMounted(() => {
  listarTodosOsProdutos();
})

function listarTodosOsProdutos(){

  axios.get('https://localhost:7173/api/Produto')
      .then(response => {
        data.value = response.data;
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        loading.value = false;
      });
}

const carrinho = ref({
  id: obterIdDoCarrinho()
});

async function adicionarProdutoNoCarrinho(idProduto) {

  const jsonForm = JSON.stringify(carrinho.value);

  try {
    const response = await axios.post('https://localhost:7173/api/Carrinho/adicionar-produto-carrinho', jsonForm, {
      headers: {
        'Content-Type': 'application/json',
        'Quantidade':1,
        'IdProduto':idProduto
      }
    });
    console.log('ADICIONAR CARRINHO -> Resposta do servidor:', response.data);
    await router.push("/produtos");

  } catch (error) {
    console.error(`ADICIONAR CARRINHO -> Erro ao enviar o formulário: ${error}`);
  }
}

</script>

<template>

  <div>

    <br>
    <br>
    <br>

    <div class="mt-5 max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight titulo-header">Produtos</h2>
    </div>
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(produto, index) in data" :key="produto.id"
               class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="flex flex-col justify-center items-center rounded-t-xl">
              <img :src="produto.imagem" class="self-center imagem-card border rounded-xl mt-4 md:mt-6 shadow-sm group-hover:scale-105 transition-transform duration-500 ease-in-out" alt="cafe"/>
            </div>
            <div class="p-4 md:p-6">
              <span class="block mb-1 text-xs font-semibold uppercase text-yellow-800 dark:text-rose-500">
                {{ produto.origem }}
              </span>
              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                {{ produto.nome }}
              </h3>
              <p class="mt-3 text-gray-500">
                {{ produto.slogan }}
              </p>
            </div>
            <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <router-link :to="`/detalhar-produto/${produto.id}`" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                Conheça
              </router-link>
              <a @click="adicionarProdutoNoCarrinho(produto.id)" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#comprar">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.imagem-card {
  width: 80%;
  height: auto;
}

</style>