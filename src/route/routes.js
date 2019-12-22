// const Login = () => import('../components/pages/Login');
// import Register from '../components/pages/Register';
// import PageNotFound from '../components/layouts/PageNotFound';
import { routes as Teacher } from '@/modules/Teacher/routes.js';
import { routes as Student } from '@/modules/Student/routes.js';

export const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        ...Teacher,
    },
    {
        ...Student,
    },
    // {
    //     path: '/register', component: Register ,
    // },
    // {
    //     path: "*", component: PageNotFound
    // }
];