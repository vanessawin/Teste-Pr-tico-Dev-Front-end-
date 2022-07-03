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
        const imagemPromoçao = document.createElement("img")
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
        img.setAttribute("title", post.productName)
        img.setAttribute("src", post.imageUrl);





        divSobreOProduto.setAttribute("class", "sobreOProduto");

        pnomeDoProduto.setAttribute("class", "nomeDoProduto");
        pnomeDoProduto.innerText = post.productName;

        divEstrelas.setAttribute("class", "estrelas");
        

        //tentando colocar quantidade de estrelas certas
        const est = post.stars
        if(est){
            for(var i = 0; i < est; i++ ){

                imgEstrelas.src = ("/img/svg/starV.svg")
            }
        }
        console.log(est)

        



        ppreco.setAttribute("id", "preco");
        ppreco.setAttribute("class", "preco");
        ppreco.innerText = `por R$ ${post.price}`,


            botao.setAttribute("id", "btn");
        botao.setAttribute("class", "btn");
        botao.innerText = " Comprar "

        // Se tiver parcelas coloque a quantidade de parcelas mais o valor
        if (post.installments[0]) {
            pparcelado.setAttribute("class", "parcelado");

            pparcelado.innerText = `ou em ${post.installments[0].quantity}x de R$ ${post.installments[0].value}`;

        } 


        divImagemDoProduto.appendChild(img);
        divImagemDoProduto.appendChild(imagemPromoçao)
        divEstrelas.appendChild(imgEstrelas);
        
        divSobreOProduto.appendChild(pnomeDoProduto);
        divSobreOProduto.appendChild(divEstrelas);

        // Verificando se tem Promoção

        const promocao = post.listPrice
        //se nao tiver promoção
        if (promocao === null) {
            console.log("nao tem promoçao")
        }
        //se tiver promoção
        else {
            //coloque o id e a image
            imagemPromoçao.setAttribute("id", "imagemPromoçao")
            imagemPromoçao.src = ("/img/Flag.png")

            const precoPromocao = document.createElement("p")

            precoPromocao.setAttribute("id", "precoPromocao")
            precoPromocao.innerText = `de R$ ${post.listPrice} `
            divSobreOProduto.appendChild(precoPromocao)

        }
        divSobreOProduto.appendChild(ppreco);
        divSobreOProduto.appendChild(pparcelado);
        divSobreOProduto.appendChild(botao)

        divCard.appendChild(divImagemDoProduto);
        divCard.appendChild(divSobreOProduto);

        produto.appendChild(divCard);
    })
}

getProdutos()



//criando elemento p para adicionar a quantidade de iten
const carrinhoDecompra = document.querySelector("#carrinhoDeCompra")
const carrinho = document.createElement("p");

carrinho.setAttribute("id", "quantidadeDeItens")
carrinho.textContent = 4
carrinhoDecompra.appendChild(carrinho)

//Funçao click para adicionar item ao carrinho 
//Essa função esta pegando somente para o botao criado no html e nao no card construido dinamicamente
var botao = document.querySelector("#btn");
var productInfo = document.querySelector("#quantidadeDeItens")
let productInfoValue = document.querySelector("#quantidadeDeItens").textContent

botao.addEventListener('click', () => {
    productInfoValue = productInfo.textContent;
    productInfoValue = Number(productInfoValue) + 1;
    productInfo.textContent = productInfoValue
})




//Validação de formulario



// function cadastroUsuario() {
//     event.preventDefault()
//     url = https://corebiz-test.herokuapp.com/api/v1/newsletter

//     let nome = document.getElementById("#userName")
//     let email = document.getElementById("#userEmail")
//     console.log(nome)
//     console.log(email)
// }
// cadastroUsuario()