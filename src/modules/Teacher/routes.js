const Login = () => import('./Auth/Login');
const Register = () => import('./Auth/Register');
const SmsVerification = () => import('./Auth/SmsVerification');
const Index = () => import('./Auth/Index');

import Layout from '../../components/layouts/Layout';
import { getLocalStorage } from '../../shared/utils/localStorage';
const Homework = () => import('./Homework/Homework');
const HomeworkInfo = () => import('./Homework/HomeworkInfo');
const Homeworks = () => import('./Homework/Homeworks');
const HomeworkStatistics = () => import('./Homework/HomeworkStatistics');
const CreateHomework = () => import('./Homework/CreateHomework');
const HomeworkResults = () => import('./Homework/HomeworkResults');
const StudentResultInHomework = () => import('./Homework/StudentResultInHomework');
const ResultDetails = () => import('./Homework/ResultDetails');
const HomeworkDetails = () => import('./Homework/HomeworkDetails');
const Courses = () => import('./Course/Courses');
const CourseUnites = () => import('./Course/Unites');
const Lessons = () => import('./Course/Lessons');
const EditSentence = () => import('./Course/EditSentence');
const Dashboard = () => import('./Dashboard');
const Settings = () => import('./Settings/Settings');
const EditSettings = () => import('./Settings/EditSettings');

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
        beforeEnter(to, from, next) {
          const role = getLocalStorage('role');

          if (role !== 'teacher'){
            next({ name: `${role}-home`});
          } else {
            next();
          }
        },
        children: [
          {
            path: 'dashboard',
            name: 'teacher-home',
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
            path: 'course/:id/unit/:unit_id/lessons',
            name: 'teacher-course-unite-lessons',
            component: Lessons,
          },
          {
            path: 'course/edit/sentence',
            name: 'teacher-course-edit-sentence',
            component: EditSentence,
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
            path: 'homework/add',
            name: 'teacher-homework-add',
            component: CreateHomework,
          },
          {
            path: 'homework/:id/result',
            name: 'teacher-homework-result',
            component: HomeworkResults,
          },
          {
            path: 'homework/:id/student/:student_id/result',
            name: 'teacher-homework-student-result',
            component: StudentResultInHomework,
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
          {
            path: 'settings',
            name: 'settings',
            component: Settings,
          },
          {
            path: 'settings/edit',
            name: '',
            component: EditSettings,
          }
        ]
      },
    ],
};

export { routes };