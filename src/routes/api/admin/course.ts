import { ENV } from '../../../config';

export const COURSE_ADMIN_ROUTER = {
    list: `${ENV.apiUrl}/api/v1/admin/course`,
    create: `${ENV.apiUrl}/api/v1/admin/course`,
    delete: `${ENV.apiUrl}/api/v1/admin/course/`,
};
