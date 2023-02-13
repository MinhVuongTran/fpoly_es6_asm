import Backend from './Backend';
import Frontend from './Frontend';
import './skills.css';

const Skills = () => {
    return /*html */ `
        <div class="skills section" id="skills">
            <h2 class="section__title">Skills</h2>
            <span class="section__subtitle">My technical level</span>

            <div class="skills__container container grid">
                    ${Frontend()}
                    ${Backend()}
            </div>
        </div>
    `;
};

export default Skills;
