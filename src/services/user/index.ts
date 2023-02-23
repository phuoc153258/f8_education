import { fetch } from '../../utils/api';
import { USER_ROUTER } from '../../constants/user';

class UserService {
    static getListuser(param: object) {
        let uri = USER_ROUTER.GET_LIST_USER;
        return fetch.get(uri, param, '5|HL5GUje8oJB2iFmq2EtkhrV6fqeg2PdoMPYjxm4Z');
    }
}

export default UserService;
