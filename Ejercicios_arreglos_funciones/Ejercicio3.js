// Arrays
//********************************************************** */
//********************************************************** */

// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del
// año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
// let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
// meses.forEach( elemento => console.log(elemento)); 

//********************************************************** */
//********************************************************** */

// 2- Crear un script que solicite al usuario mediante un prompt el nombre de
// ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
// debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// ● Mostrar la longitud del arreglo.
// ● Mostrar en el documento web los ítems de las posiciones primera, tercera y
// última.
// ● Añade en última posición la ciudad de París.
// ● Escribe por pantalla el elemento que ocupa la segunda posición.
// ● Sustituye el elemento que ocupa la segunda posición por la ciudad de
// 'Barcelona'.
// let ciudades = [];
// let bandera = true ;
// while(confirm("Ingrese Aceptar , si desesa salir aprieta Cancelar")===true){
//     let algo = prompt("Ingrese la ciudad que desea");
//     ciudades.push(algo);
// };
// console.log(ciudades.length);
// document.write(ciudades[0] , ciudades[2] , ciudades[ciudades.length-1] + "<br>");
// console.log(ciudades.push("París"));
// document.write(ciudades[1]);
// console.log(ciudades);
// ciudades.splice(1,1,"Barcelona");
// console.log(ciudades);

//********************************************************** */
//********************************************************** */

3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.