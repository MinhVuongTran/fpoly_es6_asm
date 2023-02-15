import img from '../../assets/mvt.jpg';
const ProjectItems = (project) => {
    return `
        <div class='project__card'>
            <img src="${img}" alt="" class='project__img'/>
            <h3 class='project__title'>${project.title}</h3>
            <a href="#" class='project__button'>
                Demo 
                <i class='bx bx-right-arrow-alt project__button-icon'></i>
            </a>
        </div>
    `;
};

export default ProjectItems;
