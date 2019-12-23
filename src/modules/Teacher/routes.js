const Login = () => import('./Auth/Login');
const Register = () => import('./Auth/Register');
const SmsVerification = () => import('./Auth/SmsVerification');
const Index = () => import('./Auth/Index');

import Layout from '../../components/layouts/Layout';
const Homeworks = () => import('./Homework/Homeworks');
const HomeworkStatistics = () => import('./Homework/HomeworkStatistics');
const Courses = () => import('./Course/Courses');

const routes = {
    path: '/teacher',
    component: Index,
    children: [
      {
        path: 'login',
        name: 'teacher-login',
        component: Login,
      },
      {
        path: 'register',
        name: 'teacher-register',
        component: Register,
      },
      {
        path: 'smsverification',
        name: 'teacher-sms-verification',
        component: SmsVerification,
      },
      {
        path: '',
        component: Layout,
        meta: {
          auth: true,
          role: 'teacher'
        },
        children: [
          {
            path: 'courses',
            name: 'teacher-courses',
            component: Courses,
          },
          {
            path: 'homeworks',
            name: 'teacher-homeworks',
            component: Homeworks,
            children: [
              {
                path: '/:id/statistic',
                name: 'teacher-homework-statistic',
                component: HomeworkStatistics,
              },
            ]
          },
        ]
      },
    ],
};

export { routes };