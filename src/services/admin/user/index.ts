import { fetch } from '../../../utils';
import { AUTH_ROUTER } from '../../../routes';

class UserAdminService {
    static login(params: object) {
        let uri = AUTH_ROUTER.login;
        return fetch.post(uri, params);
    }
    static register(params: object) {
        let uri = AUTH_ROUTER.register;
        return fetch.post(uri, params);
    }
    static verify() {
        let uri = AUTH_ROUTER.verify;
        return fetch.get(uri);
    }
    static resetPassword(params: object) {
        let uri = AUTH_ROUTER.resetPassword;
        return fetch.post(uri, params);
    }
}

export default UserAdminService;
