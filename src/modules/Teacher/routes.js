const Login = () => import('./Auth/Login');
const Register = () => import('./Auth/Register');
const Index = () => import('./Auth/Index');

export default {
    path: '/teacher',
    redirect: '/teacher/login',
    component: Index,
    children: [
        {
          path: '/teacher/login',
          component: Login,
        },
        {
          path: '/teacher/register',
          name: 'teacher-register',
          component: Register,
        },
      ],
};