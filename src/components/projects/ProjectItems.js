const ProjectItems = (project) => {
    return `
            <div class='project__card'>
                <div class='project__img-box'>
                    <a href="/project/${project.id}"><img src="${project.thumbnail}" alt="thumbnail" class='project__img'/></a>
                </div>
                <div class='project__content'>
                    <a href="/project/${project.id}">
                        <h2 class='project__title'>${project.title}</h2>
                    </a>
                    <h3 class='project__technologies'>Technologies: ${project.technologies}</h3>
                    <p class='project__description'>${project.description}</p>
                </div>
            </div>
    `;
};

export default ProjectItems;
