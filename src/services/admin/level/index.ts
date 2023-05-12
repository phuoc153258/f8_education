import { fetch } from '../../../utils';
import { LEVEL_ADMIN_ROUTER } from '../../../routes';

class LevelAdminService {
    static list(params: object) {
        let uri = LEVEL_ADMIN_ROUTER.list;
        return fetch.get(uri, params);
    }
}

export default LevelAdminService;
