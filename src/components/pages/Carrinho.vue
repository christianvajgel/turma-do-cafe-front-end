<script setup>

// const URL_LISTAR_CARRINHO = `https://localhost:7173//api/Carrinho/listar-carrinho/${useRoute().params.id}`;

import axios from "axios";
import {onMounted, ref, watch} from "vue";

const CARRINHO_ID_ESTATICO_TEMPORARIO = "b0c3a074-fa3f-43f9-975d-8ae95d6a8940";
const URL_LISTAR_CARRINHO = `https://localhost:7173/api/Carrinho/listar-carrinho/${CARRINHO_ID_ESTATICO_TEMPORARIO}`;

const itens = ref(null);
const produtos = ref(null);

const ok = ref(false);

watch(ok, (newValue, oldValue) => {
  if (newValue === true) {
    console.log('CARRINHO componente: A variável ok mudou para true')
  }
});

onMounted(() => {
  console.log("CARRINHO componente: mounted OK");

  listarTodosOsProdutos();
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
  id: "b0c3a074-fa3f-43f9-975d-8ae95d6a8940"
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

async function decrementarQuantidadeDoItemNoCarrinho() {
  console.log("decrementarQuantidadeDoItemNoCarrinho");
}

</script>

<template>

  <div v-if="ok">
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
            <img :src="buscarAtributoDeProduto(item.produtoId,`imagem`)"
                 class="self-center imagem-card border rounded-xl mt-4 md:mt-6 shadow-sm group-hover:scale-105 transition-transform duration-500 ease-in-out" alt="cafe"/>

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
                  <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                </button>

                <input disabled id="input-quantidade" :value="item.quantidade" min="1" max="{{ buscarAtributoDeProduto(item.produtoId,`estoque`) }}" class="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white" type="text" data-hs-input-number-input>

                <button @click="modificarQuantidadeDoItemNoCarrinho(`aumentar`,item.produtoId, item.id)" type="button" class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-increment>
                  <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
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