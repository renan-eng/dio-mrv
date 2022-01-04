/* 
fetch => Consumindo APIs

fetch(url, options) {
  .then(response => response.json())
  .then(json =>console.log(json))
}

Operações no banco (POST, GET, PUT, DELETE, etc.)
*/
//EXEMPLO 1
fetch('https://enderco-api.com/', {
  method: 'GET',
  cached: 'no-cache',

})
  .then(response => response.json())
  .then(json =>console.log(json))


//EXEMPLO 2
  fetch('https://enderco-api.com/', {
  method: 'POST',
  cached: 'no-cache',
  body: JSON.stringify(data)

})
  .then(response => response.json())
  .then(json =>console.log(json))

  //retorna uma Promise