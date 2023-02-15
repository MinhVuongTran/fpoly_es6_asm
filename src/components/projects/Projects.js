import { useState, useEffect } from '../../libs';
import ProjectItems from './ProjectItems';

const Projects = () => {
    const [projectsNav, setProjectsNav] = useState([]);
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(1);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then((response) => response.json())
            .then((data) => setProjectsNav(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/projects')
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/categories?_embed=projects')
            .then((response) => response.json())
            .then((data) => {
                const navBtns = document.querySelectorAll('.project__item');
                for (const navBtn of navBtns) {
                    const id = navBtn.dataset.id;
                    navBtn.addEventListener('click', () => {
                        const newProjects = data.find(
                            (project) => project.id == id,
                        );
                        if (newProjects.name === 'All') {
                            fetch('http://localhost:3000/projects')
                                .then((response) => response.json())
                                .then((data) => setProjects(data));
                        } else {
                            setProjects(newProjects.projects);
                        }
                        setActive(id);
                    });
                }
            });
    }, [projects]);

    return /*html*/ `
        <div>
            <div class='project__filters'>
                ${projectsNav
                    .map((projectNav, index) => {
                        return `
                        <span class='${
                            active == projectNav.id
                                ? 'project__item active-project'
                                : 'project__item'
                        }' data-id="${projectNav.id}">${projectNav.name}</span>
                    `;
                    })
                    .join('')}
            </div>
    
            <div class='project__container container grid'>
                ${projects
                    .map((project) => {
                        return ProjectItems(project);
                    })
                    .join('')}
            </div>
        </div>
    `;
};

export default Projects;
