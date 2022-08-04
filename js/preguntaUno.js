function xepeOrLin() {
    let n = prompt("Ingresa un número cualquiera", "123456789");
    if ( n % 3 === 0 && n % 5 === 0) {
     document.getElementById("demo").innerHTML =
     "Xepelin"
 } else if ( n % 3 === 0 ){
   document.getElementById("demo").innerHTML =
     "Xepe"
 } else if ( n % 5 === 0 ){
   document.getElementById("demo").innerHTML =
     "Lin"
 } else {
    document.getElementById("demo").innerHTML =
    "Ninguno aplica. Intenta otra vez."
 }
 }
 
