//Ejercicio 1
//Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
console.log(prompt("Digite una frase: "));

//Ejercicio 2
//Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación. Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".
console.log("Hola " + prompt("¿Cual es su nombre? ")+"!");

//Ejercicio 3
//Escribe un programa que le pida al usuario ingresar un número, luego le pide un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.
console.log("La suma es: " + (parseInt(prompt("Ingrese el primer numero:")) + parseInt(prompt("Ingrese el segundo numero:"))));

//Ejercicio 4
//Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola:
//Tienes 20 años
console.log("Tienes " + (new Date().getFullYear() - parseInt(prompt("Cual es su año de nacimiento: "))) + " años");

//Ejercicio 5
//El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
//El BMI se calcula con la siguiente formula: peso / altura^2
//Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".
//Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir en la consola la frase "Tu BMI es 20.061728395061728".
console.log("Tu BMI es: " + (parseFloat(prompt("Cual es su peso(Kg)?: "))) / (parseFloat(prompt("Cual es su altura(m)?: "))) ** 2);
