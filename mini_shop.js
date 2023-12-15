const audio = new Audio("button_sound.mp3");
const buttons = document.querySelectorAll(".product"); //select node by class and reffer button
const nrItems = document.querySelector("#nritems");
const nrItems1 = document.querySelector("#nritems1");
let noProd = 9; //any number of items
let prodArray = new Array(noProd).fill(0); //initialize array items
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
	//switch visibility
	myCanvas.style.visibility = "hidden";
	div000.style.visibility = "hidden";
	div111.style.visibility = "visible";
	buttonBack.style.display = "block";
	divInfo.style.display = "block";

	//print shoping chart string
	let string = "";
	for (let i = 0; i < noProd; i++) {
		if (prodArray[i] > 0) {
			string +=
				"<div id='erase" +
				(i + 1) +
				"'><b>Product " +
				(i + 1) +
				": </b>" +
				"<button class='min' id='min" +
				(i + 1) +
				"'>-</button><span id='updateItem" +
				(i + 1) +
				"'> " +
				prodArray[i] +
				" </span><button class='plus' id='plus" +
				(i + 1) +
				"'>+</button>" +
				" items <button class='del' id='del" +
				(i + 1) +
				"' >Delete</button><br></div> ";
		}
	}
	string += "------------------------------------------------<br>";
	string +=
		"<div id='updatedValue'><b>TOTAL:&nbsp;&nbsp;&nbsp;" +
		prodArray.reduce((x, y) => x + y, 0) +
		" items</b></div>";
	document.getElementById("showAll").innerHTML = string;

	//////////////////////add event listeners
	const plus = document.querySelectorAll(".plus");
	const min = document.querySelectorAll(".min");
	const del = document.querySelectorAll(".del");

	del.forEach((button) => {
		button.addEventListener("click", (e) => {
			let target = e.target;
			let arrayIndex = e.target.id.substring(3) - 1;
			//delete amount from array
			let delatedAmount = prodArray[arrayIndex];
			prodArray[arrayIndex] = 0;
			i -= delatedAmount;
			//update up boxes
			nrItems.innerHTML = "&nbsp;Items: " + i;
			nrItems1.innerHTML = "&nbsp;Items: " + i;
			//update total
			updatedTotal =
				"<b>TOTAL:&nbsp;&nbsp;&nbsp;" +
				prodArray.reduce((x, y) => x + y, 0) +
				" items</b>";
			document.getElementById("updatedValue").innerHTML = updatedTotal;
			//delete row
			let divId = "erase" + e.target.id.substring(3);
			const divToDelete = document.getElementById(divId);
			divToDelete.remove();
		});
	});
	plus.forEach((button) => {
		button.addEventListener("click", (e) => {
			let target = e.target;
			let z = e.target.id.substring(4) - 1;
			prodArray[z] += 1;
			i++;
			//update up boxes
			nrItems.innerHTML = "&nbsp;Items: " + i;
			nrItems1.innerHTML = "&nbsp;Items: " + i;
			//update item
			document.getElementById("updateItem" + (z + 1) + "").innerHTML =
				" " + prodArray[z] + " ";
			//update total
			updatedTotal =
				"<b>TOTAL:&nbsp;&nbsp;&nbsp;" +
				prodArray.reduce((x, y) => x + y, 0) +
				" items</b>";
			document.getElementById("updatedValue").innerHTML = updatedTotal;
		});
	});

	min.forEach((button) => {
		button.addEventListener("click", (e) => {
			let target = e.target;
			let w = e.target.id.substring(3) - 1;

			//	if item amount >0
			if (prodArray[w] > 0) {
				prodArray[w] -= 1;
				i--;
				//update up boxes
				nrItems.innerHTML = "&nbsp;Items: " + i;
				nrItems1.innerHTML = "&nbsp;Items: " + i;
				//update item
				document.getElementById("updateItem" + (w + 1) + "").innerHTML =
					" " + prodArray[w] + " ";

				//update total
				updatedTotal2 =
					"<b>TOTAL:&nbsp;&nbsp;&nbsp;" +
					prodArray.reduce((x, y) => x + y, 0) +
					" items</b>";
				document.getElementById("updatedValue").innerHTML = updatedTotal2;
			}
		});
	});
	///////////////////
});

buttonBack.addEventListener("click", () => {
	//switch visibility
	myCanvas.style.visibility = "visible";
	div000.style.visibility = "visible";
	div111.style.visibility = "hidden";
	buttonBack.style.display = "none";
	divInfo.style.display = "none";
});
