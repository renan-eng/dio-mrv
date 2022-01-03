/* 
Assíncrono = "Que não ocorre ou não se efetica ao mesmo tempo."

Promisses = Inicialmente , seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada.

Resolvida .then()
Rejeitada .catch()

Promisses tem 3 estados:
1) Pending
2) Fulfilled
3) Rejected 
*/

// Estrutura 
/* 
const myProm = new Promise((resolve, reject) =>{
  window.setTimeout(() => {
    resolve(console.log('Resolvida'));
  }, 2000);
});

await myProm
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message)); 
*/

// Após 2 segundos, retornará o valor
// "Resolvida passando pleo then e agora acabou!"

async function resolvePromise() {
  const myProm = new Promise((resolve, reject) =>{
    window.setTimeout(() => {
      resolve('Resolvida');
    }, 3000);
  });

  const resolved = await myProm
      .then((result) => result + ' passando pelo then')
      .then((result) => result + ' e agora acabou!')
      .catch((err) => console.log(err.message)); 
  return resolved;
}
resolvePromise();
