import './App.css';

import { render, router } from './libs';
import HomePage from './pages/HomePage';

const app = document.querySelector('#app');

router.on('/', () => render(HomePage, app));

router.resolve();
