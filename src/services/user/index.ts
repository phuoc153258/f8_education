import { fetch } from '../../utils/api';
import { USER_ROUTER } from '../../routes';

class UserService {
    static getMe() {
        let uri = USER_ROUTER.GET_ME;
        return fetch.get(uri);
    }
    static getUser(params: object, slug: any) {
        let uri = USER_ROUTER.GET_USER + slug;
        return fetch.get(uri, params);
    }
    static updateCurrentUser(params: any) {
        let uri = USER_ROUTER.UPDATE_CURRENT_USER;
        return fetch.putFile(uri, params);
    }
}

export default UserService;
