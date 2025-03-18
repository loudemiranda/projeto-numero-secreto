//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesDosAmigos = []

function adicionarAmigo() {
    let nomes = document.querySelector('#amigo').value;

    if (nomes === '') {
        alert('Por favor, insira um nome.');
    } else {
        // adiciona o nome ao array
        nomesDosAmigos.push(nomes);

        // atualiza a lista na interface
        atualizarLista();

        // limpa o campo de entrada
        limparCampo();
    }
}

function limparCampo() {
    let nomes = document.querySelector('#amigo');
    nomes.value = '';
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; // limpa a lista para evitar duplicações

    // adiciona os nomes na lista
    nomesDosAmigos.forEach((nome) => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (nomesDosAmigos.length === 0) {
        alert('Nenhum nome foi adicionado à lista.');
        return;
    }

    // sorteia um índice aleatório do array
    let indiceSorteado = Math.floor(Math.random() * nomesDosAmigos.length);

    // pega o nome correspondente ao índice
    let amigoSorteado = nomesDosAmigos[indiceSorteado];

    // exibe o resultado na seção com ID "resultado"
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>O Amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}