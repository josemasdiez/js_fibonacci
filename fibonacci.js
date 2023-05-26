/**
 * 
 * @param {*} n numero de ejecuciones
 * @param {*} v1 valor anterior
 * @param {*} v2 valor nuevo o el de la suma v1 + v2
 * @returns int
 */
const fibonacci = (n, v1, v2) => {

  if(n === 0) {
    return n
  } else {

    const suma = v1 + v2;
    fibonacci(n - 1, v2, suma)
    console.log(v1, ` + `, v2, ' = ', suma);
  }
}

// este pequeño fragmento de codigo se realiza para probar recusividad de ejecucion de una function dentro de si misma hasta un cierre
// recojemos el datos de cuantas veces debemos ejecutarlo y los valores iniciales
let num = prompt("Cuantas veces desea ejecutarlo: ");
fibonacci(num, 0, 1)