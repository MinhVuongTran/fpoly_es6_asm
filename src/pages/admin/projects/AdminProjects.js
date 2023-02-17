import { useEffect, useState } from '../../../libs';

const AdminProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/projects')
            .then((response) => response.json())
            // .then((data) => console.log(data));

            .then((data) => setProjects(data));
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener('click', function () {
                // localStorage.setItem('projects', JSON.stringify(newData));
                fetch(`http://localhost:3000/projects/${id}`, {
                    method: 'DELETE',
                }).then(() => {
                    const newData = projects.filter(
                        (project) => project.id != id,
                    );
                    setProjects(newData);
                });
            });
        }
    });

    return `
        <div class='container'>
            <table class='table table-bordered mt-4'>
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Thumbnail</th>
                    <th>Author</th>
                    <th>Link code</th>
                    <th>Website</th>
                    <th>
                        <a href="/admin/projects/add" class="btn btn-primary fs-4">Thêm</a>
                    </th>
                </thead>
                <tbody>
                    ${projects
                        .map((item, index) => {
                            return `<tr>
                        <td>${index + 1}</td>
                        <td>${item.title}</td>
                        <td>${item.description}</td>
                        <td>${item.thumbnail}</td>
                        <td>${item.author}</td>
                        <td>${item.link}</td>
                        <td>${item.website}</td>
                        <td width='150' class=''>
                            <button class='btn btn-remove btn-danger fs-4' data-id=${
                                item.id
                            }>Xóa</button>
                            <a href="/admin/projects/${
                                item.id
                            }/edit" class='btn btn-secondary fs-4'>Sửa</a>
                        </td>
                    </tr>`;
                        })
                        .join('')}
                </tbody>
            </table>
        </div>
    `;
};

export default AdminProjects;
