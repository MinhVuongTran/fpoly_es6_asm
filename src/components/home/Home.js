import './home.css';
import Header from '../header/Header.js';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = (data) => {
    return /*html */ `
        <section class="home section">
            <div class="home__container container grid">
                <div class="home__content grid">
                    ${Social(data)}

                    <div class="home__img" style="background: url(${
                        data.avatar
                    });background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;"></div>
                    ${Data(data)}
                </div>
                ${ScrollDown()}
            </div>
        </section>
  `;
};

export default Home;
