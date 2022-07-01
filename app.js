//Baner

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Get produtos
const url = "https://corebiz-test.herokuapp.com/api/v1/products"

const produto = document.querySelector("#conteiner")

async function getProdutos() {
    const response = await fetch(url)

    console.log(response);

    const data = await response.json()

    console.log(data)
    //passar por cada elemento que veio da minha requisição
    data.map((post) => {

        const divCard = document.createElement("div");
        const divImagemDoProduto = document.createElement("div");
        const img = document.createElement("img");
        const divSobreOProduto = document.createElement("div");
        const pnomeDoProduto = document.createElement("p");
        const divEstrelas = document.createElement("div");
        const imgEstrelas = document.createElement("img");
        const ppreco = document.createElement("p");
        const pparcelado = document.createElement("p");
        const botao = document.createElement("button");

        divCard.setAttribute("class", "card");
        divCard.setAttribute("id", "card");

        divImagemDoProduto.setAttribute("id", "imagemDoProduto");

        img.setAttribute("class", "imagemDoProduto");
        img.setAttribute("src", post.imageUrl);

        divSobreOProduto.setAttribute("class", "sobreOProduto");

        pnomeDoProduto.setAttribute("class", "nomeDoProduto");
        pnomeDoProduto.innerText = post.productName;

        divEstrelas.setAttribute("class", "estrelas");

        imgEstrelas.setAttribute = ("id", post.stars)
        ppreco.setAttribute("id", "preco");
        ppreco.setAttribute("class", "preco");
        ppreco.innerText = `por R$ ${post.price}`,

            pparcelado.setAttribute("class", "parcelado");
        pparcelado.innerText = `ou em ${post.installments[0].quantity}x de R$ ${post.installments[0].value}`;

        botao.setAttribute("id", "btn");
        botao.setAttribute("class", "btn");
        botao.innerText = " Comprar "

        divImagemDoProduto.appendChild(img);

        divEstrelas.appendChild(imgEstrelas);

        divSobreOProduto.appendChild(pnomeDoProduto);
        divSobreOProduto.appendChild(divEstrelas);
        divSobreOProduto.appendChild(ppreco);
        divSobreOProduto.appendChild(pparcelado);
        divSobreOProduto.appendChild(botao)

        divCard.appendChild(divImagemDoProduto);
        divCard.appendChild(divSobreOProduto);

        produto.appendChild(divCard);
    })
}

getProdutos()




//alterar o valor do carrinho
// var bt = document.querySelector("#btn")
// console.log(bt)
// console.log(quantidadeAtual)

// bt.addEventListener("click", function(){
    
//     var quantidadeAtual = document.querySelector("#quantidadeDeItens");
// quantidadeAtual.textContent += 1
// })







