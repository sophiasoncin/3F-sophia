const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");
contador[0].textContent="ola"
const tempoObjetivo1 = new Date (2024,11,12,7,53)
const tempoObjetivo2 = new Date (2025,05,14,12,30)
const tempoObjetivo3 = new Date (2024,06,14,19,00)
const tempoObjetivo4 = new Date (2025,04,29,14,05)

for(let i = 0 ; i < botoes.length; i++){
    botoes[i].onclick = function(){
     for (let j = 0; j< botoes.length ; j++){
         botoes[j].classList.remove("ativo")
         conteudo[j].classList.remove("ativo")
     }   
     botoes[i].classList.add("ativo")
     conteudo[i].classList.add("ativo")
    }
}