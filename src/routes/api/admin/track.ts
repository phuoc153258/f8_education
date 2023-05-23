import { ENV } from '../../../config';

export const TRACK_ADMIN_ROUTER = {
    position: `${ENV.apiUrl}/api/v1/admin/track/:id/position`,
    create: `${ENV.apiUrl}/api/v1/admin/track`,
    delete: `${ENV.apiUrl}/api/v1/admin/track/`,
    update: `${ENV.apiUrl}/api/v1/admin/track/`,
};
