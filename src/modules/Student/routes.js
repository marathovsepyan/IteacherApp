const Login = () => import('./Auth/Login');

const routes = {
    path: '/login',
    name: 'Login',
    component: Login,
};

export { routes };