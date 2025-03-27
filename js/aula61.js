//basico de array
//declarando array -> declaracao com new Array
var carros_2 = new Array("Gol", "Palio", "Uno", "Celta");


//declarando array  -> declaracao usual
var carros = ["Gol", "Palio", "Uno", "Celta"];
console.log(carros); // exibindo o array
console.log(carros[2]); // acessando o terceiro elemento do array
// delete carros [0]; // deletando o primeiro elemento do array
carros[1] = "Civic"; // alterando o segundo elemento do array
console.log(carros); // exibindo apos mudanca


// rest operator
const novo = [...carros, "Jetta", "HRV"];
console.log(carros);    
console.log(novo);


// tamanho do array
console.log("---- tamanho do array ---");
console.log(carros.length); 


// funcao pop
console.log("---- funcao pop ---");
const carro_removido = carros.pop(); // remove o ultimo elemento do array
console.log(carro_removido);


// funcao shift 
console.log("---- funcao shift  ---");
const carro_removido2 = carros.shift(); // remove o primeiro elemento do array
console.log(carro_removido2);


// funcao push
console.log("---- funcao push  ---");
carros.push("Duster"); // adiciona um elemento no final do array
console.log(carros);


// funcao unshift
console.log("---- funcao unshift  ---");
carros.unshift("Onix"); // adiciona um elemento no inicio do array
console.log(carros);
