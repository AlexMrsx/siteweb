//Variables
const reponse = await fetch('./ressources/projet.json');
const projets = await reponse.json();
console.log(projets);


createEveryProjects(projets);

//Boutons de tri
const boutonTrierJava = document.querySelector(".trijava");
const boutonTrierTout = document.querySelector(".tout");
const boutonTrierWeb = document.querySelector(".web");
const boutonTrierMVC = document.querySelector(".mvc");
const boutonTrierReseaux = document.querySelector(".Reseaux");


boutonTrierJava.addEventListener("click", function(){
    const projetfiltrer = projets.filter((p)=> p.tag.includes("Java"));
    console.log("Projet filtrer");
    console.log(projetfiltrer);
    createEveryProjects(projetfiltrer);
})

boutonTrierTout.addEventListener("click", function(){
    createEveryProjects(projets);
})

boutonTrierWeb.addEventListener("click", function(){
    const projetfiltrer = projets.filter((p)=> p.tag.includes("Html") || p.tag.includes("Css"));
    console.log("Projet filtrer");
    console.log(projetfiltrer);
    createEveryProjects(projetfiltrer);
})

boutonTrierMVC.addEventListener("click", function(){
    const projetfiltrer = projets.filter((p)=> p.tag.includes("Architecture MVC"));
    console.log("Projet filtrer");
    console.log(projetfiltrer);
    createEveryProjects(projetfiltrer);
})

boutonTrierReseaux.addEventListener("click", function(){
    const projetfiltrer = projets.filter((p)=> p.tag.includes("Reseaux"));
    console.log("Projet filtrer");
    console.log(projetfiltrer);
    createEveryProjects(projetfiltrer);
})


//Fonctions
function createEveryProjects(data){
    let html = "";
    data.forEach(element => {
    html += createProject(element);
    });
    document.querySelector('.project-grid').innerHTML = html;


}

function createProject({titre, desc, tag, lien}){
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


