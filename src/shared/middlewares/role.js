import { getLocalStorage } from "../utils/localStorage";

function roleMiddleware(to, from, next) {
    let role = getLocalStorage('role');

    if (role !== 'teacher'){
        next({ name: 'Login' });
        return false;
    } else {
        next();
    }
}

export default roleMiddleware;