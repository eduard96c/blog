import "./style.css";

//declarari functii
function $(param) {
  return document.querySelector(param);
}

//setam toate event-urile de pe pagina in functia addEvents()
function addEvents() {
  var continueReadingButtons = document.querySelectorAll(".continue_reading");
  continueReadingButtons.forEach(function (button) {
    //la fiecare click se apeleaza functia _handleContinueReading
    button.addEventListener("click", _handleContinueReading);
  });

  const create_btn = document.querySelector("#create-article");
  create_btn.addEventListener("click", openCreateFrom);

  const close_btn = document.querySelector(".close-modal");
  close_btn.addEventListener("click", closeCreateForm);

  const submit_btn = document.querySelector("#save-article");
  submit_btn.addEventListener("click", saveArticle);
}

function saveArticle() {
  // console.log(event);
  event.preventDefault();
  const article = getFormValues();
  console.warn(article);
  createArticle(article)
    .then((r) => r.json())
    .then((data) => console.log(data));
}

function createArticle(article) {
  return fetch("http://localhost:3000/articles-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  });
}

function getFormValues() {
  // const form = $("#create-article-form");
  const article = {};

  const inputs = document.querySelectorAll(
    "#create-article-form input,select,textarea"
  );

  inputs.forEach(function (element) {
    const input_name = element.id;
    const input_value = element.value;
    article[input_name] = input_value;
  });

  return article;
}

function closeCreateForm() {
  const modal = document.querySelector("#article-modal");
  modal.style.display = "none";
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
