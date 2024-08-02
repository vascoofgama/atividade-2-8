let numStr = "123.45";

let num = parseFloat(numStr);


let numArredondado = Math.round(num);


let numStringComCasasDecimais = numArredondado.toFixed(3);


let isNan = isNaN(num);


console.log("Número convertido:", num);
console.log("Número arredondado:", numArredondado);
console.log("Número com 3 casas decimais:", numStringComCasasDecimais);
console.log("É NaN?", isNan);