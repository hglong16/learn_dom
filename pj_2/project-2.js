let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "None";
});

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "None";
  }
});

