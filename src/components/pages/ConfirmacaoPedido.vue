<script setup>

import {gerarCodigoDeAutorizacaoAleatorio, obterIdDoCarrinho} from "@/global/functions.js";

import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";
import axios from "axios";

console.log(`%c### ID Pedido: ${useRoute().params.localizador} ###`, "background: blue; color: yellow; font-size: x-large;");

const URL_LISTAR_PEDIDO = `https://localhost:7173/api/Item/listar-itens-de-um-pedido/${useRoute().params.localizador}`;
//const URL_LISTAR_PEDIDO = `https://localhost:7173/api/Item/listar-itens-de-um-pedido/RJ5T6U`;

const ok = ref(false);
const ok2 = ref(false);
const itens = ref(null);
const produtos = ref(null);
const pedido = ref(null);

watch(ok, (newValue, oldValue) => {
  if (newValue === true) {
    console.log('CARRINHO componente: A variável ok mudou para true')
  }
});

onMounted(() => {

  obterPedido();
  listarTodosOsProdutos();
  //obterValorTotalDoCarrinho();
  listarItensDoPedido();

  console.log("CONFIRMACAO PEDIDO componente: mounted OK");

});

async function listarTodosOsProdutos(){

  console.log("listar");

  axios.get('https://localhost:7173/api/Produto')
      .then(response => {
        produtos.value = response.data;
        console.log(produtos.value);
      })
      .catch(error => {
        console.error(error);
      });
  // .finally(() => {
  //   loading.value = false;
  // });

  // console.log(data);
}

function buscarAtributoDeProduto(idProduto, nomeAtributo) {

  const JSON_PRODUTOS = produtos.value;

  const cafeEncontrado = JSON_PRODUTOS.find(cafe => cafe.id === idProduto);

  if (cafeEncontrado) {
    return cafeEncontrado[nomeAtributo];
  } else {
    return null; // Retorna null se o ID não for encontrado
  }

}

async function listarItensDoPedido() {

  //console.log("%c### LISTAR CARRINHO ###", "background: red; color: yellow; font-size: x-large;");

  console.log(URL_LISTAR_PEDIDO);

  try {

    // const response = await axios.get(`https://localhost:7173/api/Produto/c9b6c3f5-f27e-499b-a4b2-17775589795e`);
    // const response = await axios.get(`https://localhost:7173/api/Produto/${useRoute().params.id}`);
    const response = await axios.get(URL_LISTAR_PEDIDO);

    itens.value = response.data;

    // setTimeout(function() {
    //   // Whatever you want to do after the wait
    // }, 1000);

    //ok.value = true;

  } catch (error) {
    console.error(error);
  } finally {
    setTimeout(function() {
      ok.value = true;
    }, 1000);
  }

  // console.log(produtoEspecifico);
}


async function obterPedido() {


  const URL = `https://localhost:7173/api/Pedido/buscar-pedido/${useRoute().params.localizador}`;
  console.log(`%c### URL: ${URL} ###`, "background: blue; color: yellow; font-size: x-large;");

  console.log(URL);

  try {

    // const response = await axios.get(`https://localhost:7173/api/Produto/c9b6c3f5-f27e-499b-a4b2-17775589795e`);
    // const response = await axios.get(`https://localhost:7173/api/Produto/${useRoute().params.id}`);
    const response = await axios.get(URL);

    setTimeout(function() {
      pedido.value = response.data;

      console.log(pedido.value.dataDoPedido);

      sessionStorage.setItem("dataDoPedido",pedido.value.dataDoPedido);

      ok2.value = true;
    }, 500);



    // setTimeout(function() {
    //   // Whatever you want to do after the wait
    // }, 1000);

  } catch (error) {
    console.error(error);
  } finally {

  }

  // console.log(produtoEspecifico);
}


function formatarDataDoPedido() {
  const dataFormatada = new Date(sessionStorage.getItem("dataDoPedido"));
  const dia = dataFormatada.getDate();
  const mes = dataFormatada.getMonth() + 1;
  const ano = dataFormatada.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function formatarHoraDoPedido() {
  const horaFormatada = new Date(sessionStorage.getItem("dataDoPedido"));
  const horas = horaFormatada.getHours();
  const minutos = horaFormatada.getMinutes();
  const ampm = '';
  // const horas12 = horas % 12 || 12;
  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
}



</script>

<template>

  <div v-if="ok">

    <!-- Invoice -->
    <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
      <div class="sm:w-11/12 lg:w-3/4 mx-auto">
        <!-- Card -->
        <div class="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
          <!-- Grid -->
          <div class="flex justify-between">
            <div>
              <svg class="size-10" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12" class="stroke-blue-600 dark:stroke-white" stroke="currentColor" stroke-width="2"/>
                <path d="M5 26V13.16C5 8.65336 8.58172 5 13 5C17.4183 5 21 8.65336 21 13.16C21 17.6666 17.4183 21.32 13 21.32H12" class="stroke-blue-600 dark:stroke-white" stroke="currentColor" stroke-width="2"/>
                <circle cx="13" cy="13.0214" r="5" fill="currentColor" class="fill-blue-600 dark:fill-white"/>
              </svg>

              <h1 class="mt-2 text-lg md:text-xl font-semibold text-amber-800 dark:text-white">Turma do Café</h1>


              <div class="mt-10">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Christian Vajgel</h3>
                <span class="mt-2 not-italic text-gray-500">
                  Rua São José 90<br>
                  2° andar - Centro<br>
                  Rio de Janeiro / RJ<br>
                  20010-020
                </span>
              </div>

            </div>
            <!-- Col -->

            <div class="text-end">
              <br>
              <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">Pedido {{useRoute().params.localizador}}</h2>
<!--              <span class="mt-1 block text-gray-500">Localizador</span>-->


              <div class="mt-10">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Pagamento</h3>

                <!-- Icon -->
                <span class="mt-3.5 inline-flex justify-center items-center size-[46px] rounded-full text-gray-500">
                  <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                    <path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"/>
                  </svg>
                  &nbsp;&nbsp;1234
                </span>
                <!-- End Icon -->

                <p class="mt-2 not-italic text-gray-500">
                  Crédito à vista<br>
                </p>

                <span class="mt-1.5 py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                  <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  Confirmado
                </span>

              </div>

            </div>
            <!-- Col -->
          </div>
          <!-- End Grid -->

          <!-- Grid -->
          <div class="mt-8 grid sm:grid-cols-1 gap-3">

            <div class="my-8 grid md:grid-cols-4 gap-3 text-center">
              <!-- Primeira div -->
              <div class="col-span-1">
                <div class="font-semibold text-gray-800 dark:text-gray-200">Estado</div>
                <div>
                  <span class="mt-3.5 py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512" fill="#a54928" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M91.4 226.4c-6.7 2-11.4 8.3-11.4 15.3v65.1c0 4.2 1.7 8.3 4.7 11.3l51 51c4.7 4.7 7.8 10.8 8.9 17.4l15.2 90.9c1.5 8.7-4.4 17-13.2 18.4s-17-4.4-18.4-13.2l-14.3-85.9c-.5-3.3-2.1-6.3-4.5-8.7L30.1 308.7c-9-9-14.1-21.2-14.1-33.9V186.6C16 163.1 35.1 144 58.6 144c18.7 0 36.2 9.3 46.5 24.9l42.6 64c3 4.5 8 7.1 13.3 7.1H224c8.8 0 16 7.2 16 16s-7.2 16-16 16H196.3 152.6c-10.7 0-20.7-5.3-26.6-14.3l-16.6-24.9c-3.9-5.9-11.2-8.5-17.9-6.4zM251.7 272c2.7-4.7 4.3-10.2 4.3-16c0-17.7-14.3-32-32-32H161.1l-42.6-64c-13.3-20-35.8-32-59.9-32C26.2 128 0 154.2 0 186.6v88.1c0 17 6.7 33.3 18.7 45.3l79.4 79.4 14.3 85.9c2.9 17.4 19.4 29.2 36.8 26.3s29.2-19.4 26.3-36.8l-15.2-90.9c-1.6-9.9-6.3-19-13.4-26.1l-51-51V270.5 241.7l16 24 .6 .9c8.9 13.4 23.9 21.4 39.9 21.4H224 352c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32v64h16V128c0-8.8 7.2-16 16-16H352c8.8 0 16 7.2 16 16V256c0 8.8-7.2 16-16 16H288 251.7zM80 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm48 32A48 48 0 1 0 32 48a48 48 0 1 0 96 0zM0 346.5L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-69.5-16-16L48 480c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-117.5-16-16z"/>
                    </svg>
                    Em separação
                  </span>
                </div>
              </div>
              <!-- Segunda div -->
              <div class="col-span-1">
                <div class="font-semibold text-gray-800 dark:text-gray-200">Rastreamento</div>
                <div class="mt-3.5">
                  <span class="text-gray-500">
                    QR123456789BR
                  </span>
                </div>
              </div>
              <!-- Terceira div -->
              <div class="col-span-1">
                <div class="font-semibold text-gray-800 dark:text-gray-200">Data do pedido</div>
                <div class="mt-3.5">
                  <span class="text-gray-500" v-if="ok2">
                    {{ formatarDataDoPedido() }}
                  </span>
                </div>
              </div>
              <!-- Quarta div -->
              <div class="col-span-1">
                <div class="font-semibold text-gray-800 dark:text-gray-200">Hora do pedido</div>
                <div class="mt-3.5">
                  <span class="text-gray-500" v-if="ok2">
                    {{ formatarHoraDoPedido() }}
                  </span>
                </div>
              </div>
            </div>






            <!-- Col -->
          </div>
          <!-- End Grid -->

          <!-- Table -->
          <div class="mt-6">
            <div class="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
              <div class="hidden sm:grid sm:grid-cols-5">
                <div class="text-start text-xs font-medium text-gray-500 uppercase">Produto</div>
                <div class="text-center text-xs font-medium text-gray-500 uppercase">Quantidade</div>
                <div class="text-center text-xs font-medium text-gray-500 uppercase">Preço</div>
                <div class="text-center text-xs font-medium text-gray-500 uppercase">Desconto</div>
                <div class="text-center text-xs font-medium text-gray-500 uppercase">Subtotal</div>
              </div>

              <div class="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

<!--              v-for-->
              <div class="grid grid-cols-3 sm:grid-cols-6 gap-2" v-for="(item, index) in itens" :key="item.id">
                <div class="col-span-full sm:col-span-2">
                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Produto</h5>
                  <p class="font-medium text-gray-800">
                    {{ buscarAtributoDeProduto(item.produtoId,`nome`) }} ({{ buscarAtributoDeProduto(item.produtoId,`peso`) }}g)
                  </p>
                </div>
                <div>
                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Quantidade</h5>
                  <p class="text-gray-800">
                    {{ item.quantidade }}
                  </p>
                </div>
                <div>
                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Preço</h5>
                  <p class="text-gray-800">
                    {{ buscarAtributoDeProduto(item.produtoId,`preco`).toFixed(2).replace('.',',') }}
                  </p>
                </div>
                <div>
                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Desconto</h5>
                  <p class="sm:text-end text-gray-800">
                    completar
<!--                    {{ item.Desconto.toFixed(2).replace('.',',') }}-->
                  </p>
                </div>
                <div>
                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Subtotal</h5>
                  <p class="sm:text-end text-gray-800">
                    completar
<!--                    {{ item.subtotal.toFixed(2).replace('.',',') }}-->
                  </p>
                </div>

                <div class="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>
              </div>
<!--              v-for-->



<!--              <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">-->
<!--                <div class="col-span-full sm:col-span-2">-->
<!--                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>-->
<!--                  <p class="font-medium text-gray-800 dark:text-gray-200">Web project</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Qty</h5>-->
<!--                  <p class="text-gray-800 dark:text-gray-200">1</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>-->
<!--                  <p class="text-gray-800 dark:text-gray-200">24</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>-->
<!--                  <p class="sm:text-end text-gray-800 dark:text-gray-200">$1250</p>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>-->

<!--              <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">-->
<!--                <div class="col-span-full sm:col-span-2">-->
<!--                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>-->
<!--                  <p class="font-medium text-gray-800 dark:text-gray-200">SEO</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Qty</h5>-->
<!--                  <p class="text-gray-800 dark:text-gray-200">1</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>-->
<!--                  <p class="text-gray-800 dark:text-gray-200">6</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>-->
<!--                  <p class="sm:text-end text-gray-800 dark:text-gray-200">$2000</p>-->
<!--                </div>-->
<!--              </div>-->


            </div>
          </div>
          <!-- End Table -->

          <!-- Flex -->
          <div class="mt-8 flex sm:justify-end">
            <div class="w-full max-w-2xl sm:text-end space-y-2">
              <!-- Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl class="grid sm:grid-cols-5 gap-x-3">
                  <dt class="col-span-3 font-semibold text-gray-400">Subtotal</dt>
                  <dd class="col-span-2 text-gray-600">R$ completar</dd>
                </dl>

                <dl class="grid sm:grid-cols-5 gap-x-3">
                  <dt class="col-span-3 font-semibold text-gray-400">Frete</dt>
                  <dd class="col-span-2 text-gray-600">R$ 0,00</dd>
                </dl>

                <dl class="grid sm:grid-cols-5 gap-x-3">
                  <dt class="col-span-3 font-semibold text-gray-400">Descontos</dt>
                  <dd class="col-span-2 text-red-600 border-b">R$ -completar</dd>
                </dl>

                <br>

                <dl class="grid sm:grid-cols-5 gap-x-3">
                  <dt class="col-span-3 font-semibold text-gray-800">TOTAL</dt>
                  <dd class="col-span-2 font-semibold text-gray-800">R$ completar</dd>
                </dl>
              </div>
              <!-- End Grid -->
            </div>
          </div>
          <!-- End Flex -->

          <div class="mt-8 sm:mt-12">
            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Obrigado!</h4>
            <p class="text-gray-500">Se você possui alguma questão sobre este pedido, entre em contato conosco:</p>
<!--            <p class="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>-->
            <div class="mt-2">
              <p class="block text-sm font-medium text-gray-800 dark:text-gray-200">helloworld@turmadocafe.com.br</p>
              <p class="block text-sm font-medium text-gray-800 dark:text-gray-200">+55 (21) 999-888-777</p>
            </div>
          </div>

          <p class="mt-5 text-sm text-start text-gray-300">Código da transação: {{ gerarCodigoDeAutorizacaoAleatorio(30) }}</p>
        </div>
        <!-- End Card -->

        <!-- Buttons -->
        <div class="mt-6 flex justify-end gap-x-3">
          <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Invoice PDF
          </a>
          <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
            Print
          </a>
        </div>
        <!-- End Buttons -->
      </div>
    </div>
    <!-- End Invoice -->

  </div>

</template>

<style scoped>

</style>