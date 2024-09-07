const fetchProducts = async () => {
    try {
        const response = await fetch('../data/products.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// fetchProducts()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

const renderProducts = async () => {
    const container = document.getElementById('produtosContainer');
    const arr = await fetchProducts();
    
    arr.forEach(p => {
        const prodCard = document.createElement('div');
        prodCard.classList.add('col-lg-3', 'col-md-4', 'col-sm-6');

        prodCard.innerHTML = `
            <div class="card h-100 mx-2">
                <div class="card-body">
                    <h2>${p.nome}</h2>
                    <img src="../img/${p.imagem}" class="img-fluid mb-2">
                    <p>${p.marca}</p>
                    <p>R$ ${p.preco.toFixed(2)}</p>
                    <button data-id="${p.id}" class="btAdicionar btn btn-primary">
                    Ver Página do Produto</button>
                </div>
            </div>
        `;
        prodCard.querySelector('.btAdicionar').addEventListener("click", viewProducts)
        container.appendChild(prodCard); 
    });
    localStorage.setItem('produtos', JSON.stringify(arr));
}

window.onload = async () => {
    try {
        renderProducts();
    } catch (error) {
        console.log('Erro: ' + error);
    }
}

const viewProducts = async (e) => {
    const id = e.target.getAttribute('data-id');
    const arr = JSON.parse(localStorage.getItem('produtos'));
    const selectedProd = arr.find(p => p.id === Number(id));

    localStorage.setItem('selectedProd', JSON.stringify(selectedProd));
    window.location.href = 'paginaProduto.html';
}