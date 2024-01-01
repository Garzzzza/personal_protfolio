let citiesUrl = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.855634590543!2d34.903482486308526!3d32.1592888154692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d382788e4b667%3A0x1f05cddaa82b24a5!2sHod%20Hasharon!5e0!3m2!1sen!2sil!4v1685297615079!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19182.191256696533!2d-73.97463808611681!3d40.78387891761972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sil!4v1685297482428!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.334969233817!2d-71.9795673591513!3d-13.517006690233652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5d826598431%3A0x2aa996cc2318315d!2sCusco%2C%20Peru!5e0!3m2!1sen!2sil!4v1685297707844!5m2!1sen!2sil"
];
let currentlySelected = 0;
const mapTags = document.getElementById("map");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function () {
  currentlySelected++;
  document.getElementById("city").innerHTML = "";
  mapTags.src = citiesUrl[currentlySelected];
  prevBtn.disabled = false;
  if (citiesUrl.length === currentlySelected + 1)
    nextBtn.disabled = true;
});
prevBtn.addEventListener("click", function () {
  currentlySelected--;
  document.getElementById("city").innerHTML = "";
  mapTags.src = citiesUrl[currentlySelected];
  nextBtn.disabled = false;
  if (currentlySelected === 0)
    prevBtn.disabled = true;
});

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