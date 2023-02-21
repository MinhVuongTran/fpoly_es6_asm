import './header.css';

const AdminHeader = () => {
    return `
    <header class="header">
        <nav class="nav container">
            <a href="/admin" class="nav__logo">Admin</a>
            <div class="nav__menu">
                <ul class="nav__list grid">
                    <li class="nav__item">
                        <a href="/admin/information" class="nav__link active-link">
                            <i class="uil uil-estate nav__icon"></i> Information
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="/admin/skill" class="nav__link ">
                            <i class="uil uil-user nav__icon"></i> Skills
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="/admin/projects" class="nav__link">
                            <i class="uil uil-message nav__icon"></i> Projects
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="/admin/categories" class="nav__link">
                            <i class="uil uil-message nav__icon"></i> Categories
                        </a>
                    </li>
                </ul>

                <i class="uil uil-times nav__close"></i>
            </div>
            <div class="nav__toggle">
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
    `;
};

export default AdminHeader;
