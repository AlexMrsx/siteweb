import { actionTriButton, createEveryProjects, initProjets } from './script.js';

// Initialiser et afficher 6 projets
async function init() {
    const projets = await initProjets();
    createEveryProjects(projets.slice(0, 6));
    actionTriButton(6);
}

init();