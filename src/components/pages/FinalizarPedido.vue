<script setup>

import axios from "axios";
import {onMounted, ref, watch} from "vue";
import router from "@/router.js";
import {apagarIdDoCarrinho, gerarLocalizador, gerarUUID, obterIdDoCarrinho} from "@/global/functions.js";

// const CARRINHO_ID_ESTATICO_TEMPORARIO = "b0c3a074-fa3f-43f9-975d-8ae95d6a8940";
const CARRINHO_ID_ESTATICO_TEMPORARIO = obterIdDoCarrinho();

const URL_LISTAR_CARRINHO = `https://localhost:7173/api/Carrinho/listar-carrinho/${CARRINHO_ID_ESTATICO_TEMPORARIO}`;
const URL_VALOR_TOTAL_DO_CARRINHO = `https://localhost:7173/api/Carrinho/calcular-total-carrinho/${CARRINHO_ID_ESTATICO_TEMPORARIO}`;

const itens = ref(null);
const produtos = ref(null);
const valorTotalDoCarrinho = ref(0);

const ok = ref(false);

let totalDoCarrinho;

watch(ok, (newValue, oldValue) => {
  if (newValue === true) {
    console.log('CARRINHO componente: A variável ok mudou para true')
  }
});

onMounted(() => {

  listarTodosOsProdutos();
  obterValorTotalDoCarrinho();
  listarCarrinho();

  console.log("FINALIZAR PEDIDO componente: mounted OK");

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

    totalDoCarrinho = valorTotalDoCarrinho.value.toFixed(2).replace('.',',');

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


function calcularSubTotal(valor, quantidade) {

  return (valor * quantidade).toFixed(2).replace('.', ',');

}

let cupomValido = false;

cupomValido = true;

let valorTotalDesconto = 0;

let cupom = "";
//let totalDesconto = 0;

const LOCALIZADOR = gerarLocalizador();

const NUMERACAO_CARTAO = gerarNumeroAleatorio();

const form = ref({
  //Id: '',
  //Total: valorTotalDoCarrinho.value,
  Cupom: cupom,
  Localizador: LOCALIZADOR,
  quatroUltimoDigitosCartao: NUMERACAO_CARTAO.slice(-4),
  //TotalDesconto: totalDesconto,
});

const submitForm = async () => {
  const jsonForm = JSON.stringify(form.value);
  console.log(jsonForm);

  try {
    const response = await axios.post('https://localhost:7173/api/Pedido/fazer-pedido', jsonForm, {
      headers: {
        'Content-Type': 'application/json',
        'IdCarrinho': CARRINHO_ID_ESTATICO_TEMPORARIO,
        'IdPedido': itens.value[0].pedidoId,
        'ValorTotalCarrinho': valorTotalDoCarrinho.value,
      }
    });

    console.log('Resposta do servidor:', response.data);

    if (response.status === 200) {
      apagarIdDoCarrinho();
    }

    await router.push(`/pedido/${LOCALIZADOR}`);

  } catch (error) {
    console.error(`Erro ao enviar o formulário: ${error}`);
  }
};

function gerarCartaoAleatorio() {

  // Gera a data de vencimento
  const dataVencimento = gerarDataVencimentoAleatoria();

  // Gera o CVV
  const cvv = gerarCVVAleatorio();

  // Preenche os campos do formulário
  document.getElementById("numero-cartao").value = NUMERACAO_CARTAO;
  document.getElementById("data-expiracao-cartao").value = dataVencimento;
  document.getElementById("cvv-cartao").value = cvv;
}

function gerarNumeroAleatorio(tamanho = 16) {
  let numeracaoCompletaDoCartao = "";
  for (let i = 0; i < tamanho; i++) {
    numeracaoCompletaDoCartao += Math.floor(Math.random() * 10);
  }
  return numeracaoCompletaDoCartao;
}

function gerarDataVencimentoAleatoria() {
  const mes = Math.floor(Math.random() * 12) + 1;
  const ano = Math.floor(Math.random() * 6) + 25; // Gera ano entre 2025 e 2030
  return `${mes.toString().padStart(2, "0")}/${ano.toString().padStart(2, "0")}`;
}

function gerarCVVAleatorio() {
  let cvv = "";
  for (let i = 0; i < 3; i++) {
    cvv += Math.floor(Math.random() * 10);
  }
  return cvv;
}

</script>

<template>

  <div>
    <h2 class="mt-10 lg:mt-20 font-bold text-2xl text-center md:text-3xl text-gray-800 dark:text-gray-200">
      Finalizar Pedido
    </h2>
  </div>

  <div v-if="ok">
    <!-- Card Section -->
    <div class="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Card -->
      <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
<!--        <div class="mt-8 text-center mb-8">-->
<!--          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">-->
<!--            Finalizar Pedido-->
<!--          </h2>-->
<!--        </div>-->

        <form @submit.prevent="submitForm">
          <!-- Section -->
          <div class="py-6 first:pt-0 last:pb-0">

<!--            <div class="mt-5 sm:mt-10">-->
            <div class="">

              <h4 class="text-sm font-semibold">Resumo</h4>

              <br>

              <div>
                <div class="flex flex-col">
                  <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                      <div class="overflow-hidden">

                        <table class="min-w-full">

                          <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-3 text-start text-sm font-semibold">Produto</th>
                            <th scope="col" class="px-6 py-3 text-center text-sm font-semibold">Preço</th>
                            <th scope="col" class="px-6 py-3 text-center text-sm font-semibold">Quantidade</th>
                            <th scope="col" class="px-6 py-3 text-end text-sm font-semibold">Subtotal</th>
                          </tr>
                          </thead>

<!--                          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">-->
                          <tbody>

<!--                          TEXTO ESTATICO-->
<!--                          <tr class="hover:bg-gray-50">-->
<!--                            <td class="px-6 py-4 whitespace-nowrap text-start text-sm">Café Blue Mountain (250g)</td>-->
<!--                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm">99,90</td>-->
<!--                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm">1</td>-->
<!--                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm">99,90</td>-->
<!--                          </tr>-->

                          <tr v-for="(item, index) in itens" :key="item.id" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap text-start text-sm">{{ buscarAtributoDeProduto(item.produtoId,`nome`) }} ({{ buscarAtributoDeProduto(item.produtoId,`peso`) }}g)</td>
                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm">{{ buscarAtributoDeProduto(item.produtoId,`preco`).toFixed(2).replace('.',',') }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm">{{ item.quantidade }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm">{{ calcularSubTotal(item.precoVenda,item.quantidade) }}</td>
                          </tr>


                          <!--                FRETE -->
                          <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap text-start text-sm text-green-600">FRETE</td>
                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm"></td>
                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm"></td>
                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-green-600">GRÁTIS</td>
                          </tr>

                          <!--                CUPOM -->
                          <tr id="tr-cupom" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap text-start text-sm text-red-600">CUPOM</td>
                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm"></td>
                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm"></td>
                            <td id="td-valor-cupom" class="px-6 py-4 whitespace-nowrap text-end text-sm text-red-600">-99,90</td>
                          </tr>

                          </tbody>

                          <tfoot class="bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-3 text-start text-sm font-semibold">TOTAL</th>
                            <th scope="col" class="px-6 py-3 text-center text-sm font-semibold"></th>
                            <th scope="col" class="px-6 py-3 text-center text-sm font-semibold"></th>
                            <th scope="col" class="px-6 py-3 text-end text-sm font-semibold">R$
                              <span id="valor-total-carrinho">{{ totalDoCarrinho }}</span>
                            </th>
                          </tr>
                          </tfoot>

                        </table>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>
          <!-- End Section -->

          <div class="py-6 first:pt-0 last:pb-0">

            <div>
              <h4 class="text-sm font-semibold">Cupom</h4>

              <div class="sm:flex mt-2 space-y-3">
                <input v-model="form.Cupom" placeholder="Digite o cupom se tiver um" type="text" id="id-produto" name="id-produto" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                <button type="button" class="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 384 512" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M189.8 4.4c-28.5-12.1-61.3 1.3-73.4 29.8L112 44.6l-4.4-10.5C95.5 5.7 62.7-7.6 34.2 4.4S-7.6 49.3 4.4 77.8L51.2 188.4 28.4 242.2 15.6 272.6C5.8 285.8 0 302.2 0 320v32c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V312 248v-8c0-3.2-.9-6.1-2.5-8.6C374.4 208.6 353.2 192 328 192c-12.1 0-23.3 3.8-32.5 10.4C285.6 186.5 268 176 248 176c-30.9 0-56 25.1-56 56v1.7l-19.2-45.4L219.6 77.8c12.1-28.5-1.3-61.3-29.8-73.4zm-34.4 225l4.5 10.6H151l4.5-10.6zM68.6 147.3L33.9 65.4c-5.2-12.2 .5-26.3 12.8-31.5s26.3 .5 31.5 12.8L94.6 85.7 68.6 147.3zM80 240c-5.7 0-11.3 .6-16.6 1.7L145.9 46.6c5.2-12.2 19.2-17.9 31.5-12.8s17.9 19.2 12.8 31.5L116.2 240H80zm168-32c13.3 0 24 10.7 24 24v16 48c0 13.3-10.7 24-24 24s-24-10.7-24-24v0V232c0-13.3 10.7-24 24-24zm32.5 133.6C290.4 357.5 308 368 328 368c8.4 0 16.4-1.9 23.5-5.2C346.1 428.5 291 480 224 480H160C89.3 480 32 422.7 32 352V320c0-26.5 21.5-48 48-48h88c13.2 0 24 10.7 24 24v0c0 13.3-10.7 24-24 24H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c15.7 0 29.8-6.4 40-16.8c10.2 10.4 24.3 16.8 40 16.8c12.1 0 23.3-3.8 32.5-10.4zM352 312c0 13.3-10.7 24-24 24s-24-10.7-24-24V296 248c0-13.3 10.7-24 24-24s24 10.7 24 24v64z"/>
                  </svg>
                </button>
              </div>

              <div v-if="cupomValido">
                <p class="text-sm text-red-600 mt-2">Cupom aplicado com sucesso, você ganhou R$ 199,90 de desconto!</p>
              </div>

            </div>

          </div>

          <!-- Section -->
          <div class="py-6 first:pt-0 last:pb-0">

            <label for="af-payment-billing-contact" class="inline-block text-sm font-semibold dark:text-white">
              Dados pessoais
            </label>

            <div class="mt-2 space-y-3">
              <input id="af-payment-billing-contact" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Nome completo">
              <div class="grid sm:flex gap-3">
                <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="CPF">
                <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Celular">
                <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Data Nascimento">
              </div>
            </div>


          </div>
          <!-- End Section -->

          <!-- Section -->
          <div class="py-6 first:pt-0 last:pb-0">
            <label for="af-payment-billing-address" class="inline-block text-sm font-semibold dark:text-white">
              Endereço
            </label>

            <div class="mt-2 space-y-3">
              <input id="af-payment-billing-address" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Logradouro">
              <div class="grid sm:flex gap-3">
                <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Número">
                <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Complemento">
                <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Bairro">
              </div>
              <div class="grid sm:flex gap-3">
                <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Cidade">
                <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="UF">
                <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="CEP">
              </div>
            </div>
          </div>
          <!-- End Section -->

          <!-- Section -->
          <div class="py-6 first:pt-0 last:pb-0">
            <label for="af-payment-payment-method" class="inline-block text-sm font-semibold dark:text-white">
              Cartão
            </label>



            <div style="text-align: center;">

              <!-- Icon -->
              <span class="m-1 inline-flex justify-center items-center size-[46px] rounded-full text-gray-500">
              <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                <path d="M48 480C21.49 480 0 458.5 0 432V80C0 53.49 21.49 32 48 32H528C554.5 32 576 53.49 576 80V82.43H500.5L483.5 130L466.6 82.43H369.4V145.6L341.3 82.43H262.7L181 267.1H246.8V430.9H450.5L482.4 395.8L514.3 430.9H576V432C576 458.5 554.5 480 528 480H48zM482.6 364L440.4 410.3H390.5L458 338.6L390.5 266.1H441.9L483.4 312.8L525.4 266.1H576L508 338.2L576 410.3H524.6L482.6 364zM576 296.9V380.2L536.7 338.3L576 296.9zM307.6 377.1H390.6V410.3H268.6V267.1H390.6V300.2H307.6V322.6H388.5V354.9H307.6V377.2V377.1zM537.3 145.7L500.4 246.3H466L429.2 146V246.3H390.5V103H451.7L483.6 192.3L515.8 103H576V246.3H537.3V145.7zM334.5 217.6H268.6L256.7 246.3H213.7L276.1 103H327.3L390.6 246.3H346.5L334.5 217.6zM301.5 138.5L282 185.4H320.9L301.5 138.5z"/>
              </svg>
            </span>
              <!-- End Icon -->

              <!-- Icon -->
              <span class="m-1 inline-flex justify-center items-center size-[46px] rounded-full text-gray-500">
                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                  <path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"/>
                </svg>
              </span>
              <!-- End Icon -->

              <!-- Icon -->
              <span class="m-1 inline-flex justify-center items-center size-[46px] rounded-full text-gray-500">
                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                  <path d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z"/>
                </svg>
              </span>
              <!-- End Icon -->

              <!-- Icon -->
              <span class="m-1 inline-flex justify-center items-center size-[46px] rounded-full text-gray-500">
                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                  <path d="M239.7 79.9c-96.9 0-175.8 78.6-175.8 175.8 0 96.9 78.9 175.8 175.8 175.8 97.2 0 175.8-78.9 175.8-175.8 0-97.2-78.6-175.8-175.8-175.8zm-39.9 279.6c-41.7-15.9-71.4-56.4-71.4-103.8s29.7-87.9 71.4-104.1v207.9zm79.8.3V151.6c41.7 16.2 71.4 56.7 71.4 104.1s-29.7 87.9-71.4 104.1zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM329.7 448h-90.3c-106.2 0-193.8-85.5-193.8-190.2C45.6 143.2 133.2 64 239.4 64h90.3c105 0 200.7 79.2 200.7 193.8 0 104.7-95.7 190.2-200.7 190.2z"/>
                </svg>
              </span>
              <!-- End Icon -->

              <!-- Icon -->
              <span class="m-1 inline-flex justify-center items-center size-[46px] rounded-full text-gray-500">
                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                  <path d="M302.2 218.4c0 17.2-10.5 27.1-29 27.1h-24.3v-54.2h24.4c18.4 0 28.9 9.8 28.9 27.1zm47.5 62.6c0 8.3 7.2 13.7 18.5 13.7 14.4 0 25.2-9.1 25.2-21.9v-7.7l-23.5 1.5c-13.3.9-20.2 5.8-20.2 14.4zM576 79v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM127.8 197.2c8.4.7 16.8-4.2 22.1-10.4 5.2-6.4 8.6-15 7.7-23.7-7.4.3-16.6 4.9-21.9 11.3-4.8 5.5-8.9 14.4-7.9 22.8zm60.6 74.5c-.2-.2-19.6-7.6-19.8-30-.2-18.7 15.3-27.7 16-28.2-8.8-13-22.4-14.4-27.1-14.7-12.2-.7-22.6 6.9-28.4 6.9-5.9 0-14.7-6.6-24.3-6.4-12.5.2-24.2 7.3-30.5 18.6-13.1 22.6-3.4 56 9.3 74.4 6.2 9.1 13.7 19.1 23.5 18.7 9.3-.4 13-6 24.2-6 11.3 0 14.5 6 24.3 5.9 10.2-.2 16.5-9.1 22.8-18.2 6.9-10.4 9.8-20.4 10-21zm135.4-53.4c0-26.6-18.5-44.8-44.9-44.8h-51.2v136.4h21.2v-46.6h29.3c26.8 0 45.6-18.4 45.6-45zm90 23.7c0-19.7-15.8-32.4-40-32.4-22.5 0-39.1 12.9-39.7 30.5h19.1c1.6-8.4 9.4-13.9 20-13.9 13 0 20.2 6 20.2 17.2v7.5l-26.4 1.6c-24.6 1.5-37.9 11.6-37.9 29.1 0 17.7 13.7 29.4 33.4 29.4 13.3 0 25.6-6.7 31.2-17.4h.4V310h19.6v-68zM516 210.9h-21.5l-24.9 80.6h-.4l-24.9-80.6H422l35.9 99.3-1.9 6c-3.2 10.2-8.5 14.2-17.9 14.2-1.7 0-4.9-.2-6.2-.3v16.4c1.2.4 6.5.5 8.1.5 20.7 0 30.4-7.9 38.9-31.8L516 210.9z"/>
                </svg>
              </span>
              <!-- End Icon -->

              <!-- Icon -->
              <span class="m-1 inline-flex justify-center items-center size-[46px] rounded-full text-gray-500">
                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                  <path d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z"/>
                </svg>
              </span>
              <!-- End Icon -->

            </div>

            <div class="mt-2 space-y-3" @click="gerarCartaoAleatorio()">
              <input id="af-payment-payment-method" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Nome escrito no cartão">
              <div class="grid sm:flex gap-3">
                <input id="numero-cartao" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Número do cartão">
                <input id="data-expiracao-cartao" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Data de expiração">
                <input id="cvv-cartao" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="CVV">
              </div>
            </div>
          </div>
          <!-- End Section -->


        <div class="mt-10 flex justify-end gap-x-2">

          <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Cancelar
          </button>
          <button type="submit" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Finalizar Pedido
          </button>

        </div></form>

      </div>
      <!-- End Card -->

    </div>
    <!-- End Card Section -->

  </div>

</template>

<style scoped>

</style>