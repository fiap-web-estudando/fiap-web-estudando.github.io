//diferenças entre arrow function e funções nominais ou expressão de função.

const resultado = document.querySelector('#resultado');

let myFunc1 = {
    showArguments() {
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

//chamando a função
myFunc1.showArguments(
    "Vai Corinthians",
    "Full Stack Developer",
    "react",
    "NodeJs",
    "TypeScript"
);


let myFunc2 = {
    showArguments: () => {
    //    resultado.innerHTML = arguments;
    //    console.log(...arguments);
    },
};

myFunc2.showArguments(
    "Vai Corinthians",
    "Full Stack Developer",
    "react",
    "NodeJs",
    "TypeScript"
);


let user = {
    name: "Rose Alquino",
    usandoArrow: () => {
        console.log("Meu nome é", this.name, "Arrow Function");
    },
    usandoNominal() {
            console.log("Meus nome é ", this.name, "Nominal Function");
    },
};
user.usandoArrow();
user.usandoNominal();