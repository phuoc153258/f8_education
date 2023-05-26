import { ENV } from '../../../config';

export const STEP_ADMIN_ROUTER = {
    position: `${ENV.apiUrl}/api/v1/admin/step/`,
    create: `${ENV.apiUrl}/api/v1/admin/step`,
    delete: `${ENV.apiUrl}/api/v1/admin/step/`,
    update: `${ENV.apiUrl}/api/v1/admin/step/`,
};
