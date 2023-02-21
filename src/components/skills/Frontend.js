import { useState, useEffect } from '../../libs';

const Frontend = () => {
    const [frontend, setFrontend] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/skillCategories/1/skills')
            .then((response) => response.json())
            // .then((data) => console.log(data.frontend));
            .then((data) => setFrontend(data));
    }, []);

    return /*html*/ `
    <div class="skills__content">
    <h3 class='skills__title'>Frontend developer</h3>

    <div class='skills__box'>
        ${frontend
            .map((item) => {
                return `
            <div class="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 class='skills__name'>${item.name}</h3> 
                    <span class="skills__level">${item.level}</span>
                </div>
            </div>
            `;
            })
            .join('')}
        </div>
</div>
    `;
};

export default Frontend;
