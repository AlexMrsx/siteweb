import { actionTriButton, createEveryProjects, initProjets } from './script.js';

const cheminProjet = "./ressources/projet.json";


// Initialiser et afficher 6 projets
async function init() {
    const projets = await initProjets(cheminProjet);
    createEveryProjects(projets.slice(0, 6));
    actionTriButton(6);
}

init();