import { fetch } from '../../../utils';
import { TRACK_ADMIN_ROUTER } from '../../../routes';

class TrackAdminService {
    static position(params: object, id: any) {
        let uri = TRACK_ADMIN_ROUTER.position.replace(':id', id);
        return fetch.get(uri, params);
    }
    static create(params: object) {
        let uri = TRACK_ADMIN_ROUTER.create;
        return fetch.post(uri, params);
    }
    static delete(params: object, id: any) {
        let uri = TRACK_ADMIN_ROUTER.delete + id;
        return fetch.delete(uri, params);
    }
    static update(params: object, id: any) {
        let uri = TRACK_ADMIN_ROUTER.update + id;
        return fetch.put(uri, params);
    }
}

export default TrackAdminService;
