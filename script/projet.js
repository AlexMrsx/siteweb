import { actionTriButton, createEveryProjects, initProjets } from './script.js';

// Initialiser et afficher tous les projets
async function init() {
    const projets = await initProjets();
    createEveryProjects(projets);
    actionTriButton(projets.length);
}

init();


