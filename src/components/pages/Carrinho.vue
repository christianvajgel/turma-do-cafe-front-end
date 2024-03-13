<script setup>

// const URL_LISTAR_CARRINHO = `https://localhost:7173//api/Carrinho/listar-carrinho/${useRoute().params.id}`;

import axios from "axios";
import {onMounted, ref, watch} from "vue";

const CARRINHO_ID_ESTATICO_TEMPORARIO = "b0c3a074-fa3f-43f9-975d-8ae95d6a8940";

const URL_LISTAR_CARRINHO = `https://localhost:7173/api/Carrinho/listar-carrinho/${CARRINHO_ID_ESTATICO_TEMPORARIO}`;
const URL_VALOR_TOTAL_DO_CARRINHO = `https://localhost:7173/api/Carrinho/calcular-total-carrinho/${CARRINHO_ID_ESTATICO_TEMPORARIO}`;


const itens = ref(null);
const produtos = ref(null);
const valorTotalDoCarrinho = ref(0);

const ok = ref(false);

watch(ok, (newValue, oldValue) => {
  if (newValue === true) {
    console.log('CARRINHO componente: A variável ok mudou para true')
  }
});

onMounted(() => {
  console.log("CARRINHO componente: mounted OK");

  listarTodosOsProdutos();
  obterValorTotalDoCarrinho();
  listarCarrinho();

});

async function listarCarrinho() {

  //console.log("%c### LISTAR CARRINHO ###", "background: red; color: yellow; font-size: x-large;");

  console.log(URL_LISTAR_CARRINHO);

  try {

    // const response = await axios.get(`https://localhost:7173/api/Produto/c9b6c3f5-f27e-499b-a4b2-17775589795e`);
    // const response = await axios.get(`https://localhost:7173/api/Produto/${useRoute().params.id}`);
    const response = await axios.get(URL_LISTAR_CARRINHO);

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

async function obterValorTotalDoCarrinho() {

  //console.log("%c### LISTAR CARRINHO ###", "background: red; color: yellow; font-size: x-large;");

  console.log(URL_VALOR_TOTAL_DO_CARRINHO);

  try {
    const response = await axios.get(URL_VALOR_TOTAL_DO_CARRINHO);
    valorTotalDoCarrinho.value = response.data;

    console.log(`%c### Valor Total do Carrinho: ${valorTotalDoCarrinho.value} ###`, "background: red; color: yellow; font-size: x-large;");

    // setTimeout(function() {
    //   // Whatever you want to do after the wait
    // }, 1000);

    //ok.value = true;

  } catch (error) {
    console.error(error);
  } finally {
    // setTimeout(function() {
    //   ok.value = true;
    // }, 1000);
  }

  // console.log(produtoEspecifico);
}

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


const id_carrinho = ref({
  id: CARRINHO_ID_ESTATICO_TEMPORARIO
});

async function modificarQuantidadeDoItemNoCarrinho(operacao, idProduto, idItem) {

  console.log(`%c### idItem: ${idItem} ###`, "background: red; color: yellow; font-size: x-large;");
  console.log(`%c### idProduto: ${idProduto} ###`, "background: red; color: yellow; font-size: x-large;");
  console.log(`%c### idCarrinho: ${id_carrinho.value.id} ###`, "background: red; color: yellow; font-size: x-large;");

  const jsonForm = JSON.stringify(id_carrinho.value);
  console.log(jsonForm);

  try {
    const response = await axios.post('https://localhost:7173/api/Carrinho/modificar-quantidade-produto-carrinho', jsonForm, {
      headers: {
        'Content-Type': 'application/json',
        'Quantidade':1,
        'Operacao':operacao,
        'IdProduto':idProduto,
        'IdItem':idItem
      }
    });

    console.log(response.request);

    console.log('ADICIONAR CARRINHO -> Resposta do servidor:', response.data);

    location.reload();

  } catch (error) {
    console.error(`ADICIONAR CARRINHO -> Erro ao enviar o formulário: ${error}`);
  }
}

async function deletarItem(idItem) {

  const URL = `https://localhost:7173/api/Item/${idItem}`;

  try {

    const response = await axios.delete(URL);

    console.log(response);

    location.reload();

  } catch (error) {
    console.error(error);
  }

}


</script>

<template>

  <div>
    <h2 class="mt-10 lg:mt-20 font-bold text-2xl text-center md:text-3xl text-gray-800 dark:text-gray-200">
      Carrinho
    </h2>
  </div>



  <div v-if="ok">

<!--    <div class="max-w-[60rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">-->
<!--      <h2 class="mt-10 lg:mt-20 font-bold text-xl text-left md:text-2xl text-gray-800">-->
<!--        Total:-->
<!--      </h2>-->
<!--      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">-->
<!--        Cancelar-->
<!--      </button>-->
<!--    </div>-->

    <div class="max-w-[60rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex justify-between items-center">
      <h2 class="font-bold text-xl text-left md:text-2xl text-gray-800">
        Total: R$ {{ valorTotalDoCarrinho.toFixed(2).replace('.',',') }}
      </h2>
      <router-link to="/finalizacao">
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
        Revisar pedido
        <svg id="svg-carrinho" class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M64 24C64 10.7 74.7 0 88 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H234.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H263.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H88C74.7 48 64 37.3 64 24zM225.6 240H523.2c10.9 0 20.4-7.3 23.2-17.8L584.7 80H195.1l30.5 160zM192 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM24 96h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H136c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/>
        </svg>
      </button>
      </router-link>
    </div>


    <!-- Card Blog -->
    <div class="max-w-[60rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Card -->
        <div v-for="(item, index) in itens" :key="item.id"
             class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <!--            <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">-->
          <div class="flex flex-col justify-center items-center rounded-t-xl">

<!--            ${carrinho.value[0].produtoId}-->
            <router-link :to="`/detalhar-produto/${buscarAtributoDeProduto(item.produtoId,`id`)}`">
            <img :src="buscarAtributoDeProduto(item.produtoId,`imagem`)"
                 class="self-center imagem-card border rounded-xl mt-4 md:mt-6 shadow-sm group-hover:scale-105 transition-transform duration-500 ease-in-out" alt="cafe"/>
            </router-link>

          </div>
          <div class="p-4 md:p-6">
              <span class="block mb-1 text-xs font-semibold uppercase text-yellow-800 dark:text-rose-500">
                {{ buscarAtributoDeProduto(item.produtoId,`origem`) }}
              </span>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              {{ buscarAtributoDeProduto(item.produtoId,`nome`) }}
            </h3>
            <p class="mt-3 text-gray-500">
              R$ {{ buscarAtributoDeProduto(item.produtoId,`preco`).toFixed(2).replace('.',',') }}
            </p>
            <p class="mt-3 text-gray-500">
              Quantidade: {{ item.quantidade }}
            </p>
            <p class="mt-3 text-gray-500">
              Peso: {{ buscarAtributoDeProduto(item.produtoId,`peso`) }}g
            </p>

            <!-- Input Number -->
            <div class="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg" data-hs-input-number>
              <div class="flex items-center gap-x-1.5">

                <button @click="modificarQuantidadeDoItemNoCarrinho(`diminuir`,item.produtoId, item.id)" type="button" class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-decrement>
                  <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"/>
                  </svg>
                </button>

                <input disabled id="input-quantidade" :value="item.quantidade" min="1" max="{{ buscarAtributoDeProduto(item.produtoId,`estoque`) }}" class="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white" type="text" data-hs-input-number-input>

                <button @click="modificarQuantidadeDoItemNoCarrinho(`aumentar`,item.produtoId, item.id)" type="button" class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-increment>
                  <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"/><path d="M12 5v14"/>
                  </svg>
                </button>


                <button @click="deletarItem(item.id)" type="button" class="p-0.5 size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-increment>
                  <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="red" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 16C0 7.2 7.2 0 16 0H53.9c22.8 0 42.5 16 47 38.4L145.4 256H466.5c14.7 0 27.5-10 31-24.2L544.5 44.1c2.1-8.6 10.8-13.8 19.4-11.6s13.8 10.8 11.6 19.4L528.6 239.5C521.5 268 495.9 288 466.5 288H152l7.9 38.4c3 14.9 16.1 25.6 31.4 25.6H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H191.2c-30.4 0-56.6-21.4-62.7-51.2L69.6 44.8C68 37.3 61.5 32 53.9 32H16C7.2 32 0 24.8 0 16zM192 480a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm280 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM379.3 91.3L342.6 128l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L320 150.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L297.4 128 260.7 91.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L320 105.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
                  </svg>
                </button>

              </div>




            </div>
            <!-- End Input Number -->

          </div>
          <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">

            <!--              <router-link :to="`/detalhar-produto/${produto.idProduto}`"-->
<!--            <router-link :to="`/detalhar-produto/${produto.id}`"-->
<!--                         class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">-->

<!--              Conheça-->

<!--            </router-link>-->

<!--            <a @click="adicionarProdutoNoCarrinho(produto.id)" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"-->
<!--               href="#comprar">-->
<!--              Comprar-->
<!--            </a>-->

          </div>
        </div>
        <!-- End Card -->

      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
  </div>

</template>

<style scoped>

</style>