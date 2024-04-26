//JavaScript

// const hamMenu = document.querySelector('.ham-menu');
// const offScreenMenu = document.querySelector('.off-screen-menu');

// hamMenu.addEventListener('click', () => {
//   hamMenu.classList.toggle('active');
//   offScreenMenu.classList.toggle('active');})

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}