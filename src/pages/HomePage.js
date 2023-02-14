import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Qualification from '../components/qualification/Qualification';
import Skills from '../components/skills/Skills';

const HomePage = () => {
    return `
    ${Header()}
    ${Home()}
    ${About()}
    ${Skills()}
    ${Qualification()}
    ${Contact()}
  `;
};

export default HomePage;
