import { useState, useEffect } from '../../libs';

const Backend = () => {
    const [backend, setBackend] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/skillCategories/2/skills')
            .then((response) => response.json())
            // .then((data) => console.log(data.Backend));
            .then((data) => setBackend(data));
    }, []);

    return /*html */ `
        <div class="skills__content">
            <h3 class='skills__title'>Backend developer</h3>

            <div class='skills__box'>

                ${backend
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

export default Backend;
