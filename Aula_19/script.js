
const caixa = document.querySelector(".caixa");
const botao = document.querySelector(".botao");

botao.addEventListener("click", () => {
    caixa.classList.add("vermelho");
})

botao2.addEventListener("click", ()=> {
    caixa.classList.remove("vermelho")
})