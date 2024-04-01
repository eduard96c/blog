import "./style.css";

let edit = false;
let all_articles = [];

let limit = 2;
let offset = 0;

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

  const deleteButtons = document.querySelectorAll(".delete-article");
  deleteButtons.forEach(function (buton) {
    buton.addEventListener("click", function () {
      const parent = buton.closest(".article-container");
      const id = parent.dataset.id;
      deleteArticle(id)
        .then((res) => res.json())
        .then((status) => {
          if (status.success) {
            window.location.reload();
          }
        });
    });
  });

  const updateButtons = document.querySelectorAll(".start-update");
  updateButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const parent = button.closest(".article-container");
      const id = parent.dataset.id;
      openCreateFrom();
      startUpdate(id);
    });
  });

  const loadMore = document.querySelector(".more-articles");
  loadMore.addEventListener("click", loadMoreArticles);
}

function loadMoreArticles() {
  offset += limit;
  getArticles();
}

function startUpdate(id) {
  edit = id;
  const article = all_articles.find((article) => article.id == id);
  const form = document.querySelector("#create-article-form");
  for (const key in article) {
    const input = document.querySelector("#" + key);
    if (input) {
      input.value = article[key];
    }
  }
}

function deleteArticle(id) {
  return fetch("http://localhost:3000/articles-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
}

function getArticles() {
  fetch(
    "http://localhost:3000/articles-json?limit=" + limit + "&offset=" + offset
  )
    .then((res) => res.json())
    .then((data) => {
      all_articles = data;
      displayArticles(all_articles);
      addEvents();
    });
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

function updateArticle(article) {
  return fetch("http://localhost:3000/articles-json/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  });
}

function saveArticle() {
  event.preventDefault();
  const article = getFormValues();
  if (edit) {
    const article = getFormValues();
    article.id = edit;
    updateArticle(article)
      .then((r) => r.json())
      .then((status) => {
        if (status.success) {
          window.location.reload();
        }
      });
  } else {
    createArticle(article)
      .then((r) => r.json())
      .then((status) => {
        if (status.success) {
          window.location.reload();
        }
      });
  }
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
  var contentsmall = this.parentElement.nextElementSibling;
  if (contentsmall.style.display === "block") {
    contentsmall.style.display = "none";
  } else {
    contentsmall.style.display = "block";
  }
  console.log("Button clicked. Display style: " + contentsmall.style.display);
}

function getPreviewText(text) {
  if (text) {
    return text.slice(0, 70);
  }
}

function displayArticles(articles) {
  let articles_container = document.querySelector("#blog-landing-articles");

  articles.forEach(function (article) {
    let html = "";
    const preview_text = getPreviewText(article.content);
    // html = `<div class="article-container">${article.title}</div>`;
    html = `<div class="article-container" data-id="${article.id}">
    <div class="article-card">
      <div class="article-card-image-holder">
        <img height="165" src="/images/${article.image}">
      </div>
      <div class="article-card-content-holder">
        <div class="article-card-content">
          <div class="article-card-heading">
            <h3>
           ${article.title}
            </h3>
            <div class="article-card-heading-info">
              <span>${article.date}</span>
              <span>|</span>
              <span>${article.category}</span>
            </div>
          </div>
          <div class="article-card-text">
            <p>
             ${preview_text}
            </p>
            <div class="card-button-holder">
              <button type="button" class="continue_reading">
                Continue Reading
              </button>
              <div class="article-control-buttons">
                <span class="start-update control-btn" title="Update">💾</span>
                <span class="delete-article control-btn" title="Delete">❌</span>
              </div>
            </div>
            <div class="contentsmall" style="display:none">${article.content}</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    articles_container.innerHTML += html;
  });
}

//apelare functii
getArticles();
