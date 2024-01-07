function slide_cards() {
  let cards = document.querySelectorAll(".slide-card");
  let counter = 0;
  display_card();
  setInterval(display_card, 4000);

  function display_card() {
    if (counter > 0) {
      cards[counter - 1].classList.remove("slide-in");
    }
    if (counter == cards.length) {
      counter = 0;
    }
    cards[counter].classList.add("slide-in");
    counter++;
  }
}

slide_cards();
