import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { render, router } from './libs';
import AdminProjects from './pages/admin/projects/AdminProjects';
import AdminProjectsAdd from './pages/admin/projects/AdminProjectsAdd';
import AdminProjectsEdit from './pages/admin/projects/AdminProjectsEdit';
import HomePage from './pages/HomePage';

const app = document.querySelector('#app');

router.on('/', () => render(HomePage, app));
router.on('/admin/projects', () => render(AdminProjects, app));
router.on('/admin/projects/add', () => render(AdminProjectsAdd, app));
router.on('/admin/projects/:id/edit', ({ data }) =>
    render(() => AdminProjectsEdit(data), app),
);

router.resolve();
