import { useEffect, useState, router } from '../../../libs';

const AdminProjectsEdit = ({ id }) => {
    const [project, setProject] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then((response) => response.json())
            // .then((data) => console.log(data));
            .then((data) => setProject(data));
        fetch(`http://localhost:3000/categories`)
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
                categoryId: Number(projectCateId.value),
                description: projectDesc.value,
                // thumbnail: projectName.value,
                author: projectAuth.value,
                link: projectLink.value,
                website: projectWebsite.value,
            };
            fetch(`http://localhost:3000/projects/${id}`, {
                method: 'PUT',
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
            <form id="form">
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Name</label>
                    <input type="text" class="form-control fs-4" id="project-name" value="${
                        project.title
                    }"/>
                </div>
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Category</label>
                    <select class="form-control fs-4" id="project-cate">
                        <option value="" key="">--Category--</option>
                        ${categories
                            .map((category) => {
                                if (category.name !== 'All')
                                    return `<option value="${category.id}" ${
                                        category.id === project.categoryId
                                            ? 'selected=selected'
                                            : ''
                                    }>${category.name}</option>`;
                            })
                            .join('')}
                    </select>
                </div>
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Description</label>
                    <textarea cols="30" rows="10" class="form-control fs-4" id="project-desc">${
                        project.description
                    }</textarea> 
                </div>
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Thumbnail</label>
                    <input type="file" class="form-control fs-4" id="project-thumb" value="${
                        project.thumbnail
                    }"/>
                </div>
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Author</label>
                    <input type="text" class="form-control fs-4" id="project-auth" value="${
                        project.author
                    }"/>
                </div>
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Link</label>
                    <input type="text" class="form-control fs-4" id="project-link" value="${
                        project.link
                    }"/>
                </div>
                <div class="form-group mb-2">
                    <label for="project-name" class="form-label">Website</label>
                    <input type="text" class="form-control fs-4" id="project-website" value="${
                        project.website
                    }"/>
                </div>
                <button type="submit" class="btn btn-primary fs-3 mt-4">Sửa</button>
            </form>
        </div>
    `;
};

export default AdminProjectsEdit;
