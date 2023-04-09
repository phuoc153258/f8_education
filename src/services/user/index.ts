import { fetch } from '../../utils/api';
import { USER_ROUTER } from '../../routes';

class UserService {
    static getMe() {
        let uri = USER_ROUTER.GET_ME;
        return fetch.get(uri);
    }
}

export default UserService;
