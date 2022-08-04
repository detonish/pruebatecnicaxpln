const numeros = [1,5, 1009,666,234,202, 1013];
const suma = 2022;

console.log(numeros);
console.log(suma);

var encuentraMultiplica = (numeros, suma) => {

  for(let x = 0; x < numeros.length; x++) {
    for(let y = 0; y < numeros.length; y++) {
      if (numeros[x] + numeros[y] === suma) {
        return document.getElementById("demo").innerHTML = 'X = '+ Math.round(((numeros[x]) * 100) / 100).toLocaleString() + ', Y = ' + Math.round(((numeros[y]) * 100) / 100).toLocaleString() + ', Producto = ' + 
        Math.round(((numeros[x]*numeros[y]) * 100) / 100).toLocaleString()
      }
    }
  }
};


