import Layout from "../../components/layouts/Layout";
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
                role: 'student'
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