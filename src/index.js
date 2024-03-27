import "./style.css";

function addEvents() {
  var continueReadingButtons = document.querySelectorAll(".continue_reading");
  continueReadingButtons.forEach(function (button) {
    button.addEventListener("click", _handleContinueReading);
  });
}

function _handleContinueReading() {
  var contentsmall = this.nextElementSibling;
  if (contentsmall.style.display === "block") {
    contentsmall.style.display = "none";
  } else {
    contentsmall.style.display = "block";
  }
  console.log("Button clicked. Display style: " + contentsmall.style.display);
}

addEvents();
