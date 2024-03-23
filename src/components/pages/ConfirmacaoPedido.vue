<script setup>

import {gerarCodigoDeAutorizacaoAleatorio, obterIdDoCarrinho} from "@/global/functions.js";

import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import router from "@/router.js";

console.log(`%c### ID Pedido: ${useRoute().params.localizador} ###`, "background: blue; color: yellow; font-size: x-large;");

const URL_LISTAR_PEDIDO = `https://localhost:7173/api/Item/listar-itens-de-um-pedido/${useRoute().params.localizador}`;
//const URL_LISTAR_PEDIDO = `https://localhost:7173/api/Item/listar-itens-de-um-pedido/RJ5T6U`;

const TAMANHO_ICONE_SVG = 35;
// const COR_ICONE_SVG = "currentCollor";
const COR_ICONE_SVG = "#e5e7eb";


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
    //console.log(`%c### URL: ${error} ###`, "background: pink; color: yellow; font-size: x-large;");
    // await router.push(`/buscar-pedido/`);

    await router.push({
      path: `/buscar-pedido/`,
      query: {
        estadoPedido: "invalido",
      },
    });

    //console.error(error);
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
      <div id="pdf" class="sm:w-11/12 lg:w-3/4 mx-auto">
        <!-- Card -->
        <div class="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
          <!-- Grid -->
          <div class="flex justify-between">
            <div>
<!--              <svg class="size-10" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12" class="stroke-blue-600 dark:stroke-white" stroke="currentColor" stroke-width="2"/>-->
<!--                <path d="M5 26V13.16C5 8.65336 8.58172 5 13 5C17.4183 5 21 8.65336 21 13.16C21 17.6666 17.4183 21.32 13 21.32H12" class="stroke-blue-600 dark:stroke-white" stroke="currentColor" stroke-width="2"/>-->
<!--                <circle cx="13" cy="13.0214" r="5" fill="currentColor" class="fill-blue-600 dark:fill-white"/>-->
<!--              </svg>-->

<!--              <h1 class="mt-2 text-lg md:text-xl font-semibold text-amber-800 dark:text-white">Turma do Café</h1>-->

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

                <span class="titulo-header flex-none text-2xl font-semibold" href="/" aria-label="Brand">Turma do Café</span>
              </div>

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

              <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">Pedido {{useRoute().params.localizador}}</h2>
<!--              <span class="mt-1 block text-gray-500">Localizador</span>-->


              <div class="mt-10">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Pagamento</h3>

                <!-- Icon -->
                <span class="mt-3.5 inline-flex justify-center items-center size-[46px] rounded-full text-gray-500">
                  <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >

                    <path v-if="pedido.cartao === 'AMEX'" d="M48 480C21.49 480 0 458.5 0 432V80C0 53.49 21.49 32 48 32H528C554.5 32 576 53.49 576 80V82.43H500.5L483.5 130L466.6 82.43H369.4V145.6L341.3 82.43H262.7L181 267.1H246.8V430.9H450.5L482.4 395.8L514.3 430.9H576V432C576 458.5 554.5 480 528 480H48zM482.6 364L440.4 410.3H390.5L458 338.6L390.5 266.1H441.9L483.4 312.8L525.4 266.1H576L508 338.2L576 410.3H524.6L482.6 364zM576 296.9V380.2L536.7 338.3L576 296.9zM307.6 377.1H390.6V410.3H268.6V267.1H390.6V300.2H307.6V322.6H388.5V354.9H307.6V377.2V377.1zM537.3 145.7L500.4 246.3H466L429.2 146V246.3H390.5V103H451.7L483.6 192.3L515.8 103H576V246.3H537.3V145.7zM334.5 217.6H268.6L256.7 246.3H213.7L276.1 103H327.3L390.6 246.3H346.5L334.5 217.6zM301.5 138.5L282 185.4H320.9L301.5 138.5z"/>

                    <path v-else-if="pedido.cartao === 'VISA'" d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"/>

                    <path v-else-if="pedido.cartao === 'MasterCard'" d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z"/>

                    <path v-else-if="pedido.cartao === 'Diners'" d="M239.7 79.9c-96.9 0-175.8 78.6-175.8 175.8 0 96.9 78.9 175.8 175.8 175.8 97.2 0 175.8-78.9 175.8-175.8 0-97.2-78.6-175.8-175.8-175.8zm-39.9 279.6c-41.7-15.9-71.4-56.4-71.4-103.8s29.7-87.9 71.4-104.1v207.9zm79.8.3V151.6c41.7 16.2 71.4 56.7 71.4 104.1s-29.7 87.9-71.4 104.1zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM329.7 448h-90.3c-106.2 0-193.8-85.5-193.8-190.2C45.6 143.2 133.2 64 239.4 64h90.3c105 0 200.7 79.2 200.7 193.8 0 104.7-95.7 190.2-200.7 190.2z"/>

                    <path v-else-if="pedido.cartao === 'ApplePay'" d="M302.2 218.4c0 17.2-10.5 27.1-29 27.1h-24.3v-54.2h24.4c18.4 0 28.9 9.8 28.9 27.1zm47.5 62.6c0 8.3 7.2 13.7 18.5 13.7 14.4 0 25.2-9.1 25.2-21.9v-7.7l-23.5 1.5c-13.3.9-20.2 5.8-20.2 14.4zM576 79v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM127.8 197.2c8.4.7 16.8-4.2 22.1-10.4 5.2-6.4 8.6-15 7.7-23.7-7.4.3-16.6 4.9-21.9 11.3-4.8 5.5-8.9 14.4-7.9 22.8zm60.6 74.5c-.2-.2-19.6-7.6-19.8-30-.2-18.7 15.3-27.7 16-28.2-8.8-13-22.4-14.4-27.1-14.7-12.2-.7-22.6 6.9-28.4 6.9-5.9 0-14.7-6.6-24.3-6.4-12.5.2-24.2 7.3-30.5 18.6-13.1 22.6-3.4 56 9.3 74.4 6.2 9.1 13.7 19.1 23.5 18.7 9.3-.4 13-6 24.2-6 11.3 0 14.5 6 24.3 5.9 10.2-.2 16.5-9.1 22.8-18.2 6.9-10.4 9.8-20.4 10-21zm135.4-53.4c0-26.6-18.5-44.8-44.9-44.8h-51.2v136.4h21.2v-46.6h29.3c26.8 0 45.6-18.4 45.6-45zm90 23.7c0-19.7-15.8-32.4-40-32.4-22.5 0-39.1 12.9-39.7 30.5h19.1c1.6-8.4 9.4-13.9 20-13.9 13 0 20.2 6 20.2 17.2v7.5l-26.4 1.6c-24.6 1.5-37.9 11.6-37.9 29.1 0 17.7 13.7 29.4 33.4 29.4 13.3 0 25.6-6.7 31.2-17.4h.4V310h19.6v-68zM516 210.9h-21.5l-24.9 80.6h-.4l-24.9-80.6H422l35.9 99.3-1.9 6c-3.2 10.2-8.5 14.2-17.9 14.2-1.7 0-4.9-.2-6.2-.3v16.4c1.2.4 6.5.5 8.1.5 20.7 0 30.4-7.9 38.9-31.8L516 210.9z"/>

                    <path v-else-if="pedido.cartao === 'PayPal'" d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z"/>

                  </svg>
                  &nbsp;••••&nbsp;{{ pedido.quatroUltimoDigitosCartao }}
                </span>
                <!-- End Icon -->

                <p class="mt-2 not-italic text-gray-500">
                  Crédito à vista<br>
                </p>

                <span v-if="pedido.estado === 'Em separação' || pedido.estado === 'Enviado' || pedido.estado === 'Entregue'" class="mt-1.5 inline-flex items-center gap-x-1.5 py-1.5 text-xs font-medium text-lime-600">
                  <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/>
                  </svg>
                  Confirmado
                </span>

                <span v-if="pedido.estado === 'Cancelado' || pedido.estado === 'Estornado'" class="mt-1.5 inline-flex items-center gap-x-1.5 py-1.5 text-xs font-medium text-teal-500">
                  <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM276.8 133.6v14.2c9.7 1.2 19.4 3.9 29 6.6c1.9 .5 3.7 1 5.6 1.6c11.5 3.2 18.3 15.1 15.1 26.6s-15.1 18.2-26.6 15.1c-1.6-.4-3.1-.9-4.7-1.3c-7-2-14-3.9-21.1-5.3c-13.2-2.5-28.5-1.3-40.8 4c-11 4.8-20.1 16.4-7.6 24.4c9.8 6.3 21.8 9.5 33.2 12.6c2.4 .6 4.7 1.3 7 1.9c15.6 4.4 35.5 10.1 50.4 20.3c19.4 13.3 28.5 34.9 24.2 58.1c-4.1 22.4-19.7 37.1-38.4 44.7c-7.8 3.2-16.3 5.2-25.2 6.2l0 15.2c0 11.9-9.7 21.6-21.6 21.6s-21.6-9.7-21.6-21.6l0-17.4c-14.5-3.3-28.7-7.9-42.8-12.5c-11.3-3.7-17.5-16-13.7-27.3s16-17.5 27.3-13.7c2.5 .8 5 1.7 7.5 2.5c11.3 3.8 22.9 7.7 34.5 9.6c17 2.5 30.6 1 39.5-2.6c12-4.8 17.7-19.1 5.9-27.1c-10.1-6.9-22.6-10.3-34.5-13.5c-2.3-.6-4.5-1.2-6.8-1.9c-15.1-4.3-34-9.6-48.2-18.7c-19.5-12.5-29.4-33.3-25.2-56.4c4-21.8 21-36.3 39-44.1c5.5-2.4 11.4-4.3 17.5-5.7V133.6c0-11.9 9.7-21.6 21.6-21.6s21.6 9.7 21.6 21.6z"/>
                  </svg>
                  Estornado
                </span>

                <span v-if="pedido.estado === 'Aguardando pagamento'" class="mt-1.5 inline-flex items-center gap-x-1.5 py-1.5 text-xs font-medium text-amber-500">
                  <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-13.3 0-24 10.7-24 24V264c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                  </svg>
                  Aguardando pagamento
                </span>

                <span v-if="pedido.estado === 'Devolvido'" class="mt-1.5 inline-flex items-center gap-x-1.5 py-1.5 text-xs font-medium text-violet-500">
                  <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                  </svg>
                  Estorno pendente
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
                  <span v-if="pedido.estado === 'Cancelado'" class="mt-2 py-2 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M385.1 419.1L92.9 126.9C64.8 162.3 48 207.2 48 256c0 114.9 93.1 208 208 208c48.8 0 93.7-16.8 129.1-44.9zm33.9-33.9C447.2 349.7 464 304.8 464 256c0-114.9-93.1-208-208-208c-48.8 0-93.7 16.8-129.1 44.9L419.1 385.1zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
                    </svg>
                    {{ pedido.estado }}
                  </span>
                  <span v-else-if="pedido.estado === 'Estornado'" class="mt-2 py-2 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M558.1 64L535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-64.6 0 0 0H160v16c0 35.3-28.7 64-64 64H80v93.5L50.7 314.7 32 333.5V128c0-35.3 28.7-64 64-64H383.6l.4 0 174.1 0zM560 320V226.5l29.3-29.3L608 178.5V384c0 35.3-28.7 64-64 64H146.5l0 0-64.6 0 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23L256 400c.1 0 .3 0 .4 0H480V384c0-35.3 28.7-64 64-64h16zM320 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
                    </svg>
                    {{ pedido.estado }}
                  </span>
                  <span v-else-if="pedido.estado === 'Aguardando pagamento'" class="mt-2 py-2 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"/>
                    </svg>
                    {{ pedido.estado }}
                  </span>
                  <span v-else-if="pedido.estado === 'Em separação'" class="mt-2 py-2 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M480.9 3.1C456-6.2 428.4 6.3 419.1 31.2L384 124.8C382.2 55.6 325.6 0 256 0C185.3 0 128 57.3 128 128c0 2.2 .1 4.3 .2 6.5l65.5 8.2c-1.1-4.7-1.7-9.6-1.7-14.7c0-35.3 28.7-64 64-64s64 28.7 64 64c0 10.7-2.6 20.7-7.2 29.6l7.2 .9 161.4-20.2 27.5-73.4c9.3-24.8-3.3-52.5-28.1-61.8zM58.9 170.1L17.2 253.5c-9 17.9 .6 39.6 19.8 45.1l163.3 46.7c13.9 4 28.8-1.9 36.2-14.3L320 192 75.2 161.4c-6.7-.8-13.3 2.7-16.3 8.7zM576 339.6l-48 13.7v57.2l-184 46V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V456.5l-184-46V353.3L64 339.6v71c0 22 15 41.2 36.4 46.6l204.1 51c10.2 2.5 20.9 2.5 31 0l204.1-51c21.4-5.3 36.4-24.5 36.4-46.6v-71zm46.8-86.1l-41.7-83.4c-3-6.1-9.6-9.6-16.3-8.7L320 192l83.4 139c7.4 12.4 22.3 18.3 36.2 14.3l163.3-46.7c19.3-5.5 28.8-27.2 19.8-45.1z"/>
                    </svg>
                    {{ pedido.estado }}
                  </span>
                  <span v-else-if="pedido.estado === 'Enviado'" class="mt-2 py-2 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-sky-100 text-sky-800 rounded-full">
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M352 48H128c-8.8 0-16 7.2-16 16V96H240c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H64V64C64 28.7 92.7 0 128 0H352c35.3 0 64 28.7 64 64V96h42.7c14.9 0 29.1 5.9 39.6 16.4l93.3 93.3c10.5 10.5 16.4 24.7 16.4 39.6V368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H576c0 53-43 96-96 96s-96-43-96-96h-8H352 320 256c0 53-43 96-96 96s-96-43-96-96V368 288h48v44.8c14.1-8.2 30.5-12.8 48-12.8c35.5 0 66.6 19.3 83.2 48H320h32c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM557.7 239.6l-93.3-93.3c-1.5-1.5-3.5-2.3-5.7-2.3H416v96H558l-.2-.2-.2-.2zM208 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm272 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM48 160H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16zM16 224H240c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                    </svg>
                    {{ pedido.estado }}
                  </span>
                  <span v-else-if="pedido.estado === 'Entregue'" class="mt-2 py-2 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-lime-100 text-lime-800 rounded-full">
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M248 80h94.4c6.3 0 12.1 3.7 14.6 9.5L388.4 160H248V80zM48 208H400V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V208zm152-48H59.6L91 89.5c2.6-5.8 8.3-9.5 14.6-9.5H200v80zM400.9 70c-10.3-23.1-33.2-38-58.5-38H105.6C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V189.6c0-9-1.9-17.8-5.5-26L400.9 70zM337 265c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L337 265z"/>
                    </svg>
                    {{ pedido.estado }}
                  </span>
                  <span v-else-if="pedido.estado === 'Devolvido'" class="mt-2 py-2 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-violet-100 text-violet-800 rounded-full">
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2 0 0L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24H40z"/>
                    </svg>
                    {{ pedido.estado }}
                  </span>
                </div>
              </div>
              <!-- Segunda div -->
              <div class="col-span-1">
                <div class="font-semibold text-gray-800 dark:text-gray-200">Rastreamento</div>
                <div class="mt-3.5">
                  <span class="text-gray-500">
                    {{ pedido.rastreio }}
                  </span>
                  <span v-if="pedido.estado === 'Devolvido'" class="text-gray-400">
                    <br>Logística Reversa
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

<!--            <div class="mb-8 flex justify-evenly">-->
<!--              <div class="flex pr-5">-->
<!--                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 512 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                  <path d="M507.5 209.7c-3.4 12.3-19.1 11.8-25.4 .7c-5.4-9.5-11.3-18.5-17.6-26c-27.6-32.6-60.8-44.5-90.1-55l-1-.3c-30-10.7-55.8-20.2-77.5-45.9c-10.8-12.8-21.3-33.4-29.3-52c-1.7-4-.6-8.7 3-11.2C320.9-16 401.3-2.6 458 54c45.7 45.7 63.2 106.7 49.5 155.6zM228.5 78.3c3.4-12.3 19.1-11.8 25.4-.7c5.3 9.5 11.3 18.5 17.6 26c27.6 32.6 60.8 44.5 90.1 55l1 .3c30 10.7 55.8 20.2 77.5 45.9c10.8 12.8 21.3 33.4 29.3 52c1.7 4 .6 8.7-3 11.2C415.1 304 334.7 290.6 278 234c-45.7-45.7-63.2-106.7-49.5-155.6zM75.5 206c11.2-6.3 22 5.2 18.5 17.6c-2.9 10.5-5.2 21.2-6 31c-3.6 42.8 11.6 74.9 25 103.2l.4 .9c13.7 28.9 25.3 54.1 22.5 87.8c-1.4 16.7-8.6 38.9-16.1 57.9c-1.6 4.1-5.8 6.6-10.1 5.8C47.7 499.3 0 432.6 0 352c0-65 31-120.9 75.5-146zM180.5 498c-11.2 6.3-22-5.2-18.5-17.6c2.9-10.5 5.2-21.2 6-31c3.6-42.8-11.6-74.9-25-103.2l-.4-.9c-13.7-28.9-25.3-54.1-22.5-87.8c1.4-16.7 8.6-38.9 16.1-57.9c1.6-4.1 5.8-6.6 10.1-5.8C208.3 204.7 256 271.4 256 352c0 65-31 120.9-75.5 146z"/>-->
<!--                </svg>-->
<!--              </div>-->

<!--              <div class="flex pr-5">-->
<!--                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 512 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                  <path d="M88 80c-22.1 0-40 17.9-40 40v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V120C0 71.4 39.4 32 88 32h34.4H192 453.6C468.2 32 480 43.8 480 58.4c0 3.7-.8 7.3-2.3 10.7l-48.4 109c50 34.7 82.7 92.5 82.7 157.9v8c0 55.5-34.6 99.4-55.9 121.2C446.2 475.3 432.3 480 418 480H158c-14.2 0-28.1-4.7-38.1-14.8C98.6 443.4 64 399.5 64 344v-8c0-65.4 32.7-123.2 82.7-157.9L103.1 80H88zm296.8 80l35.6-80H192 155.6l35.6 80H384.8zm1.2 48H190c-41.8 21.6-71.7 63.1-77.1 112H463.1c-5.4-48.9-35.3-90.4-77.1-112zm32.2 224H157.7c.1 0 .1 0 .2 0H418c.1 0 .1 0 .2 0z"/>-->
<!--                </svg>-->
<!--              </div>-->

<!--              <div class="flex pr-5">-->
<!--                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 640 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                  <path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>-->
<!--                </svg>-->
<!--              </div>-->

<!--              <div class="flex pr-5">-->
<!--                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 448 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                  <path d="M108.2 48h232c3 0 5.8 1.7 7.2 4.4L361.2 80H88l13-27.4c1.3-2.8 4.1-4.6 7.2-4.6zM414.8 80L390.3 31c-9.5-19-28.9-31-50.1-31h-232C86.6 0 66.9 12.4 57.6 32L34.8 80H24C10.7 80 0 90.7 0 104s10.7 24 24 24H50 400h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-9.2zM47.4 160L74.6 453.9c3 32.9 30.7 58.1 63.7 58.1H309.7c33.1 0 60.7-25.2 63.7-58.1L400.6 160H352.4l-5.9 64H101.5l-5.9-64H47.4zm68.9 224H331.6l-6.1 65.5c-.8 8.2-7.7 14.5-15.9 14.5H138.3c-8.3 0-15.2-6.3-15.9-14.5L116.4 384z"/>-->
<!--                </svg>-->
<!--              </div>-->

<!--              <div class="flex pr-5">-->
<!--                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 512 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                  <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/>-->
<!--                </svg>-->
<!--              </div>-->

<!--              <div class="flex pr-5">-->
<!--                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 512 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                  <path d="M192 32c7.5 0 14.4 2.6 19.8 6.9L175 75.7c-9.6 9.6-15 22.7-15 36.3c0 5.5 .9 10.9 2.6 16H32V64c0-17.7 14.3-32 32-32H192zm5.7 93.7C194 122 192 117.1 192 112s2-10 5.7-13.7l60.7-60.7C262 34 266.9 32 272 32s10 2 13.7 5.7l60.7 60.7c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7L344 128H200l-2.3-2.3zM0 192c0-17.7 14.3-32 32-32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V160H352h48c61.9 0 112 50.1 112 112s-50.1 112-112 112H384c0 53-43 96-96 96H96c-53 0-96-43-96-96V192zm384 32v96h16c26.5 0 48-21.5 48-48s-21.5-48-48-48H384z"/>-->
<!--                </svg>-->
<!--              </div>-->

<!--              <div class="flex pr-5">-->
<!--                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 448 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                  <path d="M331.4 203.3c24.4-24.6 45.4-67.3 59.9-101.7c5.1-12.2 20.9-15.3 28.2-4.3c51.2 77.7 26.2 201.2-63.4 290.8c-79.6 79.6-186 108.1-263.2 77.7c-14.8-5.8-20-23.2-13.2-37.5c.7-1.6 1.5-3.1 2.2-4.7c16.5-34.5 37.5-72.2 57.4-92.3c29.7-29.9 59.7-44.9 91.8-61l.5-.3 0 0c32-15.9 66.1-32.9 99.7-66.8zM53.1 409.7c-5.3 11-19.9 13.6-26.9 3.6c-54-77.4-29.6-203.2 61.2-294C167.6 39.1 275.1 10.7 352.5 42.4c14 5.7 19.4 22 13.7 36c-1.4 3.5-2.9 7.1-4.4 10.8c-14.5 34.5-33.5 71.8-53.1 91.5c-29.7 29.9-59.7 44.9-91.8 61l-.5 .3c-32 15.9-66.1 32.9-99.7 66.8c-24.1 24.3-47.1 66.6-63.6 101z"/>-->
<!--                </svg>-->
<!--              </div>-->
<!--            </div>-->

            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Obrigado!</h4>
            <p class="text-gray-500">Se você possui alguma questão sobre este pedido, entre em contato conosco:</p>
<!--            <p class="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>-->
            <div class="mt-2">
              <p class="block text-sm font-medium text-gray-800 dark:text-gray-200">helloworld@turmadocafe.com.br</p>
              <p class="block text-sm font-medium text-gray-800 dark:text-gray-200">+55 (21) 999-888-777</p>
            </div>
          </div>

          <p class="mt-5 text-sm text-start text-gray-300">Código da transação: {{ gerarCodigoDeAutorizacaoAleatorio(30) }}</p>

          <div class="mt-6 flex justify-evenly">
            <div class="flex pr-5">
              <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 512 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M507.5 209.7c-3.4 12.3-19.1 11.8-25.4 .7c-5.4-9.5-11.3-18.5-17.6-26c-27.6-32.6-60.8-44.5-90.1-55l-1-.3c-30-10.7-55.8-20.2-77.5-45.9c-10.8-12.8-21.3-33.4-29.3-52c-1.7-4-.6-8.7 3-11.2C320.9-16 401.3-2.6 458 54c45.7 45.7 63.2 106.7 49.5 155.6zM228.5 78.3c3.4-12.3 19.1-11.8 25.4-.7c5.3 9.5 11.3 18.5 17.6 26c27.6 32.6 60.8 44.5 90.1 55l1 .3c30 10.7 55.8 20.2 77.5 45.9c10.8 12.8 21.3 33.4 29.3 52c1.7 4 .6 8.7-3 11.2C415.1 304 334.7 290.6 278 234c-45.7-45.7-63.2-106.7-49.5-155.6zM75.5 206c11.2-6.3 22 5.2 18.5 17.6c-2.9 10.5-5.2 21.2-6 31c-3.6 42.8 11.6 74.9 25 103.2l.4 .9c13.7 28.9 25.3 54.1 22.5 87.8c-1.4 16.7-8.6 38.9-16.1 57.9c-1.6 4.1-5.8 6.6-10.1 5.8C47.7 499.3 0 432.6 0 352c0-65 31-120.9 75.5-146zM180.5 498c-11.2 6.3-22-5.2-18.5-17.6c2.9-10.5 5.2-21.2 6-31c3.6-42.8-11.6-74.9-25-103.2l-.4-.9c-13.7-28.9-25.3-54.1-22.5-87.8c1.4-16.7 8.6-38.9 16.1-57.9c1.6-4.1 5.8-6.6 10.1-5.8C208.3 204.7 256 271.4 256 352c0 65-31 120.9-75.5 146z"/>
              </svg>
            </div>

            <div class="flex pr-5">
              <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 512 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M88 80c-22.1 0-40 17.9-40 40v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V120C0 71.4 39.4 32 88 32h34.4H192 453.6C468.2 32 480 43.8 480 58.4c0 3.7-.8 7.3-2.3 10.7l-48.4 109c50 34.7 82.7 92.5 82.7 157.9v8c0 55.5-34.6 99.4-55.9 121.2C446.2 475.3 432.3 480 418 480H158c-14.2 0-28.1-4.7-38.1-14.8C98.6 443.4 64 399.5 64 344v-8c0-65.4 32.7-123.2 82.7-157.9L103.1 80H88zm296.8 80l35.6-80H192 155.6l35.6 80H384.8zm1.2 48H190c-41.8 21.6-71.7 63.1-77.1 112H463.1c-5.4-48.9-35.3-90.4-77.1-112zm32.2 224H157.7c.1 0 .1 0 .2 0H418c.1 0 .1 0 .2 0z"/>
              </svg>
            </div>

            <div class="flex pr-5">
              <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 640 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
              </svg>
            </div>

            <div class="flex pr-5">
              <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 448 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M108.2 48h232c3 0 5.8 1.7 7.2 4.4L361.2 80H88l13-27.4c1.3-2.8 4.1-4.6 7.2-4.6zM414.8 80L390.3 31c-9.5-19-28.9-31-50.1-31h-232C86.6 0 66.9 12.4 57.6 32L34.8 80H24C10.7 80 0 90.7 0 104s10.7 24 24 24H50 400h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-9.2zM47.4 160L74.6 453.9c3 32.9 30.7 58.1 63.7 58.1H309.7c33.1 0 60.7-25.2 63.7-58.1L400.6 160H352.4l-5.9 64H101.5l-5.9-64H47.4zm68.9 224H331.6l-6.1 65.5c-.8 8.2-7.7 14.5-15.9 14.5H138.3c-8.3 0-15.2-6.3-15.9-14.5L116.4 384z"/>
              </svg>
            </div>

            <div class="flex pr-5">
              <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 512 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/>
              </svg>
            </div>

            <div class="flex pr-5">
              <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 512 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M192 32c7.5 0 14.4 2.6 19.8 6.9L175 75.7c-9.6 9.6-15 22.7-15 36.3c0 5.5 .9 10.9 2.6 16H32V64c0-17.7 14.3-32 32-32H192zm5.7 93.7C194 122 192 117.1 192 112s2-10 5.7-13.7l60.7-60.7C262 34 266.9 32 272 32s10 2 13.7 5.7l60.7 60.7c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7L344 128H200l-2.3-2.3zM0 192c0-17.7 14.3-32 32-32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V160H352h48c61.9 0 112 50.1 112 112s-50.1 112-112 112H384c0 53-43 96-96 96H96c-53 0-96-43-96-96V192zm384 32v96h16c26.5 0 48-21.5 48-48s-21.5-48-48-48H384z"/>
              </svg>
            </div>

            <div class="flex pr-5">
              <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" :width="TAMANHO_ICONE_SVG" :height="TAMANHO_ICONE_SVG" viewBox="0 0 448 512" :fill="COR_ICONE_SVG" :stroke="COR_ICONE_SVG" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M331.4 203.3c24.4-24.6 45.4-67.3 59.9-101.7c5.1-12.2 20.9-15.3 28.2-4.3c51.2 77.7 26.2 201.2-63.4 290.8c-79.6 79.6-186 108.1-263.2 77.7c-14.8-5.8-20-23.2-13.2-37.5c.7-1.6 1.5-3.1 2.2-4.7c16.5-34.5 37.5-72.2 57.4-92.3c29.7-29.9 59.7-44.9 91.8-61l.5-.3 0 0c32-15.9 66.1-32.9 99.7-66.8zM53.1 409.7c-5.3 11-19.9 13.6-26.9 3.6c-54-77.4-29.6-203.2 61.2-294C167.6 39.1 275.1 10.7 352.5 42.4c14 5.7 19.4 22 13.7 36c-1.4 3.5-2.9 7.1-4.4 10.8c-14.5 34.5-33.5 71.8-53.1 91.5c-29.7 29.9-59.7 44.9-91.8 61l-.5 .3c-32 15.9-66.1 32.9-99.7 66.8c-24.1 24.3-47.1 66.6-63.6 101z"/>
              </svg>
            </div>
          </div>
        </div>
        <!-- End Card -->

        <!-- Buttons -->
        <div class="mt-6 flex justify-end gap-x-3">
          <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" href="#">
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Baixar PDF
          </a>
          <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" href="#">
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
            Imprimir
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