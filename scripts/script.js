/*
setTimeout(function() {
  console.log("Hello")
}, 3000);


const returnValue = console.log("Hello");
setTimeout(returnValue, 3000);
*/

/*
function displayGreeting(name) {
  console.log("Hello, my name is " + name);
}

setTimeout(function() {
  displayGreeting("Mahdi");
}, 2000);
*/

/* 
  How do we access HTML Elements via the DOM
    1. const navItemEl = document.querySelector(".nav__item");
    2. const someIdEl = document.getElementById("some-id")
    3. const buttonEl = document.createElement("button");
  */


const todosItemEls = document.querySelectorAll(".todos__item");

for (let i = 0; i < todosItemEls.length; i++) {
  const todosItemEl = todosItemEls[i];

  todosItemEl.addEventListener("click", function(event) {
    // Change the CSS properties somehow
    todosItemEl.classList.toggle("todos__item--completed");
  });
}

const pageEl = document.querySelector(".page");
pageEl.addEventListener("click", function() {
  pageEl.classList.add("page--clicked");
})



// window.addEventListener("mousemove", (event) => {
//   console.log(event);
// })


// window.addEventListener("click", (event) => {
//   console.log(event);
// })


const secretCode = [
  "ArrowUp", 
  "ArrowUp", 
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft", 
  "ArrowRight", 
  "ArrowLeft", 
  "ArrowRight", 
  "b", 
  "a"
];

let inputKeys = [];

window.addEventListener("keyup", (event) => {
  // Let's check if it is part of the konami code
  
  if (event.key === secretCode[inputKeys.length]) {
    inputKeys.push(event.key);
  } else {
    inputKeys = [];
  }
  
  console.log(inputKeys);

  if (inputKeys.length === secretCode.length) {
    showGameOverScreen();
  }
})

function showGameOverScreen() {
  alert("Game Over");
}

