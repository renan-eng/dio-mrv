import './App.css';

function primeiroJSX() {
  return (
    <p>Renan Eduardo - Introdução ao ReactJS</p>
  )}

let soma = (a, b) => {return a + b}

function App() {
  return (
    <div className="App teste">
      <h1>Hello Word</h1>
      {primeiroJSX()}
      <p>Soma: {soma(12,20)}</p>
    </div>
  );
}

export default App;