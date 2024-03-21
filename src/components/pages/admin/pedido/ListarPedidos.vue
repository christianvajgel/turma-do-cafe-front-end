<script setup>

import {onMounted, ref} from "vue";
import axios from "axios";
import router from "@/router.js";

const pedidos = ref(null);
const ok = ref(false);

let valorTotalPedidos = 0;

onMounted(() => {
  listarTodosOsPedidos();
})

function listarTodosOsPedidos(){

  console.log("listar todo os pedidos");

  axios.get('https://localhost:7173/api/Pedido')
      .then(response => {
        pedidos.value = response.data;
        ok.value = true;
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
      });

  // console.log(data);
}

function formatarDataHora(dataHora) {
  const data = new Date(dataHora);
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');

  return `${dia}/${mes}/${ano} - ${hora}:${minuto}`;
}

async function deletarPedido(idPedido) {

  const URL = `https://localhost:7173/api/Pedido/${idPedido}`;

  try {

    const response = await axios.delete(URL);

    console.log(response);

    location.reload();

  } catch (error) {
    console.error(error);
  }
  //console.log(data);
}

async function modificarPedido(acao, idPedido) {

  const URL = `https://localhost:7173/api/Pedido/${acao}-pedido/${idPedido}`;

  try {

    const response = await axios.put(URL);

    console.log(response);

    location.reload();

  } catch (error) {
    console.error(error);
  }
  //console.log(data);
}
// async function enviarPedido(idPedido) {
//
//   const URL = `https://localhost:7173/api/Pedido/enviar-pedido/${idPedido}`;
//
//   try {
//
//     const response = await axios.put(URL);
//
//     console.log(response);
//
//     location.reload();
//
//   } catch (error) {
//     console.error(error);
//   }
//   //console.log(data);
// }

</script>

<template>

  <div>

    <div>
      <h2 class="mt-10 lg:mt-20 font-bold text-2xl text-center md:text-3xl text-gray-800">
        Listar pedidos
      </h2>
    </div>

    <div v-if="ok">

      <!-- Table Section -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Card -->
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                <!-- Header -->
<!--                <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">-->
<!--                  <div>-->
<!--                    <h2 class="text-xl font-semibold text-gray-800">-->
<!--                      Invoices-->
<!--                    </h2>-->
<!--                    <p class="text-sm text-gray-600 dark:text-gray-400">-->
<!--                      Create invoices, edit, download and more.-->
<!--                    </p>-->
<!--                  </div>-->

<!--                  <div>-->
<!--                    <div class="inline-flex gap-x-2">-->
<!--                      <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--                        View all-->
<!--                      </a>-->

<!--                      <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--                        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>-->
<!--                        Create-->
<!--                      </a>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
                <!-- End Header -->

                <!-- Accordion -->
<!--                <div class="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-gray-700">-->
<!--                  <button type="button" class="hs-collapse-toggle py-4 px-6 w-full flex items-center gap-2 font-semibold text-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" id="hs-basic-collapse" data-hs-collapse="#hs-as-table-collapse">-->
<!--                    <svg class="hs-collapse-open:rotate-90 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>-->
<!--                    Insights-->
<!--                  </button>-->
<!--                  <div id="hs-as-table-collapse" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-collapse">-->
<!--                    <div class="pb-4 px-6">-->
<!--                      <div class="flex items-center space-x-2">-->
<!--                  <span class="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-500">-->
<!--                    <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>-->
<!--                  </span>-->
<!--                        <span class="text-sm text-gray-800 dark:text-gray-400">-->
<!--                    There are no insights for this period.-->
<!--                  </span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
                <!-- End Accordion -->

                <!-- Table -->
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">

                    <tr>
                      <th scope="col" class="px-6 py-3 text-start">
                        <div class="flex items-center gap-x-2">
                      <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                        Localizador
                      </span>
                          <div class="hs-tooltip">
                            <div class="hs-tooltip-toggle">
                              <svg class="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                              <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                                Único identificador do pedido para o cliente
                              </span>
                            </div>
                          </div>
                        </div>
                      </th>

                      <th scope="col" class="px-6 py-3 text-start">
                        <div class="flex items-center gap-x-2">
                      <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                        Valor
                      </span>
                        </div>
                      </th>

                      <th scope="col" class="px-6 py-3 text-start">
                        <div class="flex items-center gap-x-2">
                      <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                        Estado
                      </span>
                        </div>
                      </th>

                      <th scope="col" class="px-6 py-3 text-start">
                        <div class="flex items-center gap-x-2">
                      <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                        Criado
                      </span>
                        </div>
                      </th>

                      <th scope="col" class="px-6 py-3 text-end"></th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200">

                    <tr v-for="(pedido, index) in pedidos" :key="index"  class="bg-white hover:bg-gray-50">
                      <td class="size-px whitespace-nowrap">
                        <button type="button" class="block" data-hs-overlay="#hs-ai-invoice-modal">
                          <span class="block px-6 py-2">
                            <router-link :to="`/pedido/${pedido.localizador}`">
                            <span class="font-mono text-sm text-blue-600 dark:text-blue-500">{{ pedido.localizador }}</span>
                            </router-link>
                          </span>
                        </button>
                      </td>

                      <td class="size-px whitespace-nowrap">
                        <button type="button" class="block" data-hs-overlay="#hs-ai-invoice-modal">
                          <span class="block px-6 py-2">
                            <span class="text-sm text-gray-600 dark:text-gray-400">R$ {{ pedido.total.toFixed(2).replace('.',',') }}</span>
                          </span>
                        </button>
                      </td>

                      <td class="size-px whitespace-nowrap">

                          <span v-if="pedido.estado === 'Cancelado'" class="block px-6 py-2">
                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-1.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M385.1 419.1L92.9 126.9C64.8 162.3 48 207.2 48 256c0 114.9 93.1 208 208 208c48.8 0 93.7-16.8 129.1-44.9zm33.9-33.9C447.2 349.7 464 304.8 464 256c0-114.9-93.1-208-208-208c-48.8 0-93.7 16.8-129.1 44.9L419.1 385.1zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>                              </svg>
                              {{ pedido.estado }}
                            </span>
                          </span>

                          <span v-else-if="pedido.estado === 'Estornado'" class="block px-6 py-2">
                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-1.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                              <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 640 512">
                                <path d="M558.1 64L535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-64.6 0 0 0H160v16c0 35.3-28.7 64-64 64H80v93.5L50.7 314.7 32 333.5V128c0-35.3 28.7-64 64-64H383.6l.4 0 174.1 0zM560 320V226.5l29.3-29.3L608 178.5V384c0 35.3-28.7 64-64 64H146.5l0 0-64.6 0 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23L256 400c.1 0 .3 0 .4 0H480V384c0-35.3 28.7-64 64-64h16zM320 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
                              </svg>
                              {{ pedido.estado }}
                            </span>
                          </span>

                          <span v-else-if="pedido.estado === 'Aguardando pagamento'" class="block px-6 py-2">
                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-1.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 576 512">
                                <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"/>
                              </svg>
                              {{ pedido.estado }}
                            </span>
                          </span>

                          <span v-else-if="pedido.estado === 'Em separação'" class="block px-6 py-2">
                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-1.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 640 512">
                                <path d="M480.9 3.1C456-6.2 428.4 6.3 419.1 31.2L384 124.8C382.2 55.6 325.6 0 256 0C185.3 0 128 57.3 128 128c0 2.2 .1 4.3 .2 6.5l65.5 8.2c-1.1-4.7-1.7-9.6-1.7-14.7c0-35.3 28.7-64 64-64s64 28.7 64 64c0 10.7-2.6 20.7-7.2 29.6l7.2 .9 161.4-20.2 27.5-73.4c9.3-24.8-3.3-52.5-28.1-61.8zM58.9 170.1L17.2 253.5c-9 17.9 .6 39.6 19.8 45.1l163.3 46.7c13.9 4 28.8-1.9 36.2-14.3L320 192 75.2 161.4c-6.7-.8-13.3 2.7-16.3 8.7zM576 339.6l-48 13.7v57.2l-184 46V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V456.5l-184-46V353.3L64 339.6v71c0 22 15 41.2 36.4 46.6l204.1 51c10.2 2.5 20.9 2.5 31 0l204.1-51c21.4-5.3 36.4-24.5 36.4-46.6v-71zm46.8-86.1l-41.7-83.4c-3-6.1-9.6-9.6-16.3-8.7L320 192l83.4 139c7.4 12.4 22.3 18.3 36.2 14.3l163.3-46.7c19.3-5.5 28.8-27.2 19.8-45.1z"/>
                              </svg>
                              {{ pedido.estado }}
                            </span>
                          </span>

                          <span v-else-if="pedido.estado === 'Enviado'" class="block px-6 py-2">
                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-1.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
                              <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 640 512">
                                <path d="M352 48H128c-8.8 0-16 7.2-16 16V96H240c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H64V64C64 28.7 92.7 0 128 0H352c35.3 0 64 28.7 64 64V96h42.7c14.9 0 29.1 5.9 39.6 16.4l93.3 93.3c10.5 10.5 16.4 24.7 16.4 39.6V368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H576c0 53-43 96-96 96s-96-43-96-96h-8H352 320 256c0 53-43 96-96 96s-96-43-96-96V368 288h48v44.8c14.1-8.2 30.5-12.8 48-12.8c35.5 0 66.6 19.3 83.2 48H320h32c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM557.7 239.6l-93.3-93.3c-1.5-1.5-3.5-2.3-5.7-2.3H416v96H558l-.2-.2-.2-.2zM208 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm272 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM48 160H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16zM16 224H240c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                              </svg>
                              {{ pedido.estado }}
                            </span>
                          </span>

                          <span v-else-if="pedido.estado === 'Entregue'" class="block px-6 py-2">
                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-1.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                              <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M248 80h94.4c6.3 0 12.1 3.7 14.6 9.5L388.4 160H248V80zM48 208H400V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V208zm152-48H59.6L91 89.5c2.6-5.8 8.3-9.5 14.6-9.5H200v80zM400.9 70c-10.3-23.1-33.2-38-58.5-38H105.6C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V189.6c0-9-1.9-17.8-5.5-26L400.9 70zM337 265c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L337 265z"/>
                              </svg>
                              {{ pedido.estado }}
                            </span>
                          </span>

                          <span v-else-if="pedido.estado === 'Devolvido'" class="block px-6 py-2">
                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-1.5 rounded-full text-xs font-medium bg-violet-100 text-violet-800">
                              <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2 0 0L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24H40z"/>
                              </svg>
                              {{ pedido.estado }}
                            </span>
                          </span>

                      </td>

                      <td class="size-px whitespace-nowrap">
                        <button type="button" class="block" data-hs-overlay="#hs-ai-invoice-modal">
                          <span class="block px-6 py-2">
                            <span class="text-sm text-gray-600 dark:text-gray-400">{{ formatarDataHora(pedido.dataDoPedido) }}</span>
                          </span>
                        </button>
                      </td>

                      <td class="size-px whitespace-nowrap">

                        <div class="flex">
                          <div>
                            <router-link :to="`/pedido/${pedido.localizador}`" target="_blank">
                              <button type="button" class="inline-flex" data-hs-overlay="#hs-ai-invoice-modal">
                                <span class="px-2 py-2">
                                  <span class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 384 512">
                                      <path d="M336 448V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM192 215.6c11 0 20 9 20 20v10.1c7.2 1.1 14.2 2.5 20.6 4.1c10.7 2.5 17.4 13.3 14.9 24.1s-13.3 17.4-24.1 14.9c-11-2.6-21.8-4.5-31.7-4.7c-8.2-.1-16.7 1.6-22.4 4.6c-5.2 2.8-5.3 4.7-5.3 5.9c0 .4 0 .4 0 .4c0 0 0 0 0 0c.3 .4 1.4 1.6 4.4 3.2c6.5 3.5 15.8 6 28.6 9.5l.7 .2c11.2 3 25.4 6.8 36.8 13.2c12.4 7 25.2 19.2 25.4 39.3c.3 20.7-11.7 34.8-25.7 42.5c-6.9 3.8-14.6 6.3-22.3 7.8v10.1c0 11-9 20-20 20s-20-9-20-20V409.7c-10-1.9-19.3-4.8-27.5-7.3l0 0c-2.1-.7-4.2-1.3-6.1-1.9c-10.6-3.1-16.6-14.3-13.5-24.9s14.3-16.6 24.9-13.5c2.5 .7 4.9 1.5 7.2 2.2l0 0 0 0c13.6 4.1 24.2 7.3 35.7 7.7c8.9 .3 17.2-1.5 22.4-4.4c4.4-2.5 5.1-4.5 5-6.9l0-.1c0-.5 .2-2-5-4.8c-6.4-3.6-15.7-6.3-28.3-9.7l-1.7-.5c-10.9-2.9-24.5-6.6-35.4-12.4c-12.2-6.5-25.4-18.4-25.6-38.6c-.1-21 13.2-34.4 26.7-41.5c6.7-3.5 14-5.9 21.3-7.3V235.6c0-11 9-20 20-20zM96 96h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                                    </svg>
                                    Detalhar
                                  </span>
                                </span>
                              </button>
                            </router-link>
                          </div>

                          <div v-if="pedido.estado === 'Em separação'">
                            <button @click="modificarPedido('enviar',pedido.localizador)" type="button" class="inline-flex" data-hs-overlay="#hs-ai-invoice-modal">
                              <span class="px-2 py-2">
                                <span class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 640 512">
                                    <path d="M64 48c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16H76.8c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48H320h32c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM480 512c-53 0-96-43-96-96h-8H352 320 256c0 53-43 96-96 96s-96-43-96-96c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64V96h42.7c14.9 0 29.1 5.9 39.6 16.4l93.3 93.3c10.5 10.5 16.4 24.7 16.4 39.6V368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H576c0 53-43 96-96 96zm78-272c-.1-.1-.2-.3-.4-.4l-93.3-93.3c-1.5-1.5-3.5-2.3-5.7-2.3H416v96H558zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM241 95l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H112c-13.3 0-24-10.7-24-24s10.7-24 24-24H246.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
                                  </svg>
                                  Enviar
                                </span>
                              </span>
                            </button>
                          </div>

                          <div v-if="pedido.estado === 'Cancelado'">
                            <button @click="deletarPedido(pedido.id)" type="button" class="inline-flex" data-hs-overlay="#hs-ai-invoice-modal">
                            <span class="px-2 py-2">
                                <span class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
                                    <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm63 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                                  </svg>
                                  Deletar
                                </span>
                              </span>
                            </button>
                          </div>

                          <div v-if="pedido.estado === 'Aguardando pagamento'">
                            <button @click="modificarPedido('cobrar',pedido.localizador)" type="button" class="inline-flex" data-hs-overlay="#hs-ai-invoice-modal">
                            <span class="px-2 py-2">
                                <span class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 576 512">
                                    <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"/>
                                  </svg>
                                  Cobrar
                                </span>
                              </span>
                            </button>
                          </div>

                          <div v-if="pedido.estado === 'Em separação' || pedido.estado === 'Devolvido'">
                            <button @click="modificarPedido('estornar',pedido.localizador)" type="button" class="inline-flex" data-hs-overlay="#hs-ai-invoice-modal">
                            <span class="px-2 py-2">
                                <span class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 640 512">
                                    <path d="M558.1 64L535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-64.6 0 0 0H160v16c0 35.3-28.7 64-64 64H80v93.5L50.7 314.7 32 333.5V128c0-35.3 28.7-64 64-64H383.6l.4 0 174.1 0zM560 320V226.5l29.3-29.3L608 178.5V384c0 35.3-28.7 64-64 64H146.5l0 0-64.6 0 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23L256 400c.1 0 .3 0 .4 0H480V384c0-35.3 28.7-64 64-64h16zM320 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
                                  </svg>
                                  Estornar
                                </span>
                              </span>
                            </button>
                          </div>


                          <div v-if="pedido.estado === 'Estornado' || pedido.estado === 'Aguardando pagamento'">
                            <button @click="modificarPedido('cancelar',pedido.localizador)" type="button" class="inline-flex" data-hs-overlay="#hs-ai-invoice-modal">
                            <span class="px-2 py-2">
                                <span class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 640 512">
                                    <path d="M558.1 64L535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-64.6 0 0 0H160v16c0 35.3-28.7 64-64 64H80v93.5L50.7 314.7 32 333.5V128c0-35.3 28.7-64 64-64H383.6l.4 0 174.1 0zM560 320V226.5l29.3-29.3L608 178.5V384c0 35.3-28.7 64-64 64H146.5l0 0-64.6 0 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23L256 400c.1 0 .3 0 .4 0H480V384c0-35.3 28.7-64 64-64h16zM320 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
                                  </svg>
                                  Cancelar
                                </span>
                              </span>
                            </button>
                          </div>


                          <div v-if="pedido.estado === 'Entregue'">
                            <button @click="modificarPedido('devolver',pedido.localizador)" type="button" class="inline-flex" data-hs-overlay="#hs-ai-invoice-modal">
                            <span class="px-2 py-2">
                                <span class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 640 512">
                                    <path d="M558.1 64L535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-64.6 0 0 0H160v16c0 35.3-28.7 64-64 64H80v93.5L50.7 314.7 32 333.5V128c0-35.3 28.7-64 64-64H383.6l.4 0 174.1 0zM560 320V226.5l29.3-29.3L608 178.5V384c0 35.3-28.7 64-64 64H146.5l0 0-64.6 0 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23L256 400c.1 0 .3 0 .4 0H480V384c0-35.3 28.7-64 64-64h16zM320 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
                                  </svg>
                                  Devolver
                                </span>
                              </span>
                            </button>
                          </div>


                        </div>

                      </td>
                  </tr>


                  </tbody>
                </table>
                <!-- End Table -->

                <!-- Footer -->
                <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span class="font-semibold text-gray-800">TOTAL:</span> <span> {{ pedidos.length }} </span> pedidos
                    </p>
                  </div>

<!--                  <div>-->
<!--                    <p class="text-sm text-gray-600 dark:text-gray-400">-->
<!--                      <span class="font-semibold text-gray-800">TOTAL:</span> <span> {{ pedidos.length }} </span> pedidos-->
<!--                    </p>-->
<!--                  </div>-->

<!--                  <div>-->
<!--                    <div class="inline-flex gap-x-2">-->
<!--                      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">-->
<!--                        <svg class="size-3" width="16" height="16" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                          <path d="M10.506 1.64001L4.85953 7.28646C4.66427 7.48172 4.66427 7.79831 4.85953 7.99357L10.506 13.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>-->
<!--                        </svg>-->
<!--                        Prev-->
<!--                      </button>-->

<!--                      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">-->
<!--                        Next-->
<!--                        <svg class="size-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                          <path d="M4.50598 2L10.1524 7.64645C10.3477 7.84171 10.3477 8.15829 10.1524 8.35355L4.50598 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>-->
<!--                        </svg>-->
<!--                      </button>-->
<!--                    </div>-->
<!--                  </div>-->



                </div>
                <!-- End Footer -->
              </div>
            </div>
          </div>
        </div>
        <!-- End Card -->
      </div>
      <!-- End Table Section -->

      <!-- Modal -->
<!--      <div id="hs-ai-invoice-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">-->
<!--        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">-->
<!--          <div class="relative flex flex-col bg-white shadow-lg rounded-xl pointer-events-auto dark:bg-gray-800">-->
<!--            <div class="relative overflow-hidden min-h-32 bg-gray-900 text-center rounded-t-xl">-->
<!--              &lt;!&ndash; Close Button &ndash;&gt;-->
<!--              <div class="absolute top-2 end-2">-->
<!--                <button type="button" class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-ai-invoice-modal">-->
<!--                  <span class="sr-only">Close</span>-->
<!--                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>-->
<!--                </button>-->
<!--              </div>-->
<!--              &lt;!&ndash; End Close Button &ndash;&gt;-->

<!--              &lt;!&ndash; SVG Background Element &ndash;&gt;-->
<!--              <figure class="absolute inset-x-0 bottom-0">-->
<!--                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">-->
<!--                  <path fill="currentColor" class="fill-white dark:fill-gray-800" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>-->
<!--                </svg>-->
<!--              </figure>-->
<!--              &lt;!&ndash; End SVG Background Element &ndash;&gt;-->
<!--            </div>-->

<!--            <div class="relative z-10 -mt-12">-->
<!--              &lt;!&ndash; Icon &ndash;&gt;-->
<!--              <span class="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">-->
<!--          <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">-->
<!--            <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>-->
<!--            <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>-->
<!--          </svg>-->
<!--        </span>-->
<!--              &lt;!&ndash; End Icon &ndash;&gt;-->
<!--            </div>-->

<!--            &lt;!&ndash; Body &ndash;&gt;-->
<!--            <div class="p-4 sm:p-7 overflow-y-auto">-->
<!--              <div class="text-center">-->
<!--                <h3 class="text-lg font-semibold text-gray-800">-->
<!--                  Invoice from Preline-->
<!--                </h3>-->
<!--                <p class="text-sm text-gray-500">-->
<!--                  Invoice #3682303-->
<!--                </p>-->
<!--              </div>-->

<!--              &lt;!&ndash; Grid &ndash;&gt;-->
<!--              <div class="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">-->
<!--                <div>-->
<!--                  <span class="block text-xs uppercase text-gray-500">Amount paid:</span>-->
<!--                  <span class="block text-sm font-medium text-gray-800">$316.8</span>-->
<!--                </div>-->
<!--                &lt;!&ndash; End Col &ndash;&gt;-->

<!--                <div>-->
<!--                  <span class="block text-xs uppercase text-gray-500">Date paid:</span>-->
<!--                  <span class="block text-sm font-medium text-gray-800">April 22, 2020</span>-->
<!--                </div>-->
<!--                &lt;!&ndash; End Col &ndash;&gt;-->

<!--                <div>-->
<!--                  <span class="block text-xs uppercase text-gray-500">Payment method:</span>-->
<!--                  <div class="flex items-center gap-x-2">-->
<!--                    <svg class="size-5" width="400" height="248" viewBox="0 0 400 248" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <g clip-path="url(#clip0)">-->
<!--                        <path d="M254 220.8H146V26.4H254V220.8Z" fill="#FF5F00"/>-->
<!--                        <path d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z" fill="#EB001B"/>-->
<!--                        <path d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z" fill="#F79E1B"/>-->
<!--                      </g>-->
<!--                      <defs>-->
<!--                        <clipPath id="clip0">-->
<!--                          <rect width="400" height="247.2" fill="white"/>-->
<!--                        </clipPath>-->
<!--                      </defs>-->
<!--                    </svg>-->
<!--                    <span class="block text-sm font-medium text-gray-800">•••• 4242</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash; End Col &ndash;&gt;-->
<!--              </div>-->
<!--              &lt;!&ndash; End Grid &ndash;&gt;-->

<!--              <div class="mt-5 sm:mt-10">-->
<!--                <h4 class="text-xs font-semibold uppercase text-gray-800">Summary</h4>-->

<!--                <ul class="mt-3 flex flex-col">-->
<!--                  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700">-->
<!--                    <div class="flex items-center justify-between w-full">-->
<!--                      <span>Payment to Front</span>-->
<!--                      <span>$264.00</span>-->
<!--                    </div>-->
<!--                  </li>-->
<!--                  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700">-->
<!--                    <div class="flex items-center justify-between w-full">-->
<!--                      <span>Tax fee</span>-->
<!--                      <span>$52.8</span>-->
<!--                    </div>-->
<!--                  </li>-->
<!--                  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-800 dark:border-gray-700">-->
<!--                    <div class="flex items-center justify-between w-full">-->
<!--                      <span>Amount paid</span>-->
<!--                      <span>$316.8</span>-->
<!--                    </div>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->

<!--              &lt;!&ndash; Button &ndash;&gt;-->
<!--              <div class="mt-5 flex justify-end gap-x-2">-->
<!--                <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">-->
<!--                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>-->
<!--                  Invoice PDF-->
<!--                </a>-->
<!--                <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>-->
<!--                  Print-->
<!--                </a>-->
<!--              </div>-->
<!--              &lt;!&ndash; End Buttons &ndash;&gt;-->

<!--              <div class="mt-5 sm:mt-10">-->
<!--                <p class="text-sm text-gray-500">If you have any questions, please contact us at <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="#">example@site.com</a> or call at <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="tel:+1898345492">+1 898-34-5492</a></p>-->
<!--              </div>-->
<!--            </div>-->
<!--            &lt;!&ndash; End Body &ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <!-- End Modal -->

    </div>

  </div>

</template>

<style scoped>

</style>