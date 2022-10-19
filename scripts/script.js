/*
setTimeout(function() {
  console.log("Hello")
}, 3000);


const returnValue = console.log("Hello");
setTimeout(returnValue, 3000);
*/

function displayGreeting(name) {
  console.log("Hello, my name is " + name);
}

setTimeout(function() {
  displayGreeting("Mahdi");
}, 2000);


/* How do we access HTML Elements via the DOM */

// 1.
const navItemEl = document.querySelector(".nav__item");

// 2.
const someIdEl = document.getElementById("some-id")

// 3. <button class="button">Please click me</button>
const buttonEl = document.createElement("button");
buttonEl.innerText = "Please click me";
buttonEl.classList.add("button");

// 4. an array / can't use this
// document.getElementsByClassName("nav__item");