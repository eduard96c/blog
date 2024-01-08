let slide_interval;
let cards = document.querySelectorAll(".slide-card");
let dots = document.querySelectorAll(".dot");
let counter = 0;

function slide_cards() {
  slide_interval = setInterval(function () {
    if (counter >= cards.length - 1) {
      hide_card(counter);
      counter = 0;
      display_card(counter);
    } else {
      hide_card(counter);
      display_card(counter + 1);
      counter++;
    }
  }, 4000);
}
function hide_card(idx) {
  document.querySelectorAll(".dot")[idx].classList.remove("selected-card");
  document.querySelectorAll(".slide-card")[idx].classList.remove("slide-in");
}

function display_card(idx) {
  document.querySelectorAll(".dot")[idx].classList.add("selected-card");
  document.querySelectorAll(".slide-card")[idx].classList.add("slide-in");
}

function add_selectors() {
  var selectors_cointainer = document.querySelector("#slide-selectors");
  cards.forEach((element, idx) => {
    dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("card-nr", idx);
    dot.addEventListener("click", _handleCardSelect);
    selectors_cointainer.appendChild(dot);
  });
}

function _handleCardSelect(ev) {
  var dots = document.querySelectorAll(".dot");
  var dot_nr = ev.target.getAttribute("card-nr");

  if (dots[dot_nr].classList.contains("selected-card")) {
    return false;
  }

  if (counter > 0) {
    current = counter - 1;
  } else {
    current = 0;
  }

  if (cards[counter].classList.contains("slide-in")) {
    cards[counter].classList.remove("slide-in");
    dots[counter].classList.remove("selected-card");
  }
  display_card(dot_nr);

  counter = parseInt(dot_nr);
}

function slide_control() {
  add_selectors();
  display_card(counter);
  slide_cards();

  let btn = document.querySelector("#slide-control");
  let selectors_cointainer = document.querySelector("#slide-selectors");

  btn.addEventListener("click", function () {
    if (btn.classList.contains("fa-pause")) {
      clearInterval(slide_interval);
      btn.classList.remove("fa-pause");
      btn.classList.add("fa-play-circle");
      selectors_cointainer.style.height = "30px";
    } else {
      slide_cards();
      btn.classList.remove("fa-play-circle");
      btn.classList.add("fa-pause");
      selectors_cointainer.style.height = "0px";
    }
  });
}
slide_control();
