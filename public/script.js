let sections = document.querySelectorAll(".projects .project").length;
let nameInput = document.querySelector("input.name");
let emailInput = document.querySelector("input.email");
let message = document.querySelector("textarea");
let form = document.querySelector(".contact form");
let footerNote = document.querySelector("footer > p");

const currentYear = new Date().getFullYear();
footerNote.innerHTML = `Copyright &copy;${currentYear} | Made by theDro💖`;

if (window.location.search.includes("form")) {
  window.scrollTo({
    top: form.getBoundingClientRect().y,
    behavior: "smooth",
  });
  document.querySelector("p.success").style.display = "block";
  setTimeout(() => {
    document.querySelector("p.success").style.display = "none";
  }, 10000);
}
