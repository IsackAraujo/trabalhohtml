
const menuItens = [

    {
        text: "Inicio",
        url: "index.html"
    },
    {
        text: "Novidades",
        url: "#"
    },
    {
        text: "Categorias",
        url: "servicos.html"
    },
    {
        text: "Sobre",
        url: "#"
    }
]

export function headerComponent() {
    const menuItensHtml = menuItens.map(function(item){
        return `<li><a href="${item.url}">${item.text}</a></li>`;
    }).join('');
    return ` <nav class="bg-dark nav">
        <div class="logo grow1">
            <a href="index.html">Bruck Motors</a>
        </div>
        <div class="menu grow1">
            <ul>
                ${menuItensHtml}
            </ul>
        </div>
        <div class="menu grow1">
            <ul>
                <li><a href="#"><i class="bi bi-cart"></i></a></li>
                <li><a href="#"><i class="bi bi-person-circle"></i></a></li>
            </ul>
        </div>
        <div> 
    </nav>
    `
}