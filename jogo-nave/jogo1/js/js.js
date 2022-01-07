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
  var velocidade=5;
  var posicaoY = parseInt(Math.random() * 334);
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
  moveinimigo1();

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

      if (topo<=0) {	
        // Verifica se o jogador atingiu o limite superior da tela do jogo e impede que ele passe disso	
        $("#jogador").css("top",topo+10);
      }
      
    
    }
    
    if (jogo.pressionou[TECLA.S]) {
           
      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top",topo+10);
      
      if (topo>=434) {
        // Verifica se o jogador atingiu o limite inferior da tela do jogo e impede que ele passe disso	
        $("#jogador").css("top",topo-10);          
      }
    }
    
    if (jogo.pressionou[TECLA.D]) {
      
      //Chama função Disparo	
    }
  
    } // fim da funçãoo movejogador()

    function moveinimigo1() {

      posicaoX = parseInt($("#inimigo1").css("left"));
      $("#inimigo1").css("left",posicaoX-velocidade);
      $("#inimigo1").css("top",posicaoY);
        
        if (posicaoX<=0) {
        posicaoY = parseInt(Math.random() * 334);
        $("#inimigo1").css("left",694);
        $("#inimigo1").css("top",posicaoY);
          
        }
    } //Fim da função moveinimigo1()

} // Fim da função start

// Inicio da função começar jogo (on Click event)
function comecarJogo() { 
  start();
}