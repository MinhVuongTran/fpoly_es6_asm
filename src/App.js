import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import DetailProject from './components/projects/DetailProject';

import { render, router } from './libs';
import AdminPage from './pages/admin/AdminPage';
import AdminCategories from './pages/admin/categories/AdminCategories';
import AdminCategoriesAdd from './pages/admin/categories/AdminCategoriesAdd';
import AdminCategoriesEdit from './pages/admin/categories/AdminCategoriesEdit';
import AdminInfo from './pages/admin/information/AdminInfo';
import AdminInfoEdit from './pages/admin/information/AdminInfoEdit';
import AdminProjects from './pages/admin/projects/AdminProjects';
import AdminProjectsAdd from './pages/admin/projects/AdminProjectsAdd';
import AdminProjectsEdit from './pages/admin/projects/AdminProjectsEdit';
import AdminSkill from './pages/admin/skills/AdminSkill';
import AdminSkillAdd from './pages/admin/skills/AdminSkillAdd';
import AdminSkillEdit from './pages/admin/skills/AdminSkillEdit';
import HomePage from './pages/HomePage';

const app = document.querySelector('#app');

router.on('/', () => render(HomePage, app));
router.on('/project/:id', ({ data }) => render(() => DetailProject(data), app));

router.on('/admin', () => render(AdminPage, app));

router.on('/admin/projects', () => render(AdminProjects, app));
router.on('/admin/projects/add', () => render(AdminProjectsAdd, app));
router.on('/admin/projects/:id/edit', ({ data }) =>
    render(() => AdminProjectsEdit(data), app),
);
router.on('/admin/skill', () => render(AdminSkill, app));
router.on('/admin/skill/add', () => render(AdminSkillAdd, app));
router.on('/admin/skill/:id/edit', ({ data }) =>
    render(() => AdminSkillEdit(data), app),
);

router.on('/admin/information', () => render(AdminInfo, app));
router.on('/admin/information/edit/:slug', ({ data }) =>
    render(() => AdminInfoEdit(data), app),
);

router.on('/admin/categories', () => render(AdminCategories, app));
router.on('/admin/categories/add', () => render(AdminCategoriesAdd, app));
router.on('/admin/categories/:id/edit', ({ data }) =>
    render(() => AdminCategoriesEdit(data), app),
);

router.resolve();
