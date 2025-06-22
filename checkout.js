const resumoDiv = document.getElementById("resumo");
const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function mostrarResumo() {
    let total = 0;
    if (carrinho.length === 0) {
        resumoDiv.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    carrinho.forEach(produto => {
        const item = document.createElement("p");
        item.textContent = `${produto.title} - R$ ${produto.price.toFixed(2).replace('.', ',')}`;
        resumoDiv.appendChild(item);
        total += produto.price;
    });

    const totalTag = document.createElement("h3");
    totalTag.textContent = "Total: R$ " + total.toFixed(2).replace('.', ',');
    resumoDiv.appendChild(totalTag);
}

mostrarResumo();

// Enviar pedido
document.getElementById("formCheckout").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Pedido confirmado com sucesso!");
    localStorage.removeItem("carrinho");
    window.location.href = "mercadinho.html";
});
