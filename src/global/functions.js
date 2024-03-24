export function gerarUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


export function gerarLocalizador(length = 6) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let localizador = '';
    for (let i = 0; i < length; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        localizador += caracteres.charAt(indiceAleatorio);
    }
    return localizador;
}


export function obterIdDoCarrinho() {

    let idCarrinho = localStorage.getItem("carrinhoID");

    if (idCarrinho == null) {
        idCarrinho = gerarUUID();
        localStorage.setItem("carrinhoID",idCarrinho);
    }
    console.log(`%c### carrinhoID: ${idCarrinho} ###`, "background: green; color: yellow; font-size: x-large;");
    return idCarrinho;
}


export function apagarIdDoCarrinho() {
    localStorage.removeItem("carrinhoID");
}


export function gerarCodigoDeAutorizacaoAleatorio(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}


