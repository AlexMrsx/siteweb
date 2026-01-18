// Variables
let projets = [];

// Fonction pour charger les projets
export async function initProjets() {
    const reponse = await fetch('./ressources/projet.json');
    projets = await reponse.json();
    console.log(projets);
    return projets;
}



const filterButtons = document.querySelectorAll('.btn-tri');
//Fonctions
export function actionTriButton(max) {
    filterButtons.forEach(bouton => {
        bouton.addEventListener("click", function () {
            reinitBoutonActif();
            const filtre = this.dataset.filter;
            this.classList.add("actif");
            if (filtre === "Tout") {
                createEveryProjects(projets.slice(0, max));
            } else {
                const projetfiltrer = projets.filter((p) => p.tag.includes(filtre));
                createEveryProjects(projetfiltrer);
            }
        });
    });
}

export function reinitBoutonActif(){
    filterButtons.forEach(bouton=>{
        bouton.classList.remove("actif");
    })
}

export function createEveryProjects(data){
    let html = "";
    data.forEach(element => {
    html += createProject(element);
    });
    document.querySelector('.project-grid').innerHTML = html;
}

export function createProject({titre, desc, tag, lien}){
    let tagHTML = "";
    tag.forEach((element) => tagHTML +=`<span class="tag">${element}</span>`);

    const html = `
        <article class="card">
                    <div>
                        <h3>${titre}</h3>
                        <p>${desc}</p>
                    </div>
                    <div class="tags">
                        ${tagHTML}
                    </div>
                    <div class="link-project">
                        <a target="_blank" href="${lien}">Lien GitHub</a>
                    </div>
        </article>
    
    
    `;

    return html;
}   


