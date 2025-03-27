// Funcao construtora -> objetos
// Funcao fabrica -> objetos
// Cosntrutora -> Pessoa (new)


function Pessoa (nome, sobrenome){

    // atributos privados -> nao podem ser manipulados
    const id = 1234;
    // para acessar um atributo privado, declar uma funcao
    this.getId = function() {
        return id;
    };
    // atributos publicos -> podem ser manipulados
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'Otavio');
const pessoa2 = new Pessoa('Maria', 'Oliveira');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.getId()); // retorna id


console.log(typeof pessoa1); // object
console.log(typeof pessoa2); // object