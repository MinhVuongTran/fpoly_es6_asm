import { useEffect, useState } from '../../../libs';
import AdminHeader from '../../../components/header/AdminHeader';

const AdminSkill = () => {
    const [skills, setSkills] = useState([]);
    const [newSkills, setNewSkills] = useState([]);
    const [skillsCategories, setSkillsCategories] = useState([]);
    const [showSkill, setShowSkill] = useState(1);
    let filterSkill;
    useEffect(() => {
        fetch('http://localhost:3000/skillCategories?_embed=skills')
            .then((response) => response.json())
            // .then((data) => console.log());
            .then((data) => setSkills(data));

        fetch('http://localhost:3000/skillCategories')
            .then((response) => response.json())
            // .then((data) => console.log(data));
            .then((data) => setSkillsCategories(data));
    }, []);

    useEffect(() => {
        // console.log(skills);
        if (skills.length != 0) {
            setNewSkills(skills[0].skills);
        }
    }, [skills]);

    useEffect(() => {
        const selectEle = document.querySelector('.form-select');
        selectEle.onchange = () => {
            setShowSkill(selectEle.value);
        };
    });

    useEffect(() => {
        if (skills.length > 0) {
            filterSkill = skills.find((item) => item.id == showSkill);
            let [, cate, arrSkills] = Object.values(filterSkill);
            setNewSkills(arrSkills);
        }
    }, [showSkill]);

    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for (let btn of btns) {
            const id = btn.dataset.id;
            const cate = btn.dataset.cate;
            btn.addEventListener('click', function () {
                fetch(`http://localhost:3000/skills/${id}`, {
                    method: 'DELETE',
                }).then(() => {
                    const newData = newSkills.filter((skill) => skill.id != id);
                    setNewSkills(newData);
                });
            });
        }
    });

    return `
        <section class='section'>
            ${AdminHeader()}
            <div class='container'>
                <div class='mt-4 '>
                    <select class="form-select fs-4 w-25" aria-label="Default select example">
                        ${skillsCategories
                            .map((item) => {
                                return `
                                <option value="${item.id}" ${
                                    showSkill == item.id
                                        ? 'selected=selected'
                                        : ''
                                }>${item.name}</option>
                            `;
                            })
                            .join('')}
                    </select>
                </div>
                <table class='table table-bordered mt-4 align-middle text-center'>
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>
                            <a href="/admin/skill/add" class="btn btn-primary fs-4">Thêm</a>
                        </th>
                    </thead>
                    <tbody>
                          ${newSkills
                              .map((skill, index) => {
                                  return `
                            <tr>
                                <td >${index + 1}</td>
                                <td>${skill.name}</td>
                                <td>${skill.level}</td>
                                <td width='150' class=''>
                                    <button class='btn btn-remove btn-danger fs-4' data-id=${
                                        skill.id
                                    } >Xóa</button>
                                    <a href="/admin/skill/${
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

export default AdminSkill;
