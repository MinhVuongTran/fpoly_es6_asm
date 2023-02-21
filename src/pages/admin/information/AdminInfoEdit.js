import axios from 'axios';
import { useEffect, useState, router, uploadFile } from '../../../libs';
import AdminHeader from '../../../components/header/AdminHeader';
const AdminInfoEdit = ({ slug }) => {
    // const slugData = useState(slug);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/information')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    useEffect(() => {
        // let slug = slug;
        const form = document.querySelector('#form');
        const fields = document.querySelector(`#${slug}`);

        if (fields.type == 'file') {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                let avatar;
                if (fields.files.length === 0) {
                    avatar = data.avatar;
                } else {
                    avatar = await uploadFile(fields.files);
                }

                const formData = {
                    avatar,
                };
                axios
                    .patch('http://localhost:3000/information', formData, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    })
                    .then(() => router.navigate('/admin/information'));
            });
        } else {
            form.addEventListener('submit', (e) => {
                const formData = {
                    [slug]: fields.value,
                };
                e.preventDefault();
                axios
                    .patch('http://localhost:3000/information', formData, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    })
                    .then(() => router.navigate('/admin/information'));
            });
        }
    });
    let inputEle;
    switch (slug) {
        case 'description':
            inputEle = `<textarea cols='30' rows='10' class='form-control fs-4' id='${slug}'>${data[slug]}</textarea>`;
            break;
        case 'avatar':
            inputEle = `<input type="file" class="form-control fs-4" id="${slug}"/>`;
            break;
        default:
            inputEle = `<input type="text" class="form-control fs-4" id="${slug}" value="${data[slug]}"/>`;
            break;
    }

    return `
    <div class="container">
        ${AdminHeader()}
            <form id="form" class="mt-4 section">
                <div class="form-group mb-2">
                <label for="${slug}" class="form-label">${slug}</label>
                ${inputEle}
                
                </div>
                <button type="submit" class="btn btn-primary fs-3 mt-4">Sửa</button>
            </form>
        </div>
    `;
};

export default AdminInfoEdit;
