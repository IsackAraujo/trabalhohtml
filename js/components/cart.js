window.onload = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const container = document.getElementById('prodcart');

    const cartDiv = document.createElement('div');

    cart.forEach(p => {
        const prodCard = document.createElement('div');
        prodCard.innerHTML = `
        
                        <div class = "flex flex-row cart">
                            <img src="../img/${p.imagem}" class="cart-img">

                            <div class = "flex flex-row s400 cart-text">
                                <p>${p.nome}</p>
                                <p>${p.marca}</p>
                                <p>R$ ${p.preco.toFixed(2)}</p>
                                <p>Ou 24x de R$ ${(p.preco/24).toFixed(2)}</p>
                            </div>
                        </div>
        `;
        cartDiv.appendChild(prodCard);
    });

    container.appendChild(cartDiv);
}