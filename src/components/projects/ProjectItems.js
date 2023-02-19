const ProjectItems = (project) => {
    return `
        <div class='project__card'>
            <div class='project__img-box'>
                <img src="${project.thumbnail}" alt="thumbnail" class='project__img'/>
            </div>
            <div class='project__content'>
                <h2 class='project__title'>${project.title}</h2>
                <h3 class='project__technologies'>Technologies: ${project.technologies}</h3>
                <p class='project__description'>${project.description}</p>
                <span class='project__author'>Author: ${project.author}</span>
                <div class='project__redirect'>
                    <a href="${project.link}" class='project__button' target="_blank">
                        View in github 
                        <i class='bx bx-right-arrow-alt project__button-icon'></i>
                    </a>
                    <a href="${project.website}" class='project__button' target="_blank">
                        Website 
                        <i class='bx bx-right-arrow-alt project__button-icon'></i>
                    </a>
                </div>
            </div>
        </div>
    `;
};

export default ProjectItems;
