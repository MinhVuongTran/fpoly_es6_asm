import { useEffect, useState, router, uploadFile } from '../../../libs';
import AdminHeader from '../../../components/header/AdminHeader';

const AdminProjectsAdd = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then((response) => response.json())
            // .then((data) => console.log(data));

            .then((data) => setCategories(data));
    }, []);
    useEffect(() => {
        // const projects = JSON.parse(localStorage.getItem('projects')) || [];

        const form = document.querySelector('#form');
        const projectName = document.querySelector('#project-name');
        const projectTech = document.querySelector('#project-tech');
        const projectDesc = document.querySelector('#project-desc');
        const projectCateId = document.querySelector('#project-cate');
        const projectThumb = document.querySelector('#project-thumb');
        const projectAuth = document.querySelector('#project-auth');
        const projectLink = document.querySelector('#project-link');
        const projectWebsite = document.querySelector('#project-website');

        form.addEventListener('submit', async (e) => {
            console.log(1);
            e.preventDefault();
            const thumbnail = await uploadFile(projectThumb.files);
            const formData = {
                title: projectName.value,
                categoryId: Number(projectCateId.value),
                technologies: projectTech.value,
                description: projectDesc.value,
                thumbnail,
                author: projectAuth.value,
                link: projectLink.value,
                website: projectWebsite.value,
            };
            fetch('http://localhost:3000/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate('/admin/projects'));
        });
    });

    return `
        <section class='section'>
            ${AdminHeader()}
            <div class="container">
                <h1>Thêm sản phẩm</h1>
                <form action="" id="form">
                    <div class="form-group mb-2">
                        <label for="project-name" class="form-label">Name</label>
                        <input type="text" class="form-control fs-4" id="project-name"/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="project-name" class="form-label">Category</label>
                        <select class="form-control fs-4" id="project-cate">
                            <option value="" key="">--Category--</option>
                            ${categories
                                .map((category) => {
                                    if (category.name !== 'All')
                                        return `<option value="${category.id}" key="">${category.name}</option>`;
                                })
                                .join('')}
                        </select>
                    </div>
                    <div class="form-group mb-2">
                        <label for="project-name" class="form-label">Technologies</label>
                        <input type="text" class="form-control fs-4" id="project-tech"/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="project-name" class="form-label">Description</label>
                        <textarea cols="30" rows="10" class="form-control fs-4" id="project-desc"></textarea> 
                    </div>
                    <div class="form-group mb-2">
                        <label for="project-name" class="form-label">Thumbnail</label>
                        <input type="file" class="form-control fs-4" id="project-thumb"/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="project-name" class="form-label">Author</label>
                        <input type="text" class="form-control fs-4" id="project-auth"/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="project-name" class="form-label">Link</label>
                        <input type="text" class="form-control fs-4" id="project-link"/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="project-name" class="form-label">Website</label>
                        <input type="text" class="form-control fs-4" id="project-website"/>
                    </div>
                    <button type="submit" class="btn btn-primary fs-3">Thêm</button>
                </form>
            </div>
        </section>
    `;
};

export default AdminProjectsAdd;
