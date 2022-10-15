/*

OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

     - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
     - passo 2 - dar um jeito de identificar o clique no elemento da aba
     - passo 3 - quando o usuário clicar, desmarcar a aba selecionada
     - passo 4 - marcar a aba clicada como selecionado
     - passo 5 - esconder o conteúdo anterior
     - passo 6 - mostrar o conteúdo da aba selecionada
*/
//passo1
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    //passo2
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")){
            return;
        }
        selecionarAba(aba)
        mostrarInformacaoDaAba(aba)
    });
});
function selecionarAba(aba){
    //passo3
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    //passo4
    aba.classList.add("selecionado");
}
function mostrarInformacaoDaAba(aba){
      //passo5
      const informacaoSelecionada = document.querySelector(".informacao.selecionado");
      informacaoSelecionada.classList.remove("selecionado");
      //passo6
      const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

      const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
      informacaoASerMostrada.classList.add("selecionado");
}