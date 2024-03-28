import "./style.css";

//declarari functii

//setam toate event-urile de pe pagina in functia addEvents()
function addEvents() {
  var continueReadingButtons = document.querySelectorAll(".continue_reading");
  continueReadingButtons.forEach(function (button) {
    //la fiecare click se apeleaza functia _handleContinueReading
    button.addEventListener("click", _handleContinueReading);
  });

  const create_btn = document.querySelector("#create-article");
  create_btn.addEventListener("click", openCreateFrom);
}

function openCreateFrom() {
  const modal = document.querySelector("#article-modal");
  modal.style.display = "block";
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

//apelare functii
addEvents();
