const audio = new Audio("../button_sound.mp3");
const buttons = document.querySelectorAll(".product"); //select class but reffer button the element with this class
const nrItems = document.querySelector("#nritems");
const nrItems1 = document.querySelector("#nritems1");
let i = 0;
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		audio.play();
		i++;
		nrItems.innerHTML = "&nbsp;Items: " + i;
		nrItems1.innerHTML = "&nbsp;Items: " + i;
		e = e || window.event;
		let target = e.target || e.srcElement;
		//text = target.textContent || target.innerText;
		///////////////////////////
		//alert(e.target);  // to get the element
		//alert(e.target.tagName);
		//alert(e.target.innerText);
		//alert(e.target.id);
		let text = e.target.parentElement.innerText;
		alert(text.substring(0, 9));
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
});

buttonBack.addEventListener("click", () => {
	myCanvas.style.visibility = "visible";
	div000.style.visibility = "visible";
	div111.style.visibility = "hidden";
	buttonBack.style.display = "none";
	divInfo.style.display = "none";
});
