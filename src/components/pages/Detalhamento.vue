<script setup>

import axios from "axios";
import {onMounted, ref, watch} from "vue";
import {useRoute} from 'vue-router';
import {gerarUUID} from "@/global/functions.js";
import router from "@/router.js";


const data = ref(null);

const ok = ref(false);

const subprodutos = ref(null);

const uuid = useRoute().params.id;

watch(ok, (newValue, oldValue) => {
  if (newValue === true) {
    console.log('A variável ok mudou para true')
  }
});

onMounted(() => {
  console.log("mounted especifico");
  listarTodosOsProdutos();
  listarProdutoEspecifico();
});

// function listarProdutoEspecifico(){
//
//   console.log("listar");
//
//   axios.get(`https://localhost:7173/api/Produto/${useRoute().params.id}`)
//       .then(response => {
//         data.value = response.data;
//       })
//       .catch(error => {
//         console.error(error);
//       });
//
//   console.log(data);
// }

async function listarProdutoEspecifico() {

  console.log("listar especifico");

  const URL = `https://localhost:7173/api/Produto/${useRoute().params.id}`;

  console.log(URL);

  try {

    // const response = await axios.get(`https://localhost:7173/api/Produto/c9b6c3f5-f27e-499b-a4b2-17775589795e`);
    // const response = await axios.get(`https://localhost:7173/api/Produto/${useRoute().params.id}`);
    const response = await axios.get(URL);


    data.value = response.data;

    // setTimeout(function() {
    //   // Whatever you want to do after the wait
    // }, 1000);

    ok.value = true;

  } catch (error) {
    console.error(error);
  }

  console.log(data);
}

function listarTodosOsProdutos(){

  console.log("listar subprodutos");

  axios.get('https://localhost:7173/api/Produto')
      .then(response => {
        subprodutos.value = response.data;

        console.log(uuid);

        // TODO: Separar em metodo e parametros 

        const tipo = "Café"; // Substitua pelo valor desejado
        const id = uuid; // Substitua pelo valor desejado

        // Filtrar diretamente o JSON antes de converter para array
        subprodutos.value = subprodutos.value.filter(item => item.tipo === tipo && item.id !== id);

        // console.log('JSON: ' + JSON.stringify(jsonFiltrado));
        //
        // subprodutos.value = jsonFiltrado;





        // TODO: falta fazer um filter para filtrar com base no Tipo (cafe ou acessorio) e mostrar de acordo com o produto em detalhamento

        //subprodutos.value = subprodutos.value.filter(item => item.id !== `${useRoute().params.id}`);

        //subprodutos.filter(item => item.id !== "d3c12f52-ba35-4e79-a478-7950ac8425ee");
      })
      .catch(error => {
        console.error(error);
      });

  console.log(subprodutos);
}

const item = ref({
  id: gerarUUID(),
  quantidade: 1,
});

async function adicionarProdutoNoCarrinho() {
  const jsonForm = JSON.stringify(item.value);
  console.log(jsonForm);

  try {
    const response = await axios.post('https://localhost:7173/api/Item', jsonForm, {
      headers: {
        'Content-Type': 'application/json'
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

  <div v-if="ok">

    <!--    Card detalhamento #######################-->

    <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="aspect-w-16 aspect-h-7">
        <img class="w-full object-cover rounded-xl" :src="data.imagem" alt="Image Description">
      </div>

      <!-- Grid -->
      <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div class="lg:col-span-1">
          <h2 class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
            {{ data.nome }}
          </h2>
          <p class="mt-2 md:mt-4 text-gray-500">
            {{ data.descricao }}
          </p>

          <br>

          <button @click="adicionarProdutoNoCarrinho" type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Comprar
            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" fill="#000" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H320.7c-.5-5.3-.7-10.6-.7-16c0-10.9 1-21.6 2.9-32h-143l-9.1-48H339.2c9.2-18 21.4-34.2 36-48H161.6L131.1 80H520.6L489.1 192.1c2.3-.1 4.6-.1 6.9-.1c14.3 0 28.3 1.7 41.6 4.9l35-124.3C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM352 368a144 144 0 1 0 288 0 144 144 0 1 0 -288 0zm208 16H512v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H432c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V304c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/>
            </svg>
          </button>

          <div>

            <br>

            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              Gerenciar
            </h3>

            <br>


            <router-link :to="`/editar-produto/${useRoute().params.id}`">

              <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-yellow-500 hover:bg-yellow-100 hover:text-yellow-500 disabled:opacity-50 disabled:pointer-events-none">

                Editar

                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="#EAB308" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M36.4 360.9L13.4 439 1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1L73 498.6l78.1-23c12.4-3.6 23.7-9.9 33.4-18.4c1.4-1.2 2.7-2.5 4-3.8L492.7 149.3c21.9-21.9 24.6-55.6 8.2-80.5c-2.3-3.5-5.1-6.9-8.2-10L453.3 19.3c-25-25-65.5-25-90.5 0L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4zm46 13.5c1.7-5.6 4.5-10.8 8.4-15.2c.6-.6 1.1-1.2 1.7-1.8L321 129 383 191 154.6 419.5c-4.7 4.7-10.6 8.2-17 10.1l-23.4 6.9L59.4 452.6l16.1-54.8 6.9-23.4z"/>
                </svg>

              </button>

            </router-link>


            <router-link :to="`/deletar-produto/${useRoute().params.id}`">

              <button type="button" class="ml-1.5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:bg-red-200 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none">

                Deletar

                <svg class="flex-shrink-0 w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="#D2222D" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"/>
                </svg>

              </button>

            </router-link>

          </div>

        </div>
        <!-- End Col -->

        <div class="lg:col-span-2">
          <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
            <!-- Icon Block -->
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="#1f2937" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M176 0H400c26.5 0 48.1 21.8 47.1 48.2c-.2 5.3-.4 10.6-.7 15.8H552c13.3 0 24 10.7 24 24c0 92.6-33.5 157-78.5 200.7c-44.3 43.1-98.3 64.8-138.2 75.8c-23.4 6.5-39.4 26-39.4 45.6c0 20.9 17 37.9 37.9 37.9H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h26.1c20.9 0 37.9-17 37.9-37.9c0-19.6-15.9-39.2-39.4-45.6c-39.9-11-93.9-32.7-138.1-75.8C33.5 245 0 180.6 0 88C0 74.7 10.7 64 24 64H129.6c-.3-5.2-.5-10.4-.7-15.8C127.9 21.8 149.5 0 176 0zM133.2 112H48.9c5.1 66.3 31.1 111.2 63 142.3c22.4 21.8 48.3 37.3 73.2 48.3c-22.7-40.3-42.8-100.5-51.9-190.6zM390.8 302.6c24.9-11 50.8-26.5 73.2-48.3c32-31.1 58-76 63-142.3H442.7c-9.1 90.1-29.2 150.3-51.9 190.6zM295.2 86.5c-2.9-5.9-11.4-5.9-14.3 0l-19.2 38.9c-1.2 2.4-3.4 4-6 4.4L212.7 136c-6.6 1-9.2 9-4.4 13.6l31 30.2c1.9 1.8 2.7 4.5 2.3 7.1l-7.3 42.7c-1.1 6.5 5.7 11.5 11.6 8.4L284.3 218c2.3-1.2 5.1-1.2 7.4 0l38.4 20.2c5.9 3.1 12.7-1.9 11.6-8.4L334.4 187c-.4-2.6 .4-5.2 2.3-7.1l31-30.2c4.7-4.6 2.1-12.7-4.4-13.6l-42.9-6.2c-2.6-.4-4.9-2-6-4.4L295.2 86.5z"/>
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  Avaliação
                </h3>

                <!-- Rating -->
                <div class=" mt-4 flex items-center">
                  <button type="button" class="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
                    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </button>
                  <button type="button" class="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
                    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </button>
                  <button type="button" class="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
                    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </button>
                  <button type="button" class="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
                    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </button>
                  <button type="button" class="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-gray-300 hover:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-600 dark:hover:text-yellow-500">
                    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </button>
                </div>
                <!-- End Rating -->
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 320 512" fill="#1f2937" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V71.7c-3.1 .1-6.2 .3-9.3 .6c-23.2 1.9-47.2 7.4-67.2 20.1C38.7 105.6 23.5 126 18 154.2c-3.9 20.3-2 38.8 6.1 55.2c8 16 20.9 27.6 34.8 36.2c26.2 16.2 61.9 25.3 92.9 33.2l2.3 .6c33.9 8.6 62.6 16.1 81.7 28c9 5.6 14.3 11.2 17.1 16.9c2.7 5.3 4.2 12.8 2 24.5c-2.9 14.7-13.4 26.9-34.5 34.9c-21.6 8.2-52 10.9-87.6 5.9c-22.6-3.3-61.8-12.7-83-22.1c-12.1-5.4-26.3 .1-31.7 12.2s.1 26.3 12.2 31.7C57 423.2 101.1 433.4 126 437l.1 0c3.3 .5 6.6 .9 9.9 1.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24V439.4c19.3-1.3 37.4-4.9 53.5-11c31.9-12.1 57.7-35.2 64.5-70.6c3.9-20.3 2-38.8-6.1-55.2c-8-16-20.9-27.6-34.8-36.2c-26.2-16.2-61.9-25.3-92.9-33.2l-2.3-.6c-33.9-8.6-62.6-16.1-81.7-28c-9-5.6-14.3-11.2-17.1-16.9c-2.7-5.3-4.2-12.8-2-24.5c2.9-14.8 10.1-24 20.2-30.4c10.9-6.9 26.3-11.2 45.3-12.7c38.3-3.1 83.1 5.3 113.9 12.5c12.9 3.1 25.8-4.9 28.9-17.8s-4.9-25.8-17.8-28.9c-18.7-4.4-44.2-9.7-71.5-12.5V24z"/>
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  Preço
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  R$ {{ Number(data.preco).toFixed(2).replace('.',',') }}
                </p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="#1f2937" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M256 464C141.1 464 48 370.9 48 256c0-22 3.4-43.1 9.7-63l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v30.4c0 15.9 15.2 27.3 30.5 23c15.9-4.5 28.3-17 32.8-32.8l1.5-5.4c4.6-16.1 15.3-29.7 29.8-38l9.2-5.3c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c73.6 3.6 137.2 45.6 171.2 106.3L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3C448.7 385.4 361.5 464 256 464zm0 48A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  Origem
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  {{ data.origem }}
                </p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="#1f2937" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M216 88a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm118.4 40c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88s-88 39.4-88 88c0 14.4 3.5 28 9.6 40H120c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512H464c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128H334.4zM256 176H392l72 288H48l72-288H256z"/>
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  Peso
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  {{ data.peso }} g
                </p>
              </div>
            </div>
            <!-- End Icon Block -->
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Features -->

    <!--  End  Card detalhamento #######################-->

    <br>

    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 class="font-bold text-xl md:text-2xl text-gray-800 dark:text-gray-200">
        Você também pode gostar...
      </h2>
    </div>

    <br>

    <div v-if="ok" id="subprodutos">



      <div>
        <!-- Card Blog -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <!-- Title -->
<!--          <div class="max-w-2xl text-center mx-auto mb-10 lg:mb-14">-->
<!--            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Read our latest news</h2>-->
<!--            <p class="mt-1 text-gray-600 dark:text-gray-400">We've helped some great companies brand, design and get to market.</p>-->
<!--          </div>-->
          <!-- End Title -->





          <!-- Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">

            <!-- Card -->
            <div v-for="(subproduto, index) in subprodutos" :key="subproduto.id">
              <a :href="`/detalhar-produto/${subproduto.id}`" class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <div class="aspect-w-16 aspect-h-9">
                  <img class="w-full object-cover rounded-t-xl" :src="subproduto.imagem" alt="Image Description">
                </div>
                <div class="p-4 md:p-5">
                  <p class="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
                    {{ subproduto.origem }}
                  </p>
                  <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    {{ subproduto.nome }}
                  </h3>
                </div>
              </a>
            </div>
            <!-- End Card -->

          </div>

        </div>
        <!-- End Card Blog -->
      </div>


    <!--   End Card group ##########-->



    </div>

    <!--    Card group ##########-->

<!--    <div>-->

<!--      &lt;!&ndash; Card Blog &ndash;&gt;-->
<!--      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">-->
<!--        &lt;!&ndash; Grid &ndash;&gt;-->
<!--        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">-->
<!--          &lt;!&ndash; Card &ndash;&gt;-->
<!--          <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">-->
<!--            <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">-->

<!--              <img src="https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=2071&auto=format&fit=crop" class="self-center" alt="cafe" width="75%" height="75%"/>-->

<!--            </div>-->
<!--            <div class="p-4 md:p-6">-->
<!--        <span class="block mb-1 text-xs font-semibold uppercase text-yellow-800 dark:text-blue-500">-->
<!--          Café Brasil-->
<!--        </span>-->
<!--              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">-->
<!--                Do jeito que o brasileiro gosta-->
<!--              </h3>-->
<!--              <p class="mt-3 text-gray-500">-->
<!--                Rich aftertaste dripper saucer frappuccino.-->
<!--              </p>-->
<!--            </div>-->
<!--            <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">-->
<!--              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--                Conheça-->
<!--              </a>-->
<!--              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--                Comprar-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; End Card &ndash;&gt;-->

<!--          &lt;!&ndash; Card &ndash;&gt;-->
<!--          <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">-->
<!--            <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">-->

<!--              <img src="https://images.unsplash.com/photo-1511759066510-46958c3fffa0?q=80&w=2076&auto=format&fit=crop" class="self-center" alt="cafe" width="75%" height="75%"/>-->

<!--            </div>-->
<!--            <div class="p-4 md:p-6">-->
<!--        <span class="block mb-1 text-xs font-semibold uppercase text-yellow-800 dark:text-rose-500">-->
<!--          Café Blue Mountain-->
<!--        </span>-->
<!--              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">-->
<!--                Um café das alturas-->
<!--              </h3>-->
<!--              <p class="mt-3 text-gray-500">-->
<!--                Froth half and half french press blue mountain.-->
<!--              </p>-->
<!--            </div>-->
<!--            <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">-->
<!--              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--                Conheça-->
<!--              </a>-->
<!--              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--                Comprar-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; End Card &ndash;&gt;-->

<!--          &lt;!&ndash; Card &ndash;&gt;-->
<!--          <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">-->
<!--            <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">-->

<!--              <img src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=2069&auto=format&fit=crop" class="self-center" alt="cafe" width="75%" height="75%"/>-->

<!--            </div>-->
<!--            <div class="p-4 md:p-6">-->
<!--        <span class="block mb-1 text-xs font-semibold uppercase text-yellow-800">-->
<!--          Café Equador-->
<!--        </span>-->
<!--              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">-->
<!--                Microlote especial américa-->
<!--              </h3>-->
<!--              <p class="mt-3 text-gray-500">-->
<!--                Trifecta, organic skinny cappuccino froth black sugar.-->
<!--              </p>-->
<!--            </div>-->
<!--            <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">-->
<!--              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--                Conheça-->
<!--              </a>-->
<!--              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--                Comprar-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; End Card &ndash;&gt;-->
<!--        </div>-->
<!--        &lt;!&ndash; End Grid &ndash;&gt;-->
<!--      </div>-->
<!--      &lt;!&ndash; End Card Blog &ndash;&gt;-->

<!--    </div>-->

    <!--   End Card group ##########-->


  </div>

</template>

<style scoped>

</style>