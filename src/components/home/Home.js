import './home.css';
import Header from '../header/Header.js';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
    return /*html */ `
        ${Header()}
        <section class="home section">
            <div class="home__container container grid">
                <div class="home__content grid">
                    ${Social()}

                    <div class="home__img"></div>
                    ${Data()}
                </div>
                ${ScrollDown()}
            </div>
        </section>
  `;
};

export default Home;
