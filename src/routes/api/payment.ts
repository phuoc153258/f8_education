import { ENV } from '../../config/env';

export const PAYMENT_ROUTER = {
    PAYMENT: `${ENV.apiUrl}/api/v1/payment/zalo-pay/`,
    CHECK_PAYMENT: `${ENV.apiUrl}/api/v1/payment/check/`,
};
