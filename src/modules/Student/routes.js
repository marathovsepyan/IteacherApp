const Index = () => import('./Auth/Index');
const Login = () => import('./Auth/Login');
const Register = () => import('./Auth/Register');
const SmsVerification = () => import('./Auth/SmsVerification');

const routes = {
    path: '/',
    component: Index,
    children: [
        {
            path: 'login',
            name: 'student-login',
            component: Login,
        },
        {
            path: 'register',
            name: 'student-register',
            component: Register,
        },
        {
            path: 'smsverification',
            name: 'teacher-sms-verification',
            component: SmsVerification,
        },
    ],
};

export { routes };