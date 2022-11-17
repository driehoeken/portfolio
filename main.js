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
    cardContact.style.width = "0px";
});
cardPortfolio.addEventListener("mouseleave", () => {
    cardPortfolio.style = "";
    cardAboutme.style = "";
    cardContact.style = "";
});
//cardAboutme
cardAboutme.addEventListener("mouseover", () => {
    cardAboutme.style.width = "800px";
    cardAboutme.style.height = "500px";

    cardPortfolio.style.width = "0px";
    cardPortfolio.style.height = "0px";

    cardContact.style.width = "0px";
    cardContact.style.height = "0px";
});
cardAboutme.addEventListener("mouseleave", () => {
    cardPortfolio.style = "";
    cardAboutme.style = "";
    cardContact.style = "";
});
//cardContact
cardContact.addEventListener("mouseover", () => {
    cardContact.style.width = "800px";
    cardContact.style.height = "500px";

    cardPortfolio.style.width = "0px";
    cardPortfolio.style.height = "0px";

    cardAboutme.style.width = "0px";
    cardAboutme.style.height = "0px";
});
cardContact.addEventListener("mouseleave", () => {
    cardPortfolio.style = "";
    cardAboutme.style = "";
    cardContact.style = "";
});
