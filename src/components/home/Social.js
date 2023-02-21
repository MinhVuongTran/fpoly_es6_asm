const Social = ({ github, linkFacebook, linkInstagram }) => {
    return /*html*/ `
    <div class="home__social">
        <a href="${linkFacebook}" class="home__social-icon" target="_blank">
            <i class="uil uil-facebook-f"></i>
        </a>
        <a href="${linkInstagram}" class="home__social-icon" target="_blank">
            <i class="uil uil-instagram"></i>
        </a>
        <a href="${github}" class="home__social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
        </a>
    </div>
  `;
};

export default Social;
