/********************************************************************************** 
Como selecionar elementos de HTML através do JavaScript
*/

console.log(document.getElementById('titulo'));
//retorno: <h1 id="titulo">Minha Página</h1>

console.log(document.getElementsByTagName('li'));
/* 
[
  <li>Projeto 1</li>
  <li>Projeto 2</li>
  <li>Projeto 3</li>
]
*/

console.log(document.getElementsByClassName('textos'));
/* 
[
  <section class="textos">
      <h2>Sobre Mim</h2>    
      <p>Texto sobre a pessoa aqui.</p>
  </section>,
  <section class="textos">
    <h2>Meus projetos</h2>    
    <ul>
      <li>Projeto 1</li>
      <li>Projeto 2</li>
      <li>Projeto 3</li>
    </ul>
  </section> 
]
*/

console.log(document.querySelectorAll('.primeira-classe.segunda-classe'));
/* 
[
  <div class="primeira-classe segunda-classe">
        <ul>
          <li class="opcao">Opção 1</li>
          <li class="opcao">Opção 2</li>
          <li class="opcao">Opção 3</li>
        </ul>
  </div>
]
*/

console.log(document.querySelectorAll('li.opcao'));
/* 
[
  <li class="opcao">Opção 1</li>
  <li class="opcao">Opção 2</li>
  <li class="opcao">Opção 3</li>
]
*/


/**********************************************************************************
Como alterar as classes de elementos HTML utilizando javascrpipt
*/

const meuElemento = document.getElementById('section2');

meuElemento.classList.add('novo-estilo');
// Adiciona a classe 'meu estilo'

meuElemento.classList.remove('classe');
// Remove a classe 'classe'

meuElemento.classList.toggle('dark-mode');
// Adiciona a classe 'dar-mode' caso ela não faça partte
// lista e remove ela caso faça

/* 
Como alterar os estilos de elementos HTML utilizando javascrpipt
*/

let p = document.getElementsByTagName('p');
console.log(p)
p[0].style.color = 'blue';
// Irá mudar a cor do primeiro elemento do array de paragragos retornatos do método getElementsByTagName('p)

/**********************************************************************************
Eventos de mouse: mouseover, mouseout
Eventos de click: click, dbclick
Eventos de atualização: change, load

Event listener
Diretamente no JavaScript, cria um evento que vai ser acionado no momento
em que o usuário realizar determinada ação.
*/

const botao = document.getElementById('meuBotao');

botao.addEventListener('click', outraFuncao);
// Toda vez o que o botão for clicado essa função irá exectuar outraFucao