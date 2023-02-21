import './about.css';
import Info from './Info';

const About = (avatar) => {
    return /*html*/ `
        <section class="about section" id="about">
            <h2 class="section__title">About Me</h2>
            <span class="section__subtitle">My introduction</span>

            <div class="about__container container grid">
                <img src="${avatar}" alt="" class="about__img"/>

                <div class="about__data">
                    ${Info()}
                    <p class="about__description">Frontend developer, I create web pages with UI / UX user interface</p>

                </div>
            </div>
        </section>
    `;
};

export default About;
