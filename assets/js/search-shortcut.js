document.addEventListener("keydown", event => {
  if (event.key !== "/") return;
  event.preventDefault();
  document.getElementById("search-input").focus();
});
