import { ENV } from '../../config';

export const AUTH_ROUTER = {
    login: `${ENV.apiUrl}/api/v1/auth/login`,
    register: `${ENV.apiUrl}/api/v1/auth/register`,
    verify: `${ENV.apiUrl}/api/v1/auth/verify`,
    resetPassword: `${ENV.apiUrl}/api/v1/auth/reset-password`,
};
