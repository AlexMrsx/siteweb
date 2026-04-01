import { actionTriButton, createEveryProjects, initProjets } from "./script.js";

// Initialiser et afficher tous les projets
async function init() {
  const projets = await initProjets("../ressources/projet.json");
  createEveryProjects(projets);
  actionTriButton(projets.length);
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function () {
      console.log("click");
      document.querySelector(".project-full").classList.remove("hide");
      document.querySelector(".fullblack").classList.remove("hide");
    });

    document.addEventListener("click", function (event) {
      //verifie que c'est pas une card
      if (
        !event.target.closest(".card") &&
        !event.target.closest(".project-full")
      ) {
        document.querySelector(".project-full").classList.add("hide");
        document.querySelector(".fullblack").classList.add("hide");
      }
    });
  });
}

init();
