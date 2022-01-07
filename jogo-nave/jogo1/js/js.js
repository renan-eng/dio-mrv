const inicio = document.getElementById('inicio');

inicio.addEventListener('click', comecarJogo);

function start() { // Inicio da função start
  
	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

  //Principais variáveis do jogo
	
	var jogo = {};
  var TECLA = {
    W: 87,
    S: 83,
    D: 68
  };

  jogo.pressionou = [];
	
	//Game Loop

	jogo.timer = setInterval(loop,30);

  //Verifica se o usuário pressionou alguma tecla	
	
	$(document).keydown(function(e){
    jogo.pressionou[e.which] = true;
    });
  
  
  $(document).keyup(function(e){
    jogo.pressionou[e.which] = false;
  });
	
	function loop() {
	
	movefundo();
  movejogador();
	
	} // Fim da função loop()

  //Função que movimenta o fundo do jogo
	
	function movefundo() {
	
    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position",esquerda-1);
    
  } // fim da função movefundo()
  
  function movejogador() {
	
    if (jogo.pressionou[TECLA.W]) {
      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top",topo-10);
    
    }
    
    if (jogo.pressionou[TECLA.S]) {
      
      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top",topo+10);	
    }
    
    if (jogo.pressionou[TECLA.D]) {
      
      //Chama fun��o Disparo	
    }
  
    } // fim da fun��o movejogador()

} // Fim da função start

// Inicio da função começar jogo (on Click event)
function comecarJogo() { 
  start();
}