const formButton = document.querySelector(".formbutton");
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formAvailabilty = document.getElementById("availabilty");
const formComment = document.getElementById("comment");
function updateButtonVisibility() {
  if (formName.value == "" || formEmail.value == "" || formAvailabilty.value == "" || formComment.value == "") {
    formButton.disabled = true;
  } else {
    formButton.disabled = false;
  }
}
formName.addEventListener("change", function () {
  updateButtonVisibility();
})
formEmail.addEventListener("change", function () {
  updateButtonVisibility();
})
formComment.addEventListener("change", function () {
  updateButtonVisibility();
})

const codingLanguages = ["HTML", "CSS", "JavaScript"]
window.addEventListener("load", function () {
  let footersent = document.getElementById("footersent");
  if (codingLanguages.length === 1) {
    footersent.innerHTML = "This website has been created with: " + codingLanguages[0] + ".";
  }
  else {
    footersent.innerHTML = "This website has been created with: " + codingLanguages.slice(0, -1).join(", ") + " and " + codingLanguages[codingLanguages.length - 1] + ".";
  }
});
