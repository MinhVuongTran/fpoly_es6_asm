import axios from 'axios';

import { useState, useEffect } from '../../libs';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const DetailProject = ({ id }) => {
    const [information, setInformation] = useState([]);
    const [project, setProject] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/information')
            .then((data) => setInformation(data.data));
        axios
            .get(`http://localhost:3000/projects/${id}`)
            .then((data) => setProject(data.data));
    }, []);
    return `
    ${Header()}
    <div class="container section">
        <div id="projects-detail" class=" mx-auto mt-10 px-5 md:px-0">
            <div>
                <h1 class="text-[48px] font-bold">
                    ${project.title}
                </h1>
                <div class="space-x-8 my-5">
                    <span class="inline-block rounded-full bg-red-400 px-3 font-bold            text-white">Author</span>
                    <span class="fs-3">${project.author}</span>
                </div>
                <div class="space-x-8 my-5">
                    <span class="inline-block rounded-full bg-red-400 px-3 font-bold text-white">Technologies</span>
                    <span class="fs-3">${project.technologies}</span>
                </div>
                <p class="pb-8 fs-2">${project.description}</p>
                <div>
                    <img src="${project.thumbnail}" alt="" class="w-full">
                </div>
            </div>
            <div class="d-flex flex-col mt-2 fs-3">
                    <a href="${
                        project.website
                    }" class=" rounded-full bg-red-400 px-3 font-bold text-white my-4 w-fit" target="_blank">
                        Website 
                        <i class="bx bx-right-arrow-alt project__button-icon"></i>
                    </a>
                    <a href="${
                        project.link
                    }" class=" rounded-full bg-red-400 px-3 font-bold text-white my-4 w-fit" target="_blank">
                        View in github 
                        <i class="bx bx-right-arrow-alt project__button-icon"></i>
                    </a>
                </div>
        </div>
  </div>
  ${Footer(information)}
    `;
};

export default DetailProject;
