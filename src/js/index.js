
const botaoGeradorConselho = document.querySelector("#botao")
const idConselho = document.querySelector("#id-card")
const conselho = document.querySelector("#conselho")

async function pegaConselho() {
    try{
        const resposta = await fetch("https://api.adviceslip.com/advice")
        console.log(resposta)
        
        const conselhoConteudo = await resposta.json();
        const conselhoId = ` Advice #${conselhoConteudo.slip.id}`;
        const conselhoTexto =  `${conselhoConteudo.slip.advice}`;
        console.log(conselhoTexto)

        idConselho.innerText = conselhoId;
        conselho.innerText = conselhoTexto;

    }catch(erro) {
        console.log("Erro ao tentar buscar informações da API", erro)
    }
}


botaoGeradorConselho.addEventListener("click", pegaConselho)
pegaConselho()
