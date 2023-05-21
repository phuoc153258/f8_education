import { fetch } from '../../../utils';
import { REQUIREMENT_ADMIN_ROUTER } from '../../../routes';

class RequirementRouter {
    static update(params: object, id: any) {
        let uri = REQUIREMENT_ADMIN_ROUTER.update + id;
        return fetch.put(uri, params);
    }
    static delete(params: object, id: any) {
        let uri = REQUIREMENT_ADMIN_ROUTER.delete + id;
        return fetch.delete(uri, params);
    }
    static create(params: object) {
        let uri = REQUIREMENT_ADMIN_ROUTER.create;
        return fetch.post(uri, params);
    }
}

export default RequirementRouter;
