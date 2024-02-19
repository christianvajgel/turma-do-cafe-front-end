<script setup>

import AdicionarProduto from "@/components/pages/admin/produto/AdicionarProduto.vue";
import EditarProduto from "@/components/pages/admin/produto/EditarProduto.vue";
import DeletarProduto from "@/components/pages/admin/produto/DeletarProduto.vue";
</script>

<template>

  <div>
    <div class="">

      <br>

      <p style="text-align: center;">Gerenciar Produtos</p>

      <br>


      <nav class="-mb-0.5 flex justify-center space-x-8" aria-label="Tabs" role="tablist">

        <button type="button" class="hs-tab-active:font-semibold hs-tab-active:border-green-700 hs-tab-active:text-green-700 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-green-700 focus:outline-none focus:text-green-700 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="horizontal-alignment-item-1" data-hs-tab="#horizontal-alignment-1" aria-controls="horizontal-alignment-1" role="tab">

          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="#15803D" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"/>
          </svg>

          Adicionar

        </button>

        <button type="button" class="hs-tab-active:font-semibold hs-tab-active:border-yellow-500 hs-tab-active:text-yellow-500 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-yellow-500 focus:outline-none focus:text-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500" id="horizontal-alignment-item-2" data-hs-tab="#horizontal-alignment-2" aria-controls="horizontal-alignment-2" role="tab">

          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="#EAB308" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M36.4 360.9L13.4 439 1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1L73 498.6l78.1-23c12.4-3.6 23.7-9.9 33.4-18.4c1.4-1.2 2.7-2.5 4-3.8L492.7 149.3c21.9-21.9 24.6-55.6 8.2-80.5c-2.3-3.5-5.1-6.9-8.2-10L453.3 19.3c-25-25-65.5-25-90.5 0L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4zm46 13.5c1.7-5.6 4.5-10.8 8.4-15.2c.6-.6 1.1-1.2 1.7-1.8L321 129 383 191 154.6 419.5c-4.7 4.7-10.6 8.2-17 10.1l-23.4 6.9L59.4 452.6l16.1-54.8 6.9-23.4z"/>
          </svg>

          Editar

        </button>

        <button type="button" class="hs-tab-active:font-semibold hs-tab-active:border-red-700 hs-tab-active:text-red-700 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-red-700 focus:outline-none focus:text-red-700 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500" id="horizontal-alignment-item-3" data-hs-tab="#horizontal-alignment-3" aria-controls="horizontal-alignment-3" role="tab">

          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="#D2222D" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"/>
          </svg>

          Deletar

        </button>

      </nav>
    </div>

    <div class="mt-3 tabs_alignment">
      <div id="horizontal-alignment-1"  aria-labelledby="horizontal-alignment-item-1">

        <AdicionarProduto/>

      </div>
      <div id="horizontal-alignment-2" class="hidden"  aria-labelledby="horizontal-alignment-item-2">

        <EditarProduto/>

      </div>
      <div id="horizontal-alignment-3" class="hidden" aria-labelledby="horizontal-alignment-item-3">

        <DeletarProduto/>

      </div>
    </div>

  </div>

</template>

<style scoped>

.tabs_alignment {
  max-width: 85%;
  margin: 0 auto;
}

</style>