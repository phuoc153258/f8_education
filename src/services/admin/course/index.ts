import { fetch } from '../../../utils';
import { COURSE_ADMIN_ROUTER } from '../../../routes';

class CourseAdminService {
    static list(params: object) {
        let uri = COURSE_ADMIN_ROUTER.list;
        return fetch.get(uri, params);
    }
    static create(params: object) {
        let uri = COURSE_ADMIN_ROUTER.create;
        return fetch.postFile(uri, params);
    }
    static delete(params: object, id: any) {
        let uri = COURSE_ADMIN_ROUTER.delete + id;
        return fetch.delete(uri, params);
    }
}

export default CourseAdminService;
