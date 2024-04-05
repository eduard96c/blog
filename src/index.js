import "./style.css";

console.warn("start");

let edit = false;
let all_articles = [];
let main_article = false;

let limit = 2;
let offset = 0;

let category = false;

//declarari functii
function $(selector, all = false) {
  if (all) {
    return document.querySelectorAll(selector);
  }
  return document.querySelector(selector);
}

//setam toate event-urile de pe pagina in functia addPageEvents()
function addPageEvents() {
  const create_btn = $("#create-article");
  create_btn.addEventListener("click", openCreateFrom);

  $(".close-modal").addEventListener("click", closeCreateForm);

  const submit_btn = document.querySelector("#save-article");
  submit_btn.addEventListener("click", saveArticle);

  const loadMore = document.querySelector("#more-articles");
  loadMore.addEventListener("click", loadMoreArticles);

  const text_area = $("#content");
  text_area.addEventListener("keydown", previewArticle);

  //(category-selector)
  // var category_selector = $(".category-selector", true);
  // category_selector.forEach(function (category_button) {
  //   category_button.addEventListener("click", filtreArticles);
  // });

  // const preview_button = $("#preview-article");
  // preview_button.addEventListener("click", parseText);
}

//setam toate event-urile de pe articole in functia addArticleEvents()

function addArticleEvents() {
  var continueReadingButtons = document.querySelectorAll(".continue_reading");
  continueReadingButtons.forEach(function (button) {
    //la fiecare click se apeleaza functia _handleContinueReading
    button.addEventListener("click", _handleContinueReading);
  });

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

  const close_article = $("#close-article");
  close_article.addEventListener("click", closeArticle);
}

function articleNavigate(event) {
  var article_content = $("#article-content");
  var headings = article_content.querySelectorAll("h3");

  if (event.target.tagName == "A") {
    var found = Array.from(headings).find((h) => {
      console.log(h.innerHTML);
      return h.innerHTML == event.target.innerHTML;
    });
    if (found) {
      // found.scrollIntoView();
      const pos = findPosition(found);
      article_content.scroll(0, findPosition(found));
    }
  }
}

function findPosition(obj) {
  var currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop - 200];
  }
}

function filtreArticles(event) {
  var id = event.target.dataset.id;
  category = id;
  var filtred_articles = all_articles.filter(
    (article) => article.category == id
  );
}

function previewArticle(event) {
  // event.preventDefault();

  //tine minte elementul in care scriem: textareax
  const text_area = event.target;
  //tinem minte textul din textarea
  const text = text_area.value;

  //tine minte zona de preview
  const preview_wrapper = $("#preview-wrapper");

  const title =
    text_area.parentElement.previousElementSibling.previousElementSibling
      .children[1];

  //tine minte un html gol
  let html = `<h2 id="article-title">${title.value}</h2>`;

  html += parseText(text);
  //in zona de preview adaugam HTML-ul creeat
  preview_wrapper.innerHTML = html;
}

function parseText(text) {
  let html = "";

  //impartim textul dupa "new lines"
  const splited_text = text.split("\n");
  //parcurgem toate linile de text
  splited_text.forEach(function (line) {
    //catuam o linie care are text "h3:"
    const h3_index = line.toLowerCase().indexOf("h3:");

    //daca linia are h3
    if (h3_index >= 0) {
      // luam textul de dupa h3
      const heading_text = line.substring(3);
      //adaugam un element html la variabila hmtl
      html += `<h3 class="article-heading">${heading_text}</h3>`;
    }

    const img_index = line.indexOf("img:");

    if (img_index >= 0) {
      const img_path = line.substring(4);
      html += `<img class="article-image" width="200" height="100" src="${img_path}">`;
    }

    //daca nu avem h3: SI nici img: linie este un paragraph
    if (h3_index < 0 && img_index < 0) {
      html += `<p class="article-paragraph">${line}</p>`;
    }
  });
  return html;
}

function loadMoreArticles(event) {
  offset += limit;
  getRequest()
    .then((res) => res.json())
    .then((data) => {
      all_articles = all_articles.concat(data["articles"]);
      displayArticles(data["articles"]);
      addArticleEvents();
      if (data["is_last"]) {
        hide_load_more_button();
      }
    });
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

function getRequest() {
  return fetch(
    "http://localhost:3000/articles-json?limit=" +
      limit +
      "&offset=" +
      offset +
      "&category=" +
      category
  );
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

function saveArticle(event) {
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
  const modal = document.querySelector("#article-create-modal");
  modal.style.display = "none";
}
function closeArticle() {
  const modal = $("#article-modal");
  modal.style.display = "none";
}

function openCreateFrom() {
  const modal = document.querySelector("#article-create-modal");
  modal.style.display = "block";
}

function _handleContinueReading(event) {
  var modal = $("#article-modal");
  modal.style.display = "block";
  //tinem minte parintele butonului pe care am dat click//
  const parent =
    event.target.closest(".article-container") ||
    event.target.closest("#main-article-wrapper");
  //tinem minte articolul id articolului //
  var article_id = parent.dataset.id;

  //tinem minte in variabila article articolul cu id article_id//
  const article = all_articles.find(
    (curentArticle) => curentArticle.id == article_id
  );
  displayArticle(article);
}

function displayArticle(article) {
  const article_wrapper = $("article-content-wrapper");
  const article_tittle = $("#article-title");
  article_tittle.innerHTML = article.title;
  const article_content = $("#article-content");
  article_content.innerHTML = parseText(article.content);

  createTableOfContent();

  var content_list = $("#table-of-content");
  content_list.addEventListener("click", articleNavigate);
}

function createTableOfContent() {
  var content = $("#article-content");
  var headings = content.querySelectorAll("h3");
  var table_wrapper = $("#article-table");
  var ul = $("#table-of-content");

  headings.forEach(function (heading) {
    var li = `<li class="content-heading"><a>${heading.innerHTML}</a></li>`;
    ul.innerHTML += li;
  });
}

function getPreviewText(text) {
  const list = text.split("\n");
  let result = "";
  list.forEach(function (line) {
    const index_h = line.indexOf("h3:");
    const index_img = line.indexOf("img:");
    if (index_h < 0 && index_img < 0) {
      result = line.slice(0, 100);
    }
  });
  return result;
}

function displayLastArticle(article) {
  // const article = all_articles[all_articles.length - 1];
  const parent = $("#main-article-wrapper");
  const title = $("#main-article-title");
  const preview = $("#main-article-preview");
  const img = $("#main-article-image");
  const dt = $("#main-article-date");

  title.innerHTML = article.title;
  preview.innerHTML = getPreviewText(article.content);
  img.src = article.image;
  dt.innerHTML = format_date(article.date);
  parent.dataset.id = article.id;
}

function displayArticles(articles) {
  let articles_container = document.querySelector("#blog-landing-articles");

  articles.forEach(function (article) {
    if (article.title == main_article.title) {
      return;
    }
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
              <span>${format_date(article.date)}</span>
              <span>|</span>
              <span>${
                $('a[data-id="' + article.category + '"]').innerHTML
              }</span>
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
          </div>
        </div>
      </div>
    </div>
  </div>`;
    articles_container.innerHTML += html;
  });
}

function getArticles() {
  var query = window.location.search;
  var params = query.substring(1).split("&");
  if (params) {
    category = params[0].substring(9);
  }
  getRequest()
    .then((res) => res.json())
    .then((data) => {
      all_articles = data["articles"];
      if (offset === 0) {
        main_article = all_articles[all_articles.length - 1];
        displayLastArticle(main_article);
      }
      displayArticles(all_articles);
      addArticleEvents();
      if (data["is_last"]) {
        hide_load_more_button();
      }
    });
}

function hide_load_more_button() {
  $("#more-articles").style.display = "none";
}

function format_date(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  return year + "-" + month + "-" + day;
}

function format_category(text) {
  return text.replace("-", "&").replace("_", " ");
}

//apelare functii
addPageEvents();
getArticles();
