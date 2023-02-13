import './App.css';

import { render, router } from './libs';
import Home from './components/home/Home';

const app = document.querySelector('#app');

router.on('/', () => render(Home, app));

router.resolve();
