import { fetch } from '../../../utils';
import { WILL_LEARN_ADMIN_ROUTER } from '../../../routes';

class WillLearnAdminRouter {
    static update(params: object, id: any) {
        let uri = WILL_LEARN_ADMIN_ROUTER.update + id;
        return fetch.put(uri, params);
    }
    static delete(params: object, id: any) {
        let uri = WILL_LEARN_ADMIN_ROUTER.delete + id;
        return fetch.delete(uri, params);
    }
    static create(params: object) {
        let uri = WILL_LEARN_ADMIN_ROUTER.create;
        return fetch.post(uri, params);
    }
}

export default WillLearnAdminRouter;
