window.onload = () =>{
    const p = JSON.parse(localStorage.getItem('selectedProd'))
    const container = document.getElementById('produtosContainer');

    const prodCard = document.createElement('div');
    prodCard.classList.add("flex", "j-center", "al-center");
    prodCard.innerHTML = `
            <div class="card">  
                <div class="card-productpage">
                    <div class = "flex flex-row">
                        <img src="../img/${p.imagem}" class="img-fluid mb-2">

                        <div class = "flex flex-col s400">
                            <h2>${p.nome}</h2>
                            <p>${p.marca}</p>
                            <p>R$ ${p.preco.toFixed(2)}</p>
                            <p>Ou 24x de R$ ${(p.preco/24).toFixed(2)}</p>
                            <button data-id="${p.id}" class="btAdicionar btn btn-primary">
                            Adicionar ao carrinho</button>  
                        </div>
                    </div>
                </div>
            </div>
    `;
    prodCard.querySelector('.btAdicionar').addEventListener("click", addToCart)
    container.appendChild(prodCard); 
}


const addToCart = async (e) => {
    const id = e.target.getAttribute('data-id');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const arr = JSON.parse(localStorage.getItem('produtos'));
    const selectedProd = arr.find(p => p.id === Number(id));

    if (selectedProd) {
        cart.push(selectedProd);
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = "cart.html";
    } else {
        alert('Produto não adicionado.');
    }

}