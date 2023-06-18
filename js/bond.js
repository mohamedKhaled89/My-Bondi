// Add active class to navbar links
// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

///////////////////////////////////////////////////////////////////
// Add active class to our-work taps
window.myFunction = function (event) {
  // reset all menu items
  document
    .querySelectorAll(".scarousel-indicators button.active")
    .forEach(function (item) {
      item.classList.remove("active");
    });
  // mark as active selected menu item
  event.target.classList.add("active");
};

//////////////////////////////////////////////////////////////////////
// Button to the top action
// Get the button
let mybutton = document.getElementById("myTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/////////////////////////////////////////////////////////////////////////
// Close open collapsed navbar on clicking outside of the navbar element
window.onload = function () {
	document.addEventListener("click", function (event) {
		// if the clicked element isn't child of the navbar, you must close it if is open
		if (!event.target.closest("#navbar") && document.getElementById("navbarSupportedContent").classList.contains("show")) {
			document.getElementById("hamburger_menu_button").click();
		}
	});
}