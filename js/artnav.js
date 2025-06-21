// Article Navigation
(function () {
  const articles = [
    "headline-news.html",
    "news-1.html",
    "news-2.html",
    "news-3.html",
    "news-4.html",
  ];
  const current = window.location.pathname.split("/").pop();
  const idx = articles.indexOf(current);
  const prevBtn = document.querySelector(".prev_btn");
  if (prevBtn) {
    if (idx > 0) {
      prevBtn.href = articles[idx - 1];
      prevBtn.style.display = "";
    } else {
      prevBtn.style.display = "none";
    }
  }
  const nextBtn = document.querySelector(".next_btn");
  if (nextBtn) {
    if (idx < articles.length - 1) {
      nextBtn.href = articles[idx + 1];
      nextBtn.style.display = "";
    } else {
      nextBtn.style.display = "none";
    }
  }
})();
