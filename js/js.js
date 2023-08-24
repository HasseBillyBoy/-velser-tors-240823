let titel = document.querySelector("h1");
console.log(titel);

titel.textContent = "Noget andet";

let underoverskrift = document.querySelector("h2");
console.log(underoverskrift);

let billede = document.querySelector("img");
console.log(billede);

let artikel2paragraftekst = document.querySelector(
  ".articlegrid div:nth-child(2) p"
);
artikel2paragraftekst.textContent = "Oookay";

let artikel1paragraftekst = document.querySelector(
  ".articlegrid div:first-child p"
);
artikel1paragraftekst.textContent = "Okayokay";

let artikeloverskrift1 = document.querySelector(
  ".articlegrid div:first-child h3"
);
artikeloverskrift1.textContent = "Splitteminebramsegl";

let artikeloverskrift2 = document.querySelector(
  ".articlegrid div:last-child h3"
);
artikeloverskrift2.textContent = "Spytpåmig";

let billede1 = document.querySelector(".articlegrid img");
billede1.setAttribute("src", "https://picsum.photos/id/80/400/300");
