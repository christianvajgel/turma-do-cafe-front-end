<script setup>

import {onMounted, ref} from 'vue';
import axios from 'axios';

const data = ref(null);
const loading = ref(true);

onMounted(() => {
  listarTodosOsProdutos();
})

function listarTodosOsProdutos(){

  console.log("listar");

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

  // console.log(data);
}


</script>

<template>

  <div>


    <!--    Carrousel ########## -->
    <div>


      <!-- Slider -->
      <div data-hs-carousel='{
          "loadingClasses": "opacity-0"
        }' class="relative">
        <div class="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
          <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div class="hs-carousel-slide">
              <div class="flex justify-center h-full p-6">
                <!--                <span class="self-center text-4xl transition duration-700">First slide</span>-->
                <img src="https://images.unsplash.com/photo-1561986810-4f3ba2f46ceb?q=80&w=2070&auto=format&fit=crop" class="self-center transition duration-700" alt="cafe"/>
              </div>
            </div>
            <div class="hs-carousel-slide">
              <div class="flex justify-center h-full p-6">
                <img src="https://images.unsplash.com/photo-1629248989876-07129a68946d?q=80&w=2069&auto=format&fit=crop" class="self-center transition duration-700" alt="cafe"/>
              </div>
            </div>
            <div class="hs-carousel-slide">
              <div class="flex justify-center h-full p-6">
                <img src="https://images.unsplash.com/photo-1584850379382-0eac0eec7011?q=80&w=2092&auto=format&fit=crop" class="self-center transition duration-700" alt="cafe"/>
              </div>
            </div>
          </div>
        </div>

        <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        </div>
      </div>
      <!-- End Slider -->

    </div>
    <!--   End Carrousel ########## -->

    <br>
    <br>

    <div>
      <div style="text-align: center;" v-if="loading">Carregando...</div>
      <div style="text-align: center;" v-else>RESPONSE: <br> {{ data }}</div>
    </div>

    <br>
    <br>

    <!--    Card group ##########-->

    <div>

      <!-- Card Blog -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Card -->
          <div v-for="(produto, index) in data" :key="produto.id"
               class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
<!--            <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">-->
            <div class="flex flex-col justify-center items-center rounded-t-xl">

              <img :src="produto.imagem"
                   class="self-center imagem-card border rounded-xl mt-4 md:mt-6 shadow-sm" alt="cafe"/>

            </div>
            <div class="p-4 md:p-6">
              <span class="block mb-1 text-xs font-semibold uppercase text-yellow-800 dark:text-rose-500">
                {{ produto.origem }}
              </span>
              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                {{ produto.nome }}
              </h3>
              <p class="mt-3 text-gray-500">
                {{ produto.descricao }}
              </p>
            </div>
            <div
                class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                 href="#">
                Conheça
              </a>
              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                 href="#">
                Comprar
              </a>
            </div>
          </div>
          <!-- End Card -->



          <!--          &lt;!&ndash; Card &ndash;&gt;-->
          <!--          <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">-->
          <!--            <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">-->

          <!--              <img src="https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=2071&auto=format&fit=crop" class="self-center" alt="cafe" width="75%" height="75%"/>-->

          <!--            </div>-->
          <!--            <div class="p-4 md:p-6">-->
          <!--              <span class="block mb-1 text-xs font-semibold uppercase text-yellow-800 dark:text-blue-500">-->
          <!--                Brasil-->
          <!--              </span>-->
          <!--              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">-->
          <!--                Mogiana-->
          <!--              </h3>-->
          <!--              <p class="mt-3 text-gray-500">-->
          <!--                Do jeito que o brasileiro gosta.-->
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
          <!--          <div-->
          <!--              class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">-->
          <!--            <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">-->

          <!--              <img src="https://images.unsplash.com/photo-1511759066510-46958c3fffa0?q=80&w=2076&auto=format&fit=crop"-->
          <!--                   class="self-center" alt="cafe" width="75%" height="75%"/>-->

          <!--            </div>-->
          <!--            <div class="p-4 md:p-6">-->
          <!--              <span class="block mb-1 text-xs font-semibold uppercase text-yellow-800 dark:text-rose-500">-->
          <!--                Jamaica-->
          <!--              </span>-->
          <!--              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">-->
          <!--                Blue Mountain-->
          <!--              </h3>-->
          <!--              <p class="mt-3 text-gray-500">-->
          <!--                Um café das alturas.-->
          <!--              </p>-->
          <!--            </div>-->
          <!--            <div-->
          <!--                class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">-->
          <!--              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"-->
          <!--                 href="#">-->
          <!--                Conheça-->
          <!--              </a>-->
          <!--              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"-->
          <!--                 href="#">-->
          <!--                Comprar-->
          <!--              </a>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          &lt;!&ndash; End Card &ndash;&gt;-->


        </div>
        <!-- End Grid -->
      </div>
      <!-- End Card Blog -->

    </div>

    <!--   End Card group ##########-->


  </div>

</template>

<style scoped>

.imagem-card {
  width: 80%;
  height: auto;
}

</style>