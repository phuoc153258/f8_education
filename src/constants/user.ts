import { ENV } from '../config/env';

export const USER_ROUTER = {
    GET_LIST_USER: `${ENV.apiUrl}/api/admin/users`,
    GET_USER: `${ENV.apiUrl}/api/admin/users/:id`,
    CREATE_USER: `${ENV.apiUrl}/api/admin/users`,
    UPDATE_USER: `${ENV.apiUrl}/api/admin/users/:id`,
    DELETE_USER: `${ENV.apiUrl}/api/admin/users/:id`,
};
