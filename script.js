
/*
    What 3 parts do we need to listen for triggered events?
    1. Element to listen on
    2. Event type (mousemove, click, etc)
    3. Event handler function (what code do we want to execute when the event happens)
*/

/*
document.addEventListener("mousemove", function(event) {
    console.log(event);
})
*/

const titleEl = document.getElementById("tv-shows-title");
titleEl.addEventListener("click", function(event) {
    // Print out the title when clicking "Cohort's Favorite TV Shows"

    // titleEl and event.target are basically the same
    console.log(event.target.innerText);

})

// Print out the key that was pressed last on the email input
const emailEl = document.querySelector(".form__email-input");
emailEl.addEventListener("keypress", function(event) {
    console.log(event.key);
})