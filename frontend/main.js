let isDarkMode = false;
const solidBlue = "bg-blue-600"
const solidGrey = "bg-gray-900"

const toggleDarkModeBtn = document.getElementById("darkMode").addEventListener("click", function() {
  if (!isDarkMode) {
    document.body.classList.replace("bg-white", solidGrey);
    document.body.classList.replace("text-black", "text-white")
    document.querySelectorAll("p").forEach(p => {
      p.style.color = "white";
    });
    document.querySelectorAll("h2").forEach(p => {
      p.style.color = "white";

    });
    document.getElementById("nav").classList.add("text-white", solidBlue);
    document.getElementById("toDarkModeMoon").classList.replace("fa-solid", "fa-regular");
    document.querySelectorAll("div").forEach(p => {
      p.style.color = "white";
      p.classList.add(solidGrey); 
    });

    isDarkMode = true;
  } else {
    document.body.classList.replace(solidGrey, "bg-white");
    document.body.classList.replace("text-white", "text-black")
    document.querySelectorAll("p").forEach(p => {
      p.style.color = "black";
    });
    document.querySelectorAll("h2").forEach(p => {
      p.style.color = "black";
    });
    document.getElementById("nav").classList.remove("text-white", solidBlue);
    document.getElementById("toDarkModeMoon").classList.replace("fa-regular", "fa-solid");
    document.querySelectorAll("div").forEach(p => {
      p.style.color = "black";
      p.classList.remove(solidGrey); 
    });
    isDarkMode = false;
  }
});


const toggleExpandBtn = document.getElementById("Expand").addEventListener("click", function() {
  hiddenSection.classList.toggle('invisible');
  const upCarat = document.getElementById("expandCarat");
  upCarat.classList.toggle('fa-caret-up');
  upCarat.classList.toggle('fa-caret-down');
});


