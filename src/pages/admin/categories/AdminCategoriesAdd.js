import { useEffect, useState, router, uploadFile } from '../../../libs';
import AdminHeader from '../../../components/header/AdminHeader';

const AdminCategoriesAdd = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/skillCategories')
            .then((response) => response.json())
            // .then((data) => console.log(data));

            .then((data) => setSkillsCategories(data));
    }, []);
    useEffect(() => {
        // const projects = JSON.parse(localStorage.getItem('projects')) || [];

        const form = document.querySelector('#form');
        const cateName = document.querySelector('#cate-name');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: cateName.value,
            };
            fetch('http://localhost:3000/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate('/admin/categories'));
        });
    });

    return `
        <section class='section'>
            ${AdminHeader()}
            <div class="container">
                <h1>Thêm danh mục</h1>
                <form action="" id="form">
                    <div class="form-group mb-2">
                        <label for="cate-name" class="form-label">Name</label>
                        <input type="text" class="form-control fs-4" id="cate-name"/>
                    </div>
                    <button type="submit" class="btn btn-primary fs-3 mt-3">Thêm</button>
                </form>
            </div>
        </section>
    `;
};

export default AdminCategoriesAdd;
