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
      {
        path: '/teacher/smsverification',
        name: 'teacher-sms-verification',
        component: SmsVerification,
      },
      {
        path: '/teacher',
        component: Layout,
        // meta: { auth: true },
        children: [
          {
            path: '/teacher/courses',
            name: 'teacher-couses',
            component: Courses,
          },
          {
            path: '/teacher/homeworks',
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