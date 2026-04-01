// Variables
let projets = [];

// Fonction pour charger les projets
export async function initProjets() {
  const reponse = await fetch("./ressources/projet.json");
  projets = await reponse.json();
  console.log(projets);
  return projets;
}

//Fonctions
export function actionTriButton(max) {
  const selectTri = document.querySelector(".select-tri");
  selectTri.addEventListener("change", function () {
    console.log(selectTri.value);
    const filtre = selectTri.value;
    if (filtre === "Tout") {
      createEveryProjects(projets.slice(0, max));
    } else {
      const projetfiltrer = projets.filter((p) => p.tag.includes(filtre));
      createEveryProjects(projetfiltrer);
    }
  });
}

export function reinitBoutonActif() {
  filterButtons.forEach((bouton) => {
    bouton.classList.remove("actif");
  });
}

export function createEveryProjects(data) {
  let html = "";
  data.forEach((element) => {
    html += createProject(element);
  });
  document.querySelector(".project-grid").innerHTML = html;
}

export function createProject({ image, titre, desc, tag, github, site }) {
  let tagHTML = "";
  tag.forEach((element) => (tagHTML += `<span class="tag">${element}</span>`));

  const html = `
        <article class="card">
                  <img class="projectImg" src="${image}" alt="Image du projet ${titre}" />
                    <div>
                        <h3>${titre}</h3>
                        <p>${desc}</p>
                    </div>
                    <div class="tags">
                        ${tagHTML}
                    </div>
                    <div class="link-project">
                        ${github ? `<a target="_blank" href="${github}">Voir le code</a>` : ""}
                        ${site ? `<a target="_blank" href="${site}">Voir le projet</a>` : ""}
                    </div>
        </article>
    
    
    `;

  return html;
}

const inputSearch = document.querySelector(".search-input");
inputSearch.addEventListener("input", function () {
  let filtre = inputSearch.value.trim().toLowerCase();
  console.log(filtre);
  const projetfiltrer = projets.filter(
    (p) =>
      p.tag.some((tag) => tag.toLowerCase().includes(filtre)) ||
      p.desc.toLowerCase().includes(filtre),
  );

  createEveryProjects(projetfiltrer);
});

//Changement de role
const roles = ["Alex", "développeur", "entrepreneur"];
let index = 0;
const el = document.getElementById("role");

setInterval(() => {
  el.classList.add("out");

  setTimeout(() => {
    index = (index + 1) % roles.length;
    el.textContent = roles[index];

    el.classList.remove("out");
    el.classList.add("in");

    requestAnimationFrame(() => {
      el.classList.remove("in");
    });
  }, 500);

}, 2000);