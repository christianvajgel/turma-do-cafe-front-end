<script setup>

import axios from "axios";
import {onMounted, ref, watch} from "vue";
import { useRoute } from 'vue-router';
import router from "@/router.js";

const data = ref(null);
const ok = ref(false);
const uuid = ref('');

watch(ok, (newValue, oldValue) => {
  if (newValue === true) {
    console.log('A variável ok mudou para true')
  }
});

onMounted(() => {
  listarProdutoEspecifico();
});

async function listarProdutoEspecifico() {

  const URL = `https://localhost:7173/api/Produto/${useRoute().params.id}`;

  try {
    const response = await axios.get(URL);
    data.value = response.data;
    uuid.value = data.value.id;
    ok.value = true;

  } catch (error) {
    console.error(error);
  }
}

async function deletarProduto() {

  const URL = `https://localhost:7173/api/Produto/${uuid.value}`;

  try {
    const response = await axios.delete(URL);
    console.log(response);
    await router.push("/produtos");

  } catch (error) {
    console.error(error);
  }
}

function copiarUUIDParaAreaDeTransferencia() {

  navigator.clipboard.writeText(uuid.value).then(() => {
  }).catch(err => {
    console.error('Erro ao copiar o UUID: ', err)
  })
}

</script>

<template>

  <div>
    <h2 class="mt-10 lg:mt-20 font-bold text-2xl text-center md:text-3xl text-gray-800 dark:text-gray-200">
      Deletar produto
    </h2>
  </div>

  <div v-if="ok">
    <div class="max-w-[50rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" style="display: flex; justify-content: center; align-items: center;">
      <div class="grid  gap-6">

        <div class="group sm:min-w-[40rem] flex flex-col h-full rounded-xl">
          <div class="flex flex-col justify-center items-center rounded-t-xl">
            <img :src="data.imagem" class="w-96 self-center imagem-card  rounded-xl mt-4 md:mt-6" alt="cafe"/>
          </div>
          <div class="p-4 md:p-6">
              <span class="block mb-1 text-xs font-semibold uppercase text-yellow-800 dark:text-rose-500">
                {{ data.origem }}
              </span>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              {{ data.nome }}
            </h3>
            <p class="mt-3 text-gray-500">
              {{ data.slogan }}
            </p>
          </div>

          <br>
          <br>

          <div v-if="ok" class="p-5">

            <form @submit.prevent="">
              <div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
                <div class="sm:col-span-3">
                  <label for="id-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    ID
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <input v-model="uuid" disabled type="text" id="id-produto" name="id-produto" class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                    <button @click="copiarUUIDParaAreaDeTransferencia" type="button" class="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

                        <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/>

                      </svg>
                    </button>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="imagem-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Imagem
                  </label>
                </div>

                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <input disabled v-model="data.imagem" placeholder="Link da imagem do produto" id="imagem-produto" type="url" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="nome-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Nome
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <input disabled v-model="data.nome" placeholder="Nome do produto" id="nome-produto" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="preco-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Preço
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <input disabled v-model="data.preco" placeholder="Preço do produto em reais (somente números)" id="preco-produto" type="number" min="1" step="0.01" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                </div>

                <div class="sm:col-span-3">
                  <label for="peso-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Peso
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <input disabled v-model="data.peso" placeholder="Peso do produtos em gramas (somente números)" id="peso-produto" type="number" min="1" step="1" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                </div>

                <div class="sm:col-span-3">
                  <label for="tipo-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Tipo
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <label for="tipo-produto" class="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                      <input disabled v-model="data.tipo" value="Café" type="radio" name="tipo-produto" class="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="tipo-produto">
                      <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">Café</span>
                    </label>
                    <label for="tipo-produto-acessorio" class="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                      <input disabled v-model="data.tipo" value="Acessório" type="radio" name="tipo-produto" class="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="tipo-produto-acessorio">
                      <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">Acessório</span>
                    </label>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="avaliacao-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Avaliação
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <input disabled v-model="data.avaliacao" placeholder="Avaliação do produto (somente números de 0 a 5)" id="avaliacao-produto" type="number" min="0" max="5" step="1" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                </div>

                <div class="sm:col-span-3">
                  <label for="descricao-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Descrição
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <textarea disabled v-model="data.descricao" rows="8" placeholder="Descrição do produto" id="descricao-produto" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" ></textarea>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="slogan-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Slogan
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <input disabled v-model="data.slogan" placeholder="Slogan do produto" id="slogan-produto" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="origem-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Origem
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <input disabled v-model="data.origem" placeholder="Origem (país) do produto" id="origem-produto" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="estoque-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Estoque
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <input disabled v-model="data.estoque" placeholder="Estoque do produto (somente números)" id="estoque-produto" type="number" min="0" step="1" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                </div>
              </div>

              <div class="mt-10 flex justify-end gap-x-2">
                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Cancelar
                </button>
                <button @click="deletarProduto" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-700 bg-white hover:text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Deletar produto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>