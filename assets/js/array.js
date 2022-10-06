
const carrosDOM = document.querySelector("#carros")

const veiculos = ["Chevrolet", "Ford", "Fiat", "Vw", "Honda", "Toyota", "Hyundai"];

//adiciona ao final do array
veiculos.push("BMW", "Mercedes");

//adicione no inicio do array
veiculos.unshift("Audi");

//removendo do inicio do array
const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array", primeiro);

//removendo do final do array
const ultimo = veiculos.pop();
console.log("Removendoo último elemento do array", ultimo);

//removendo elemento do array
const posicao = 2;
const removido = veiculos.splice(posicao, 1);

//removendo maid de um elemento do array
const removidos = veiculos.splice(1, 2, "Ferrari", "Lamborghini");

veiculos.forEach((value, key) => {
	carrosDOM.innerHTML += `<option value= "${key}">${value}</option>`;
});


//splice - remove e adiciona elementos

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];

// slice - retorna um novo array, o primeiro parâmetro é opcional, e começa em zero.
// o utimo parametro detrmina até onde deve ser filtrado, porem excluido este ultimo elemento.
const newNba = nbaTeams.slice(-1);

console.log(nbaTeams.slice(3, 5));
console.log(newNba, "ultimo");

//slice - retorna um novo array

// map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

const nome = "Rose Alquino dos Santos";
const nameArray = name.split(" ");  //split - pega o nome e quebra em array
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" "); // join - junta o array em uma frase
console.log(nameComplete);


const procuraCeltic = (nomeTime) => {
return nomeTime == "Celtics" || nomeTime == "Raptors";
};


const celticsMap = nbaTeams.map(procuraCeltic); // retorna um novo array, mapeando e buscando no array anterior
const celticsFilter = nbaTeams.filter(procuraCeltic); // retorna um novo arrau, procura do começo até o fim quem retornou true para a função chamada
const celticsFind = nbaTeams.find(procuraCeltic); // retorna a primeira ocorrência de uma busca com o parâmetro que a função determinou

console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsFind, "Find");

