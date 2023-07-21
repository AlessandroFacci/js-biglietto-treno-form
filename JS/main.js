//CHIEDO IL NOME ALL'UTENTE

//prendo il bottone generat-btn dal DOM
const generatButton = document.getElementById("generat-btn");
//prendo il paragrafo user-name dal DOM
const userName = document.getElementById("user-name");
//prendo il paragrafo total-price dal DOM
const totalPrice = document.getElementById("total-price");
//
//prendo l'input input-name dal DOM
const inputName = document.getElementById("input-name");
//prendo l'input input-km dal DOM
const inputKm = document.getElementById("input-km");
//prendo l'imput age dal DOM
const age = document.getElementById("age");

//FUNZIONE
generatButton.addEventListener("click", function () {
  const nameValue = inputName.value;
  const kmValue = parseFloat(inputKm.value);
  const ageValue = age.value;

  const ticketFare = 0.21;
  let ticketPrice = ticketFare * kmValue;
  if (ageValue == "kid") {
    ticketPrice *= 0.8;
  } else if (ageValue == "over65") {
    ticketPrice *= 0.6;
  }

  const ticketName = nameValue;
  const finalPrice = ticketPrice;

  userName.innerHTML = ticketName;
  totalPrice.innerHTML = ticketPrice.toFixed(2);
});
