import { useEffect, useState, router, uploadFile } from '../../../libs';
import AdminHeader from '../../../components/header/AdminHeader';

const AdminCategoriesEdit = ({ id }) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/categories/${id}`)
            .then((response) => response.json())
            // .then((data) => console.log(data));
            .then((data) => setCategory(data));
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
            fetch(`http://localhost:3000/categories/${id}`, {
                method: 'PATCH',
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
                <h1>Sửa danh mục</h1>
                <form id="form">
                    <div class="form-group mb-2">
                        <label for="cate-name" class="form-label">Name</label>
                        <input type="text" class="form-control fs-4" id="cate-name" value="${
                            category.name
                        }"/>
                    </div>
                    <button type="submit" class="btn btn-primary fs-3 mt-4">Sửa</button>
                </form>
            </div>
        </section >
    `;
};

export default AdminCategoriesEdit;
