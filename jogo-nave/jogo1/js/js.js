const inicio = document.getElementById('inicio');

inicio.addEventListener('click', comecarJogo);

function start() { // Inicio da função start
  
	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2' class='anima3'></div>");
	$("#fundoGame").append("<div id='amigo'></div>");

} // Fim da função start

function comecarJogo() { // Inicio da função começar jogo (on Click event)
  start();
}