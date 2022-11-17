const cardPortfolio = document.querySelector(".card-portfolio");
const cardAboutme = document.querySelector(".card-aboutme");
const cardContact = document.querySelector(".card-contact");
const cardPortfolioText = cardPortfolio.querySelector(".card-text");
const cardAboutmeText = cardAboutme.querySelector(".card-text");
const cardContactText = cardContact.querySelector(".card-text");
//cardPortfolio
cardPortfolio.addEventListener("mouseover", () => {
    cardPortfolio.style.width = "800px";

    cardAboutme.style.width = "0px";
    cardAboutme.style.left = "800px";

    cardContact.style.width = "0px";
    cardContact.style.left = "800px";
});
cardPortfolio.addEventListener("mouseleave", () => {
    cardPortfolio.style = "";
    cardAboutme.style = "";
    cardContact.style = "";
});
