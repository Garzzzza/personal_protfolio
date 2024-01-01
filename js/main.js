fetch("https://api.github.com/users/Garzzzza")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const img = document.createElement("img");
    img.src = data.avatar_url;
    document.querySelector(".profile-image").appendChild(img);

    const para = document.createElement("para");
    para.innerText = data.name;
    document.querySelector(".profile-name").appendChild(para);
  })
  .catch(function (error) {
    console.log(error);
  });

let linkedin = document.getElementById("linkedin");
linkedin.addEventListener("click", function () {
  linkedin.removeAttribute("class");
  linkedin.setAttribute("class", "fa-brands fa-linkedin-in fa-beat");
});
let github = document.getElementById("github")
github.addEventListener("click", function () {
  github.removeAttribute("class");
  github.setAttribute("class", "fa-brands fa-github fa-beat");
});
let stackoverflow = document.getElementById("stackoverflow")
stackoverflow.addEventListener("click", function () {
  stackoverflow.removeAttribute("class");
  stackoverflow.setAttribute("class", "fa-brands fa-stack-overflow fa-beat");
});

const codingLanguages = ["HTML", "CSS", "JavaScript"];
window.addEventListener("load", function () {
  let footersent = document.getElementById("footersent");
  if (codingLanguages.length === 1) {
    footersent.innerHTML = "This website has been created with: " + codingLanguages[0] + ".";
  }
  else {
    footersent.innerHTML = "This website has been created with: " + codingLanguages.slice(0, -1).join(", ") + " and " + codingLanguages[codingLanguages.length - 1] + ".";
  }
});