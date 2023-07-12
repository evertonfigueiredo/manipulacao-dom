let produtos = [
    {
        nome: "Tênis Nike",
        preco: 50.00
    },
    {
        nome: "Tênis Adidas",
        preco: 70.00
    },
    {
        nome: "Tênis Puma",
        preco: 60.00
    },
]

let carrinhoItem = []

exibirProdutos()
function exibirProdutos() {
    let produtosBody = document.querySelector("#products")

    produtos.map((produto, index) => {
        // Crie o elemento div
        var cardDiv = document.createElement("div");
        cardDiv.className = "card";

        // Crie o elemento div com a classe "img-product"
        var imgDiv = document.createElement("div");
        imgDiv.className = "img-product";

        // Crie a tag de imagem
        var img = document.createElement("img");
        img.src = "tera.png";
        img.alt = "";

        // Adicione a tag de imagem dentro da div "img-product"
        imgDiv.appendChild(img);

        // Crie o elemento div com a classe "title"
        var titleDiv = document.createElement("div");
        titleDiv.className = "title";

        // Crie a tag de título h4
        var titleH4 = document.createElement("h4");
        titleH4.textContent = produto.nome;

        // Adicione o título h4 dentro da div "title"
        titleDiv.appendChild(titleH4);

        // Crie o elemento div com a classe "price"
        var precoDiv = document.createElement("div");
        precoDiv.className = "price";

        // Crie a tag de parágrafo p
        var precoP = document.createElement("p");
        precoP.textContent = `R$ ${produto.preco.toFixed(2)}`;

        // Adicione o parágrafo p dentro da div "price"
        precoDiv.appendChild(precoP);

        // Crie o botão
        var addButton = document.createElement("button");
        addButton.textContent = "Adicionar Produto";
        addButton.onclick = function () {
            adicionarProduto(index)
        };

        // Adicione todos os elementos dentro da div "card"
        cardDiv.appendChild(imgDiv);
        cardDiv.appendChild(titleDiv);
        cardDiv.appendChild(precoDiv);
        cardDiv.appendChild(addButton);

        produtosBody.appendChild(cardDiv);
    })

}

function adicionarProduto(index) {

    carrinhoItem.push(index)

    let listProduct = document.querySelector("#list-product")
    listProduct.innerHTML = ''
    carrinhoItem.map(item => {

        // Crie o elemento hr
        var hrElement = document.createElement("hr");

        // Crie o elemento div com a classe "car-product" e "flex"
        var carProductDiv = document.createElement("div");
        carProductDiv.className = "car-product flex";

        // Crie o elemento div com a classe "img-product"
        var imgDiv = document.createElement("div");
        imgDiv.className = "img-product";

        // Crie a tag de imagem
        var img = document.createElement("img");
        img.src = "tera.png";
        img.alt = "";

        // Adicione a tag de imagem dentro da div "img-product"
        imgDiv.appendChild(img);

        // Crie o elemento div com as classes "flex", "column", "info" para as informações
        var infoDiv = document.createElement("div");
        infoDiv.className = "flex column info";

        // Crie o título h3 para o nome do produto
        var nomeProdutoH3 = document.createElement("h3");
        nomeProdutoH3.textContent = produtos[item].nome;

        // Crie o título h4 para o preço
        var precoH4 = document.createElement("h4");
        precoH4.textContent = `R$ ${produtos[item].preco.toFixed(2)}`;

        // Adicione os títulos dentro da div "info"
        infoDiv.appendChild(nomeProdutoH3);
        infoDiv.appendChild(precoH4);

        // Crie o elemento div com as classes "flex" e "column" para a quantidade
        var qtdDiv = document.createElement("div");
        qtdDiv.className = "qtd flex column";

        // Crie o título h3 para a quantidade
        var qtdH3 = document.createElement("h3");
        qtdH3.textContent = "QTD";

        // Crie o elemento div com a classe "select-qtd"
        var selectQtdDiv = document.createElement("div");
        selectQtdDiv.className = "select-qtd";

        // Crie o botão "+" para aumentar a quantidade
        var increaseButton = document.createElement("button");
        increaseButton.textContent = "+";

        // Crie o campo de entrada de texto para a quantidade
        var quantityInput = document.createElement("input");
        quantityInput.type = "text";
        quantityInput.value = "1";

        // Crie o botão "-" para diminuir a quantidade
        var decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";

        // Adicione os elementos dentro da div "select-qtd"
        selectQtdDiv.appendChild(increaseButton);
        selectQtdDiv.appendChild(quantityInput);
        selectQtdDiv.appendChild(decreaseButton);

        // Adicione o título h3 e a div "select-qtd" dentro da div "qtd"
        qtdDiv.appendChild(qtdH3);
        qtdDiv.appendChild(selectQtdDiv);

        // Crie o elemento div com as classes "flex" e "column" para o valor
        var valorDiv = document.createElement("div");
        valorDiv.className = "valor flex column";

        // Crie o título h3 para o valor
        var valorH3 = document.createElement("h3");
        valorH3.textContent = "Valor";

        // Crie o título h4 para o preço
        var valorPrecoH4 = document.createElement("h4");
        valorPrecoH4.textContent = `R$ ${produtos[item].preco.toFixed(2)}`;

        // Adicione os títulos dentro da div "valor"
        valorDiv.appendChild(valorH3);
        valorDiv.appendChild(valorPrecoH4);

        // Adicione todos os elementos dentro da div "car-product"
        carProductDiv.appendChild(imgDiv);
        carProductDiv.appendChild(infoDiv);
        carProductDiv.appendChild(qtdDiv);
        carProductDiv.appendChild(valorDiv);

        // Adicione a linha hr, seguida da div "car-product" ao elemento body ou a outro elemento desejado na página
        listProduct.appendChild(hrElement);
        listProduct.appendChild(carProductDiv);
    })

    calcularSubTotal()
}

function calcularSubTotal() {
    let subTotalValue = 0
    let subTotalBody = document.querySelector("#subTotalValue")

    carrinhoItem.map(item => {
        subTotalValue += produtos[item].preco
    })

    subTotalBody.textContent = `R$ ${subTotalValue.toFixed(2)}`
}