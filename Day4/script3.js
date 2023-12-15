const audio = new Audio("../button_sound.mp3");
const buttons = document.querySelectorAll(".product"); //select class but reffer button the element with this class
const nrItems = document.querySelector("#nritems");
const nrItems1 = document.querySelector("#nritems1");
let noProd = 12;
let prodArray = new Array(noProd).fill(0); //initialize bought items array
let i = 0;

buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		audio.play();
		i++;
		nrItems.innerHTML = "&nbsp;Items: " + i;
		nrItems1.innerHTML = "&nbsp;Items: " + i;
		e = e || window.event;
		let target = e.target || e.srcElement;
		let z = e.target.id.substring(4) - 1;
		prodArray[z] += 1;
		//alert(e.target.tagName);
		//alert(e.target.innerText);
		//let text = e.target.parentElement.innerText;
		//alert(text.substring(0, 9));
		//alert(e.target.id.substring(4));
		//alert(e.target.id);
	});
});

const buttonChart = document.querySelector("#showchart");
const buttonBack = document.querySelector("#showShop");
const divInfo = document.querySelector("#showAll");
const myCanvas = document.getElementById("canvas");
const div000 = document.querySelector("#div0");
const div111 = document.querySelector("#divv");

buttonChart.addEventListener("click", () => {
	myCanvas.style.visibility = "hidden";
	div000.style.visibility = "hidden";
	div111.style.visibility = "visible";
	buttonBack.style.display = "block";
	divInfo.style.display = "block";
	let string = "";
	for (let i = 0; i < noProd; i++) {
		if (prodArray[i] > 1) {
			string += "Product " + (i + 1) + ": " + prodArray[i] + " items;<br>";
		} else if (prodArray[i] > 0) {
			string += "Product " + (i + 1) + ": " + prodArray[i] + " item;<br>";
		}
	}
	string += "------------------------------------------------<br>";
	string +=
		"TOTAL:&nbsp;&nbsp;&nbsp;" +
		prodArray.reduce((x, y) => x + y, 0) +
		" items";
	document.getElementById("showAll").innerHTML = string;
});

buttonBack.addEventListener("click", () => {
	myCanvas.style.visibility = "visible";
	div000.style.visibility = "visible";
	div111.style.visibility = "hidden";
	buttonBack.style.display = "none";
	divInfo.style.display = "none";
});
