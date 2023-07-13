let produtos = [
    {
        nome: "Tenis Adidas",
        preco: 50.00
    },
    {
        nome: "Tenis Nike",
        preco: 60.00
    },
    {
        nome: "Tenis Puma",
        preco: 70.00
    },
    {
        nome: "Bola",
        preco: 40.5
    }
]

exibirProdutos()

function exibirProdutos() {

    let produtosBody = document.querySelector("#products")

    produtos.map(produto => {
        // Criação do card
        let cardDiv = document.createElement("div")
        cardDiv.className = "card"

        // Criação da div para a img
        let imgDiv = document.createElement("div")
        imgDiv.className = "img-product"

        let img = document.createElement("img")
        img.src = "tera.png"

        imgDiv.appendChild(img)

        let titleDiv = document.createElement("div")
        titleDiv.className = "title"

        let titleH4 = document.createElement("h4")
        titleH4.textContent = produto.nome

        titleDiv.appendChild(titleH4)

        let priceDiv = document.createElement("div")
        priceDiv.className = "price"

        let priceP = document.createElement("p")
        priceP.textContent = `R$ ${produto.preco.toFixed(2)}`

        priceDiv.appendChild(priceP)

        let addButton = document.createElement("button")
        addButton.textContent = "Adicionar Produto"

        cardDiv.appendChild(imgDiv)
        cardDiv.appendChild(titleDiv)
        cardDiv.appendChild(priceDiv)
        cardDiv.appendChild(addButton)

        produtosBody.appendChild(cardDiv)
    })
}