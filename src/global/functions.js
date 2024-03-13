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
