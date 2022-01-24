import './App.css';
import Button from './Componentes/Button';
import ComponenteA from './Componentes/ComponenteA'
import ComponenteB from './Componentes/ComponenteB'
import ComponenteClasse from './Componentes/ComponenteClasse'

function primeiroJSX() {
  return (
    <p>Renan Eduardo - Introdução ao ReactJS</p>
  )}

let soma = (a, b) => {alert( a + b  )}

let res = (a, b) => {return a + b}
const element = "Sera que isso vai ser mostrando com uma tag <p>?"
const element1 = <h4>Teste teste testes</h4>

function App() {
  return (
    <div className="App teste">
      <h1>Hello Word</h1>
      {primeiroJSX()}
      <p>Soma: {res( 234234,22342343)}</p>
      {element}
      {element1}
      <Button onClick={() => soma(12,23)} name="Renan"/>

      <ComponenteA>
        <ComponenteB>
          <Button onClick={() => soma(123123,2342343)} name="Reimund"/>
        </ComponenteB>
      </ComponenteA>

      <ComponenteClasse/>

    </div>
  );
}

export default App;