const searchInput = document.querySelector('.search');
const display = document.querySelector('.result');
const thanks = document.querySelector('.thanks');

// Normal function that works perfectly
function show() {
    display.innerHTML = this.value;
    setTimeout( () => {
        thanks.innerHTML = `You have typed: ${this.value}`;
    }, 500);
}
searchInput.addEventListener("keyup", show);