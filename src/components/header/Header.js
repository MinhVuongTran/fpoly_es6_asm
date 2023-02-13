import './header.css';
import { useEffect, useState } from '../../libs';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        const openMenuBtn = document.querySelector('.nav__toggle');
        openMenuBtn.addEventListener('click', () => {
            setToggleMenu(!toggleMenu);
        });

        const closeMenuBtn = document.querySelector('.nav__close');
        closeMenuBtn.addEventListener('click', () => {
            setToggleMenu(!toggleMenu);
        });
    }, [toggleMenu]);

    useEffect(() => {}, []);

    return /*html */ `
        <header class="header">
            <nav class="nav container">
                <a href="index.html" class="nav__logo">MVT</a>
                <div class="${
                    toggleMenu ? 'nav__menu show-menu' : 'nav__menu'
                }">
                    <ul class="nav__list grid">
                        <li class="nav__item">
                            <a href="#home" class="nav__link active-link">
                                <i class="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#about" class="nav__link ">
                                <i class="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#skills" class="nav__link">
                                <i class="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#services" class="nav__link">
                                <i class="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#portfolio" class="nav__link">
                                <i class="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#contact" class="nav__link">
                                <i class="uil uil-message nav__icon"></i> Contact
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

export default Header;
