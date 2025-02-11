let isDarkMode = false;


const toggleDarkModeBtn = document.getElementById("darkMode").addEventListener("click", function() {
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
});


const toggleExpandBtn = document.getElementById("Expand").addEventListener("click", function() {
  hiddenSection.classList.toggle('invisible');
  const upCarat = document.getElementById("expandCarat");
  upCarat.classList.toggle('fa-caret-up');
  upCarat.classList.toggle('fa-caret-down');
});
