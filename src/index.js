import "./style.css";

console.warn("start");
let category_list = ["marketing-seo", "it-web_design", "ux-graphic_design"];

let edit = false;
let all_articles = [];
let main_article = false;

let limit = 2;
let offset = 0;
let category = false;

let is_demo = false;
let fetch_url = "http://localhost:3000/articles-json";
// let fetch_url = "articles-data.json";
let page_url = window.location;

function getCleanUrl() {
  const index = window.location.href.indexOf("?");
  if (index !== false) {
    page_url = window.location.href.slice(0, index);
  }
}

function check_if_demo() {
  let host = window.location.hostname;
  if (host === "eduard96c.github.io") {
    is_demo = true;
    fetch_url = "articles-data.json";
  }

  // console.log(url);
}

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

  const submit_btn = $("#save-article");
  submit_btn.addEventListener("click", saveArticle);

  const loadMore = $("#more-articles");
  loadMore.addEventListener("click", loadMoreArticles);

  const text_area = $("#content");
  text_area.addEventListener("keydown", previewArticle);

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
      deleteArticle(id);
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
      // const pos = findPosition(found);
      // article_content.scroll(0, findPosition(found));
      found.scrollIntoView();
    }
  }
}

function findPosition(obj) {
  var currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop - 100];
  }
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
      let get_data;

      // luam articolele in functie de mediu
      if (is_demo) {
        get_data = filterArticles(data);
        // get_data = data;
      } else {
        get_data = data["articles"];
      }

      all_articles = all_articles.concat(get_data);
      displayArticles(get_data);
      addArticleEvents();
      if (data["is_last"]) {
        hide_load_more_button();
      }
    });
}

function startUpdate(id) {
  edit = id;
  const article = all_articles.find((article) => article.id == id);
  const form = $("#create-article-form");
  for (const key in article) {
    const input = $("#" + key);
    if (input) {
      input.value = article[key];
    }
  }
}

function deleteArticle(id) {
  fetch("http://localhost:3000/articles-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  })
    .then((res) => res.json())
    .then((status) => {
      if (status.success) {
        window.location.reload();
      }
    });
}

function getRequest() {
  const api = getApiURL();
  return fetch(api);
}

function createArticle(article) {
  return fetch("http://localhost:3000/articles-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  })
    .then((r) => r.json())
    .then((status) => {
      if (status.success) {
        window.location.reload();
      }
    });
}

function updateArticle(article) {
  fetch("http://localhost:3000/articles-json/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  })
    .then((r) => r.json())
    .then((status) => {
      if (status.success) {
        window.location.reload();
      }
    });
}

function getApiURL() {
  let api = fetch_url;
  if (limit) {
    api += "?limit=" + limit + "&offset=" + offset;
  }

  if (category) {
    if (limit) {
      api += "&category=" + category;
    } else {
      api += "?category=" + category;
    }
  }

  return api;
}

function saveArticle(event) {
  event.preventDefault();
  const article = getFormValues();
  if (edit) {
    const article = getFormValues();
    article.id = edit;
    updateArticle(article);
  } else {
    createArticle(article);
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
  const modal = $("#article-create-modal");
  modal.style.display = "none";
}
function closeArticle() {
  const modal = $("#article-modal");
  modal.style.display = "none";
}

function openCreateFrom() {
  const modal = $("#article-create-modal");
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
  $("#table-of-content").innerHTML = "";
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

  const prev_text = list.find(function (line) {
    const index_h = line.indexOf("h3:");
    const index_img = line.indexOf("img:");
    if (index_h < 0 && index_img < 0) {
      result = line.slice(0, 100);
      return result;
    }
  });
  return prev_text;
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
  img.src = "images/" + article.image;
  dt.innerHTML = format_date(article.date);
  parent.dataset.id = article.id;
}

function displayArticles(articles) {
  let articles_container = $("#blog-landing-articles");
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
        <img height="165" src="${is_demo ? "" : "/images/"}${
      article.image || "js_blog.png"
    }">
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
      if (is_demo) {
        //daca mediu e live filtram articole in functie de categorie/limita
        filterArticles(data);
      } else {
        //daca mediu e dev, articolele sunt gata filtrate de catre api
        all_articles = data["articles"];
      }
      //procesam articolele primite
      processGetRequest(data);
    });
}

function filterArticles(data) {
  let filtered = data;
  let last_article;

  if (category) {
    filtered = data.filter((article) => article.category === category);
  }

  if (offset == 0) {
    last_article = filtered[filtered.length - 1];
  }

  if (limit) {
    filtered = filtered.slice(offset, offset + limit);

    if (offset == 0) {
      filtered.push(last_article);
    }
  }

  all_articles = filtered;

  return filtered;
}

function processGetRequest(data) {
  if (offset === 0) {
    main_article = all_articles[all_articles.length - 1];
    displayLastArticle(main_article);
  }
  displayArticles(all_articles);
  addArticleEvents();
  if (data["is_last"]) {
    hide_load_more_button();
  }
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

function create_categories() {
  const list = $("#categories-list");
  const select = $("#category");
  category_list.forEach(function (elem, idx) {
    //adaugam categoriile la lista de link-uri
    list.innerHTML += `<li>
    <a
      href="${page_url}?category=${elem}"
      class="category-selector"
      data-id="${elem}"
      >${get_category_name(elem)}</a
    >
  </li>`;
    if (idx < category_list.length - 1) {
      list.innerHTML += "<hr>";
    }

    //adaugam optiune la select
    select.innerHTML += ` <option value="${elem}">${get_category_name(
      elem
    )}</option>`;
  });
}

function get_category_name(elem) {
  return (elem.charAt(0).toUpperCase() + elem.slice(1))
    .replace("-", " & ")
    .replace("_", " ");
}

//apelare functii
check_if_demo();
getCleanUrl();
create_categories();
addPageEvents();
getArticles();
