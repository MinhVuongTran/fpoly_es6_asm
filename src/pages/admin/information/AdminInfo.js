import './AdminInfo.css';
import { useEffect, useState } from '../../../libs';
import AdminHeader from '../../../components/header/AdminHeader';

const AdminInfo = () => {
    const [information, setInformation] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/information')
            .then((response) => response.json())
            .then((data) => setInformation(data));
    }, []);
    if (!Array.isArray(information)) {
        const data = Object.entries(information).reduce((acc, curr) => {
            return [...acc, { [curr[0]]: curr[1] }];
        }, []);
        setInformation(data);
    }

    return `
    ${AdminHeader()}
    <section class='information section '>
    <div class='information__container container'>
        ${
            Array.isArray(information)
                ? information
                      .map((item) => {
                          return `
                <div class='information__field'>${Object.keys(item)}</div>
                <div class='information__value'>${Object.values(item)}</div>
                <div class='information__button'><a href="/admin/information/edit/${Object.keys(
                    item,
                )}" class='btn btn-primary fs-4'>Sửa</a></div>
            `;
                      })
                      .join('')
                : ''
        }
    </div>
    </section>`;
};

export default AdminInfo;
