// Código del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
return lado * 4;
}

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado +"cm");

function areaCuadrado(lado) {
    return lado * lado;
} 


// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();
// Código del Triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base*altura)/2;
} 

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm"
// );

// console.log("La altura del triángulo es: " + alturaTriangulo +"cm");
// console.log("El perímetro del triángulo es: " + perimetroTriangulo +"cm");
// console.log("El área del triángulo es: "+ areaTriangulo + "cm^2");

console.groupEnd();

// Código del Círculo
// console.group("Círculos");

// // Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// // Diámetro

function diametroCirculo(radio) {
    return radio * 2;
} 

// console.log("El diametro del círculo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
// console.log("El valor de PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

// console.log("La circunferencia del círculo es: " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// console.log("El área del círculo es: " + areaCirculo + "cm^2");


console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

}