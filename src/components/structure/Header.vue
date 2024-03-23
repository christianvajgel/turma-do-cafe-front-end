<script setup>

import prod1 from '/src/assets/images/products/prod-1.jpg';
import prod2 from '/src/assets/images/products/prod-2.jpg';
import Carrinho from "@/components/pages/Carrinho.vue";
import {useRoute} from "vue-router";


</script>

<template>

  <div>

    <!-- ========== HEADER ========== -->
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <nav class="relative max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
        <div class="flex items-center justify-between">
          <a class="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand">Turma do Café</a>
        </div>

        <div class="flex items-center ms-auto sm:ms-0 sm:order-3">
          <div class="sm:hidden">
            <button type="button" class="p-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#navbar-offcanvas-example" aria-controls="navbar-offcanvas-example" aria-label="Toggle navigation">
              Menu
              <svg class="hs-overlay-open:hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            </button>
          </div>

          <div class="ps-3 sm:ps-6 sm:ms-6 sm:border-s sm:border-gray-300 dark:border-gray-700">

            <router-link to="/carrinho">

              <button type="button" class="w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#navbar-secondary-content" aria-controls="navbar-secondary-content" aria-label="Toggle navigation">
                <!--              <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>-->
                <!--              <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>-->

                <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="#000" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>

                </svg>
  <!--              <svg id="svg1" class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="red" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
  <!--                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>-->

  <!--              </svg>-->

                <!--              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">-->
                <!--              <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
                <!--                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>-->
                <!--              </svg>-->


              </button>

            </router-link>

          </div>
        </div>

        <div id="navbar-offcanvas-example" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e basis-full grow sm:order-2 sm:static sm:block sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto dark:bg-gray-800 dark:border-r-gray-700 sm:dark:border-r-transparent hidden" tabindex="-1" data-hs-overlay-close-on-resize>
          <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <a class="font-medium text-blue-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0" href="/produtos" aria-current="page">Produtos</a>
<!--            <a class="font-medium text-blue-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0" href="/detalhamento" aria-current="page">Detalhamento</a>-->
<!--            <a class="font-medium text-blue-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0" href="/adicionar-produto" aria-current="page">Adicionar Produto</a>-->

            <a class="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0" href="/buscar-pedido">Buscar pedido</a>
            <a class="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0" href="#">Loja</a>
            <a class="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0" href="#">Sobre</a>
            <a class="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0" href="#">Contato</a>

            <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
              <button type="button" class="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium px-6 sm:px-0">
                Admin
                <svg class="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg py-2 px-3 sm:px-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="/adicionar-produto">
                  Adicionar Produto
                </a>
                <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                  <button type="button" class="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    Pedido
                    <svg class="sm:-rotate-90 flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>

                  <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="/listar-pedidos">
                      Listar
                    </a>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                      Enviar
                    </a>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                      Team Account
                    </a>
                  </div>
                </div>

                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                  Downloads
                </a>
                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                  Team Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <!-- ========== END HEADER ========== -->



    <!-- Offcanvas -->
<!--    <div id="navbar-secondary-content" class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e dark:bg-gray-800 dark:border-gray-700" tabindex="-1">-->
<!--      <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">-->
<!--        <h3 class="font-bold text-gray-800 dark:text-white">-->
<!--          Carrinho-->
<!--        </h3>-->
<!--        <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#navbar-secondary-content">-->
<!--          <span class="sr-only">Close offcanvas</span>-->
<!--          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>-->
<!--        </button>-->
<!--      </div>-->

<!--      <br>-->
<!--      <div style="text-align: center;">-->
<!--        <span>TOTAL<br><br><b>R$ 1234,56</b></span>-->
<!--        <br>-->
<!--        <br>-->
<!--        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">-->
<!--          Fechar compra-->
<!--          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>-->
<!--        </button>-->
<!--      </div>-->

<!--      &lt;!&ndash;      Inicio carrinho conteudo&ndash;&gt;-->
<!--      <div class="p-0">-->

<!--          &lt;!&ndash; Card Blog &ndash;&gt;-->
<!--        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">-->
<!--          &lt;!&ndash; Remove the grid and set flex direction to column &ndash;&gt;-->
<!--          <div class="flex flex-col gap-6">-->
<!--            &lt;!&ndash; Card &ndash;&gt;-->
<!--            <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">-->
<!--              <div class="h-52 flex flex-col justify-center items-center rounded-t-xl" style="background-color: #fcfcfc">-->
<!--                &lt;!&ndash;                <svg class="w-28 h-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
<!--                &lt;!&ndash;                  <rect width="56" height="56" rx="10" fill="white"/>&ndash;&gt;-->
<!--                &lt;!&ndash;                  <path d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z" fill="url(#paint0_linear_2204_541)"/>&ndash;&gt;-->
<!--                &lt;!&ndash;                  <path d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z" fill="#2684FF"/>&ndash;&gt;-->
<!--                &lt;!&ndash;                  <defs>&ndash;&gt;-->
<!--                &lt;!&ndash;                    <linearGradient id="paint0_linear_2204_541" x1="24.734" y1="29.2284" x2="16.1543" y2="44.0429" gradientUnits="userSpaceOnUse">&ndash;&gt;-->
<!--                &lt;!&ndash;                      <stop stop-color="#0052CC"/>&ndash;&gt;-->
<!--                &lt;!&ndash;                      <stop offset="0.92" stop-color="#2684FF"/>&ndash;&gt;-->
<!--                &lt;!&ndash;                    </linearGradient>&ndash;&gt;-->
<!--                &lt;!&ndash;                  </defs>                &ndash;&gt;-->
<!--                &lt;!&ndash;                </svg>&ndash;&gt;-->

<!--                <img :src="prod1" alt="café" width="75%" height="75%">-->

<!--              </div>-->
<!--              <div class="p-4 md:p-6">-->
<!--                <span class="block mb-1 text-xs font-semibold uppercase text-yellow-800 dark:text-blue-500">-->
<!--                  Café-->
<!--                </span>-->
<!--                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">-->
<!--                  Produto 1-->
<!--                </h3>-->
<!--                <p class="mt-3 text-gray-500">-->
<!--                  Extra  seasonal, id, crema as breve kopi-luwak caramelization.-->
<!--                </p>-->
<!--              </div>-->
<!--              <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">-->
<!--                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->

<!--                  <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="#000" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <path d="M395 25.9c12.5-12.5 32.8-12.5 45.3 0l45.8 45.8c12.5 12.5 12.5 32.8 0 45.3l-66.9 66.9L328.1 92.8 395 25.9zm-78.2 78.2l91.1 91.1L164.7 438.4c-1.5 1.5-3.1 3-4.7 4.4V408c0-4.4-3.6-8-8-8H112V360c0-4.4-3.6-8-8-8H69.2c1.4-1.6 2.9-3.2 4.4-4.7L316.8 104.1zM51.4 384.7c1.7-5.8 4-11.4 6.8-16.7H96v40c0 4.4 3.6 8 8 8h40v37.7c-5.3 2.8-10.9 5.1-16.7 6.8L19.8 492.2 51.4 384.7zm400.1-370c-18.7-18.7-49.1-18.7-67.9 0L62.3 336C50 348.3 41 363.5 36.1 380.2L.3 501.7c-.8 2.8-.1 5.8 2 7.9s5.1 2.8 7.9 2l121.6-35.8c16.7-4.9 31.9-13.9 44.2-26.2L497.4 128.3c18.7-18.7 18.7-49.1 0-67.9L451.5 14.6zM317.7 173.1c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-144 144c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l144-144z"/>-->
<!--                  </svg>-->

<!--                </a>-->
<!--                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->


<!--                  <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="#000" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <path d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.5 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z"/>-->
<!--                  </svg>-->

<!--                </a>-->
<!--              </div>-->
<!--            </div>-->
<!--            &lt;!&ndash; End Card &ndash;&gt;-->

<!--&lt;!&ndash;            &lt;!&ndash; Card &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">&ndash;&gt;-->
<!--&lt;!&ndash;              &lt;!&ndash; ... (rest of the card content remains unchanged) ... &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            &lt;!&ndash; End Card &ndash;&gt;&ndash;&gt;-->

<!--&lt;!&ndash;            &lt;!&ndash; Card &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">&ndash;&gt;-->
<!--&lt;!&ndash;              &lt;!&ndash; ... (rest of the card content remains unchanged) ... &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            &lt;!&ndash; End Card &ndash;&gt;&ndash;&gt;-->

<!--          </div>-->
<!--          &lt;!&ndash; End Flex Container &ndash;&gt;-->
<!--        </div>-->
<!--        &lt;!&ndash; End Card Blog &ndash;&gt;-->


<!--      </div>-->
<!--      &lt;!&ndash;      Final carrinho&ndash;&gt;-->

<!--    </div>-->
    <!-- End Offcanvas -->

  </div>

</template>

<style scoped>

</style>