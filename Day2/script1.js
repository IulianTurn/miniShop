const audio = new Audio("../button_sound.mp3");
const buttons = document.querySelectorAll(".product");
const nrItems = document.querySelector("#nritems");
let i = 0;
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		audio.play();
		i++;
		nrItems.innerHTML = "&nbsp;Items: " + i;
	});
});

const buttonChart = document.querySelector("#showchart");

buttonChart.addEventListener("click", () => {
	let x = nrItems.innerHTML;
	x = x.replace("&nbsp;Items: ", "");
	alert("The Shoping Chart has " + x + " items");
});
