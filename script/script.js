// Add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=80) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

 // Dark mode button
const btn = document.querySelector('.btn-toggle');

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');  
})
ß
//responsive navigation bar 
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbarDark") {
      x.className += " responsive";
    } else {
      x.className = "navbarDark";
    }
  } 
