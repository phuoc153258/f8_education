import { ENV } from '../../../config';

export const REQUIREMENT_ADMIN_ROUTER = {
    create: `${ENV.apiUrl}/api/v1/admin/requirement`,
    update: `${ENV.apiUrl}/api/v1/admin/requirement/`,
    delete: `${ENV.apiUrl}/api/v1/admin/requirement/`,
};
