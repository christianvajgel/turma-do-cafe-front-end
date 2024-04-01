<script setup>

</script>

<template>


  <div>

    <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <div>
            <!-- Slider -->
            <div data-hs-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true }' class="relative">
              <div class="hs-carousel relative overflow-hidden w-full min-h-[600px] bg-white rounded-lg">
                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                  <div v-for="n in 4" :key="n" class="hs-carousel-slide">
                    <div class="flex justify-center h-full">
                      <img class="rounded-xl self-center transition duration-700" :src="`https://storage.googleapis.com/turma-do-cafe-assets/cafeteria%20(${n}).jpg`" alt="Image Description">
                    </div>
                  </div>

                </div>
              </div>

              <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </span>
                <span class="sr-only">Previous</span>
              </button>

              <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span class="sr-only">Next</span>
                <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
              </button>

              <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
              </div>
            </div>
            <!-- End Slider -->
          </div>


        </div>
        <!-- End Col -->

        <div class="mt-5 sm:mt-10 lg:mt-0">
          <div class="space-y-6 sm:space-y-8">
            <!-- Title -->
            <div class="space-y-2 md:space-y-4">
              <h2 class="font-bold text-4xl text-gray-800">
                <span class="titulo-header">Tecnologia</span> e café em sintonia
              </h2>
              <p class="mt-3 text-lg text-gray-600 text-justify">
                Venha experimentar o futuro do sabor em nossa cafeteria.
                Desfrute de um café quente e saboroso, conecte-se com o mundo e deixe-se inspirar por nosso ambiente inovador.
              </p>
            </div>
            <!-- End Title -->

            <!-- List -->
            <ul role="list" class="space-y-2 sm:space-y-4">


              <li class="flex space-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full ">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" fill="none">
                   <path class="svg-primario" d="M278.4 235.4c-55.1-55.1-69.5-132.5-37.9-184.3c8.1 17.8 18.9 38.5 31.3 53.2c27.7 32.8 61.2 44.7 90.7 55.3l1 .4c30.1 10.8 56.2 20.3 78 46.2c10.9 12.8 21.4 33.6 29.5 52.3c1 2.3 2 4.6 2.9 6.8c-51.3 41.5-136.3 29.3-195.6-29.9zm181-181c55.1 55.1 69.5 132.5 37.9 184.3c-8.1-17.8-18.9-38.5-31.3-53.2c-27.7-32.8-61.2-44.7-90.7-55.3l-1-.4c-30.1-10.8-56.2-20.3-78-46.2c-10.9-12.8-21.4-33.6-29.5-52.3c-1-2.3-2-4.6-2.9-6.8C315.1-17 400.2-4.9 459.4 54.4zM0 352c0-77.9 44.5-142.8 103.5-157.1c-6.9 18.3-13.9 40.6-15.5 59.7c-3.6 42.8 11.6 74.9 25 103.2l.4 .9c13.7 28.9 25.3 54.1 22.5 87.8c-1.4 16.7-8.6 38.9-16.1 57.9c-.9 2.4-1.9 4.7-2.8 6.9C51.5 504.5 0 435.8 0 352zm256 0c0 77.9-44.5 142.8-103.5 157.1c6.9-18.3 13.9-40.6 15.5-59.8c3.6-42.8-11.6-74.9-25-103.2l-.4-.9c-13.7-28.9-25.3-54.1-22.5-87.8c1.4-16.7 8.6-38.9 16.1-57.9c.9-2.4 1.9-4.7 2.8-6.9C204.5 199.5 256 268.2 256 352z"/>
                   <path class="svg-secundario" d="M471 258.5c1 2.3 2 4.6 2.9 6.8c2.8-2.3 5.5-4.7 8.1-7.3c5.9-5.9 11-12.4 15.2-19.4c-8.1-17.8-18.9-38.5-31.3-53.2c-27.7-32.8-61.2-44.7-90.7-55.3l-1-.4c-30.1-10.8-56.2-20.3-78-46.2c-10.9-12.8-21.4-33.6-29.5-52.3c-1-2.3-2-4.6-2.9-6.8c-2.8 2.3-5.5 4.7-8.1 7.3c-5.9 5.9-11 12.4-15.2 19.4c8.1 17.8 18.9 38.5 31.3 53.2c27.7 32.8 61.2 44.7 90.7 55.3l1 .4c30.1 10.8 56.2 20.3 78 46.2c10.9 12.8 21.4 33.6 29.5 52.3zM119.9 504.5c-.9 2.4-1.9 4.7-2.8 6.9c3.6 .4 7.2 .6 10.9 .6c8.4 0 16.6-1 24.5-2.9c6.9-18.3 13.9-40.6 15.5-59.8c3.6-42.8-11.6-74.9-25-103.2l-.4-.9c-13.7-28.9-25.3-54.1-22.5-87.8c1.4-16.7 8.6-38.9 16.1-57.9c.9-2.4 1.9-4.7 2.8-6.9c-3.6-.4-7.2-.6-10.9-.6c-8.4 0-16.6 1-24.5 2.9c-6.9 18.3-13.9 40.6-15.5 59.7c-3.6 42.8 11.6 74.9 25 103.2l.4 .9c13.7 28.9 25.3 54.1 22.5 87.8c-1.4 16.7-8.6 38.9-16.1 57.9z"/>
                 </svg>
                </span>
                <span class="sm:text-base text-gray-500">
                  <span class="font-bold">Cafés especiais</span> cuidadosamente selecionados e preparados com tecnologia por nossos robôs baristas.
                </span>
              </li>





              <li class="flex space-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full">
              <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 640 512" fill="none">

                <path class="svg-primario" d="M128 0C92.7 0 64 28.7 64 64V288H19.2C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384H352V288H128V64H448V96h64V64c0-35.3-28.7-64-64-64H128zM576 448V192H448V448H576z"/>
                <path class="svg-secundario" d="M448 192H576V448H448V192zm-16-64c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H432z"/>
              </svg>

            </span>

                <span class="text-sm sm:text-base text-gray-500">
                <span class="font-bold">Tecnologia de ponta</span> com Wi-Fi, energia renovável para carregar os seus dispositivos e um ambiente propício para a criatividade e inovação.
            </span>
              </li>


              <li class="flex space-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full">
              <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 640 512" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path class="svg-secundario" d="M418.4 157.9c-5.9 1.4-12 2.1-18.4 2.1c-16.5 0-31.9-5-44.6-13.6L317.6 354.1c5.9-1.4 12-2.1 18.4-2.1c16.5 0 31.9 5 44.6 13.6l37.8-207.7zM114.1 280.4L259.7 407.8c6.8-21.3 22.2-38.7 42.1-48.2L156.3 232.2c-6.8 21.3-22.2 38.7-42.1 48.2zM160 210.5l183.8-73.5C329.1 122.4 320 102.3 320 80c0-.8 0-1.7 0-2.5L136.2 151.1C150.9 165.6 160 185.7 160 208c0 .8 0 1.7 0 2.5z"/>
                <path class="svg-primario" d="M320 80a80 80 0 1 1 160 0A80 80 0 1 1 320 80zM256 432a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM80 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/>
              </svg>

            </span>

                <span class="text-sm sm:text-base text-gray-500">
                <span class="font-bold">Um espaço único</span> para pensar, criar e se conectar. A sua dose diária de inspiração.
            </span>
              </li>

            </ul>
            <!-- End List -->
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Features -->


    <div>

      <!-- Hero -->
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Grid -->
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
<!--            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight dark:text-white">-->
<!--              Estamos no coração da <span class="titulo-header">tecnologia</span>-->
<!--            </h1>-->

            <h2 class="font-bold text-4xl text-gray-800">
              Acessórios com <span class="titulo-header">tecnologia</span>
            </h2>

            <p class="mt-3 text-lg text-gray-600 text-justify">
              Transforme a experiência do seu café com acessórios inovadores e inteligentes que combinam tecnologia de ponta e mantém o sabor incomparável. Tudo em um toque.
            </p>

            <div class="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">

              <div class="py-5">
                <div class="flex space-x-1">
                    <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                      <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 640 512" fill="none">
                        <path class="svg-secundario" d="M208 32V82.7c0 8.5-3.4 16.6-9.4 22.6l-29.3 29.3c-6 6-9.4 14.1-9.4 22.6V224c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V157.3c0-8.5-3.4-16.6-9.4-22.6l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6V32H208zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/>
                        <path class="svg-primario" d="M208 32V82.7c0 8.5-3.4 16.6-9.4 22.6l-29.3 29.3c-6 6-9.4 14.1-9.4 22.6V224c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V157.3c0-8.5-3.4-16.6-9.4-22.6l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6V32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64c0-17.7 14.3-32 32-32h80zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224z"/>
                      </svg>

                      <div>
                        <div>
                          <h3 class="block font-bold text-gray-700">Xícara</h3>
                          <p class="text-gray-600">Ajuste a temperatura, personalize e monitore o seu consumo de café.</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              <div class="py-5">
                <div class="flex space-x-1">
                    <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                      <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" fill="none">
                        <path class="svg-secundario" d="M160.4 176C103.4 202.9 64 260.8 64 328v16c0 55.5 34.6 99.4 55.9 121.2c9.9 10.2 23.9 14.8 38.1 14.8H418c14.2 0 28.1-4.7 38.1-14.8C477.4 443.4 512 399.5 512 344V328c0-67.2-39.4-125.1-96.4-152H160.4zM448 328v16c0 27.4-16.8 53.7-33.5 72H161.5c-16.7-18.3-33.5-44.6-33.5-72V328c0-57.4 46.6-104 104-104H344c57.4 0 104 46.6 104 104z"/>
                        <path class="svg-primario" d="M96 96c-17.7 0-32 14.3-32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128C0 75 43 32 96 32h25.3H192 454.7c14 0 25.3 11.3 25.3 25.3c0 4.4-1.1 8.7-3.3 12.5L416 176H160L114.3 96H96zM448 344c0 27.4-16.8 53.7-33.5 72H161.5c-16.7-18.3-33.5-44.6-33.5-72V328c0-2.7 .1-5.4 .3-8H447.7c.2 2.6 .3 5.3 .3 8v16z"/>
                      </svg>

                      <div>
                        <div>
                          <h3 class="block font-bold text-gray-700">Jarra</h3>
                          <p class="text-gray-600">Mantém a temperatura ideal e te notifica quando o café está pronto.</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              <div class="py-5">
                <div class="flex space-x-1">
                    <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                      <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 640 512" fill="none">
                        <path class="svg-secundario" d="M70 392l5.1 61.3c2.8 33.2 30.5 58.7 63.8 58.7H309.1c33.3 0 61-25.5 63.8-58.7L378 392H70zM56.7 232H391.3L400 128H48l8.7 104z"/>
                        <path class="svg-primario" d="M55.2 17.7L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32L392.8 17.7C387.4 6.8 376.3 0 364.2 0H83.8C71.7 0 60.6 6.8 55.2 17.7zM378 392l13.3-160H56.7L70 392H378z"/>
                      </svg>

                      <div>
                        <div>
                          <h3 class="block font-bold text-gray-700">Copo térmico</h3>
                          <p class="text-gray-600">Controle total para um café perfeito aonde você estiver.</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              <div class="py-5">
                <div class="flex space-x-1">
                    <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                      <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" fill="none">
                        <path class="svg-primario" d="M32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256z"/>
                        <path class="svg-secundario" d="M112 24c0-13.3-10.7-24-24-24S64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/>
                      </svg>

                      <div>
                        <div>
                          <h3 class="block font-bold text-gray-700">Caneca</h3>
                          <p class="text-gray-600">Mudança de cor por temperatura, aquecimento e monitoramento.</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

            </div>
          </div>

          <div class="relative ms-4">


            <div>
              <!-- Slider -->
              <div data-hs-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true }' class="relative">
                <div class="hs-carousel relative overflow-hidden w-full min-h-[600px] bg-white rounded-lg">
                  <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                    <div v-for="n in 6" :key="n" class="hs-carousel-slide">
                      <div class="flex justify-center h-full">
                        <img class="rounded-xl self-center transition duration-700" :src="`https://storage.googleapis.com/turma-do-cafe-assets/acessorio-${n}.jpg`" alt="Image Description">
                      </div>
                    </div>
                  </div>
                </div>

                <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </span>
                  <span class="sr-only">Previous</span>
                </button>

                <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                  <span class="sr-only">Next</span>
                  <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
                </button>

                <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                  <span
                      class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                  <span
                      class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                </div>
              </div>
              <!-- End Slider -->
            </div>


          </div>
        </div>
      </div>
    </div>


    <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <div>
            <!-- Slider -->
            <div data-hs-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true }' class="relative">
              <div class="hs-carousel relative overflow-hidden w-full min-h-[600px] bg-white rounded-lg">
                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                  <div v-for="n in 11" :key="n" class="hs-carousel-slide">
                    <div class="flex justify-center h-full">
                      <img class="rounded-xl self-center transition duration-700" :src="`https://storage.googleapis.com/turma-do-cafe-assets/origem%20(${n}).jpg`" alt="Image Description">
                    </div>
                  </div>
                </div>
              </div>

              <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </span>
                <span class="sr-only">Previous</span>
              </button>

              <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span class="sr-only">Next</span>
                <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
              </button>

              <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
              </div>
            </div>
            <!-- End Slider -->
          </div>


        </div>
        <!-- End Col -->

        <div class="mt-5 sm:mt-10 lg:mt-0">
          <div class="space-y-6 sm:space-y-8">
            <!-- Title -->
            <div class="space-y-2 md:space-y-4">
              <h2 class="font-bold text-4xl text-gray-800">
                <span class="titulo-header">Tecnologia</span> da origem a xícara
              </h2>
              <p class="mt-3 text-lg text-gray-600 text-justify">
                A tecnologia se une à tradição no cultivo do café, oferecendo a você o café perfeito, desde a origem do grão até a sua xícara.
              </p>
            </div>
            <!-- End Title -->

            <!-- List -->
            <ul role="list" class="space-y-2 sm:space-y-4">


              <li class="flex space-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full ">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="none">
                  <path class="svg-secundario" d="M559.7 392.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h16 64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288 272 193.7c-29.1 0-57.3 9.9-80 28L68.8 384H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H192 352.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-366.1-8.3a.5 .5 0 1 1 -.9 .2 .5 .5 0 1 1 .9-.2z"/>
                  <path class="svg-primario" d="M96 14.5C96 6.5 102.5 0 110.5 0H160c88.4 0 160 71.6 160 160v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V160H241.5C161.1 160 96 94.9 96 14.5zm384 0C480 89 424.1 150.3 352 159c-.2-44.9-15.9-86.2-42-118.8C338.2 15.2 375.3 0 416 0h49.5c8 0 14.5 6.5 14.5 14.5z"/>
                 </svg>
                </span>
                <span class="text-sm sm:text-base text-gray-500">
                  <span class="font-bold">Práticas agrícolas sustentáveis</span> são aplicadas que minimizam o impacto ambiental e preservam a biodiversidade.
                </span>
              </li>

              <li class="flex space-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full">
              <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 640 512" fill="none">
                <path class="svg-secundario" d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V234.8c-14.5-6.9-30.8-10.8-48-10.8c-60.1 0-109.1 47.3-111.9 106.7C250.2 348.7 224 387.3 224 432c0 17.2 3.9 33.5 10.8 48H64c-35.3 0-64-28.7-64-64V96zm88 0c-13.3 0-24 10.7-24 24V264c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24zm96 0c-13.3 0-24 10.7-24 24V264c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24z"/>
                <path class="svg-primario" d="M256 432c0 44.2 35.8 80 80 80H560c44.2 0 80-35.8 80-80c0-39-27.9-71.5-64.8-78.6c.5-3.1 .8-6.2 .8-9.4c0-30.9-25.1-56-56-56c-18.1 0-34.1 8.6-44.4 21.8C464.8 278.5 435 256 400 256c-44.2 0-80 35.8-80 80c0 5.9 .6 11.7 1.9 17.2C284.4 359.9 256 392.6 256 432z"/>
              </svg>
            </span>
                <span class="text-sm sm:text-base text-gray-500">
                <span class="font-bold">Sensores inteligentes</span> monitoram o clima e a saúde das plantas, otimizando o uso de recursos e garantindo um plantio sustentável.
            </span>
              </li>

              <li class="flex space-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full">
              <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path class="svg-secundario" d="M48 56c0-4.4 3.6-8 8-8h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H56C25.1 0 0 25.1 0 56v80c0 13.3 10.7 24 24 24s24-10.7 24-24V56zm480 0v80c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-30.9-25.1-56-56-56H440c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c4.4 0 8 3.6 8 8zM56 464c-4.4 0-8-3.6-8-8V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 30.9 25.1 56 56 56h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H56zm472-8c0 4.4-3.6 8-8 8H440c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c30.9 0 56-25.1 56-56V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v80z"/>
                <path class="svg-primario" d="M152 128c-13.3 0-24 10.7-24 24V360c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V152c0-13.3-10.7-24-24-24H152zm160 0c-13.3 0-24 10.7-24 24V360c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V152c0-13.3-10.7-24-24-24H312zm72 24V360c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V152c0-13.3-10.7-24-24-24H408c-13.3 0-24 10.7-24 24zM240 128c-8.8 0-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16z"/>
              </svg>

            </span>

                <span class="text-sm sm:text-base text-gray-500">
                <span class="font-bold">Rastreabilidade</span> em cada colheita desde a planta até a sua xícara, garantindo a origem e a qualidade do café.
            </span>
              </li>

            </ul>
            <!-- End List -->
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Features -->


    <div>

      <!-- Hero -->
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Grid -->
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <!--            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight dark:text-white">-->
            <!--              Estamos no coração da <span class="titulo-header">tecnologia</span>-->
            <!--            </h1>-->

            <h2 class="font-bold text-4xl text-gray-800">
              Grãos com <span class="titulo-header">tecnologia</span>
            </h2>

            <p class="mt-3 text-lg text-gray-600 text-justify">
              Nossos atendentes e robôs estão prontos para te ajudar a escolher o melhor grão para o seu paladar.
            </p>

            <div class="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">

              <div class="py-5">
                <div class="flex space-x-1">
                  <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                    <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" fill="none">
                      <path class="svg-secundario" d="M240 56c0-30.9-25.1-56-56-56c-28.9 0-52.7 21.9-55.7 49.9C100.6 56.9 80 82.1 80 112c0 6 .8 11.9 2.4 17.4C53.6 135.7 32 161.3 32 192c0 15 5.1 28.8 13.8 39.7C18.7 244.5 0 272.1 0 304c0 34.2 21.4 63.4 51.6 74.8C49.3 385.4 48 392.6 48 400c0 35.3 28.7 64 64 64c5.6 0 11.1-.7 16.3-2.1c2.9 28.2 26.8 50.1 55.7 50.1c30.9 0 56-25.1 56-56V272H192c-8.8 0-16 7.2-16 16v34.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V288c0-26.5 21.5-48 48-48h48V160H205.3c-6.6 18.6-24.4 32-45.3 32c-26.5 0-48-21.5-48-48s21.5-48 48-48c20.9 0 38.7 13.4 45.3 32H240V56zm32 104V352h34.7c6.6-18.6 24.4-32 45.3-32c26.5 0 48 21.5 48 48s-21.5 48-48 48c-20.9 0-38.7-13.4-45.3-32H272v72c0 30.9 25.1 56 56 56c28.9 0 52.7-21.9 55.7-50.1c5.2 1.4 10.7 2.1 16.3 2.1c35.3 0 64-28.7 64-64c0-7.4-1.3-14.6-3.6-21.2C490.6 367.4 512 338.2 512 304c0-31.9-18.7-59.5-45.8-72.3C474.9 220.8 480 207 480 192c0-30.7-21.6-56.3-50.4-62.6c1.6-5.5 2.4-11.4 2.4-17.4c0-29.9-20.6-55.1-48.3-62.1C380.6 21.9 356.9 0 328 0c-30.9 0-56 25.1-56 56v72h48c26.5 0 48 21.5 48 48v2.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V176c0-8.8-7.2-16-16-16H272z"/>
                      <path class="svg-primario" d="M240 272V456h32V384h34.7c6.6 18.6 24.4 32 45.3 32c26.5 0 48-21.5 48-48s-21.5-48-48-48c-20.9 0-38.7 13.4-45.3 32H272V160h48c8.8 0 16 7.2 16 16v2.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V176c0-26.5-21.5-48-48-48H272V56H240v72H205.3c-6.6-18.6-24.4-32-45.3-32c-26.5 0-48 21.5-48 48s21.5 48 48 48c20.9 0 38.7-13.4 45.3-32H240v80H192c-26.5 0-48 21.5-48 48v34.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V288c0-8.8 7.2-16 16-16h48zM176 144a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm176 96a16 16 0 1 1 0-32 16 16 0 1 1 0 32zM176 368a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm192 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z"/>
                    </svg>

                    <div>
                      <div>
                        <h3 class="block font-bold text-gray-700">Inteligência artificial</h3>
                        <p class="text-gray-600">Robôs baristas te ajudarão a escolher o café ideal para o seu paladar.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="py-5">
                <div class="flex space-x-1">
                  <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                    <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 384 512" fill="none">
                      <path class="svg-secundario" d="M56.9 309.7L1.3 441.8c-2.2 5.3-1.4 11.4 2.1 16s9.3 6.9 15 6l56.1-8.3 32.2 49.2c3.2 5 8.9 7.7 14.8 7.2s11-4.3 13.3-9.7l50.1-119c-3.9-.9-7.6-2.4-11-4.7L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7l-1.8-.9zm142.3 73.5l50.1 119c2.3 5.5 7.4 9.2 13.3 9.7s11.6-2.2 14.8-7.2l32.2-49.2 56.1 8.3c5.7 .8 11.4-1.5 15-6s4.3-10.7 2.1-16L327.1 309.7l-1.8 .9c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-3.4 2.3-7.2 3.8-11 4.7z"/>
                      <path class="svg-primario" d="M210.2 5.5c-11-7.3-25.4-7.3-36.4 0L156 17.2c-6 3.9-13 5.8-20.1 5.4l-21.3-1.3c-13.2-.8-25.6 6.4-31.5 18.2L73.4 58.6C70.2 65 65 70.2 58.6 73.4L39.5 83c-11.8 5.9-19 18.3-18.2 31.5l1.3 21.3c.4 7.1-1.5 14.2-5.4 20.1L5.5 173.8c-7.3 11-7.3 25.4 0 36.4L17.2 228c3.9 6 5.8 13 5.4 20.1l-1.3 21.3c-.8 13.2 6.4 25.6 18.2 31.5l19.1 9.6c6.4 3.2 11.5 8.4 14.7 14.7L83 344.5c5.9 11.8 18.3 19 31.5 18.2l21.3-1.3c7.1-.4 14.2 1.5 20.1 5.4l17.8 11.8c11 7.3 25.4 7.3 36.4 0L228 366.8c6-3.9 13-5.8 20.1-5.4l21.3 1.3c13.2 .8 25.6-6.4 31.5-18.2l9.6-19.1c3.2-6.4 8.4-11.5 14.7-14.7l19.1-9.6c11.8-5.9 19-18.3 18.2-31.5l-1.3-21.3c-.4-7.1 1.5-14.2 5.4-20.1l11.8-17.8c7.3-11 7.3-25.4 0-36.4L366.8 156c-3.9-6-5.8-13-5.4-20.1l1.3-21.3c.8-13.2-6.4-25.6-18.2-31.5l-19.1-9.6c-6.4-3.2-11.5-8.4-14.7-14.7L301 39.5c-5.9-11.8-18.3-19-31.5-18.2l-21.3 1.3c-7.1 .4-14.2-1.5-20.1-5.4L210.2 5.5zM192 112a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/>
                    </svg>

                    <div>
                      <div>
                        <h3 class="block font-bold text-gray-700">Premiados</h3>
                        <p class="text-gray-600">Grãos excepcionais, cuidadosamente escolhidos de terroirs distintos e premiados.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="py-5">
                <div class="flex space-x-1">
                  <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                    <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512" fill="none">
                      <path class="svg-secundario" d="M96 128H352c0 70.7-57.3 128-128 128s-128-57.3-128-128z"/>
                      <path class="svg-primario" d="M352 80v48H320 304 144 128 96V80 42.3v-.1V39 16c0-8.8 7.2-16 16-16h2.4c3.6 0 7.2 1.2 10 3.5L140 16l3 2.4c.3 .2 .6 .4 .8 .6l.1 .1c10.2 7.5 23.8 8.3 34.9 2L209.1 4c4.6-2.6 9.7-4 14.9-4s10.4 1.4 14.9 4l30.2 17.2c11 6.3 24.7 5.5 34.9-2l.1-.1c.3-.2 .6-.4 .8-.6l3-2.4L323.6 3.5c2.8-2.3 6.4-3.5 10-3.5H336c8.8 0 16 7.2 16 16V39v3.2 .1V80zM0 472c0-92.8 75.2-168 168-168H280c92.8 0 168 75.2 168 168v8c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-8z"/>
                    </svg>

                    <div>
                      <div>
                        <h3 class="block font-bold text-gray-700">Exclusivo</h3>
                        <p class="text-gray-600">Microlotes exclusivamente nossos e cultivados de forma especial para você.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="py-5">
                <div class="flex space-x-1">
                  <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                    <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" fill="none">
                      <path class="svg-secundario" d="M278.4 235.4c-55.1-55.1-69.5-132.5-37.9-184.3c8.1 17.8 18.9 38.5 31.3 53.2c27.7 32.8 61.2 44.7 90.7 55.3l1 .4c30.1 10.8 56.2 20.3 78 46.2c10.9 12.8 21.4 33.6 29.5 52.3c1 2.3 2 4.6 2.9 6.8c-51.3 41.5-136.3 29.3-195.6-29.9zm181-181c55.1 55.1 69.5 132.5 37.9 184.3c-8.1-17.8-18.9-38.5-31.3-53.2c-27.7-32.8-61.2-44.7-90.7-55.3l-1-.4c-30.1-10.8-56.2-20.3-78-46.2c-10.9-12.8-21.4-33.6-29.5-52.3c-1-2.3-2-4.6-2.9-6.8C315.1-17 400.2-4.9 459.4 54.4zM0 352c0-77.9 44.5-142.8 103.5-157.1c-6.9 18.3-13.9 40.6-15.5 59.7c-3.6 42.8 11.6 74.9 25 103.2l.4 .9c13.7 28.9 25.3 54.1 22.5 87.8c-1.4 16.7-8.6 38.9-16.1 57.9c-.9 2.4-1.9 4.7-2.8 6.9C51.5 504.5 0 435.8 0 352zm256 0c0 77.9-44.5 142.8-103.5 157.1c6.9-18.3 13.9-40.6 15.5-59.8c3.6-42.8-11.6-74.9-25-103.2l-.4-.9c-13.7-28.9-25.3-54.1-22.5-87.8c1.4-16.7 8.6-38.9 16.1-57.9c.9-2.4 1.9-4.7 2.8-6.9C204.5 199.5 256 268.2 256 352z"/>
                      <path class="svg-primario" d="M471 258.5c1 2.3 2 4.6 2.9 6.8c2.8-2.3 5.5-4.7 8.1-7.3c5.9-5.9 11-12.4 15.2-19.4c-8.1-17.8-18.9-38.5-31.3-53.2c-27.7-32.8-61.2-44.7-90.7-55.3l-1-.4c-30.1-10.8-56.2-20.3-78-46.2c-10.9-12.8-21.4-33.6-29.5-52.3c-1-2.3-2-4.6-2.9-6.8c-2.8 2.3-5.5 4.7-8.1 7.3c-5.9 5.9-11 12.4-15.2 19.4c8.1 17.8 18.9 38.5 31.3 53.2c27.7 32.8 61.2 44.7 90.7 55.3l1 .4c30.1 10.8 56.2 20.3 78 46.2c10.9 12.8 21.4 33.6 29.5 52.3zM119.9 504.5c-.9 2.4-1.9 4.7-2.8 6.9c3.6 .4 7.2 .6 10.9 .6c8.4 0 16.6-1 24.5-2.9c6.9-18.3 13.9-40.6 15.5-59.8c3.6-42.8-11.6-74.9-25-103.2l-.4-.9c-13.7-28.9-25.3-54.1-22.5-87.8c1.4-16.7 8.6-38.9 16.1-57.9c.9-2.4 1.9-4.7 2.8-6.9c-3.6-.4-7.2-.6-10.9-.6c-8.4 0-16.6 1-24.5 2.9c-6.9 18.3-13.9 40.6-15.5 59.7c-3.6 42.8 11.6 74.9 25 103.2l.4 .9c13.7 28.9 25.3 54.1 22.5 87.8c-1.4 16.7-8.6 38.9-16.1 57.9z"/>
                    </svg>

                    <div>
                      <div>
                        <h3 class="block font-bold text-gray-700">De todos os lugares</h3>
                        <p class="text-gray-600">Aonde tem uma plantação de café, nós temos os grãos aqui para você.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="relative ms-4">


            <div>
              <!-- Slider -->
              <div data-hs-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true }' class="relative">
                <div class="hs-carousel relative overflow-hidden w-full min-h-[600px] bg-white rounded-lg">
                  <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                    <div v-for="n in 9" :key="n" class="hs-carousel-slide">
                      <div class="flex justify-center h-full">
                        <img class="rounded-xl self-center transition duration-700" :src="`https://storage.googleapis.com/turma-do-cafe-assets/graos-${n}.jpg`" alt="Image Description">
                      </div>
                    </div>
                  </div>
                </div>

                <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </span>
                  <span class="sr-only">Previous</span>
                </button>

                <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                  <span class="sr-only">Next</span>
                  <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
                </button>

                <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                  <span
                      class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                  <span
                      class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                </div>
              </div>
              <!-- End Slider -->
            </div>


          </div>
        </div>
      </div>
    </div>


    <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <div>
            <!-- Slider -->
            <div data-hs-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true }' class="relative">
              <div class="hs-carousel relative overflow-hidden w-full min-h-[600px] bg-white rounded-lg">
                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                  <div v-for="n in 11" :key="n" class="hs-carousel-slide">
                    <div class="flex justify-center h-full">
                      <img class="rounded-xl self-center transition duration-700" :src="`https://storage.googleapis.com/turma-do-cafe-assets/cardapio-robo%20(${n}).jpg`" alt="Image Description">
                    </div>
                  </div>
                </div>
              </div>

              <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </span>
                <span class="sr-only">Previous</span>
              </button>

              <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span class="sr-only">Next</span>
                <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
              </button>

              <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
              </div>
            </div>
            <!-- End Slider -->
          </div>


        </div>
        <!-- End Col -->

        <div class="mt-5 sm:mt-10 lg:mt-0">
          <div class="space-y-6 sm:space-y-8">
            <!-- Title -->
            <div class="space-y-2 md:space-y-4">
              <h2 class="font-bold text-4xl text-gray-800">
                <span class="titulo-header">Tecnologia</span> no cardápio
              </h2>
              <p class="mt-3 text-lg text-gray-600 text-justify">
                Uma maneira tecnológica e integrada de fazer o seu pedido, crie e aprecie o seu café como quiser.
              </p>
            </div>
            <!-- End Title -->

            <!-- List -->
            <ul role="list" class="space-y-2 sm:space-y-4">


              <li class="flex space-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full ">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 448 512" fill="none">
                    <path class="svg-primario" d="M80 128c0-35.3 28.7-64 64-64H304c35.3 0 64 28.7 64 64V256c0 35.3-28.7 64-64 64H144c-35.3 0-64-28.7-64-64V128zm112 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM144 256a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm80-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm48 16a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zM0 448c0-53 43-96 96-96H352c53 0 96 43 96 96v32c0 17.7-14.3 32-32 32H352V448c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v64H32c-17.7 0-32-14.3-32-32V448z"/>
                    <path class="svg-secundario" d="M240 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64h32V16zM64 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H80V128H64zM176 464c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h32V464zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h32V464zm48-16c-8.8 0-16 7.2-16 16v48h32V464c0-8.8-7.2-16-16-16zM416 160c0-17.7-14.3-32-32-32H368V256h16c17.7 0 32-14.3 32-32V160z"/>
                 </svg>
                </span>
                <span class="text-sm sm:text-base text-gray-500">
                  <span class="font-bold">Um robô</span> que te entende, que sabe o que você quer e faz a mágica acontecer do seu jeito.
                </span>
              </li>

              <li class="flex space-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full">
                  <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" fill="none">
                    <path class="svg-primario" d="M243.9 248.3L39 308.5c-13.9 4.1-15.6 23.2-2.6 29.7l57.3 28.7c1.3 .7 2.6 1.5 3.7 2.5l-88 88c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l88-88c1 1.1 1.9 2.3 2.5 3.7l28.7 57.3c6.5 13 25.6 11.3 29.7-2.6l60.2-204.8c3.6-12.1-7.7-23.4-19.9-19.9z"/>
                    <path class="svg-secundario" d="M448 256c0 106-86 192-192 192c-3.9 0-7.8-.1-11.7-.4l-18.4 62.6c9.9 1.2 19.9 1.8 30.1 1.8c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256c0 10.2 .6 20.2 1.8 30.1l62.6-18.4c-.2-3.9-.4-7.8-.4-11.7C64 150 150 64 256 64s192 86 192 192zm-48 0c0-79.5-64.5-144-144-144c-78.8 0-142.8 63.2-144 141.7L179.1 234c9.6-33.5 40.4-58 76.9-58c44.2 0 80 35.8 80 80c0 36.5-24.5 67.4-58 76.9l-19.7 67C336.8 398.8 400 334.8 400 256z"/>
                  </svg>
                </span>

                <span class="text-sm sm:text-base text-gray-500">
                <span class="font-bold">Atenção aos detalhes pedidos</span> é o princípio de toda preparação de cafés por cada um de nossos robôs.
                </span>
              </li>

              <li class="flex space-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full">
                  <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path class="svg-primario" d="M154 120.8c22.6 3.5 41.3 18.9 49.5 39.6c-5.6 9.4-15.8 15.6-27.5 15.6c-17.7 0-32-14.3-32-32c0-9.1 3.8-17.4 10-23.2zM360.8 122c22 5.3 40.1 20.6 49.1 40.9c-5.8 8-15.2 13.1-25.9 13.1c-17.7 0-32-14.3-32-32c0-8.5 3.3-16.3 8.8-22zM100.4 307.8c-2.3-10.2 5.5-19.8 15.9-19.8H395.7c10.4 0 18.1 9.6 15.9 19.8c-5 22.3-14.6 42.7-27.7 60.2c-13.4-10-30-16-47.9-16c-44.2 0-80 35.8-80 80c-74.3 0-139.5-51.6-155.6-124.2z"/>
                    <path class="svg-secundario" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 120c35.3 0 64 28.7 64 64v10.3c0 16.4-13.3 29.7-29.7 29.7H109.7C93.3 224 80 210.7 80 194.3V184c0-35.3 28.7-64 64-64zm128 72c0-39.8 32.2-72 72-72s72 32.2 72 72v7.5c0 13.5-11 24.5-24.5 24.5H296.5C283 224 272 213 272 199.5V192zM116.3 288H395.7c10.4 0 18.1 9.6 15.9 19.8C395.5 380.4 330.3 432 256 432s-139.5-51.6-155.6-124.2c-2.3-10.2 5.5-19.8 15.9-19.8z"/>
                  </svg>
                </span>
                <span class="text-sm sm:text-base text-gray-500">
                  <span class="font-bold">De forma humanizada</span> é como os nossos robôs interagem com os nossos clientes, eles fazem mais do que preparar um café.
                </span>
              </li>

            </ul>
            <!-- End List -->
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Features -->


    <div>

      <!-- Hero -->
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Grid -->
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>

            <h2 class="font-bold text-4xl text-gray-800">
              Entrega feita com <span class="titulo-header">tecnologia</span>
            </h2>

            <p class="mt-3 text-lg text-gray-600 text-justify">
              Redefinimos a maneira como você desfruta do seu café favorito, peça no seu smartphone e receba em sua casa, escritório ou aonde estiver.
            </p>

            <div class="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">

              <div class="py-5">
                <div class="flex space-x-1">
                  <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                    <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" fill="none">
                      <path class="svg-primario" d="M80 112c0 16.2 12.1 29.7 27.8 31.7L160 213.3v85.3l-52.2 69.6C92.1 370.3 80 383.8 80 400c0 17.7 14.3 32 32 32c16.2 0 29.7-12.1 31.7-27.8L213.3 352h85.3l69.6 52.2c2.1 15.7 15.5 27.8 31.7 27.8c17.7 0 32-14.3 32-32c0-16.2-12.1-29.7-27.8-31.7L352 298.7V213.3l52.2-69.6c15.7-2.1 27.8-15.5 27.8-31.7c0-17.7-14.3-32-32-32c-16.2 0-29.7 12.1-31.7 27.8L298.7 160H213.3l-69.6-52.2C141.7 92.1 128.2 80 112 80c-17.7 0-32 14.3-32 32z"/>
                      <path class="svg-secundario" d="M213.3 159.9c6.9-14.5 10.7-30.8 10.7-47.9C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c17.2 0 33.4-3.9 47.9-10.7l-29.9-39.8c-5.7 1.7-11.8 2.6-18.1 2.6c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 6.3-.9 12.3-2.6 18.1l39.8 29.9zm138.8 53.3c14.5 6.9 30.8 10.7 47.9 10.7c61.9 0 112-50.1 112-112S461.9 0 400 0S288 50.1 288 112c0 17.2 3.9 33.4 10.7 47.9l39.8-29.9c-1.7-5.7-2.6-11.8-2.6-18.1c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-6.3 0-12.3-.9-18.1-2.6l-29.9 39.8zM298.7 352.1C291.9 366.6 288 382.8 288 400c0 61.9 50.1 112 112 112s112-50.1 112-112s-50.1-112-112-112c-17.2 0-33.4 3.9-47.9 10.7l29.9 39.8c5.7-1.7 11.8-2.6 18.1-2.6c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-6.3 .9-12.3 2.6-18.1l-39.8-29.9zM159.9 298.7C145.4 291.9 129.2 288 112 288C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-17.2-3.9-33.4-10.7-47.9l-39.8 29.9c1.7 5.7 2.6 11.8 2.6 18.1c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c6.3 0 12.3 .9 18.1 2.6l29.9-39.8z"/>
                    </svg>

                    <div>
                      <div>
                        <h3 class="block font-bold text-gray-700">Drone</h3>
                        <p class="text-gray-600">O seu café vai voando do preparo até a sua degustação em poucos minutos.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="py-5">
                <div class="flex space-x-1">
                  <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                    <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" fill="none">
                      <path class="svg-primario" d="M128 128C128 57.3 185.3 0 256 0s128 57.3 128 128v64H128V128zm96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM208 256h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                      <path class="svg-secundario" d="M96 192c-26.5 0-48 21.5-48 48V398.3c0 8.7-2.4 17.2-6.8 24.7L2.3 487.8c-3 4.9-3 11.1-.2 16.1s8.2 8.1 13.9 8.1h96c8.8 0 16-7.2 16-16V384l45.3 45.3c12 12 28.3 18.7 45.3 18.7h75c17 0 33.3-6.7 45.3-18.7L384 384V496c0 8.8 7.2 16 16 16h96c5.8 0 11.1-3.1 13.9-8.1s2.8-11.2-.2-16.1L470.8 423c-4.5-7.5-6.8-16-6.8-24.7V240c0-26.5-21.5-48-48-48H96zm112 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                    </svg>

                    <div>
                      <div>
                        <h3 class="block font-bold text-gray-700">Robô entregador</h3>
                        <p class="text-gray-600">Robô entregador dedicado a deixar o seu café quente até a sua entrega.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="py-5">
                <div class="flex space-x-1">
                  <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                    <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 640 512" fill="none">
                      <path class="svg-primario" d="M336 128c-26.5 0-48 21.5-48 48V400c0 20.9 13.4 38.7 32 45.3V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V448H544v40c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V445.3c18.6-6.6 32-24.4 32-45.3V176c0-26.5-21.5-48-48-48H336zm16 176l15.8-49.3c3.3-8.7 11.2-14.7 20.5-14.7H539.7c9.2 0 17.2 6 20.5 14.7L576 304H352zm192 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM360 352a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                      <path class="svg-secundario" d="M144 86.1C144 54.7 169.4 0 200 0c31.5 0 56 54.7 56 86.1v96.9l0 0c0 .4 0 .7 0 1.1V325.5 408v3.5l.1 .1c1.2 22.2 13.7 41.3 31.9 51.8V496c0 5.2 .8 10.3 2.4 15L200 480.9l-90.9 30.3c-4.9 1.6-10.2 .8-14.4-2.2s-6.6-7.8-6.6-13V464c0-4.9 2.2-9.5 6-12.5l50-40V330.3l-123.4 37c-4.8 1.5-10.1 .5-14.1-2.5S0 357.1 0 352V288c0-5.6 2.9-10.8 7.8-13.7L144 192.5V86.1z"/>
                    </svg>

                    <div>
                      <div>
                        <h3 class="block font-bold text-gray-700">Courier</h3>
                        <p class="text-gray-600">Parceiros entregam os seus grãos preferidos de café em qualquer lugar no mundo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="py-5">
                <div class="flex space-x-1">
                  <div class="group flex gap-y-6 size-full rounded-lg p-5 transition-all">
                    <svg class="flex-shrink-0 size-8 mt-0.5 me-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" fill="none">
                      <path class="svg-primario" d="M377.4 41.4c12.5-12.5 32.8-12.5 45.3 0l48 48c12.5 12.5 12.5 32.8 0 45.3L270.2 335.1c11.4 24.6 17.8 52 17.8 80.9c0 31.7-7.7 61.5-21.2 87.8c-4.7 9-16.7 10.3-23.8 3.1L135.3 399.3l-16.4 16.4c.7 2.6 1.1 5.4 1.1 8.3c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32c2.9 0 5.6 .4 8.3 1.1l16.4-16.4L5.1 269.1c-7.2-7.2-5.9-19.2 3.1-23.8C34.5 231.7 64.3 224 96 224c28.9 0 56.3 6.4 80.9 17.8L377.4 41.4z"/>
                      <path class="svg-secundario" d="M233 7c-9.4-9.4-24.6-9.4-33.9 0l-96 96c-9.4 9.4-9.4 24.6 0 33.9l89.4 89.4L322.3 96.4 233 7zM375 409c9.4 9.4 24.6 9.4 33.9 0l96-96c9.4-9.4 9.4-24.6 0-33.9l-89.4-89.4L285.7 319.6 375 409z"/>
                    </svg>

                    <div>
                      <div>
                        <h3 class="block font-bold text-gray-700">Rastreamento real-time</h3>
                        <p class="text-gray-600">Porque todos precisam saber aonde está o seu grão ou café preferido agora.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="relative ms-4">


            <div>
              <!-- Slider -->
              <div data-hs-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true }' class="relative">
                <div class="hs-carousel relative overflow-hidden w-full min-h-[600px] bg-white rounded-lg">
                  <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                    <div v-for="n in 13" :key="n" class="hs-carousel-slide">
                      <div class="flex justify-center h-full">
                        <img class="rounded-xl self-center transition duration-700" :src="`https://storage.googleapis.com/turma-do-cafe-assets/entrega%20(${n}).jpg`" alt="Image Description">
                      </div>
                    </div>
                  </div>
                </div>

                <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </span>
                  <span class="sr-only">Previous</span>
                </button>

                <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                  <span class="sr-only">Next</span>
                  <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
                </button>

                <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                  <span
                      class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                  <span
                      class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                </div>
              </div>
              <!-- End Slider -->
            </div>


          </div>

        </div>
      </div>
    </div>


    <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <div>
            <!-- Slider -->
            <div data-hs-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true }' class="relative">
              <div class="hs-carousel relative overflow-hidden w-full min-h-[600px] bg-white rounded-lg">
                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                  <div v-for="n in 12" :key="n" class="hs-carousel-slide">
                    <div class="flex justify-center h-full">
                      <img class="rounded-xl self-center transition duration-700" :src="`https://storage.googleapis.com/turma-do-cafe-assets/cafe-${n}.jpg`" alt="Image Description">
                    </div>
                  </div>
                </div>
              </div>

              <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </span>
                <span class="sr-only">Previous</span>
              </button>

              <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span class="sr-only">Next</span>
                <span class="text-2xl" aria-hidden="true">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
              </button>

              <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span
                    class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
              </div>
            </div>
            <!-- End Slider -->
          </div>


        </div>
        <!-- End Col -->

        <div class="mt-5 sm:mt-10 lg:mt-0">
          <div class="space-y-6 sm:space-y-8">
            <!-- Title -->
            <div class="space-y-2 md:space-y-4">
              <h2 class="font-bold text-4xl text-gray-800">
                <span class="titulo-header">Tecnologia</span> nos detalhes do café
              </h2>
              <p class="mt-3 text-lg text-gray-600 text-justify">
                Com a destreza do auxílio de robôs, os nossos cafés são uma obra de arte feita sobre a espuma do leite.
              </p>
            </div>
            <!-- End Title -->

            <!-- List -->
            <ul role="list" class="space-y-2 sm:space-y-4">


              <li class="flex space-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full ">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="none">
                    <path class="svg-primario" d="M559.6 16.4c21.9 21.9 21.9 57.3 0 79.2L306.9 348.3l-79.2-79.2L480.4 16.4c21.9-21.9 57.3-21.9 79.2 0zM205.1 291.7l79.2 79.2-.1 .1c2.5 9.3 3.8 19 3.8 29c0 61.9-50.1 112-112 112H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h4.8c17.6 0 29.6-18.9 27.8-36.4c-.4-3.8-.6-7.7-.6-11.6c0-61.9 50.1-112 112-112c10 0 19.8 1.3 29 3.8l.1-.1z"/>
                    <path class="svg-secundario" d="M164.7 19.3L298.5 153.1 194.4 257.2c-6-.8-12.2-1.2-18.4-1.2c-.8 0-1.7 0-2.5 0L50.7 133.3c-25-25-25-65.5 0-90.5L74.2 19.3c25-25 65.5-25 90.5 0zM384.6 467.1L320 402.5c0-.8 0-1.7 0-2.5c0-6.2-.4-12.4-1.2-18.4L422.9 277.5l75.6 75.6c6.7 6.7 11.6 15.1 14.2 24.2l29.7 104c2.4 8.4 .1 17.4-6.1 23.6s-15.2 8.5-23.6 6.1l-104-29.7c-9.1-2.6-17.5-7.5-24.2-14.2z"/>
                 </svg>
                </span>
                <span class="text-sm sm:text-base text-gray-500">
                  <span class="font-bold">O que você quiser</span> os nossos robôs podem desenhar sobre a espuma do leite do seu café, o único limite é a sua imaginação.
                </span>
              </li>

              <li class="flex space-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full">
                  <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 320 512" fill="none">
                    <path class="svg-primario" d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24l128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L96 0zm64 384c26.5 0 48-16 48-48c0-22.2-23-52-37.2-68.2c-5.8-6.7-15.9-6.7-21.7 0C135 284 112 313.8 112 336c0 26.5 21.5 48 48 48z"/>
                    <path class="svg-secundario" d="M104 120.9V48H216v72.9c0 12.2 7.2 23.1 17.2 30.1c33.1 23.1 54.8 61.5 54.8 105V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V256c0-43.5 21.7-81.9 54.8-105c10-7 17.2-17.9 17.2-30.1zM160 384c26.5 0 48-16 48-48c0-22.2-23-52-37.2-68.2c-5.8-6.7-15.9-6.7-21.7 0C135 284 112 313.8 112 336c0 26.5 21.5 48 48 48z"/>
                  </svg>
                </span>
                <span class="text-sm sm:text-base text-gray-500">
                <span class="font-bold">Espuma com essências naturais</span> para adicionar um gosto a mais no seu momento de café diário.
                </span>
              </li>


              <li class="flex space-x-3">
              <span class="mt-0.5 size-5 flex justify-center items-center rounded-full">
                <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path class="svg-primario" d="M41 7C31.6-2.3 16.4-2.3 7 7S-2.3 31.6 7 41l80 80c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L41 7zM471 7L391 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0zM7 505c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 471c-9.4 9.4-9.4 24.6 0 33.9zm464 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80z"/>
                  <path class="svg-secundario" d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L328 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H248z"/>
                </svg>
              </span>
                <span class="text-sm sm:text-base text-gray-500">
                <span class="font-bold">Tudo para ser seu</span> e você sentir a essência do café unido a sua essência e ao seu dia.
              </span>
              </li>

            </ul>
            <!-- End List -->
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Features -->


    <div>

      <!-- Hero -->
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Grid -->
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
<!--            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight dark:text-white">-->
<!--              Estamos no coração da <span class="titulo-header">tecnologia</span>-->
<!--            </h1>-->

            <h2 class="font-bold text-4xl text-gray-800">
              Estamos no coração da <span class="titulo-header">tecnologia</span>
            </h2>

            <p class="mt-3 text-lg text-gray-600 text-justify">
              No coração pulsante da Cidade Maravilhosa, onde os zeros e uns da tecnologia encontram a paixão pelo café, está a nossa cafeteria.
            </p>

            <div class="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
              <!-- Review -->
              <div class="py-5">
                <div class="flex space-x-1">

                  <svg fill="url(#myGradient1)" class="mt-1 flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                    </defs>
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    <defs>
                      <linearGradient id="myGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#EDE0D4"/>
                        <stop offset="25%" stop-color="#EDE0D4"/>
                        <stop offset="50%" stop-color="#E6CCB2"/>
                        <stop offset="75%" stop-color="#E6CCB2"/>
                        <stop offset="100%" stop-color="#E6CCB2"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg fill="url(#myGradient2)" class="mr-2.5 mt-1 flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                    </defs>
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    <defs>
                      <linearGradient id="myGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#E6CCB2"/>
                        <stop offset="25%" stop-color="#E6CCB2"/>
                        <stop offset="50%" stop-color="#E6CCB2"/>
                        <stop offset="75%" stop-color="#DDB892"/>
                        <stop offset="100%" stop-color="#DDB892"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg fill="url(#myGradient3)" class="mr-2.5 mt-1 flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                    </defs>
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    <defs>
                      <linearGradient id="myGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#DDB892"/>
                        <stop offset="25%" stop-color="#DDB892"/>
                        <stop offset="50%" stop-color="#B08968"/>
                        <stop offset="75%" stop-color="#B08968"/>
                        <stop offset="100%" stop-color="#B08968"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg fill="url(#myGradient4)" class="mr-2.5 mt-1 flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                    </defs>
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    <defs>
                      <linearGradient id="myGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#B08968"/>
                        <stop offset="25%" stop-color="#B08968"/>
                        <stop offset="50%" stop-color="#9C6644"/>
                        <stop offset="75%" stop-color="#9C6644"/>
                        <stop offset="100%" stop-color="#9C6644"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg fill="url(#myGradient5)" class="mr-2.5 mt-1 flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                    </defs>
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    <defs>
                      <linearGradient id="myGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#9C6644"/>
                        <stop offset="25%" stop-color="#9C6644"/>
                        <stop offset="50%" stop-color="#7F5539"/>
                        <stop offset="75%" stop-color="#7F5539"/>
                        <stop offset="100%" stop-color="#7F5539"/>
                      </linearGradient>
                    </defs>
                  </svg>

                </div>

                <p class="mt-3 text-sm text-gray-800">
                  <span class="font-bold">4.9</span> / 5 - de 12k avaliações
                </p>

                <div class="mt-5">
                  <svg class="h-auto w-16 text-gray-800 dark:text-white" width="80" height="27" viewBox="0 0 80 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.558 9.74046H11.576V12.3752H17.9632C17.6438 16.0878 14.5301 17.7245 11.6159 17.7245C7.86341 17.7245 4.58995 14.7704 4.58995 10.6586C4.58995 6.62669 7.70373 3.51291 11.6159 3.51291C14.6498 3.51291 16.4063 5.42908 16.4063 5.42908L18.2426 3.51291C18.2426 3.51291 15.8474 0.878184 11.4961 0.878184C5.94724 0.838264 1.67578 5.50892 1.67578 10.5788C1.67578 15.5289 5.70772 20.3592 11.6558 20.3592C16.8854 20.3592 20.7177 16.8063 20.7177 11.4969C20.7177 10.3792 20.558 9.74046 20.558 9.74046Z" fill="currentColor"/>
                    <path d="M27.8621 7.78442C24.1894 7.78442 21.5547 10.6587 21.5547 14.012C21.5547 17.4451 24.1096 20.3593 27.9419 20.3593C31.415 20.3593 34.2094 17.7645 34.2094 14.0918C34.1695 9.94011 30.896 7.78442 27.8621 7.78442ZM27.902 10.2994C29.6984 10.2994 31.415 11.7764 31.415 14.0918C31.415 16.4072 29.7383 17.8842 27.902 17.8842C25.906 17.8842 24.3491 16.2874 24.3491 14.0519C24.3092 11.8962 25.8661 10.2994 27.902 10.2994Z" fill="currentColor"/>
                    <path d="M41.5964 7.78442C37.9238 7.78442 35.2891 10.6587 35.2891 14.012C35.2891 17.4451 37.844 20.3593 41.6763 20.3593C45.1493 20.3593 47.9438 17.7645 47.9438 14.0918C47.9038 9.94011 44.6304 7.78442 41.5964 7.78442ZM41.6364 10.2994C43.4328 10.2994 45.1493 11.7764 45.1493 14.0918C45.1493 16.4072 43.4727 17.8842 41.6364 17.8842C39.6404 17.8842 38.0835 16.2874 38.0835 14.0519C38.0436 11.8962 39.6004 10.2994 41.6364 10.2994Z" fill="currentColor"/>
                    <path d="M55.0475 7.82434C51.6543 7.82434 49.0195 10.7784 49.0195 14.0918C49.0195 17.8443 52.0934 20.3992 54.9676 20.3992C56.764 20.3992 57.6822 19.7205 58.4407 18.8822V20.1198C58.4407 22.2754 57.1233 23.5928 55.1273 23.5928C53.2111 23.5928 52.2531 22.1557 51.8938 21.3573L49.4587 22.3553C50.297 24.1517 52.0135 26.0279 55.0874 26.0279C58.4407 26.0279 60.9956 23.9122 60.9956 19.481V8.18362H58.3608V9.26147C57.6423 8.38322 56.5245 7.82434 55.0475 7.82434ZM55.287 10.2994C56.9237 10.2994 58.6403 11.7365 58.6403 14.1317C58.6403 16.6068 56.9636 17.9241 55.2471 17.9241C53.4507 17.9241 51.774 16.4471 51.774 14.1716C51.8139 11.6966 53.5305 10.2994 55.287 10.2994Z" fill="currentColor"/>
                    <path d="M72.8136 7.78442C69.62 7.78442 66.9453 10.2994 66.9453 14.0519C66.9453 18.004 69.9393 20.3593 73.093 20.3593C75.7278 20.3593 77.4044 18.8822 78.3625 17.6048L76.1669 16.1277C75.608 17.006 74.6499 17.8443 73.093 17.8443C71.3365 17.8443 70.5381 16.8862 70.0192 15.9281L78.4423 12.4152L78.0032 11.3772C77.1649 9.46107 75.2886 7.78442 72.8136 7.78442ZM72.8934 10.2196C74.0511 10.2196 74.8495 10.8184 75.2487 11.5768L69.6599 13.9321C69.3405 12.0958 71.097 10.2196 72.8934 10.2196Z" fill="currentColor"/>
                    <path d="M62.9531 19.9999H65.7076V1.47693H62.9531V19.9999Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              <div class="py-5">
                <div class="flex space-x-1">

                  <svg fill="url(#myGradient6)" class="mr-2.5 mt-1 flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                    </defs>
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    <defs>
                      <linearGradient id="myGradient6" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#9C6644"/>
                        <stop offset="25%" stop-color="#9C6644"/>
                        <stop offset="50%" stop-color="#7F5539"/>
                        <stop offset="75%" stop-color="#7F5539"/>
                        <stop offset="100%" stop-color="#7F5539"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg fill="url(#myGradient7)" class="mr-2.5 mt-1 flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                    </defs>
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    <defs>
                      <linearGradient id="myGradient7" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#B08968"/>
                        <stop offset="25%" stop-color="#B08968"/>
                        <stop offset="50%" stop-color="#9C6644"/>
                        <stop offset="75%" stop-color="#9C6644"/>
                        <stop offset="100%" stop-color="#9C6644"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg fill="url(#myGradient8)" class="mr-2.5 mt-1 flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                    </defs>
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    <defs>
                      <linearGradient id="myGradient8" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#DDB892"/>
                        <stop offset="25%" stop-color="#DDB892"/>
                        <stop offset="50%" stop-color="#B08968"/>
                        <stop offset="75%" stop-color="#B08968"/>
                        <stop offset="100%" stop-color="#B08968"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg fill="url(#myGradient9)" class="mr-2.5 mt-1 flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                    </defs>
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    <defs>
                      <linearGradient id="myGradient9" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#E6CCB2"/>
                        <stop offset="25%" stop-color="#E6CCB2"/>
                        <stop offset="50%" stop-color="#E6CCB2"/>
                        <stop offset="75%" stop-color="#DDB892"/>
                        <stop offset="100%" stop-color="#DDB892"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg fill="url(#myGradient10)" class="mt-1 flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                    </defs>

                    <path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"/>

                    <defs>
                      <linearGradient id="myGradient10" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#EDE0D4"/>
                        <stop offset="25%" stop-color="#EDE0D4"/>
                        <stop offset="50%" stop-color="#E6CCB2"/>
                        <stop offset="75%" stop-color="#E6CCB2"/>
                        <stop offset="100%" stop-color="#E6CCB2"/>
                      </linearGradient>
                    </defs>
                  </svg>

                </div>

                <p class="mt-3 text-sm text-gray-800">
                  <span class="font-bold">4.95</span> / 5 - de 10k avaliações
                </p>

                <div class="mt-5">
                  <svg class="h-auto w-16 text-gray-800 dark:text-white" width="110" height="28" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.6601 8.35107C64.8995 8.35107 63.5167 8.72875 62.1331 9.48265C62.1331 5.4582 62.1331 1.81143 62.2594 0.554199L53.8321 2.06273V2.81736L54.7124 2.94301C55.8433 3.19431 56.2224 3.82257 56.4715 5.33255C56.725 8.35107 56.5979 24.4496 56.4715 27.0912C58.7354 27.5945 61.1257 27.9722 63.5159 27.9722C70.1819 27.9722 74.2064 23.8213 74.2064 17.281C74.2064 12.1249 70.9366 8.35107 66.6601 8.35107ZM63.7672 26.5878C63.2639 26.5878 62.6342 26.5878 62.258 26.4629C62.1316 24.7023 62.0067 17.281 62.1316 10.7413C62.8862 10.4893 63.3888 10.3637 64.0185 10.3637C66.7872 10.3637 68.2965 13.6335 68.2965 17.6572C68.2957 22.6898 66.4088 26.5878 63.7672 26.5878ZM22.1363 1.0568H0V2.18838L1.25796 2.31403C2.89214 2.56533 3.52184 3.57127 3.77242 5.9608C4.15082 10.4886 4.02445 18.6646 3.77242 22.5619C3.52112 24.9522 2.89287 26.0845 1.25796 26.2087L0 26.4615V27.4674H14.2123V26.4615L12.703 26.2087C11.0681 26.0838 10.4392 24.9522 10.1879 22.5619C10.0615 20.9263 9.93583 18.2847 9.93583 15.0156L12.9543 15.1413C14.8413 15.1413 15.7208 16.6505 16.0985 18.7881H17.2308V9.86106H16.0985C15.7201 11.9993 14.8413 13.5078 12.9543 13.5078L9.93655 13.6342C9.93655 9.35773 10.0622 5.33328 10.1886 2.94374H14.59C17.9869 2.94374 19.7475 5.08125 21.0047 8.85513L22.2626 8.47745L22.1363 1.0568Z" fill="currentColor"/>
                    <path d="M29.3053 8.09998C35.5944 8.09998 38.7385 12.3764 38.7385 18.0358C38.7385 23.4439 35.2167 27.9731 28.9276 27.9731C22.6393 27.9731 19.4951 23.6959 19.4951 18.0358C19.4951 12.6277 23.0162 8.09998 29.3053 8.09998ZM28.9276 9.35793C26.1604 9.35793 25.4058 13.1311 25.4058 18.0358C25.4058 22.8149 26.6637 26.7137 29.1796 26.7137C32.0703 26.7137 32.8264 22.9405 32.8264 18.0358C32.8264 13.2567 31.5699 9.35793 28.9276 9.35793ZM75.8403 18.1622C75.8403 13.0054 79.1101 8.09998 85.5248 8.09998C90.8057 8.09998 93.3224 11.9995 93.3224 17.1555H81.6253C81.4989 21.8089 83.7628 25.2051 88.2913 25.2051C90.3038 25.2051 91.3098 24.7033 92.5685 23.8223L93.0703 24.4505C91.8124 26.2111 89.0459 27.9731 85.5248 27.9731C79.8647 27.9724 75.8403 23.9479 75.8403 18.1622ZM81.6253 15.7726L87.5366 15.6463C87.5366 13.1311 87.159 9.35793 85.0214 9.35793C82.8839 9.35793 81.7502 12.8791 81.6253 15.7726ZM108.291 9.10663C106.782 8.47693 104.77 8.09998 102.506 8.09998C97.8538 8.09998 94.9594 10.8665 94.9594 14.137C94.9594 17.4075 97.0955 18.7904 100.118 19.7971C103.261 20.9279 104.142 21.8089 104.142 23.3182C104.142 24.8275 103.01 26.2103 100.997 26.2103C98.6084 26.2103 96.8464 24.8275 95.4635 21.0536L94.5825 21.3063L94.7089 26.84C96.2181 27.4683 98.9846 27.9724 101.375 27.9724C106.28 27.9724 109.425 25.4557 109.425 21.5576C109.425 18.9161 108.041 17.4075 104.771 16.1489C101.249 14.766 99.992 13.8857 99.992 12.2501C99.992 10.6152 101.126 9.48286 102.635 9.48286C104.897 9.48286 106.407 10.8665 107.54 14.2627L108.42 14.0114L108.291 9.10663ZM55.0883 8.6033C52.9508 7.3468 49.1769 7.97433 47.1651 12.5028L47.29 8.1007L38.8642 9.73561V10.4902L39.7444 10.6159C40.8775 10.7423 41.3794 11.3705 41.5057 13.0062C41.757 16.0247 41.6314 21.3078 41.5057 23.9486C41.3794 25.4564 40.8775 26.2111 39.7444 26.3374L38.8642 26.4638V27.4697H50.5606V26.4638L49.0513 26.3374C47.7941 26.2111 47.4164 25.4564 47.29 23.9486C47.0387 21.5584 47.0387 16.7793 47.1651 13.7608C47.7933 12.8798 50.5606 12.1259 53.0757 13.7608L55.0883 8.6033Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="relative ms-4">


            <iframe class="w-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12509.071220028352!2d-43.176818!3d-22.906079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5fd24e0bdd%3A0x99447fc2607f1de1!2sFaculdade%20Infnet%20-%20Faculdade%20de%20Engenharia%20de%20Software%2C%20Engenharia%20da%20Computa%C3%A7%C3%A3o%2C%20Engenharia%20de%20Dados%20e%20IA%20%7C%20MBA%20e%20P%C3%B3s%20em%20TI!5e1!3m2!1spt-BR!2sbr!4v1711470017960!5m2!1spt-BR!2sbr" width="600" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
      </div>
    </div>





  </div>

</template>

<style scoped>

.svg-primario {
  fill: #c49e7b;
}

.svg-secundario {
  opacity:.4;
  fill: #c49e7b;
}

</style>