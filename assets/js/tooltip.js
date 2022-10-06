const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

// alvo.addEventListener("evento", função);

// mouseover, função arrow no body.

body.addEventListener("mouseover", (e) => {
	body.style.background = "gray";
});


body.addEventListener("mouseout", (e) => {
    body.style.background = 'unset';
});

tooltip.addEventListener("mouseover",(e)=>{

console.log("Altura da Página", body.clientHeight);
console.log("LArgura da Página", body.clientWidth);
console.log("ALtura do tooltip", tooltip.clientHeight);
console.log("Largura do tooltip", tooltip.clientWidth);
console.log("ALtura do mouse", e.clientY);
console.log("Largura do mouse", e.clientX);


	if(document.querySelector(".tooltip")) {
		document.querySelector(".tooltip").remove();
	}

	const newDiv = document.createElement("div");
	newDiv.classList.add("tooltip");
	newDiv.innerHTML = 
	"Gelatooo para tú aaaaaah chasy wiiiii wiiiii daa hahaha me want bananaaa! Daa jiji bappleees tank yuuu! Butt po kass gelatooo hahaha. Potatoooo poulet tikka masala butt poopayee uuuhhh po kass. Chasy belloo!";

		const largura = 200;
	newDiv.style.position = "fixed";
	newDiv.style.width = largura + "px";
	newDiv.style.top = e.clientY + "px";
	newDiv.style.left = (e.clientX + largura > body.clientWidth ? e.clientX - largura - 20 : e.clientX + largura) + "px";

	console.log(newDiv.style.width, "width");

	newDiv.style.display = "flex";
	header.appendChild(newDiv);
});

tooltip.addEventListener("mouseout", (e)=>{
	if(document.querySelector(".tooltip")) {
		document.querySelector(".tooltip").remove();
	}
});


//desafio criar o tooltip em uma função
//tooltip("#tooltip", "texto do tooltip");
//Quando passar o mouse o texto vai aparecer.


