//trabalhando com JS em um arquivo externo.
const nome = "Fiap";
console.log(nome, "chamando variavel criada com var");
// nome= "Avanade";

escreve("Exemplo de função nominal");

//função nominal - udf
function escreve(titulo){
  //  alert(titulo)
}



//função nominal - sodre hoisting.
function mudaTitulo(novoTitulo) {
    document.querySelector("h1").innerHTML = novoTitulo;
}
//escopo, orientação a objetos.
mudaTitulo("Vai Corinthians");


//expressão de função - Function Expression
// função anonima
const mudaTitulo2 = function(target, novoTitulo) {
    document.querySelector(target).innerHTML = novoTitulo;
};

mudaTitulo2("h1", "Trocando o Subtitulo");

// Arrow Funtion - É uma função criada no ES6 ou ES2015
// não existe o this dentro de uma arrow function.
// não exite um método construtor.
// sintaxe mais simples e prática.
const relogio = ()=>{
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
};

setInterval(relogio, 1000);

// setInterval(() => {}, tempo);

const frases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva"]

const mudaFrase = (target, frases, tempo) => {

let total = 0;
    setInterval(() => {
        document.querySelector(target).innerHTML = frases[total >= frases.length -1? (total = 0) :(total +=1)];
    },tempo * 1000)

    
}

mudaFrase("h1", frases, 4);
