import cookie from 'js-cookie';

function setToken(token: string) {
    cookie.set('token', token, { expires: 365 });

    return true;
}
function setUser(user: string) {
    cookie.set('user', user, { expires: 365 });

    return true;
}

function Logout() {
    cookie.remove('token');
    cookie.remove('user');
    if (typeof window != 'undefined') {
        window.localStorage.setItem('logout', Date.now().toString());
    }
}

function getCurrentToken() {
    const token: string = cookie.get('token')!;
    if (typeof token !== 'undefined') {
        if (token) {
            return token;
        } else {
            Logout();
        }
    }
    return undefined;
}

function getCurrentUser() {
    const user: any = cookie.get('user')!;
    if (typeof user !== 'undefined') {
        if (JSON.parse(user)) {
            return JSON.parse(user);
        } else {
            Logout();
        }
    }
    return undefined;
}

function isAuthenticate() {
    const token: string = cookie.get('token')!;
    const user: string = cookie.get('user')!;
    if (token === undefined || user === undefined) return false;
    return true;
}

export { setToken, setUser, Logout, getCurrentUser, getCurrentToken, isAuthenticate };
