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
    static courseDetail(params: object, slug: any) {
        let uri = COURSE_ROUTER.courseDetail + slug;
        return fetch.get(uri, params);
    }
    static registerCourse(params: object, slug: any) {
        let uri = COURSE_ROUTER.courseDetail + slug;
        return fetch.post(uri, params);
    }
}

export default CourseService;
