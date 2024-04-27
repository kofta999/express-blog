document.addEventListener("DOMContentLoaded", () => {
  const allButtons = document.querySelectorAll(".searchBtn");
  const searchBar = document.querySelector(".searchBar");
  const searchInput = document.querySelector("#searchInput");
  const searchClose = document.querySelector("#searchClose");

  allButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      searchBar.style.visibility = "visible";
      searchBar.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      searchInput.focus();
    });
  });

  searchClose.addEventListener("click", () => {
    searchBar.style.visibility = "hidden";
    searchBar.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  });
});
