import { CURRENT_USER_INFO, USER_LOG_IN } from './constants';
export const userLogIn = (payload: unknown) => ({
    type: USER_LOG_IN,
    payload,
});
export const setCurrentUserInfo = (payload: unknown) => ({
    type: CURRENT_USER_INFO,
    payload,
});
