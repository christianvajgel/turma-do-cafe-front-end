<script setup>

import {onMounted, ref} from "vue";

const uuid = ref('') // Inicialize sua variável reativa aqui

// Função para gerar um UUID
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

onMounted(() => {
  // Atribua o UUID gerado à variável reativa quando o componente for montado
  uuid.value = generateUUID()
  console.log(uuid.value);
})

function copiarUUIDParaAreaDeTransferencia() {
  navigator.clipboard.writeText(uuid.value).then(() => {
    console.log('UUID copiado para a área de transferência!');
    console.log(uuid.value);
  }).catch(err => {
    console.error('Erro ao copiar o UUID: ', err)
  })
}

</script>

<template>

  <p>Adicionar</p>

  <br>
  <br>

  <div>

    <!-- Card Section -->
    <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Card -->
      <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
        <div class="mb-8">
          <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">
            Adicionar Produto
          </h2>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Formulário para adição de produtos ao e-commerce
          </p>
        </div>

        <form>
          <!-- Grid -->
          <div class="grid sm:grid-cols-12 gap-2 sm:gap-6">


<!--            ID guid -->
<!--            <div class="sm:col-span-3">-->
<!--              <label for="id-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">-->
<!--                ID-->
<!--              </label>-->
<!--              <div class="hs-tooltip inline-block">-->
<!--                <button type="button" class="hs-tooltip-toggle ms-1">-->
<!--                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">-->
<!--                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>-->
<!--                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>-->
<!--                  </svg>-->
<!--                </button>-->
<!--                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">-->
<!--                  ID do produto, para controle interno.-->
<!--                </span>-->
<!--              </div>-->
<!--            </div>-->
<!--            &lt;!&ndash; End Col &ndash;&gt;-->

<!--            <div class="sm:col-span-9">-->
<!--              <div class="sm:flex">-->
<!--                <input v-model="uuid" id="id-produto" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">-->
<!--              </div>-->
<!--            </div>-->





            <!--            ID guid -->
            <div class="sm:col-span-3">
              <label for="id-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                ID
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ms-1">
                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  ID do produto, para controle interno.
                </span>
              </div>
            </div>
            <!-- End Col -->

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





<!--            <div class="sm:col-span-3">-->
<!--              <label for="id-produto" class="sr-only">Label</label>-->
<!--              <div class="flex rounded-lg shadow-sm">-->
<!--                -->
<!--              </div>-->
<!--            </div>-->
            <!-- End Col -->


<!--            IMAGEM -->
            <div class="sm:col-span-3">
              <label class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Imagem
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ms-1">
                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Imagem do produto, que será mostrado por toda a loja.
                </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="flex items-center gap-5">
<!--                <img class="inline-block size-16 rounded-full ring-2 ring-white dark:ring-gray-800" src="../assets/img/160x160/img1.jpg" alt="Descrição ALT">-->
                <div class="flex gap-x-2">
                  <div>
                    <input type="file" name="imagem-produto" id="imagem-produto" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                            file:bg-gray-50 file:border-0
                            file:me-4
                            file:py-3 file:px-4
                            dark:file:bg-gray-700 dark:file:text-gray-400">
                  </div>
                </div>
              </div>
            </div>
            <!-- End Col -->

<!--            NOME -->
            <div class="sm:col-span-3">
              <label for="nome-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Nome
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ms-1">
                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Nome do produto, que será mostrado na loja.
                </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="sm:flex">
                <input required placeholder="Nome do produto" id="nome-produto" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
              </div>
            </div>
            <!-- End Col -->


<!--            PREÇO PRECO -->
            <div class="sm:col-span-3">
              <label for="preco-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Preço
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ms-1">
                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Preço do produto, que será mostrado na loja. Valor mínimo 1 real.
                </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <input required placeholder="Preço do produto em reais (somente números)" id="preco-produto" type="number" min="1" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
            </div>
            <!-- End Col -->


<!--            PESO -->
            <div class="sm:col-span-3">
              <label for="peso-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Peso
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ms-1">
                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Peso do produto, que será mostrado na loja. Acessórios deixar em branco.
                </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <input placeholder="Peso do produtos em gramas (somente números)" id="peso-produto" type="number" min="1" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
            </div>
            <!-- End Col -->




<!--            TIPO -->
            <div class="sm:col-span-3">
              <label for="tipo-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Tipo
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ms-1">
                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Tipo do produto, que será categorizado na loja posteriormente.
                </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="sm:flex">
                <label for="tipo-produto" class="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                  <input type="radio" name="tipo-produto" class="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="tipo-produto">
                  <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">Café</span>
                </label>

                <label for="tipo-produto-acessorio" class="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                  <input type="radio" name="tipo-produto" class="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="tipo-produto-acessorio">
                  <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">Acessório</span>
                </label>

              </div>
            </div>
            <!-- End Col -->



<!--            AVALIACAO -->
            <div class="sm:col-span-3">
              <label for="avaliacao-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Avaliação
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ms-1">
                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Avaliação do produto, que será mostrado na parte de detalhamento do produto.
                </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <input placeholder="Avaliação do produto (somente números de 0 a 5)" id="avaliacao-produto" type="number" min="0" max="5" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
            </div>
            <!-- End Col -->



<!--            DESCRICAO -->
            <div class="sm:col-span-3">
              <label for="descricao-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Descrição
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ms-1">
                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Descrição do produto que será mostrada na parte de detalhamento de cada produto.
                </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="sm:flex">
                <textarea rows="3" placeholder="Descrição do produto" id="descricao-produto" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" ></textarea>
              </div>
            </div>
            <!-- End Col -->



<!--            SLOGAN -->
            <div class="sm:col-span-3">
              <label for="slogan-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Slogan
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ms-1">
                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Slogan do produto, que será mostrado na galeria de produtos e na página de detalhamento do mesmo.
                </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="sm:flex">
                <input required placeholder="Slogan do produto" id="slogan-produto" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
              </div>
            </div>
            <!-- End Col -->


<!--            ORIGEM -->
            <div class="sm:col-span-3">
              <label for="origem-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Origem
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ms-1">
                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Origem do produto, de qual país veio este grão. Será mostrado na galeria de produtos e na página de detalhamento do mesmo.
                </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="sm:flex">
                <input required placeholder="Origem (país) do produto" id="origem-produto" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
              </div>
            </div>
            <!-- End Col -->




<!--            ESTOQUE -->
            <div class="sm:col-span-3">
              <label for="estoque-produto" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                Estoque
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ms-1">
                  <svg class="inline-block size-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Estoque do produto, que será mostrado na loja. Defina 0 se o produto não for para ser mostrado ainda.
                </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <input placeholder="Estoque do produto (somente números)" id="estoque-produto" type="number" min="0" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
            </div>
            <!-- End Col -->



          </div>
          <!-- End Grid -->

<!--          BOTOES FORMULARIO -->
          <div class="mt-5 flex justify-end gap-x-2">
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Cancelar
            </button>
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Adicionar produto
            </button>
          </div>

        </form>

      </div>
      <!-- End Card -->

    </div>
    <!-- End Card Section -->


  </div>

</template>

<style scoped>

</style>