import { fetch } from '../../utils';
import { COURSE_ROUTER } from '../../routes';

class CourseService {
    static combined(params: object) {
        let uri = COURSE_ROUTER.combined;
        return fetch.get(uri, params);
    }
    static analytics(params: object) {
        let uri = COURSE_ROUTER.analytics;
        return fetch.get(uri, params);
    }
}

export default CourseService;
