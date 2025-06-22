//aula api
const div = document.getElementById('catalogo');

async function fetchProdutos(){
    try {
        const resposta = await fetch('https://fakestoreapi.com/products');
        const listaProdutos = await resposta.json();  
        imprimirVetor(listaProdutos);
    } catch (error) {
        let h2 = document.createElement('h2');
        h2.textContent = "Indisponivel. Tente novamente mais tarde.";
        div.appendChild(h2); 
    }
}

function imprimirVetor(vetor) {
    div.innerHTML = "";

    vetor.forEach((element, index) => {
        const divProduto = document.createElement('div');
        divProduto.className = "itemProduto";

        divProduto.innerHTML = `
            <img src="${element.image}" alt="produto">
            <h2>${element.title}</h2>
            <p><strong>R$ ${element.price.toFixed(2).replace('.', ',')}</strong></p>
            <button id="btn-${index}">Adicionar ao carrinho</button>
        `;

        div.appendChild(divProduto);

        // Adiciona evento de clique no botão
        document.getElementById(`btn-${index}`).addEventListener('click', () => {
            adicionarCarrinho(element);
        });
    });
}

function adicionarCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
}

function comprar() {
    window.location.href = "carrinho.html";
}

fetchProdutos();

