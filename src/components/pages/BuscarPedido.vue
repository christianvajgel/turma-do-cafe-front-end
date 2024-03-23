<script setup>

import router from "@/router.js";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
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
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div class="text-center">
          <h1 id="titulo-buscar" class="text-4xl sm:text-6xl font-bold">
            Buscar pedido
          </h1>

<!--          <h3 class="m-6 text-xl sm:text-2xl text-gray-600 dark:text-gray-400">-->
<!--            Todo o seu pedido em um só localizador.-->
<!--          </h3>-->

          <div id="div1" class="mt-20 sm:mt-20 mx-auto max-w-xl relative">
            <!-- Form -->
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
                    <svg class="p-1.5 hover:scale-125 transition-transform duration-500 ease-in-out " xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="" viewBox="0 0 512 512">
                      <path class="icone-botao-buscar-secundario" d="M208 64a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 352A208 208 0 1 0 208 0a208 208 0 1 0 0 416z"/>
                      <path class="icone-botao-buscar-primario" d="M330.7 376L457.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7C363.3 348 348 363.3 330.7 376z"/>
                    </svg>
                  </button>
                </div>

              </div>
            </form>
            <!-- End Form -->

<!--            &lt;!&ndash; SVG Element xicara vazia &ndash;&gt;-->
<!--            <div class="md:block absolute top-0 start-0 -translate-y-9 translate-x-20">-->
<!--              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 576 512" fill="red" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M80 352c0 26.5 21.5 48 48 48H320c26.5 0 48-21.5 48-48V112H80V352zM32 96c0-17.7 14.3-32 32-32H384h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H416v32c0 53-43 96-96 96H128c-53 0-96-43-96-96V96zM416 272h32c44.2 0 80-35.8 80-80s-35.8-80-80-80H416V272z"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            &lt;!&ndash; End SVG Element &ndash;&gt;-->

<!--            &lt;!&ndash; SVG Element xicara fumaca &ndash;&gt;-->
<!--            <div class="md:block absolute top-0 start-5 -translate-y-12 translate-x-48">-->
<!--              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 512 512" fill="orange" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M88 0c13.3 0 24 10.7 24 24c0 16.1 7.5 23.7 23.8 37.9l1.1 1C152.6 76.6 176 97.1 176 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-16.1-7.5-23.7-23.8-37.9l-1.1-1C87.4 83.4 64 62.9 64 24C64 10.7 74.7 0 88 0zM48 416c0 26.5 21.5 48 48 48H288c26.5 0 48-21.5 48-48V240H48V416zM0 224c0-17.7 14.3-32 32-32H352h48c61.9 0 112 50.1 112 112s-50.1 112-112 112H384c0 53-43 96-96 96H96c-53 0-96-43-96-96V224zM384 368h16c35.3 0 64-28.7 64-64s-28.7-64-64-64H384V368zM224 24c0 16.1 7.5 23.7 23.8 37.9l1.1 1C264.6 76.6 288 97.1 288 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-16.1-7.5-23.7-23.8-37.9l-1.1-1C199.4 83.4 176 62.9 176 24c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            &lt;!&ndash; End SVG Element &ndash;&gt;-->

<!--            &lt;!&ndash; SVG Element xicara marshmallow &ndash;&gt;-->
<!--            <div class="md:block absolute top-0 start-5 -translate-y-11 translate-x-80">-->
<!--              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 512 512" fill="grey" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M197.7 125.7C194 122 192 117.1 192 112s2-10 5.7-13.7l60.7-60.7C262 34 266.9 32 272 32s10 2 13.7 5.7l60.7 60.7c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7L344 128H200l-2.3-2.3zM32 64c0-17.7 14.3-32 32-32H192c7.5 0 14.4 2.6 19.8 6.9L175 75.7c-9.6 9.6-15 22.7-15 36.3c0 5.5 .9 10.9 2.6 16H32V64zM48 384c0 26.5 21.5 48 48 48H288c26.5 0 48-21.5 48-48V208H152v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V208H48V384zM0 192c0-17.7 14.3-32 32-32H352h48c61.9 0 112 50.1 112 112s-50.1 112-112 112H384c0 53-43 96-96 96H96c-53 0-96-43-96-96V192zM384 336h16c35.3 0 64-28.7 64-64s-28.7-64-64-64H384V336z"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            &lt;!&ndash; End SVG Element &ndash;&gt;-->


<!--            <div class="md:block absolute top-0 start-5 -translate-y-12 translate-x-48">-->
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










<!--            &lt;!&ndash; SVG Element xicara &ndash;&gt;-->
<!--            <div class="md:block absolute top-0 start-5 -translate-y-11 translate-x-96">-->
<!--              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 576 512" fill="grey" xmlns="http://www.w3.org/2000/svg">-->
<!--&lt;!&ndash;                <path d="M80 112h72v10.7c0 8.5-3.4 16.6-9.4 22.6l-21.3 21.3c-6 6-9.4 14.1-9.4 22.6V256c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V189.3c0-8.5-3.4-16.6-9.4-22.6l-21.3-21.3c-6-6-9.4-14.1-9.4-22.6V112H368V352c0 26.5-21.5 48-48 48H128c-26.5 0-48-21.5-48-48V112zM64 64C46.3 64 32 78.3 32 96V352c0 53 43 96 96 96H320c53 0 96-43 96-96V320h32c70.7 0 128-57.3 128-128s-57.3-128-128-128H384 64zM448 272H416V112h32c44.2 0 80 35.8 80 80s-35.8 80-80 80z"/>&ndash;&gt;-->
<!--              </svg>-->
<!--            </div>-->
<!--            &lt;!&ndash; End SVG Element &ndash;&gt;-->

<!--            &lt;!&ndash; SVG Element graos &ndash;&gt;-->
<!--            <div id="svgdi2v" class=" md:block absolute top-0 end-0 -translate-y-12 translate-x-20">-->
<!--              <svg class="w-16 h-auto " width="135" height="135" viewBox="0 0 512 512" fill="green" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M507.5 209.7c-3.4 12.3-19.1 11.8-25.4 .7c-5.4-9.5-11.3-18.5-17.6-26c-27.6-32.6-60.8-44.5-90.1-55l-1-.3c-30-10.7-55.8-20.2-77.5-45.9c-10.8-12.8-21.3-33.4-29.3-52c-1.7-4-.6-8.7 3-11.2C320.9-16 401.3-2.6 458 54c45.7 45.7 63.2 106.7 49.5 155.6zM228.5 78.3c3.4-12.3 19.1-11.8 25.4-.7c5.3 9.5 11.3 18.5 17.6 26c27.6 32.6 60.8 44.5 90.1 55l1 .3c30 10.7 55.8 20.2 77.5 45.9c10.8 12.8 21.3 33.4 29.3 52c1.7 4 .6 8.7-3 11.2C415.1 304 334.7 290.6 278 234c-45.7-45.7-63.2-106.7-49.5-155.6zM75.5 206c11.2-6.3 22 5.2 18.5 17.6c-2.9 10.5-5.2 21.2-6 31c-3.6 42.8 11.6 74.9 25 103.2l.4 .9c13.7 28.9 25.3 54.1 22.5 87.8c-1.4 16.7-8.6 38.9-16.1 57.9c-1.6 4.1-5.8 6.6-10.1 5.8C47.7 499.3 0 432.6 0 352c0-65 31-120.9 75.5-146zM180.5 498c-11.2 6.3-22-5.2-18.5-17.6c2.9-10.5 5.2-21.2 6-31c3.6-42.8-11.6-74.9-25-103.2l-.4-.9c-13.7-28.9-25.3-54.1-22.5-87.8c1.4-16.7 8.6-38.9 16.1-57.9c1.6-4.1 5.8-6.6 10.1-5.8C208.3 204.7 256 271.4 256 352c0 65-31 120.9-75.5 146z"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            &lt;!&ndash; End SVG Element &ndash;&gt;-->

<!--            &lt;!&ndash; SVG Element jarra &ndash;&gt;-->
<!--            <div class="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">-->
<!--              <svg class="w-20 h-auto text-cyan-500" width="150" height="150" viewBox="0 0 512 512" fill="blue" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M88 80c-22.1 0-40 17.9-40 40v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V120C0 71.4 39.4 32 88 32h34.4H192 453.6C468.2 32 480 43.8 480 58.4c0 3.7-.8 7.3-2.3 10.7l-48.4 109c50 34.7 82.7 92.5 82.7 157.9v8c0 55.5-34.6 99.4-55.9 121.2C446.2 475.3 432.3 480 418 480H158c-14.2 0-28.1-4.7-38.1-14.8C98.6 443.4 64 399.5 64 344v-8c0-65.4 32.7-123.2 82.7-157.9L103.1 80H88zm296.8 80l35.6-80H192 155.6l35.6 80H384.8zm1.2 48H190c-41.8 21.6-71.7 63.1-77.1 112H463.1c-5.4-48.9-35.3-90.4-77.1-112zm32.2 224H157.7c.1 0 .1 0 .2 0H418c.1 0 .1 0 .2 0z"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            &lt;!&ndash; End SVG Element &ndash;&gt;-->

<!--            &lt;!&ndash; SVG Element jarra &ndash;&gt;-->
<!--            <div class="hidden md:block absolute -start-full end-44 translate-y-10 -translate-x-32">-->
<!--              <svg class="w-20 h-auto text-cyan-500" width="150" height="150" viewBox="0 0 512 512" fill="pink" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M88 80c-22.1 0-40 17.9-40 40v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V120C0 71.4 39.4 32 88 32h34.4H192 453.6C468.2 32 480 43.8 480 58.4c0 3.7-.8 7.3-2.3 10.7l-48.4 109c50 34.7 82.7 92.5 82.7 157.9v8c0 55.5-34.6 99.4-55.9 121.2C446.2 475.3 432.3 480 418 480H158c-14.2 0-28.1-4.7-38.1-14.8C98.6 443.4 64 399.5 64 344v-8c0-65.4 32.7-123.2 82.7-157.9L103.1 80H88zm296.8 80l35.6-80H192 155.6l35.6 80H384.8zm1.2 48H190c-41.8 21.6-71.7 63.1-77.1 112H463.1c-5.4-48.9-35.3-90.4-77.1-112zm32.2 224H157.7c.1 0 .1 0 .2 0H418c.1 0 .1 0 .2 0z"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            &lt;!&ndash; End SVG Element &ndash;&gt;-->
          </div>

<!--          <div class="mt-10 sm:mt-20">-->
<!--            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">-->
<!--                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>-->
<!--              </svg>-->
<!--              Business-->
<!--            </a>-->
<!--            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">-->
<!--                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>-->
<!--                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>-->
<!--              </svg>-->
<!--              Strategy-->
<!--            </a>-->
<!--            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">-->
<!--                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>-->
<!--              </svg>-->
<!--              Health-->
<!--            </a>-->
<!--            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">-->
<!--                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>-->
<!--              </svg>-->
<!--              Creative-->
<!--            </a>-->
<!--            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">-->
<!--                <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>-->
<!--                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>-->
<!--              </svg>-->
<!--              Environment-->
<!--            </a>-->
<!--            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">-->
<!--              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">-->
<!--                <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z"/>-->
<!--              </svg>-->
<!--              Adventure-->
<!--            </a>-->
<!--          </div>-->



          <div>

          </div>



        </div>
      </div>
    </div>
    <!-- End Hero -->
  </div>

</template>

<style scoped>


.translate-x-64 {
  --tw-translate-x: 16rem/* 256px */;
  transform: translate(var(--tw-translate-x), -3rem) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

#grao-cafe {

}

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

.gradiente-borda {
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
  font-size: 16px; /* Tamanho da fonte ajustado para melhor visualização */
  background: linear-gradient(90deg, #E6CCB2, #DDB892, #B08968);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
