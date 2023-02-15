import './project.css';
import Projects from './Projects';

const Project = () => {
    return /*html */ `
        <section class='projects section' id='projects'>
            <h2 class='section__title'>Projects</h2>
            <span class='section__subtitle'>Most recent projects</span>

            ${Projects()}
        </section>
    `;
};

export default Project;
