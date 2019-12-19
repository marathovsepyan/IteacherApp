import { getLocalStorage } from './localStorage';

export const checkAuthentication = (router) => {
    let isLoggedToken = getLocalStorage('token');
    let isLoggedTokenBoolean = !!isLoggedToken;

    router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.auth)) {
            if (!isLoggedTokenBoolean) {
                next({
                    path: '/login',
                });
            } else {
                next({ path: 'not-found' });
            }
        } else {
            if (isLoggedTokenBoolean) {
                let role = getLocalStorage('role');
                if (to.path === '/login' || to.path === '/register'){
                    if (role === 'teacher'){
                        next({
                            path: '/dashboard',
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