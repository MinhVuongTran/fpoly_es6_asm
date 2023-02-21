import { useEffect, useState } from '../../../libs';
import AdminHeader from '../../../components/header/AdminHeader';

const AdminCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then((response) => response.json())
            // .then((data) => console.log());
            .then((data) => setCategories(data));
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for (let btn of btns) {
            const id = btn.dataset.id;
            const cate = btn.dataset.cate;
            btn.addEventListener('click', function () {
                fetch(`http://localhost:3000/categories/${id}`, {
                    method: 'DELETE',
                }).then(() => {
                    const newData = categories.filter(
                        (category) => category.id != id,
                    );
                    setCategories(newData);
                });
            });
        }
    });

    return `
        <section class='section'>
            ${AdminHeader()}
            <div class='container'>
                <table class='table table-bordered mt-4 align-middle text-center'>
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>
                            <a href="/admin/categories/add" class="btn btn-primary fs-4">Thêm</a>
                        </th>
                    </thead>
                    <tbody>
                          ${categories
                              .map((skill, index) => {
                                  return `
                            <tr>
                                <td >${index + 1}</td>
                                <td>${skill.name}</td>
                                <td width='150' class=''>
                                    <button class='btn btn-remove btn-danger fs-4' data-id=${
                                        skill.id
                                    } >Xóa</button>
                                    <a href="/admin/categories/${
                                        skill.id
                                    }/edit" class='btn btn-secondary fs-4'>Sửa</a>
                                </td>
                            </tr>
                            `;
                              })
                              .join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
};

export default AdminCategories;
