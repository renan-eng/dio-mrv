const myMap = new Map([['Luiz','Admin'], ['Jorge','Admin'], ['Lula','User']]);

function getAdmin(map) {
  let admin = [];

  for (const [key, value] of map) {
    if (value === 'Admin'){
      admin.push(key);
    }
  }
  return admin;
}

console.log(getAdmin(myMap));

