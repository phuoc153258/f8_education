import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './PaymentContent.module.scss';
import clsx from 'clsx';
import { ENV } from '../../../../config';
import PaymentService from '../../../../services/payment';
import { useParams, useNavigate } from 'react-router-dom';

function PaymentContent() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const handlePayment = async () => {
        try {
            const resposne: any = await PaymentService.payment({}, slug);
            const rawData = resposne?.data?.data;
            if (rawData) {
                const win: any = await window.open(rawData.payment.order_url);
                const timer = setInterval(async () => {
                    const check: any = await PaymentService.checkPayment({}, slug, rawData.code, rawData.description);
                    const raw = check?.data?.data;
                    if (raw.return_code === 1) {
                        navigate('/courses/' + slug);

                        clearInterval(timer);
                        win.close();
                    }
                }, 1000);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={clsx(styles.description, styles.MdContentWrapper)}>
                    <p>
                        Sở hữu khóa học HTML CSS{' '}
                        <em>
                            <strong>đầy đủ và chi tiết</strong>
                        </em>{' '}
                        nhất bạn có thể tìm thấy trên Internet.
                    </p>
                    <p>
                        Có tới{' '}
                        <em>
                            <strong>hàng trăm bài tập</strong>
                        </em>{' '}
                        thực hành sau mỗi bài học và bạn sẽ được{' '}
                        <em>
                            <strong>làm 8 dự án thực tế</strong>
                        </em>{' '}
                        trong khóa học này.
                    </p>
                    <ul>
                        <li>
                            <em>
                                Đã có sẵn hơn{' '}
                                <em>
                                    <strong>500 bài học</strong>
                                </em>{' '}
                                (bao gồm video, bài tập, thử thách, flashcards, v.v)
                            </em>
                        </li>
                        <li>
                            <em>
                                Khóa học chưa hoàn thành 100%, dự kiến hoàn thành trong 3 tháng tới. Bài học mới được
                                cập nhật mỗi ngày.
                            </em>
                        </li>
                    </ul>
                </div>
                <div className={styles.price}>
                    <div className={styles.priceContainer}>
                        <span className={styles.priceTitle}>Giá bán:</span>
                        <div className={styles.priceWrapper}>
                            <span>1,299,000đ</span>
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.priceContainer}>
                        <span className={clsx(styles.priceTitle, styles.totalPrice)}>Tổng tiền:</span>
                        <span className={clsx(styles.priceWrapperDiscount, styles.priceFinal)}>1,299,000đ</span>
                    </div>
                </div>
                <div className={styles.getInfoPayment}>
                    <button className={clsx(styles.buttonWrapper, styles.infoPaymentBtn)} onClick={handlePayment}>
                        Lấy thông tin thanh toán
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.benefit}>
                    <div className={styles.benefitWrapper}>
                        <h2 className={styles.benefitTitle}>Bạn sẽ nhận được gì?</h2>
                        <section className="index-module_row">
                            <section className="index-module_col index-module_c-12 index-module_m-6 index-module_l-12">
                                <div className={styles.benefitItem}>
                                    <span className={styles.icon}>
                                        <img src={ENV.staticFileUrl + 'check-circle.svg'} alt="" />
                                    </span>
                                    <div>
                                        Truy cập toàn bộ khóa <strong>HTML CSS Pro</strong>
                                        <br />
                                        <em>(Đang phát triển thêm)</em>
                                    </div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.icon}>
                                        <img src={ENV.staticFileUrl + 'person-chalkboard.svg'} alt="" />
                                    </span>
                                    <div>
                                        Hơn <strong>453</strong> bài học
                                    </div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.icon}>
                                        <img src={ENV.staticFileUrl + 'book.svg'} alt="" />
                                    </span>
                                    <div>
                                        Hơn <strong>456</strong> bài tập và thử thách
                                    </div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.icon}>
                                        <img src={ENV.staticFileUrl + 'news.svg'} alt="" />
                                    </span>
                                    <div>
                                        Thực hành <strong>8</strong> dự án thực tế
                                    </div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.icon}>
                                        <img src={ENV.staticFileUrl + 'flashcard.svg'} alt="" />
                                    </span>
                                    <div>
                                        Hơn <strong>209</strong> flashcards
                                    </div>
                                </div>
                            </section>
                            <section className="index-module_col index-module_c-12 index-module_m-6 index-module_l-12">
                                <div className={styles.benefitItem}>
                                    <span className={styles.icon}>
                                        <img src={ENV.staticFileUrl + 'comments.svg'} alt="" />
                                    </span>
                                    <div>Kênh hỏi đáp riêng tư</div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.icon}>
                                        <img src={ENV.staticFileUrl + 'comment-check.svg'} alt="" />
                                    </span>
                                    <div>Đáp án cho mọi thử thách</div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.icon}>
                                        <img src={ENV.staticFileUrl + 'certificate.svg'} alt="" />
                                    </span>
                                    <div>Nhận chứng chỉ khi hoàn thành</div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.icon}>
                                        <img src={ENV.staticFileUrl + 'star.svg'} alt="" />
                                    </span>
                                    <div>Cập nhật khóa học trong tương lai</div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.icon}>
                                        <img src={ENV.staticFileUrl + 'infinity.svg'} alt="" />
                                    </span>
                                    <div>Mua một lần, học mãi mãi</div>
                                </div>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentContent;
