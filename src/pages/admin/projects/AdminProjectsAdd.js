import { useEffect, useState, router } from '../../../libs';

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
        const projectDesc = document.querySelector('#project-desc');
        const projectCateId = document.querySelector('#project-cate');
        const projectThumb = document.querySelector('#project-thumb');
        const projectAuth = document.querySelector('#project-auth');
        const projectLink = document.querySelector('#project-link');
        const projectWebsite = document.querySelector('#project-website');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                title: projectName.value,
                categoryId: projectCateId.value,
                description: projectDesc.value,
                // thumbnail: projectName.value,
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
            // let id = Math.round(Math.random() * 100) + 1;
            // projects.push({
            //     id: id,
            //     name: projectName.value,
            // });
            // localStorage.setItem('projects', JSON.stringify(projects));
        });
    });

    return `
        <div class="container">
            <h1>Thêm sản phẩm</h1>
            <form action="" id="form">
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="project-name"/>
                </div>
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Category</label>
                    <select class="form-control" id="project-cate">
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
                    <label for="project-name" class="form-label">Description</label>
                    <textarea cols="30" rows="10" class="form-control" id="project-desc"></textarea> 
                </div>
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Thumbnail</label>
                    <input type="file" class="form-control" id="project-thumb"/>
                </div>
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Author</label>
                    <input type="text" class="form-control" id="project-auth"/>
                </div>
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Link</label>
                    <input type="text" class="form-control" id="project-link"/>
                </div>
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Website</label>
                    <input type="text" class="form-control" id="project-website"/>
                </div>
                <button type="submit" class="btn btn-primary">Thêm</button>
            </form>
        </div>
    `;
};

export default AdminProjectsAdd;