const Login = () => import('./Auth/Login');
const Register = () => import('./Auth/Register');
const SmsVerification = () => import('./Auth/SmsVerification');
const Index = () => import('./Auth/Index');

import Layout from '../../components/layouts/Layout';
const Homeworks = () => import('./Homework/Homeworks');
const HomeworkStatistics = () => import('./Homework/HomeworkStatistics');
const Courses = () => import('./Course/Courses');

export default {
    path: '/teacher',
    // redirect: '/teacher/login',
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
        meta: { auth: true },
        children: [
          {
            path: 'courses',
            name: 'teacher-couses',
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