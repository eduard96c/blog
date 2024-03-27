import "./style.css";
document
  .getElementById("categories-list")
  .addEventListener("click", function (event) {
    var target = event.target;
    if (target.tagName === "A") {
      var href = target.getAttribute("href");
      window.location.href = href;
    }
  });
