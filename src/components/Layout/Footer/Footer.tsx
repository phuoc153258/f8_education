import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import { ENV } from '../../../config';
import { Link } from 'react-router-dom';

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.wrapper}>
            <section className="index-module_grid index-module_wide" style={{ maxWidth: '1100px' }}>
                <section className="index-module_row">
                    <section className="index-module_col index-module_c-12 index-module_m-12 index-module_l-3">
                        <div className={styles.column}>
                            <div>
                                <div className={styles.columnTop}>
                                    <Link to="/">
                                        <img
                                            className={styles.topLogo}
                                            src={ENV.apiUrl + '/api/v1/file/f8-icon38x38.png'}
                                            alt="F8"
                                        />
                                    </Link>
                                    <h2 className={styles.topSlogan}>Học Lập Trình Để Đi Làm</h2>
                                </div>
                                <p className={styles.contactList}>
                                    Điện thoại:
                                    <a href="tel:0246.329.1102">0246.329.1102</a>
                                    <br />
                                    Email:
                                    <a href="mailto:contact@fullstack.edu.vn">contact@fullstack.edu.vn</a>
                                    <br />
                                    Địa chỉ: Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội
                                </p>
                                <div>
                                    <a
                                        href="https://www.dmca.com/Protection/Status.aspx?id=1b325c69-aeb7-4e32-8784-a0009613323a&amp;refurl=https%3a%2f%2ffullstack.edu.vn%2f&amp;rlo=true"
                                        target="_blank"
                                        rel="noreferrer"
                                        title="DMCA Protected"
                                    >
                                        <img
                                            className={styles.dmca}
                                            src={ENV.apiUrl + '/api/v1/file/dmca.png'}
                                            alt="DMCA"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="index-module_col index-module_c-12 index-module_m-4 index-module_l-2">
                        <div className={styles.column}>
                            <div>
                                <h2 className={styles.heading}>Về F8</h2>
                                <ul className={styles.list}>
                                    <li>
                                        <a href="/about-us">Giới thiệu</a>
                                    </li>
                                    <li>
                                        <a href="/contact-us">Liên hệ</a>
                                    </li>
                                    <li>
                                        <a href="/terms">Điều khoản</a>
                                    </li>
                                    <li>
                                        <a href="/privacy">Bảo mật</a>
                                    </li>
                                    <li>
                                        <a href="/careers">Cơ hội việc làm</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="index-module_col index-module_c-12 index-module_m-4 index-module_l-2">
                        <div className={styles.column}>
                            <div>
                                <h2 className={styles.heading}>Sản phẩm</h2>
                                <ul className={styles.list}>
                                    <li>
                                        <a href="https://nester.fullstack.edu.vn" target="_blank" rel="noreferrer">
                                            Game Nester
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://css-diner.fullstack.edu.vn" target="_blank" rel="noreferrer">
                                            Game CSS Diner
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://css-selectors-cheatsheet.fullstack.edu.vn"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Game CSS Selectors
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://froggy.fullstack.edu.vn" target="_blank" rel="noreferrer">
                                            Game Froggy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://froggy-pro.fullstack.edu.vn" target="_blank" rel="noreferrer">
                                            Game Froggy Pro
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://css-scoops.fullstack.edu.vn" target="_blank" rel="noreferrer">
                                            Game Scoops
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="index-module_col index-module_c-12 index-module_m-4 index-module_l-2">
                        <div className={styles.column}>
                            <div>
                                <h2 className={styles.heading}>Công cụ</h2>
                                <ul className={styles.list}>
                                    <li>
                                        <a href="https://cv.fullstack.edu.vn/" target="_blank" rel="noreferrer">
                                            Tạo CV xin việc
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/shorten-urls">Rút gọn liên kết</a>
                                    </li>
                                    <li>
                                        <a href="https://clippy.fullstack.edu.vn/" target="_blank" rel="noreferrer">
                                            Clip-path maker
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://snippet-generator.fullstack.edu.vn/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Snippet generator
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://botayra.fullstack.edu.vn/" target="_blank" rel="noreferrer">
                                            Cảnh báo sờ tay lên mặt
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="index-module_col index-module_c-12 index-module_m-6 index-module_l-3">
                        <div className={styles.column}>
                            <div>
                                <h2 className={styles.heading}>
                                    <a
                                        target="_blank"
                                        href="https://www.google.com/search?q=C%C3%94NG+TY+C%E1%BB%94+PH%E1%BA%A6N+C%C3%94NG+NGH%E1%BB%86+GI%C3%81O+D%E1%BB%A4C+F8"
                                        rel="noreferrer"
                                    >
                                        CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
                                    </a>
                                </h2>
                                <ul className={styles.list}>
                                    <li>Mã số thuế: 0109922901</li>
                                    <li>Ngày thành lập: 04/03/2022</li>
                                    <li>
                                        Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản
                                        phẩm mang lại giá trị cho cộng đồng.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="index-module_row">
                    <section className="index-module_col index-module_c-12 index-module_m-12 index-module_l-12">
                        <div className={styles.bottom}>
                            <p className={styles.copyright}>
                                © 2018 - 2023 F8. Nền tảng học lập trình hàng đầu Việt Nam
                            </p>
                            <div className={styles.socialList}>
                                <a
                                    className={clsx(styles.socialItem, 'social-item-first', styles.youtube)}
                                    href="https://www.youtube.com/c/F8VNOfficial"
                                    title="F8 trên Youtube"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="youtube-square"
                                        className="svg-inline--fa fa-youtube-square "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    className={clsx(styles.socialItem, clsx(styles.facebook))}
                                    href="https://www.facebook.com/groups/f8official"
                                    title="F8 trên Facebook"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="facebook-square"
                                        className="svg-inline--fa fa-facebook-square "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    className={clsx(styles.socialItem, styles.tiktok)}
                                    href="https://www.tiktok.com/@f8official"
                                    title="F8 trên Tiktok"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="tiktok"
                                        className="svg-inline--fa fa-tiktok "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.25V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.2 121.2 0 0 0 1.86 22.17h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.14z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </footer>
    );
};

export default Footer;
