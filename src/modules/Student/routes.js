import Layout from "../../components/layouts/Layout";
import { getLocalStorage } from "../../shared/utils/localStorage";
const Index = () => import('./Auth/Index');
const Login = () => import('./Auth/Login');
const Register = () => import('./Auth/Register');
const SmsVerification = () => import('./Auth/SmsVerification');
const Home = () => import('./Home/Home');

const routes = {
    path: '/',
    component: Index,
    children: [
        {
            path: 'login',
            name: 'Login',
            component: Login,
        },
        {
            path: 'register',
            name: 'student-register',
            component: Register,
        },
        {
            path: 'smsverification',
            name: 'student-sms-verification',
            component: SmsVerification,
        },
        {
            path: '',
            component: Layout,
            meta: {
                auth: true,
            },
            beforeEnter(to, from, next) {
                const role = getLocalStorage('role');

                if (role !== 'student'){
                    next({ name: `${role}-home`});
                } else {
                    next();
                }
            },
            children: [
                {
                    path: 'home',
                    name: 'student-home',
                    component: Home,
                },
            ]
        },
    ],
};

export { routes };