import { fetch } from '../../utils';
import { PAYMENT_ROUTER } from '../../routes';

class PaymentService {
    static payment(params: object, slug: any) {
        let uri = PAYMENT_ROUTER.PAYMENT + slug;
        return fetch.get(uri, params);
    }
    static checkPayment(params: object, slug: any, appTransId: any, description: any) {
        let uri = PAYMENT_ROUTER.CHECK_PAYMENT + slug + '?app_trans_id=' + appTransId + '&description=' + description;
        return fetch.get(uri, params);
    }
}

export default PaymentService;
