import './footer.css';

const Footer = () => {
    return /*html*/ `
        <footer class='footer'>
            <div class='footer__container container'>
                <h1 class='footer__title'>MVT</h1>

                <ul class='footer__list'>
                    <li>
                        <a href="#about" class='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#skills" class='footer__link'>skills</a>
                    </li>
                    <li>
                        <a href="#projects" class='footer__link'>Projects</a>
                    </li>
                </ul>

                <div class='footer__social'>
                    <a href="https://www.facebook.com/profile.php?id=100041592819589" class="footer__social-link" target="_blank">
                        <i class="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/tr.minhvuong/" class="footer__social-link" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://github.com/MinhVuongTran" class="footer__social-link" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>                
                </div>

                <span class='footer__copy'>&#169; MinhVuongTran. All rights reserved</span>
            </div>
        </footer>
  `;
};

export default Footer;
