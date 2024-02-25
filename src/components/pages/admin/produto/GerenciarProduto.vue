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

      </nav>
    </div>

    <div class="mt-3 tabs_alignment">

      <div id="horizontal-alignment-1"  aria-labelledby="horizontal-alignment-item-1">

        <AdicionarProduto/>

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