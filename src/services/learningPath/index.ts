import { fetch } from '../../utils';
import { LEARNING_PATH_ROUTER } from '../../routes';

class LearningPathService {
    static list(params: object) {
        let uri = LEARNING_PATH_ROUTER.list;
        return fetch.post(uri, params);
    }
    static shows(params: object, slug: any) {
        let uri = LEARNING_PATH_ROUTER.show + slug;
        return fetch.post(uri, params);
    }
}

export default LearningPathService;
