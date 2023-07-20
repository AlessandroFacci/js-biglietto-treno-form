//chiedo il nome all'utente

//prendo il paragrafo user-name dal DOM
const userName = document.getElementById("user-name");
//prendo il bottone generat-btn dal DOM
const generatButton = document.getElementById("generat-btn");
//prendo l'input input-name dal DOM
const inputName = document.getElementById("input-name");

generatButton.addEventListener("click", function () {
  const textName = inputName.value;
  userName.innerHTML = textName;
});
