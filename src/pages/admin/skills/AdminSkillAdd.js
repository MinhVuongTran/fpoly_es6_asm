import { useEffect, useState, router, uploadFile } from '../../../libs';
import AdminHeader from '../../../components/header/AdminHeader';

const AdminSkillAdd = () => {
    const [skillsCategories, setSkillsCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/skillCategories')
            .then((response) => response.json())
            // .then((data) => console.log(data));

            .then((data) => setSkillsCategories(data));
    }, []);
    useEffect(() => {
        // const projects = JSON.parse(localStorage.getItem('projects')) || [];

        const form = document.querySelector('#form');
        const skillName = document.querySelector('#skill-name');
        const skillCate = document.querySelector('#skill-cate');
        const skillLevel = document.querySelector('#skill-level');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: skillName.value,
                skillCategoryId: Number(skillCate.value),
                level: skillLevel.value,
            };
            fetch('http://localhost:3000/skills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate('/admin/skill'));
        });
    });

    return `
        <section class='section'>
            ${AdminHeader()}
            <div class="container">
                <h1>Thêm sản phẩm</h1>
                <form action="" id="form">
                    <div class="form-group mb-2">
                        <label for="skill-name" class="form-label">Name</label>
                        <input type="text" class="form-control fs-4" id="skill-name"/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="skill-cate" class="form-label">Category</label>
                        <select class="form-control fs-4" id="skill-cate">
                            ${skillsCategories
                                .map((category) => {
                                    return `<option value="${category.id}" key="">${category.name}</option>`;
                                })
                                .join('')}
                        </select>
                    </div>
                    <div class="form-group mb-2">
                        <label for="skill-level" class="form-label">Level</label>
                        <select class="form-select fs-4" id="skill-level">
                                <option value="Basic" key="">Basic</option>
                                <option value="Intermediate" key="">Intermediate</option>
                                <option value="Advanced" key="">Advanced</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary fs-3 mt-3">Thêm</button>
                </form>
            </div>
        </section>
    `;
};

export default AdminSkillAdd;
