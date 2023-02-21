import './footer.css';

const Footer = ({ github, linkFacebook, linkInstagram }) => {
    return /*html*/ `
        <footer class='footer'>
            <div class='footer__container container'>
                <h1 class='footer__title'>MVT</h1>

                <ul class='footer__list'>
                    <li>
                        <a href="/#about" class='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="/#skills" class='footer__link'>Skills</a>
                    </li>
                    <li>
                        <a href="/#qualification" class='footer__link'>Qualification</a>
                    </li>
                    <li>
                        <a href="/#projects" class='footer__link'>Projects</a>
                    </li>
                </ul>

                <div class='footer__social'>
                    <a href="${linkFacebook}" class="footer__social-link" target="_blank">
                        <i class="uil uil-facebook-f"></i>
                    </a>
                    <a href="${linkInstagram}" class="footer__social-link" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="${github}" class="footer__social-link" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>                
                </div>

                <span class='footer__copy'>&#169; MinhVuongTran. All rights reserved</span>
            </div>
        </footer>
  `;
};

export default Footer;
