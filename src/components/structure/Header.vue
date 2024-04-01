<script setup>

import {NOME_DA_MARCA} from "@/global/variables.js";

</script>

<template>

  <div>
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0">

      <nav class="relative max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
        <div class="flex items-center justify-between">
          <svg class="mr-2.5 mt-1 flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <defs>
            </defs>
            <path d="M331.4 203.3c24.4-24.6 45.4-67.3 59.9-101.7c5.1-12.2 20.9-15.3 28.2-4.3c51.2 77.7 26.2 201.2-63.4 290.8c-79.6 79.6-186 108.1-263.2 77.7c-14.8-5.8-20-23.2-13.2-37.5c.7-1.6 1.5-3.1 2.2-4.7c16.5-34.5 37.5-72.2 57.4-92.3c29.7-29.9 59.7-44.9 91.8-61l.5-.3 0 0c32-15.9 66.1-32.9 99.7-66.8zM53.1 409.7c-5.3 11-19.9 13.6-26.9 3.6c-54-77.4-29.6-203.2 61.2-294C167.6 39.1 275.1 10.7 352.5 42.4c14 5.7 19.4 22 13.7 36c-1.4 3.5-2.9 7.1-4.4 10.8c-14.5 34.5-33.5 71.8-53.1 91.5c-29.7 29.9-59.7 44.9-91.8 61l-.5 .3c-32 15.9-66.1 32.9-99.7 66.8c-24.1 24.3-47.1 66.6-63.6 101z" fill="url(#myGradient)" />
            <defs>
              <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="rgb(237, 224, 212)"/>
                <stop offset="50%" stop-color="rgb(230, 204, 178)"/>
                <stop offset="100%" stop-color="rgb(221, 184, 146)"/>
              </linearGradient>
            </defs>
          </svg>
          <a class="titulo-header flex-none text-2xl font-semibold" href="/" aria-label="Brand">{{ NOME_DA_MARCA }}</a>
        </div>

        <div class="flex items-center ms-auto sm:ms-0 sm:order-3">
          <div class="sm:hidden">
            <button type="button" class="p-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#navbar-offcanvas-example" aria-controls="navbar-offcanvas-example" aria-label="Toggle navigation">
              Menu
              <svg class="hs-overlay-open:hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            </button>
          </div>
          <div class="ps-3 sm:ps-6 sm:ms-6 sm:border-s sm:border-gray-300">
            <router-link to="/carrinho">
              <button type="button" class="w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#navbar-secondary-content" aria-controls="navbar-secondary-content" aria-label="Toggle navigation">
                <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="#000" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
              </button>
            </router-link>
          </div>
        </div>

        <div id="navbar-offcanvas-example" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e basis-full grow sm:order-2 sm:static sm:block sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto dark:bg-gray-800 dark:border-r-gray-700 sm:dark:border-r-transparent hidden" tabindex="-1" data-hs-overlay-close-on-resize>
          <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <a class="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0" href="/produtos" aria-current="page">Produtos</a>
            <a class="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0" href="/buscar-pedido">Buscar pedido</a>
            <a class="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0" href="/equipe">Equipe</a>
            <a class="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0" href="/sustentabilidade">Sustentabilidade</a>
            <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
              <button type="button" class="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium px-6 sm:px-0">
                Admin
                <svg class="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg py-2 px-3 sm:px-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="/adicionar-produto">
                  Adicionar Produto
                </a>
                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="/listar-pedidos">
                  Listar Pedidos
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>

</template>

<style>

.titulo-header {
  background: linear-gradient(90deg,#DDB892, #B08968, #9C6644, #7F5539);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
