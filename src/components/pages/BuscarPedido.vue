<script setup>

</script>

<template>

  <div>
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div class="text-center">
          <h1 class="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
            Buscar pedido
          </h1>

          <p class="mt-3 text-gray-600 dark:text-gray-400">
            Todo o seu pedido em um só localizador.
          </p>

          <div id="div1" class="mt-20 sm:mt-20 mx-auto max-w-xl relative">
            <!-- Form -->
            <form>
              <div class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                <div class="flex-[1_0_0%]">
                  <label for="hs-search-article-1" class="block text-sm text-gray-700 font-medium dark:text-white"><span class="sr-only">Search article</span></label>
                  <input type="email" name="hs-search-article-1" id="hs-search-article-1" class="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search article">
                </div>
                <div class="flex-[0_0_auto]">
                  <a class="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </a>
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
                <path d="M88 0c13.3 0 24 10.7 24 24c0 16.1 7.5 23.7 23.8 37.9l1.1 1C152.6 76.6 176 97.1 176 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-16.1-7.5-23.7-23.8-37.9l-1.1-1C87.4 83.4 64 62.9 64 24C64 10.7 74.7 0 88 0zM48 416c0 26.5 21.5 48 48 48H288c26.5 0 48-21.5 48-48V240H48V416zM0 224c0-17.7 14.3-32 32-32H352h48c61.9 0 112 50.1 112 112s-50.1 112-112 112H384c0 53-43 96-96 96H96c-53 0-96-43-96-96V224zM384 368h16c35.3 0 64-28.7 64-64s-28.7-64-64-64H384V368zM224 24c0 16.1 7.5 23.7 23.8 37.9l1.1 1C264.6 76.6 288 97.1 288 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-16.1-7.5-23.7-23.8-37.9l-1.1-1C199.4 83.4 176 62.9 176 24c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>
              </svg>
            </div>

            <div id="elemento-2" class="md:block absolute top-0 -start-10 -translate-y-12">
              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 512 512" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path d="M88 80c-22.1 0-40 17.9-40 40v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V120C0 71.4 39.4 32 88 32h34.4H192 453.6C468.2 32 480 43.8 480 58.4c0 3.7-.8 7.3-2.3 10.7l-48.4 109c50 34.7 82.7 92.5 82.7 157.9v8c0 55.5-34.6 99.4-55.9 121.2C446.2 475.3 432.3 480 418 480H158c-14.2 0-28.1-4.7-38.1-14.8C98.6 443.4 64 399.5 64 344v-8c0-65.4 32.7-123.2 82.7-157.9L103.1 80H88zm296.8 80l35.6-80H192 155.6l35.6 80H384.8zm1.2 48H190c-41.8 21.6-71.7 63.1-77.1 112H463.1c-5.4-48.9-35.3-90.4-77.1-112zm32.2 224H157.7c.1 0 .1 0 .2 0H418c.1 0 .1 0 .2 0z"/>
              </svg>
            </div>

            <div id="elemento-3" class="md:block absolute top-0 -start-10 -translate-y-12">
              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 512 512" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path d="M108.2 48h232c3 0 5.8 1.7 7.2 4.4L361.2 80H88l13-27.4c1.3-2.8 4.1-4.6 7.2-4.6zM414.8 80L390.3 31c-9.5-19-28.9-31-50.1-31h-232C86.6 0 66.9 12.4 57.6 32L34.8 80H24C10.7 80 0 90.7 0 104s10.7 24 24 24H50 400h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-9.2zM47.4 160L74.6 453.9c3 32.9 30.7 58.1 63.7 58.1H309.7c33.1 0 60.7-25.2 63.7-58.1L400.6 160H352.4l-5.9 64H101.5l-5.9-64H47.4zm68.9 224H331.6l-6.1 65.5c-.8 8.2-7.7 14.5-15.9 14.5H138.3c-8.3 0-15.2-6.3-15.9-14.5L116.4 384z"/>
              </svg>
            </div>

            <div id="elemento-4" class="md:block absolute top-0 -start-10 -translate-y-11">
              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 512 512" fill="green" xmlns="http://www.w3.org/2000/svg">
                <path d="M197.7 125.7C194 122 192 117.1 192 112s2-10 5.7-13.7l60.7-60.7C262 34 266.9 32 272 32s10 2 13.7 5.7l60.7 60.7c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7L344 128H200l-2.3-2.3zM32 64c0-17.7 14.3-32 32-32H192c7.5 0 14.4 2.6 19.8 6.9L175 75.7c-9.6 9.6-15 22.7-15 36.3c0 5.5 .9 10.9 2.6 16H32V64zM48 384c0 26.5 21.5 48 48 48H288c26.5 0 48-21.5 48-48V208H152v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V208H48V384zM0 192c0-17.7 14.3-32 32-32H352h48c61.9 0 112 50.1 112 112s-50.1 112-112 112H384c0 53-43 96-96 96H96c-53 0-96-43-96-96V192zM384 336h16c35.3 0 64-28.7 64-64s-28.7-64-64-64H384V336z"/>
              </svg>
            </div>

<!--            <div id="elemento-5" class="md:block absolute top-0 -start-10 -translate-y-10">-->
<!--              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 576 512" fill="brown" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M80 112h72v10.7c0 8.5-3.4 16.6-9.4 22.6l-21.3 21.3c-6 6-9.4 14.1-9.4 22.6V256c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V189.3c0-8.5-3.4-16.6-9.4-22.6l-21.3-21.3c-6-6-9.4-14.1-9.4-22.6V112H368V352c0 26.5-21.5 48-48 48H128c-26.5 0-48-21.5-48-48V112zM64 64C46.3 64 32 78.3 32 96V352c0 53 43 96 96 96H320c53 0 96-43 96-96V320h32c70.7 0 128-57.3 128-128s-57.3-128-128-128H384 64zM448 272H416V112h32c44.2 0 80 35.8 80 80s-35.8 80-80 80z"/>-->
<!--              </svg>-->
<!--            </div>-->

            <div id="elemento-5" class="md:block absolute top-0 -start-10 -translate-y-10">
              <svg class="w-16 h-auto" width="150" height="150" viewBox="0 0 512 512" fill="brown" xmlns="http://www.w3.org/2000/svg">
                <path class="fa-secondary" d="M112 24c0-13.3-10.7-24-24-24S64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/><path class="fa-primary" d="M32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256z"/>              </svg>
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

          <div class="mt-10 sm:mt-20">
            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
              Business
            </a>
            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
              </svg>
              Strategy
            </a>
            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
              Health
            </a>
            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
              </svg>
              Creative
            </a>
            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
              </svg>
              Environment
            </a>
            <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z"/>
              </svg>
              Adventure
            </a>
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
  --tw-translate-y: -3rem/* -48px */;

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
  --tw-translate-y: -3rem/* -48px */;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

#elemento-5 {
  --tw-translate-x: 32.5rem; /* 192px */;
  --tw-translate-y: -3rem/* -48px */;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

.fa-secondary{opacity:.4}
</style>