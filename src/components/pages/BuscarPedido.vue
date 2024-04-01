<script setup>

import router from "@/router.js";
import {useRoute} from "vue-router";
import {onMounted} from "vue";

let textoPlaceholderInputLocalizador = "Todo o seu pedido em um só localizador";

onMounted(() => {
  lidarComPedidoInvalido();
});

async function procurarPedido() {

  const PEDIDO_LOCALIZADOR = document.getElementById("localizador").value.toUpperCase();

  if (PEDIDO_LOCALIZADOR === '') {
    return;
  }
  await router.push(`/pedido/${PEDIDO_LOCALIZADOR}`);
}

function lidarComPedidoInvalido(){

  if (router !== undefined) {
    const estadoPedido = useRoute().query.estadoPedido;
    if (estadoPedido === "invalido") {
      document.getElementById("localizador").placeholder = "Localizador do pedido inválido. Tente novamente.";
    }
  }
}

</script>

<template>

  <div>
    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div class="text-center">
          <h1 id="titulo-buscar" class="text-4xl sm:text-6xl font-bold">
            Buscar pedido
          </h1>
          <div id="div1" class="mt-20 sm:mt-20 mx-auto max-w-xl relative">
            <form>
              <div class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100">
                <div class="flex-[1_0_0%]">
                  <label for="hs-search-article-1" class="block text-sm text-gray-700 font-medium">
                    <span class="sr-only">Todo o seu pedido em um só localizador</span>
                  </label>
                  <input type="text" name="hs-search-article-1" id="localizador" class="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-b-yellow-900 focus:ring-yellow-900"
                         :placeholder="textoPlaceholderInputLocalizador">
                </div>
                <div class="flex-[0_0_auto]">
                  <button @click="procurarPedido()" type="button" class="mt-1 size-[50px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white disabled:opacity-50 disabled:pointer-events-none">
                    <svg class="p-1.5 hover:scale-125 transition-transform duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="" viewBox="0 0 512 512">
                      <path class="icone-botao-buscar-secundario" d="M208 64a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 352A208 208 0 1 0 208 0a208 208 0 1 0 0 416z"/>
                      <path class="icone-botao-buscar-primario" d="M330.7 376L457.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7C363.3 348 348 363.3 330.7 376z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </form>

            <div id="elemento-1" class="md:block absolute top-0 -start-10 -translate-y-12 translate-x-20">
              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 512 512" fill="orange" xmlns="http://www.w3.org/2000/svg">

                <path class="elemento-1-secundario" d="M112 24c0-13.3-10.7-24-24-24S64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/>
                <path class="elemento-1-primario" d="M32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256z"/>
              </svg>
            </div>

            <div id="elemento-2" class="md:block absolute top-0 -start-10 -translate-y-12">
              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 512 512" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path class="elemento-2-secundario" d="M160.4 176C103.4 202.9 64 260.8 64 328v16c0 55.5 34.6 99.4 55.9 121.2c9.9 10.2 23.9 14.8 38.1 14.8H418c14.2 0 28.1-4.7 38.1-14.8C477.4 443.4 512 399.5 512 344V328c0-67.2-39.4-125.1-96.4-152H160.4zM448 328v16c0 27.4-16.8 53.7-33.5 72H161.5c-16.7-18.3-33.5-44.6-33.5-72V328c0-57.4 46.6-104 104-104H344c57.4 0 104 46.6 104 104z"/>
                <path class="elemento-2-primario" d="M96 96c-17.7 0-32 14.3-32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128C0 75 43 32 96 32h25.3H192 454.7c14 0 25.3 11.3 25.3 25.3c0 4.4-1.1 8.7-3.3 12.5L416 176H160L114.3 96H96zM448 344c0 27.4-16.8 53.7-33.5 72H161.5c-16.7-18.3-33.5-44.6-33.5-72V328c0-2.7 .1-5.4 .3-8H447.7c.2 2.6 .3 5.3 .3 8v16z"/>
              </svg>
            </div>

            <div id="elemento-3" class="md:block absolute top-0 -start-10 -translate-y-12">
              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 448 512" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path class="elemento-3-secundario" d="M70 392l5.1 61.3c2.8 33.2 30.5 58.7 63.8 58.7H309.1c33.3 0 61-25.5 63.8-58.7L378 392H70zM56.7 232H391.3L400 128H48l8.7 104z"/>
                <path class="elemento-3-primario" d="M55.2 17.7L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32L392.8 17.7C387.4 6.8 376.3 0 364.2 0H83.8C71.7 0 60.6 6.8 55.2 17.7zM378 392l13.3-160H56.7L70 392H378z"/>
              </svg>
            </div>

            <div id="elemento-4" class="md:block absolute top-0 -start-10 -translate-y-11">
              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 512 512" fill="green" xmlns="http://www.w3.org/2000/svg">
                <path class="elemento-4-secundario" d="M197.7 125.7L200 128H344l2.3-2.3c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7L285.7 37.7C282 34 277.1 32 272 32s-10 2-13.7 5.7L197.7 98.3C194 102 192 106.9 192 112s2 10 5.7 13.7zM32 64v64H162.6c-1.7-5.1-2.6-10.5-2.6-16c0-13.6 5.4-26.7 15-36.3l36.8-36.8C206.4 34.6 199.5 32 192 32H64C46.3 32 32 46.3 32 64zm128 96H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V160z"/>
                <path class="elemento-4-primario" d="M96 160H32c-17.7 0-32 14.3-32 32V384c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 160v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM384 320V224h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384z"/>
              </svg>
            </div>

            <div id="elemento-5" class="md:block absolute top-0 -start-10 -translate-y-10">
              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 576 512" fill="brown" xmlns="http://www.w3.org/2000/svg">
                <path class="elemento-5-secundario" d="M144 114.7V64h32v50.7c0 8.5 3.4 16.6 9.4 22.6l29.3 29.3c6 6 9.4 14.1 9.4 22.6V256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V189.3c0-8.5 3.4-16.6 9.4-22.6l29.3-29.3c6-6 9.4-14.1 9.4-22.6z"/>
                <path class="elemento-5-primario" d="M144 64v50.7c0 8.5-3.4 16.6-9.4 22.6l-29.3 29.3c-6 6-9.4 14.1-9.4 22.6V256c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V189.3c0-8.5-3.4-16.6-9.4-22.6l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6V64H384h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H416v32c0 53-43 96-96 96H128c-53 0-96-43-96-96V96c0-17.7 14.3-32 32-32h80zM416 256h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H416V256z"/>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

#elemento-1 {
  --tw-translate-x: 5rem; /* 80px */;
  --tw-translate-y: -3.45rem/* -48px */;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

#elemento-2 {
  --tw-translate-x: 12rem; /* 192px */;
  --tw-translate-y: -3rem/* -48px */;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

#elemento-3 {
  --tw-translate-x: 19.15rem; /* 192px */;
  --tw-translate-y: -3rem/* -48px */;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

#elemento-4 {
  --tw-translate-x: 26rem; /* 192px */;
  --tw-translate-y: -3.2rem/* -48px */;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

#elemento-5 {
  --tw-translate-x: 32.5rem; /* 192px */;
  --tw-translate-y: -2.65rem/* -48px */;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

.elemento-1-primario {
  fill: #e1c09f;
}
.elemento-1-secundario {
  opacity:.4;
  fill: #e1c09f;
}

.elemento-2-primario {
  fill: #d9b38e;
}
.elemento-2-secundario {
  opacity:.4;
  fill: #d9b38e;
}

.elemento-3-primario {
  fill: #c49e7b;
}
.elemento-3-secundario {
  opacity:.4;
  fill: #c49e7b;
}

.elemento-4-primario {
  fill: #b38c6b;
}
.elemento-4-secundario {
  opacity:.4;
  fill: #b38c6b;
}

.elemento-5-primario {
  fill: #a87b5a;
}
.elemento-5-secundario {
  opacity:.4;
  fill: #a87b5a;
}

#titulo-buscar {
 font-size: 4.82rem;
  line-height: 2;
  background: linear-gradient(90deg, #EDE0D4, #E6CCB2, #DDB892, #B08968, #9C6644, #7F5539);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.icone-botao-buscar-primario {
  fill: #7F5539;
}

.icone-botao-buscar-secundario {
  opacity:.4;
  fill: #7F5539;
}

#localizador {
  font-size: 16px;
  background: linear-gradient(90deg, #E6CCB2, #DDB892, #B08968); -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
