//Author:  Masanaga Tsurui
//Date:  3/13/2021
//Hands-on Project 6-2

"use strict";
var formValidity = true;


function validateRequired() {
	var inputElements = document.querySelectorAll("#contactinfo input");
	var errorDiv = document.getElementById("errorText");
	var elementCount = inputElements.length;
	var requiredValidity = true;
	var currentElement;

	try {
		for (var i = 0; i < elementCount; i++) {
			currentElement = inputElements[i];

		if (currentElement.value === "") {
			currentElement.style.background = "rgb(255,233,233)";
			requiredValidity = false;

		} else {
			currentElement.style.background = "white";
		}
	}
		if (requiredValidity === false) {
		throw "Please complete all fields.";
	}
			errorDiv.style.display = "none";
			errorDiv.innerHTML = "";
	}
		catch(msg) {
			errorDiv.style.display = "block";
			errorDiv.innerHTML = msg;
			formValidity = false;
		}
	}


function createEventListeners() {
	var form = document.getElementsByTagName("form")[0];

		if (form.addEventListener) {
			form.addEventListener("submit", validateForm, false);
		}

		else if (form.attachEvent) {
			form.attachEvent("onsubmit", validateForm);
		}
	}

function validateForm(evt) {

		if (evt.preventDefault) {
			evt.preventDefault();

		} else {
			evt.returnValue = false;
		}
			formValidity = true;
			validateRequired();

		if (formValidity === true) {
			document.getElementsByTagName("form")[0].submit();
		}
	}

	function zeroPlaceholder() {
		var addressBox = document.getElementById("addrinput");
				addressBox.style.color = "black";

			if (addressBox.value === addressBox.placeholder) {
				addressBox.value = "";
			}
		}

	function checkPlaceholder() {
		var addressBox = document.getElementById("addrinput");

			if (addressBox.value === "") {
				addressBox.style.color = "rgb(178,184,183)";
				addrsesBox.value = addressBox.placeholder;
			}
		}

	function generatePlaceholder() {

			if (!Modernizr.input.placehoder) {
		var addressBox = document.getElementById("addrinput");
				addressBox.value = addressBox.placeholder;
				addressBox.style.color = "rgb(178,184,183)";

			if (addressBox.addEventListener) {
				addressBox.addEventListener("focus", zeroPlaceholder, false);

			} else if (addressBox.attachEvent) {
				addressBox.attachEvent("onfocus", zeroPlaceholder);
				addressBox.attachEvent("onblur", checkPlaceholder);
			}
		}
	}

		if (window.addEventListener) {
				window.addEventListener("load", setUpPage, false);

			} else if (window.attachEvent) {
				
				window.attachEvent("onload", setUpPage);
			}
