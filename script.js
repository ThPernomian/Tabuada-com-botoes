const btn = document.querySelectorAll(".btn")
const tabuada = document.querySelector("#tabuada")

/*Função que calcula a tabuada e apresenta na tela*/
function calculaTabuada(btns){
    let num = Number(btns.innerHTML)
    
    let tab = ""

    tabuada.textContent = "" //Limpa o texto para não sobrescrever o anterior
    removeActive()            //Chamada da função para remover a classe active

   for(let i = 1; i <= 10; i++){
      tab = num + " x " + i + " = " + num * i + "\n"
      tabuada.textContent += tab
   }
   btns.classList.add("active")  
   
}   
   
/*Percorre os botões, pega o click do botão e executa o calculo*/
   for(let i = 0; i < btn.length; i++){
      btn[i].addEventListener("click", () =>{
         calculaTabuada(btn[i])
      })
   }

   //função para remover a classe active do botão clicado
function removeActive(){
   for(let i = 0; i < btn.length; i++){
      btn[i].classList.remove("active")
   }
}








