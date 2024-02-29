<script setup>

</script>

<template >

  <div>

<!--    Carrousel ########## -->
    <div>

      <!-- Slider -->
      <div data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }' class="relative">
        <div class="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
          <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div class="hs-carousel-slide">
              <div class="flex justify-center h-full p-6">
<!--                <span class="self-center text-4xl transition duration-700">First slide</span>-->
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop" class="self-center transition duration-700" alt="cafe"/>
              </div>
            </div>
            <div class="hs-carousel-slide">
              <div class="flex justify-center h-full p-6">
                <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2674&auto=format&fit=crop" class="self-center transition duration-700" alt="cafe"/>
              </div>
            </div>
            <div class="hs-carousel-slide">
              <div class="flex justify-center h-full p-6">
                <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2670&auto=format&fit=crop" class="self-center transition duration-700" alt="cafe"/>
              </div>
            </div>
          </div>
        </div>

        <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        </div>
      </div>
      <!-- End Slider -->

    </div>
    <!--   End Carrousel ########## -->


<!--    Text modal ########## -->
    <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p class="text-3xl text-gray-700 font-bold mb-5">
        O café diferente
      </p>
      <p class="text-gray-500 text-lg">
        Sugar whipped, mocha frappuccino aromatic aged redeye, roast a irish affogato robusta. Affogato mazagran, con panna, decaffeinated, black at eu foam organic. Steamed frappuccino cortado froth carajillo crema siphon single shot.
        <br><br>
        Barista, viennese, extra , instant spoon coffee id, seasonal irish variety white café au lait. Percolator aftertaste grounds rich to go, cinnamon single origin aftertaste decaffeinated milk. Trifecta organic sugar extra , steamed decaffeinated instant et siphon.
      </p>
      <br>
    </div>
    <!--   End Text modal ########## -->

<!--    Card group ##########-->

    <div>

      <!-- Card Blog -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card -->
          <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">

              <img src="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?q=80&w=2070&auto=format&fit=crop" class="self-center" alt="cafe" width="75%" height="75%"/>

            </div>
            <div class="p-4 md:p-6">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Cafés
              </h3>
              <p class="mt-3 text-gray-500">
                Conheça os nossos grãos.
              </p>
            </div>
            <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                Conheça
              </a>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">

              <img src="https://images.unsplash.com/photo-1542556398-9e1da7ad3669?q=80&w=1926&auto=format&fit=crop" class="self-center" alt="cafe" width="75%" height="75%"/>

            </div>
            <div class="p-4 md:p-6">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Produtos
              </h3>
              <p class="mt-3 text-gray-500">
                Os melhores produtos para o seu café.
              </p>
            </div>
            <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                Conheça
              </a>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">

              <img src="https://images.unsplash.com/photo-1649616549853-e48bebe89c25?q=80&w=2070&auto=format&fit=crop" class="self-center" alt="cafe" width="75%" height="75%"/>

            </div>
            <div class="p-4 md:p-6">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Sustentabilidade
              </h3>
              <p class="mt-3 text-gray-500">
                Práticas para preservação do meio ambiente.
              </p>
            </div>
            <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                Conheça
              </a>
            </div>
          </div>
          <!-- End Card -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Card Blog -->

    </div>

    <!--   End Card group ##########-->


  </div>

</template>

<style scoped>

</style>