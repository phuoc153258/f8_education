import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './Payment.module.scss';
import Header from './Header/Header';
import { ENV } from '../../../config';
import clsx from 'clsx';
import PaymentContent from './PaymentContent/PaymentContent';
import WillLearn from './WillLearn/WillLearn';
import Footer from './Footer/Footer';

function Payment() {
    return (
        <div
            className={styles.wrapper}
            style={{
                backgroundImage: `url(${ENV.staticFileUrl}/payment-bg.png)`,
            }}
        >
            <Header />
            <h1 className={clsx(styles.title, styles.titleWrapper)}>
                <p>Mở khóa toàn bộ khóa học</p>
            </h1>
            <PaymentContent />
            <WillLearn />
            <Footer />
        </div>
    );
}

export default Payment;
