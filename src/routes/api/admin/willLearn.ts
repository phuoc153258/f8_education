import { ENV } from '../../../config';

export const WILL_LEARN_ADMIN_ROUTER = {
    create: `${ENV.apiUrl}/api/v1/admin/willLearn`,
    update: `${ENV.apiUrl}/api/v1/admin/willLearn/`,
    delete: `${ENV.apiUrl}/api/v1/admin/willLearn/`,
};
