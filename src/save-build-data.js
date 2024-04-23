const fs = require("fs");
const articles_data = "articles-data.json";
const api_articles_data = "../blog-API/data/articles.json";

function getApiData() {
  return fs.readFileSync(api_articles_data);
}

function saveArticles() {
  fs.writeFileSync("./src/" + articles_data, getApiData());

  fs.copyFile("./src/" + articles_data, "./docs/" + articles_data, (err) => {
    if (err) throw err;
    console.log("source.txt was copied to destination.txt");
  });
}

function getArticles() {
  const content = fs.readFileSync("./src/" + articles_data);
  return JSON.parse(content);
}

//luam numele imaginilor
function getImages() {
  let images = [];
  const articles = getArticles();
  articles.forEach((element) => {
    if (element.image.trim() !== "") {
      images.push(element.image);
    }
  });
  return images;
}

function saveImages() {
  const images = getImages();

  images.forEach(function (img) {
    fs.copyFile("./src/images/" + img, "./docs/" + img, (err) => {
      if (err) throw err;
      console.log("source.txt was copied to destination.txt");
    });
  });
}

saveArticles();
saveImages();
