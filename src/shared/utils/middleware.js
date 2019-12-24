import { getLocalStorage } from './localStorage';
import roleMiddleware from '../middlewares/role';

export const checkAuthentication = (router) => {
    router.beforeEach((to, from, next) => {
        let isLoggedToken = getLocalStorage('token');
        let isLoggedTokenBoolean = !!isLoggedToken;
        let role = getLocalStorage('role');


        if (to.matched.some(record => record.meta.auth)) {
            if (!isLoggedTokenBoolean) {
                next({
                    path: '/login',
                });
            } else {
                roleMiddleware(to, from, next);
                next();
            }
        } else {
            if (isLoggedTokenBoolean) {
                // need to check routes for student too
                if (to.path === '/teacher/login' || to.path === '/teacher/register'){
                    roleMiddleware(to, from, next);
                    if (role === 'teacher'){
                        next({
                            path: '/teacher/homework',
                        });
                    }
                    if (role === 'student') {
                        next({
                            path: '/home',
                        });
                    }
                }
            }
            next();
        }
    });
};