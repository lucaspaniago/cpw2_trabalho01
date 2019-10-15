function inverterPalavras() {
    //deleta a div com os resultados existentes e, posteriormente, cria outra div para conter os próximos resultados
    let conteudoResultado = document.getElementById('conteudoResultado');
    let divResultadoAntiga = document.getElementById('resultado');
    conteudoResultado.removeChild(divResultadoAntiga);
    let divResultado = document.createElement('div');
    divResultado.setAttribute('id', 'resultado');
    conteudoResultado.appendChild(divResultado);
    
    let frase = document.getElementById('frase').value;
    
    //coloca cada palavra, em uma posição do vetor declarado
    let vetorDeStrings = frase.split(" ");

    //vai concatenando cada palavra, de trás para frente, na frase resultado
    let fraseResultado = "";
    for (let i = vetorDeStrings.length - 1; i >= 0; i--) {
        if (i > 0) {
            fraseResultado += vetorDeStrings[i] + " ";
        }
        else {
            fraseResultado += vetorDeStrings[i];
        }
    }
    
    //console.log(fraseResultado);
    divResultado.appendChild(document.createTextNode(fraseResultado));
}