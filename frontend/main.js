let toggleExpandBtn = document.getElementById("Expand");
let hiddenSection = document.getElementById("hiddenSection"); 
let upCarat = document.getElementById("expandCarat");
let urlBarAndButton = document.getElementById("urlBarAndButton");
let isOpen = true;



const expandParagraph = () => {
  hiddenSection.classList.remove('invisible');
  upCarat.classList.remove('fa-caret-up');
  upCarat.classList.add('fa-caret-down');
  urlBarAndButton.classList.add()
  isOpen = true;
};

const retractParagraph = () => {
  hiddenSection.classList.add('invisible');
  upCarat.classList.remove('fa-caret-down');
  upCarat.classList.add('fa-caret-up');
  isOpen = false;
};

// Toggle functionality: check state on each click
toggleExpandBtn.onclick = () => {
  if (isOpen) {
    retractParagraph();
  } else {
    expandParagraph();
  }
};
