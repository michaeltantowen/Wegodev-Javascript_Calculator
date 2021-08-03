// Android Calculator

// var screen = document.querySelector("#screen");
// var btn = document.querySelector(".btn-container");

// btn.addEventListener("click", function(e) {
//   var btnClicked = e.target;
//   var btnValue = btnClicked.innerText;
  
//   if(btnValue === "C") {
//     screen.value = "";
//   } else if(btnValue === "del") {
//     screen.value = screen.value.slice(0, -1);
//   } else if(btnValue === "=") {
//     screen.value = eval(screen.value);
//   } else {
//     screen.value = screen.value + btnValue;
//   }

// });

// IOS Calculator
var screen = document.querySelector("#screen");
var btn = document.querySelector(".btn-container");
var resetScreen = false;
var count = false;
var tempVal = "";
var operator = "";

btn.addEventListener("click", function(e) {
  var btnClicked = e.target;
  var btnValue = btnClicked.innerText;
  
  if(btnValue === "C") {
    screen.value = "";
  } else if(btnValue === "del") {
    screen.value = screen.value.slice(0, -1);
  } else if(btnValue === "=") {
    if (count == true) {
			screen.value = eval(tempVal + operator + screen.value);
			count = false;
		}
  } else if(btnClicked.classList.contains('operator')){
    if(count == true) {
      screen.value = eval(tempVal + operator + screen.value);
      count = false;
    }
    tempVal = screen.value;
    operator = btnValue;
    resetScreen = true;
  } else {
    if(resetScreen == true) {
      screen.value = btnValue;
      resetScreen = false;
      count = true;
    } else {
      screen.value = screen.value + btnValue;
    }
  }
});