import axios from 'axios';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Project from '../components/projects/Project';
import Qualification from '../components/qualification/Qualification';
import Skills from '../components/skills/Skills';
import { useEffect, useState } from '../libs';

const HomePage = () => {
    const [information, setInformation] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/information')
            .then((data) => setInformation(data.data));
    }, []);

    return `
    ${Header()}
    ${Home(information)}
    ${About(information.avatar)}
    ${Skills()}
    ${Qualification()}
    ${Project()}
    ${Contact(information)}
    ${Footer(information)}
  `;
};

export default HomePage;
