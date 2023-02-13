import About from '../components/about/About';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Skills from '../components/skills/Skills';

const HomePage = () => {
    return `
    ${Header()}
    ${Home()}
    ${About()}
    ${Skills()}
  `;
};

export default HomePage;
