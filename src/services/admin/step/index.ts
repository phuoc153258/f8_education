import { fetch } from '../../../utils';
import { STEP_ADMIN_ROUTER } from '../../../routes';

class StepAdminService {
    static position(params: object, id: any) {
        let uri = STEP_ADMIN_ROUTER.position + id;
        return fetch.get(uri, params);
    }
    static create(params: object) {
        let uri = STEP_ADMIN_ROUTER.create;
        return fetch.post(uri, params);
    }
    static delete(params: object, id: any) {
        let uri = STEP_ADMIN_ROUTER.delete + id;
        return fetch.delete(uri, params);
    }
    static update(params: object, id: any) {
        let uri = STEP_ADMIN_ROUTER.update + id;
        return fetch.put(uri, params);
    }
}

export default StepAdminService;
