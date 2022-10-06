const cep = document.querySelector("#cep");



const showData = (result) => {
	for(const campo in result){
		if(document.querySelector("#" + campo)){
			document.querySelector("#" + campo).value = result[campo];
		}
	}
}



cep.addEventListener("blur", async(e)=>{
	let search = cep.value.replace("-", "");

	if(search.length < 8 || Number(search.value) === NaN) {
		alert("CEP inválido!");
		cep.focus();
		return;
	};
	
	const options = {
		method: "GET",
		mode: "cors",
		cache: "default",
	};

	try{
		const resultado = await fetch(
			`https://viacep.com.br/ws/${search}/json/`,
			options
		);
	
		const json = await resultado.json();
		showData(json);
	} catch (error) {
		console.log("Temos um problema", error.message);
	}
	
});


	//recurso assíncrono, retorna uma promise por que eu não sei se vai funcionar.
	//Promise é um recurso que não temos certeza de dus certo ou não, é uma intenção.
	//Se der certo ele vai retornar o resolve, se der errado ele vai retornar o reject.
	//resolver quer dizer, funcionou, ai usamos a função then, se der errado, usamos catch.

	
//	fetch(`https://viacep.com.br/ws/${search}/json/`, options)
//	.then(response => {
//		response.json() .then(result => {
//			console.log(result);
//		});
//
//	})
//	.catch(err => { console.log(e.message)});

// outra forma de fazer o mesmo código acima

// axios - bibioteca javascript que usa fetch e XHR.