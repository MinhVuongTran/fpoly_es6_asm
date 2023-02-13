import About from '../components/about/About';
import Header from '../components/header/Header';
import Home from '../components/home/Home';

const HomePage = () => {
    return `
    ${Header()}
    ${Home()}
    ${About()}
  `;
};

export default HomePage;
