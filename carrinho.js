const carrinhoDiv = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function renderCarrinho() {
    carrinhoDiv.innerHTML = "";
    let total = 0;

    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = "<p>Seu carrinho está vazio.</p>";
        totalSpan.textContent = "";
        return;
    }

    carrinho.forEach((produto, index) => {
        const item = document.createElement("div");
        item.className = "itemCarrinho";
        item.innerHTML = `
            <img src="${produto.image}" alt="Produto" width="50">
            <p><strong>${produto.title}</strong></p>
            <p>R$ ${produto.price.toFixed(2).replace('.', ',')}</p>
            <button onclick="removerProduto(${index})">Remover</button>
            <hr>
        `;
        carrinhoDiv.appendChild(item);
        total += produto.price;
    });

    totalSpan.textContent = "Total: R$ " + total.toFixed(2).replace('.', ',');
}

function removerProduto(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderCarrinho();
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Carrinho vazio.");
        return;
    }

    alert("Compra finalizada com sucesso!");
    localStorage.removeItem("carrinho");
    window.location.href = "mercadinho.html"; 
}

function irParaCheckout(){
    window.location.href = "checkout.html";
}

renderCarrinho();
