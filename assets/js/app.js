const open = document.getElementById("open_modal");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close_modal");

open.addEventListener("click", function () {
  modal_container.classList.add("show");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", function () {
  modal_container.classList.remove("show");
  document.body.style.overflow = "initial";
});
