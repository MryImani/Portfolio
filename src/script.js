let menuLink = document.querySelectorAll(".menu .menu-link");
menuLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.contains("active")
      ? e.target.classList.remove("active")
      : e.target.classList.add("active");
  });
});
