const Login = () => import('./Auth/Login');
const Register = () => import('./Auth/Register');
const SmsVerification = () => import('./Auth/SmsVerification');
const Index = () => import('./Auth/Index');

import Layout from '../../components/layouts/Layout';
const Homework = () => import('./Homework/Homework');
const HomeworkInfo = () => import('./Homework/HomeworkInfo');
const Homeworks = () => import('./Homework/Homeworks');
const HomeworkStatistics = () => import('./Homework/HomeworkStatistics');
const HomeworkResults = () => import('./Homework/HomeworkResults');
const ResultDetails = () => import('./Homework/ResultDetails');
const HomeworkDetails = () => import('./Homework/HomeworkDetails');
const Courses = () => import('./Course/Courses');
const CourseUnites = () => import('./Course/Unites');
const Dashboard = () => import('./Dashboard');

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
            path: 'dashboard',
            name: 'teacher-dashboard',
            component: Dashboard,
          },
          {
            path: 'courses',
            name: 'teacher-courses',
            component: Courses,
          },
          {
            path: 'course/:id/units',
            name: 'teacher-course-unites',
            component: CourseUnites,
          },
          {
            path: 'homework',
            name: 'teacher-homework',
            component: Homework,
            children: [
            ]
          },
          {
            path: 'homework/:id',
            name: 'teacher-homework-info',
            component: HomeworkInfo,
            children: [
            ]
          },
          {
            path: 'homeworks',
            name: 'teacher-homeworks',
            component: Homeworks,
            children: [
            ]
          },
          {
            path: 'homework/:id/statistic',
            name: 'teacher-homework-statistic',
            component: HomeworkStatistics,
          },
          {
            path: 'homework/:id/result',
            name: 'teacher-homework-result',
            component: HomeworkResults,
          },
          {
            path: 'homework/:id/:sentence_id/details',
            name: 'teacher-homework-details',
            component: HomeworkDetails,
          },
          {
            path: 'homework/result/:result_id',
            name: 'teacher-homework-result-info',
            component: ResultDetails,
          },
        ]
      },
    ],
};

export { routes };