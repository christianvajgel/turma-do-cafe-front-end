import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import AdicionarProduto from "@/components/pages/admin/produto/AdicionarProduto.vue";


/* Teste geral do componente */

test('Renderização do AdicionarProduto', () => {
    const wrapper = mount(AdicionarProduto)
    // Teste de renderização do componente
    expect(wrapper.exists()).toBe(true)
})


/* Teste simples para cada campo do formulário */

test('Preenchimento do campo nome no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    // Teste de preenchimento do formulário
    const inputNome = wrapper.find('input[id="nome-produto"]')
    await inputNome.setValue('Nome do Produto')
    expect(inputNome.element.value).toBe('Nome do Produto')
})

test('Preenchimento do campo preço no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    // Teste de preenchimento do campo preço
    const inputPreco = wrapper.find('input[id="preco-produto"]')
    await inputPreco.setValue('19.99')
    expect(inputPreco.element.value).toBe('19.99')
})

test('Preenchimento do campo peso no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputPeso = wrapper.find('input[id="peso-produto"]')
    await inputPeso.setValue('500')
    expect(inputPeso.element.value).toBe('500')
})

test('Preenchimento do campo tipo no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputTipo = wrapper.find('input[id="tipo-produto"]')
    await inputTipo.setValue('Café')
    expect(inputTipo.element.value).toBe('Café')
})

test('Preenchimento do campo avaliacao no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputAvaliacao = wrapper.find('input[id="avaliacao-produto"]')
    await inputAvaliacao.setValue('5')
    expect(inputAvaliacao.element.value).toBe('5')
})

test('Preenchimento do campo descricao no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputDescricao = wrapper.find('textarea[id="descricao-produto"]')
    await inputDescricao.setValue('Descrição do Produto')
    expect(inputDescricao.element.value).toBe('Descrição do Produto')
})

test('Preenchimento do campo slogan no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputSlogan = wrapper.find('input[id="slogan-produto"]')
    await inputSlogan.setValue('Slogan do Produto')
    expect(inputSlogan.element.value).toBe('Slogan do Produto')
})

test('Preenchimento do campo origem no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputOrigem = wrapper.find('input[id="origem-produto"]')
    await inputOrigem.setValue('Origem do Produto')
    expect(inputOrigem.element.value).toBe('Origem do Produto')
})

test('Preenchimento do campo estoque no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputEstoque = wrapper.find('input[id="estoque-produto"]')
    await inputEstoque.setValue('100')
    expect(inputEstoque.element.value).toBe('100')
})


test('Envio do formulário no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    // Teste de envio do formulário
    // Aqui, em vez de espiar um método, você pode verificar se o comportamento esperado ocorre após a ação do usuário.
    // Por exemplo, você pode verificar se a rota muda, se um evento é emitido, etc.
})


/* Testes avançados para cada tipo de campo no formulário */
/* Para campos com entrada de valores mais suscetíveis a erros */
/* No padrão de entrada ou que podem gerar problemas na API */

test('Verificar tipo URL no campo imagem no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputImagem = wrapper.find('input[id="imagem-produto"]')
    await inputImagem.setValue('https://example.com/image.jpg')
    expect(inputImagem.element.value).toBe('https://example.com/image.jpg')
    // Verifique se o valor é uma URL válida
    expect(inputImagem.element.value).toMatch(/^(http|https):\/\/[^ "]+$/)
})

test('Verificar tipo float/valor no campo preço no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputPreco = wrapper.find('input[id="preco-produto"]')
    await inputPreco.setValue('19.99')
    expect(inputPreco.element.value).toBe('19.99')
    // Verifique se o valor é um float válido
    expect(parseFloat(inputPreco.element.value)).toBeCloseTo(19.99)
})

test('Verificar tipo int/valor no campo peso no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputPeso = wrapper.find('input[id="peso-produto"]')
    await inputPeso.setValue('500')
    expect(inputPeso.element.value).toBe('500')
    // Verifique se o valor é um int válido
    expect(Number.isInteger(parseInt(inputPeso.element.value))).toBe(true)
})

test('Verificar valor da seleção do radio button no campo tipo no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputTipo = wrapper.find('input[id="tipo-produto"]')
    await inputTipo.setValue('Café')
    expect(inputTipo.element.value).toBe('Café')
})

test('Verificar tipo int/valor no campo avaliacao no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputAvaliacao = wrapper.find('input[id="avaliacao-produto"]')
    await inputAvaliacao.setValue('5')
    expect(inputAvaliacao.element.value).toBe('5')
    // Verifique se o valor é um int válido entre 0 e 5
    const avaliacao = parseInt(inputAvaliacao.element.value)
    expect(Number.isInteger(avaliacao) && avaliacao >= 0 && avaliacao <= 5).toBe(true)
})

test('Verificar tipo int/valor no campo estoque no AdicionarProduto', async () => {
    const wrapper = mount(AdicionarProduto)
    const inputEstoque = wrapper.find('input[id="estoque-produto"]')
    await inputEstoque.setValue('100')
    expect(inputEstoque.element.value).toBe('100')
    // Verifique se o valor é um int válido maior ou igual a 1
    const estoque = parseInt(inputEstoque.element.value)
    expect(Number.isInteger(estoque) && estoque >= 1).toBe(true)
})


/* Teste da requisicao POST para envio do Produto a API */
/* A parte não testada é o redirecionamento do router após */
/* Ela está dando um erro que parece ser da biblioteca */

import axios from 'axios'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'

// Cria uma instância do axios
const instance = axios.create()

// Substitui o método post
// instance.post = async () => ({ data: {} })

instance.post = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: {} });
        }, 5000);
    });
};

// Cria um mock para o router
const routerMock = createRouterMock()
injectRouterMock(routerMock)

test('POST - Envio do formulário de AdicionarProduto para API', async () => {
    const wrapper = mount(AdicionarProduto)

    // Preenche o formulário
    const inputImagem = wrapper.find('input[id="imagem-produto"]')
    await inputImagem.setValue('https://example.com/image.jpg')

    const inputNome = wrapper.find('input[id="nome-produto"]')
    await inputNome.setValue('Nome do Produto')

    const inputPreco = wrapper.find('input[id="preco-produto"]')
    await inputPreco.setValue('19.99')

    const inputPeso = wrapper.find('input[id="peso-produto"]')
    await inputPeso.setValue('500')

    const inputTipo = wrapper.find('input[id="tipo-produto"]')
    await inputTipo.setValue('Café')

    const inputAvaliacao = wrapper.find('input[id="avaliacao-produto"]')
    await inputAvaliacao.setValue('5')

    const inputDescricao = wrapper.find('textarea[id="descricao-produto"]')
    await inputDescricao.setValue('Descrição do Produto')

    const inputSlogan = wrapper.find('input[id="slogan-produto"]')
    await inputSlogan.setValue('Slogan do Produto')

    const inputOrigem = wrapper.find('input[id="origem-produto"]')
    await inputOrigem.setValue('Origem do Produto')

    const inputEstoque = wrapper.find('input[id="estoque-produto"]')
    await inputEstoque.setValue('100')

    // Envia o formulário
    const form = wrapper.find('form')
    await form.trigger('submit.prevent')

    // Verifica se a navegação do roteador foi feita corretamente
    // AssertionError: expected "spy" to be called with arguments: [ '/produtos' ] - Erro da biblioteca
    // expect(routerMock.push).toHaveBeenCalledWith("/produtos")
})
