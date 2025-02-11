const toggleDarkModeBtn = document.getElementById("darkMode");
let isDarkMode = false;

const toggleDarkMode = () => {
  if (!isDarkMode) {
    document.body.classList.replace("bg-white", "bg-gray-900");
    document.getElementById("nav").classList.add("text-white", "bg-blue-600");
    document.getElementById("toDarkModeMoon").classList.replace("fa-solid", "fa-regular");
    document.getElementById("main-txt").classList.add("text-white");
    document.getElementById("main-p").classList.add("text-white");
    document.getElementById("Expand").classList.add("text-white");
    isDarkMode = true;
  } else {

    document.body.classList.replace("bg-gray-900", "bg-white");
    document.getElementById("nav").classList.remove("text-white", "bg-blue-600");
    document.getElementById("toDarkModeMoon").classList.replace("fa-regular", "fa-solid");
    document.getElementById("main-txt").classList.remove("text-white");
    document.getElementById("main-p").classList.remove("text-white");
    document.getElementById("Expand").classList.remove("text-white");
    isDarkMode = false;
  }
};

toggleDarkModeBtn.addEventListener("click", toggleDarkMode);


toggleDarkModeBtn.addEventListener("click", toggleDarkMode)

const toggleExpandBtn = document.getElementById("Expand");
const hiddenSection = document.getElementById("hiddenSection");
const upCarat = document.getElementById("expandCarat");
const urlBarAndButton = document.getElementById("urlBarAndButton");

const toggleParagraph = () => {
  hiddenSection.classList.toggle('invisible');
  upCarat.classList.toggle('fa-caret-up');
  upCarat.classList.toggle('fa-caret-down');

};

toggleExpandBtn.addEventListener("click", toggleParagraph);
