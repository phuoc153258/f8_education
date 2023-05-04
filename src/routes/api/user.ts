import { ENV } from '../../config/env';

export const USER_ROUTER = {
    GET_ME: `${ENV.apiUrl}/api/v1/user/get-me`,
    GET_USER: `${ENV.apiUrl}/api/v1/user/`,
    UPDATE_CURRENT_USER: `${ENV.apiUrl}/api/v1/user/`,
};
