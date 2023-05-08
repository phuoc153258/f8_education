import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import { ENV } from '../../../../config';

function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <a href="/">
                        <span style={{ fontSize: '0px' }}></span>
                        <img
                            src={ENV.staticFileUrl + 'f8-icon.png'}
                            alt="F8 - Học HTML CSS Pro cho người mới bắt đầu"
                            className=""
                        />
                    </a>
                    <div className={styles.title}>
                        <span>Học lập trình</span>
                        <span>Để đi làm</span>
                    </div>
                </div>
            </div>
            <div className={styles.aboutUs}>
                <section className="index-module_row">
                    <section className="index-module_col index-module_c-12 index-module_m-4 index-module_l-4">
                        <div className="contact">
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>
                                    <span style={{ fontSize: '0px' }}></span>
                                    <img src={ENV.staticFileUrl + 'phone.svg'} alt="" className="" />
                                </span>
                                <a href="tel:0246.329.1102" className={styles.text}>
                                    0246.329.1102
                                </a>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>
                                    <span style={{ fontSize: '0px' }}></span>
                                    <img src={ENV.staticFileUrl + 'envelope.svg'} alt="" className="" />
                                </span>
                                <a href="mailto:contact@fullstack.edu.vn" className={clsx(styles.text, styles.email)}>
                                    contact@fullstack.edu.vn
                                </a>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>
                                    <span style={{ fontSize: '0px' }}></span>
                                    <img src={ENV.staticFileUrl + 'map-location.svg'} alt="" className="" />
                                </span>
                                <span className={styles.text}>
                                    Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className="index-module_col index-module_c-12 index-module_m-3 index-module_l-3">
                        <div className={styles.recruitmentWrapper}>
                            <div className={styles.recruitment}>
                                <div className={styles.itemTitle}>Về F8</div>
                                <div className={styles.list}>
                                    <a className={styles.item} href="/about-us">
                                        Giới thiệu
                                    </a>
                                    <a className={styles.item} href="/careers">
                                        Cơ hội việc làm
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="index-module_col index-module_c-12 index-module_m-2 index-module_l-2">
                        <div className="support-wrapper">
                            <div className={styles.support}>
                                <div className={styles.itemTitle}>Hỗ trợ</div>
                                <div className={styles.list}>
                                    <a className={styles.item} href="/contact-us">
                                        Liên hệ
                                    </a>
                                    <a className={styles.item} href="/privacy">
                                        Bảo mật
                                    </a>
                                    <a className={styles.item} href="/terms">
                                        Điều khoản
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="index-module_col index-module_c-12 index-module_m-3 index-module_l-3">
                        <div className={styles.tax}>
                            <div className={styles.itemTitle}>
                                <a
                                    target="_blank"
                                    href="https://www.google.com/search?q=C%C3%94NG+TY+C%E1%BB%94+PH%E1%BA%A6N+C%C3%94NG+NGH%E1%BB%86+GI%C3%81O+D%E1%BB%A4C+F8"
                                    rel="noreferrer"
                                >
                                    Công ty cổ phần công nghệ giáo dục F8
                                </a>
                            </div>
                            <div className={styles.list}>
                                <div className={styles.item}>Mã số thuế: 0109922901</div>
                                <div className={styles.item}>Ngày thành lập: 04/03/2022</div>
                                <div className={styles.item}>
                                    Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản phẩm
                                    mang lại giá trị cho cộng đồng.
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
            <div className={styles.copyRight}>
                <div className={styles.socialLinks}>
                    <a href="https://www.facebook.com/groups/f8official" target="_blank" rel="noreferrer">
                        <span style={{ fontSize: '0px' }}></span>
                        <img
                            src={ENV.staticFileUrl + 'facebook.svg'}
                            alt="Trang Facebook của F8 - Học lập trình để đi làm"
                            className=""
                        />
                    </a>
                    <a href="https://www.youtube.com/c/F8VNOfficial" target="_blank" rel="noreferrer">
                        <span style={{ fontSize: '0px' }}></span>
                        <img
                            src={ENV.staticFileUrl + 'youtube.svg'}
                            alt="Kênh Youtube của F8 - Học lập trình để đi làm"
                            className=""
                        />
                    </a>
                    <a href="https://www.linkedin.com/company/f8officialvn" target="_blank" rel="noreferrer">
                        <span style={{ fontSize: '0px' }}></span>
                        <img
                            src={ENV.staticFileUrl + 'linkedin.svg'}
                            alt="Trang Linkedin của F8 - Học lập trình để đi làm"
                            className=""
                        />
                    </a>
                    <a href="https://www.tiktok.com/@f8official" target="_blank" rel="noreferrer">
                        <span style={{ fontSize: '0px' }}></span>
                        <img
                            src={ENV.staticFileUrl + 'tiktok.svg'}
                            alt="Kênh Tiktok của F8 - Học lập trình để đi làm"
                            className=""
                        />
                    </a>
                </div>
                <span>© 2018 - 2023 F8. Nền tảng học lập trình hàng đầu Việt Nam</span>
            </div>
        </div>
    );
}

export default Footer;
