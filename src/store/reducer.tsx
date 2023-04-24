import { getCurrentToken, getCurrentUser } from '../utils';
import { USER_LOG_IN, CURRENT_USER_INFO } from './constants';

const initState = {
    userLogIn: getCurrentToken(),
    currentUser: getCurrentUser(),
};

function reducer(state: any, action: any) {
    switch (action.type) {
        case USER_LOG_IN:
            return {
                ...state,
                userLogIn: action.payload,
            };
        case CURRENT_USER_INFO:
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
